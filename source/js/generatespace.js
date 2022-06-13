var linked = false;

try {

  version.extensions['generateSpaceMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['generatespace'] = {
    handler: function(place, macroName, params, parser) {

      if (params.length != 0) {

        var type = params.shift();
        var html = "";

        if (type == "corridor") {
          html = generateCorridor(params);
        }
        else if (type == "stairs") {
          html = generateStairs(params);
        }
        else if (type == "elevator") {
          html = generateElevator(params);
        }
        else if (type == "snow") {
          html = generateSnow(params);
        }
        else if (type == "frost") {
          html = generateFrost(params);
        }
        else if (type == "water") {
          html = generateWater(params);
        }
        else if (type == "cycles") {
          html = generateCycles(params);
        }
        else if (type == "timedcycles") {
          html = generateTimedCycles(params);
        }
        else if (type == "wasteland") {
          html = generateTheWasteland(params);
        }

        new Wikifier(place, html);

      }
    },
    init: function() { },
  };
}
catch(e) {
  console.log(e.message);
  throwError(place,"randomunicode Setup Error: "+e.message);
}

function generateCorridor(params) {

  var rendered = (params[0] == "true");

  theString = "";

  theString += "<span class=\"nowrap\">";

  theString += "<span class=\"home\">" + params[1] + "</span>"; // Add the default home tag.

  theString += "<span class=\"warning\">";

  if (!rendered) {
    theString += " <<revise walk" + i + " \"walk.\">><<insertion walk" + i + ">> ";
    for (var i = 2; i < params.length - 1; i++) {
      theString += params[i];
      theString += " <<revise walk" + i + " \"walk.\">><<insertion walk" + i + ">> ";
    }
    theString += "</span>"; // Close warning

    theString += params[params.length-1];


    for (var i = 1; i < params.length; i++) {
      theString += "<<endinsertion>>"
    }
  }
  else {
    for (var i = 2; i < params.length - 1; i++) {
      theString += " " + params[i];
    }
    theString += " " + params[params.length-1];
    theString += "</span>"; // Close warning

  }

  theString += "</span>"; // Close nowrap

  return theString;
}

function generateStairs(params) {

  var rendered = (params[0] == "true");
  var homeLinkText = params[1];
  var homeLinkDestination = params[2];
  var steps = parseInt(params[3]);
  var warningLinkText = params[4];
  var warningLinkDestination = params[5];

  var indentPercentage = 0.15; // Percentage of the width
  var indentDirection = 1;
  var theWidth = $('#passages').width();
  var indentAmount = indentPercentage*indentDirection*theWidth;
  var currentIndent = indentAmount;
  var previousIndent = 0;
  var theString = "";

  console.log("Indent amount: ",indentAmount,", theWidth: ",theWidth);

  theString += "<span class=\"nowrap\">";

  if (false) {

    // THE OLD VERSION OF STAIRS FROM THE BOTTOM WHERE IT'S INTERACTIVE
    for (var i = 0; i < steps+1; i++) {
      theString += "<<revision step" + i + ">>";
      theString += Array(steps-i+1).join("\n");
      theString += "<<becomes>>";
    }

    theString += "<span class='home'>[[" + homeLinkText + "|" + homeLinkDestination + "]]</span>\n";
    theString += "@@padding-left:" + currentIndent + "px; @@";
    theString += "step.";

    for (var i = steps; i >= 1; i--) {
      theString += "<<endrevision>>";

      theString += "@@padding-left:" + currentIndent + "px; @@";
      theString += "<span class='home'><<revise step" + (i) + " 'step.'>></span>";
      theString += "\n";

      if (currentIndent > $('#passages').width() || currentIndent < indentAmount) {
      // if (currentIndent > 5*indentAmount || currentIndent < indentAmount) {
        indentDirection = -indentDirection;
      }
      currentIndent += indentDirection * indentAmount;

      theString += "@@padding-left:" + currentIndent + "px; @@";
      theString += "step.";
    }

    theString += "<<endrevision>>";
    theString += "@@padding-left:" + (currentIndent) + "px; @@";
    theString += "<span class='home'><<revise step" + 0 + " 'step.'>></span>\n";

    // The bad exit
    if (currentIndent > $('#passages').width() || currentIndent < indentAmount) {
    // if (currentIndent > 5*indentAmount || currentIndent < indentAmount) {
      indentDirection = -indentDirection;
    }
    theString += "@@padding-left:" + (currentIndent + (indentAmount*indentDirection)) + "px;";
    theString += "<span class='warning'>[[" + warningLinkText + "|" + warningLinkDestination + "]]</span>@@\n";
  }


  else if (rendered) {

    // A VERSION OF THE STAIRS THAT ARE PRE-RENDERED SO YOU CAN
    // JUST LEAVE THEM QUICKLY

    theString += "<span class='home'>[[" + homeLinkText + "|" + homeLinkDestination + "]]</span>\n";

    theString += "@@padding-left:" + currentIndent + "px; @@";
    theString += "<span class='warning'>step.</span>\n";

    for (var i = 0; i < steps; i++) {
      // if (currentIndent > 5*indentAmount || currentIndent < indentAmount) {
      if (currentIndent > theWidth-2*indentAmount || currentIndent < indentAmount) {
        indentDirection = -indentDirection;
      }
      currentIndent += indentDirection * indentAmount;
      theString += "@@padding-left:" + currentIndent + "px; @@";
      theString += "<span class='warning'>step.</span>\n";
    }

    // if (currentIndent > 5*indentAmount || currentIndent < indentAmount) {
    if (currentIndent > theWidth-2*indentAmount || currentIndent < indentAmount) {
      indentDirection = -indentDirection;
    }
    theString += "@@padding-left:" + (currentIndent + (indentAmount*indentDirection)) + "px;<span class=\"warning\">[[" + warningLinkText + "|" + warningLinkDestination + "]]</span>@@\n";

    for (var i = 0; i < steps+1; i++) {
      theString += "</span>";
    }
  }


  //
  // FROM TOP
  //
  else {
    theString += "<span class='home'>[[" + homeLinkText + "|" + homeLinkDestination + "]]</span>\n";

    theString += "@@padding-left:" + currentIndent + "px; @@";
    theString += "<span class='warning'><<insert \"step.\">></span>\n";

    for (var i = 0; i < steps; i++) {
      // if (currentIndent > 5*indentAmount || currentIndent < indentAmount) {
      if (currentIndent > theWidth-2*indentAmount || currentIndent < indentAmount) {
        indentDirection = -indentDirection;
      }
      currentIndent += indentDirection * indentAmount;
      theString += "@@padding-left:" + currentIndent + "px; @@";
      theString += "<span class='warning'><<insert 'step.'>></span>\n";
    }

    // if (currentIndent > 5*indentAmount || currentIndent < indentAmount) {
    if (currentIndent > theWidth-2*indentAmount || currentIndent < indentAmount) {
      indentDirection = -indentDirection;
    }
    theString += "@@padding-left:" + (currentIndent + (indentAmount*indentDirection)) + "px;<span class=\"warning\">[[" + warningLinkText + "|" + warningLinkDestination + "]]</span>@@\n";

    for (var i = 0; i < steps+1; i++) {
      theString += "<<endinsert>></span>";
    }
  }
  theString += "</span>"; // Closing nowrap

  return theString;
}

function generateElevator (params) {

  var elevatorAtTop = (params[0] == "true");
  var homeLinkDestination = params[1];
  var floors = parseInt(params[2]);
  var warningLinkDestination = params[3];

  var inactiveButton = "<<cyclinglink 'button.'>>";
  var closedDoors = "<<cyclinglink 'closed doors.'>>"

  var replaceTime = 2;

  var theString = "";

  if (elevatorAtTop) {
    theString += "<<revision elevatortop>><span class='home'>[[open doors.|" + homeLinkDestination + "]]</span><<becomes>>";
    theString += "<<timedreplace " + replaceTime + "s>><<cyclinglink 'closing doors.'>> " + inactiveButton + "<<becomes>>";

    theString += "<<timedinsert " + replaceTime*2 + "s>>down.\n\n";

    for (var i = 0; i < floors; i++) {
      theString += "<<timedinsert " + replaceTime + "s>>down.\n\n";
    }
    for (var i = 0; i < floors; i++) {
      theString += "<<endtimedinsert>>";
    }
    theString += "<<endtimedinsert>>";

    theString += "<<timedreplace " + (floors+4)*replaceTime + "s>>" + closedDoors + " " + inactiveButton + "<<becomes>>";
    // theString += "<<timedreplace " + replaceTime + "s>> <<cyclinglink 'closed doors.'>> " + inactiveButton + "<<becomes>>"
    theString += "<<timedreplace " + replaceTime + "s>> <<cyclinglink 'opening doors.'>> " + inactiveButton + "<<becomes>>"
    theString += "<span class='warning'>[[open doors.|" + warningLinkDestination + "]]</span> " + inactiveButton;
    theString += "<<endtimedreplace>>";
    // theString += "<<endtimedreplace>>";
    theString += "<<endtimedreplace>>";
    theString += "<<endtimedreplace>>";
    theString += "<<endrevision>>";

    theString += " <span class='warning'><<revise elevatortop 'button.'>></span>"
  }
  else {
    theString += "<<revision elevatorbottom>>" + Array(floors+1).join("\n\n") + "\n\n" + closedDoors + "<<becomes>>";

    theString += "<<timedreplace " + replaceTime + "s>>" + Array(floors+1).join("\n\n") + "\n\n" + "<<cyclinglink 'closing doors.'>> " + inactiveButton + "<<becomes>>";
    theString += "<<timedreplace " + replaceTime*2 + "s>>" + Array(floors+1).join("\n\n") + "\n\n" + "<<cyclinglink 'closed doors.'>> " + inactiveButton + "<<becomes>>";

    for (var i = 0; i < floors; i++) {
      var floor = (floors - i);
      theString += "<<timedreplace " + replaceTime + "s>>";
      theString += Array(floor+1).join("\n\n") + closedDoors + " " + inactiveButton;
      theString += Array(i+1).join("\n\nup.");
      theString += "\n\nup.";
      theString += "<<becomes>>";
    }
    theString += "<<timedreplace " + replaceTime*2 + "s>>"
    theString += closedDoors + " " + inactiveButton + Array(floors+2).join("\n\nup.");
    theString += "<<becomes>>"
    theString += "<<timedreplace " + replaceTime + "s>>";
    theString += "<<cyclinglink 'opening doors.'>>" + " " + inactiveButton + Array(floors+2).join("\n\nup.");
    theString += "<<becomes>>";
    theString += "<span class='home'>[[open doors.|" + homeLinkDestination + "]]</span>" + " " + inactiveButton + Array(floors+2).join("\n\nup.");
    theString += "<<endtimedreplace>><<endtimedreplace>>"
    for (var i = 0; i < floors; i++) {
      theString += "<<endtimedreplace>>";
    }
    theString += "<<endtimedreplace>>";
    theString += "<<endtimedreplace>>";
    theString += "<<endrevision>>";
    theString += "<<revise elevatordoortop 'button.'>>";
    theString += " <span class='warning'><<revise elevatorbottom 'button.'>></span>";

  }

  return theString;
}

function generateSnow(params) {
  var numSnows = parseInt(params[0]);

  var indentAmount = 10;
  var indentDirection = 1;
  var currentIndent = indentAmount;
  var previousIndent = 0;
  var theString = "";

  for (var i = 0; i < numSnows; i++) {
    theString += "<span class=\"snow\">";
    var padding = 0;
    for (var j = 0; j < 10; j++) {
      if (Math.random() < 0.5) {
        padding += 1;
      }
    }
    theString += "@@padding-left: " + padding + "px;"
    theString += "<<cyclinglink \"snow.\" \"snow.\">>";
    theString += "@@";
    theString += "</span> ";
  }

  return theString;
}

function generateFrost(params) {
  var numSnows = parseInt(params[0]);

  var indentAmount = 10;
  var indentDirection = 1;
  var currentIndent = indentAmount;
  var previousIndent = 0;
  var theString = "";

  for (var i = 0; i < numSnows; i++) {
    theString += "";

    // theString += "@@padding-left: 2px;"
    theString += "<<replace 'frost.'>><<cyclinglink 'footstep.'>><<endreplace>> ";
    // theString += "@@";
    theString += "";
  }

  return theString;
}

function generateWater(params) {
  var numWater = parseInt(params[0]);

  var indentAmount = 10;
  var indentDirection = 1;
  var currentIndent = indentAmount;
  var previousIndent = 0;
  var theString = "";

  for (var i = 0; i < numWater; i++) {
    // theString += "";
    // for (var j = 0; j < 3; j++) {
    //   if (Math.random() < 0.5) {
    //     theString += " ";
    //   }
    // }
    // theString += "@@padding-left: 2px;"
    theString += "<<hoverreplace>>water<<becomes>>water<<endhoverreplace>>. ";
    // theString += "@@";
    theString += "";
  }

  return theString;
}

function generateCycles(params) {

  console.log(params);

  var theString = "";
  var numCycles = parseInt(params.shift());
  var cycleMin = parseFloat(params.shift());
  var cycleMax = parseFloat(params.shift());

  for (var i = 0; i < numCycles; i++) {
    theString += "<<cyclinglink ";
    for (var j = 0; j < params.length-1; j++) {
      theString += "'" + params[j] + "' ";
    }
    theString += "'" + params[params.length-1] + "'>> ";
  }

  //
  // for (var i = 0; i < numCycles; i++) {
  //   theString += "<<timedcycle " + (cycleMin + (Math.random() * (cycleMax - cycleMin))) + "s>>"
  //   for (var j = 0; j < params.length-1; j++) {
  //     theString += "<<cyclinglink '" + params[j] + "'>><<becomes>>";
  //   }
  //   theString += "<<cyclinglink '" + params[params.length-1] + "'>><<becomes>>";
  //   theString += "<<endtimedcycle>> ";
  // }

  return theString;
}

function generateTimedCycles(params) {

  var theString = "";
  var numCycles = parseInt(params.shift());
  var cycleMin = parseFloat(params.shift());
  var cycleMax = parseFloat(params.shift());
  var totalTime = parseInt(params.shift());

  theString += "<<timedreplace " + totalTime + "s>>"
  for (var i = 0; i < numCycles; i++) {
    theString += "<<timedcycle " + (cycleMin + (Math.random() * (cycleMax - cycleMin))) + "s>>"
    for (var j = 0; j < params.length-2; j++) {
      theString += "<<cyclinglink '" + params[j] + "'>><<becomes>>";
    }
    theString += "<<cyclinglink '" + params[params.length-2] + "'>><<becomes>>";
    theString += "<<endtimedcycle>> ";
  }
  theString += "<<becomes>>"
  for (var i = 0; i < numCycles; i++) {
    theString += "<<cyclinglink '" + params[params.length-1] + "'>> ";
  }
  theString += "<<endtimedreplace>>"

  return theString;
}

var theWastelandLines = [
  [
    "What is that sound high in the air",
    "Murmur of maternal lamentation",
    "What is the city over the mountains",
    "Cracks and reforms and bursts in the violet air",
    "Falling towers",
    "Unreal"
  ],
  [
    "And bats with baby faces in the violet light",
    "Whistled, and beat their wings",
    "And crawled head downward down a blackened wall",
    "And upside down in air were towers",
    "Tolling reminiscent bells, that kept the hours",
    "And voices singing out of empty cisterns and exhausted wells.",
  ],
  [
    "In this decayed hole among the mountains",
    "There is the empty chapel, only the wind’s home.",
    "Dry bones can harm no one.",
    "In a flash of lightning. Then a damp gust",
    "The jungle crouched, humped in silence.",
  ],
  [
    "Then spoke the thunder",
    "DA",
    "The awful daring of a moment’s surrender",
    "By this, and this only, we have existed",
    "In our empty rooms",
  ],
  [
    "DA",
    "Dayadhvam: I have heard the key",
    "We think of the key, each in his prison",
    "Thinking of the key, each confirms a prison",
  ],
  [
    "DA",
    "These fragments I have shored against my ruins",
    "Datta. Dayadhvam. Damyata.",
    "Shantih    shantih    shantih",
  ]
];

count = 0;
linesIndex = 0;

function generateTheWasteland(params) {
  var theString = "";

  switch (count) {

    case 0:
    theString += "<<generatenoise 'whitenoise' 0.0 " + 0.0 + " 0.0>>"
    break;

    case 1:
    theString += generateWastelandPassage(true,0,0,false,0,0);
    theString += "<<generatenoise 'whitenoise' 0.2 " + (count*0.1) + " 1.0>>"

    break;

    case 2:
    theString += generateWastelandPassage(true,0,0,true,0,0);
theString += "<<generatenoise 'whitenoise' 0.2 " + (count*0.1) + " 1.0>>"

    break;

    case 3:
    theString += generateWastelandPassage(true,0.1,0,true,0.1,0);
theString += "<<generatenoise 'whitenoise' 0.2 " + (count*0.1) + " 1.0>>"

    break;

    case 4:
    theString += generateWastelandPassage(true,0.25,0.05,true,0.25,0.05);
theString += "<<generatenoise 'whitenoise' 0.2 " + (count*0.1) + " 1.0>>"

    break;

    case 5:
    theString += generateWastelandPassage(true,0.5,0.1,true,0.5,0.1);
theString += "<<generatenoise 'whitenoise' 0.2 " + (count*0.1) + " 1.0>>"

    break;

    case 6:
    theString += generateWastelandPassage(true,0.75,0.25,true,0.75,0.25);
    theString += "<<generatenoise 'whitenoise' 0.2 " + (count*0.1) + " 1.0>>"
    break;

    case 7:
    theString += generateWastelandPassage(true,1,0.5,true,1,0.5);
    theString += "<<generatenoise 'whitenoise' 0.2 " + (count*0.1) + " 1.0>>"

    break;

    case 8:
    theString += "<<generatenoise 'whitenoise' 0.0 " + (count*0.0) + " 0.0>>"

    break;

    case 9:

    theString += "<span style='animation: fadeout 0.5s forwards 10s'>";
    theString += "<<timedinsert 0.1s>><<these>><<endtimedinsert>>";
    theString += "<<timedinsert 0.2s>><<fragments>><<endtimedinsert>>";
    theString += "<<timedinsert 0.3s>><<i>><<endtimedinsert>>";
    theString += "<<timedinsert 0.4s>><<have>><<endtimedinsert>>";
    theString += "<<timedinsert 0.5s>><<shored>><<endtimedinsert>>";
    theString += "<<timedinsert 0.6s>><<against>><<endtimedinsert>>";
    theString += "<<timedinsert 0.7s>><<my>><<endtimedinsert>>";
    theString += "<<timedinsert 0.8s>><<ruins>><<endtimedinsert>>";
    theString += "</span>"

    break;

    case 10:

    break;

    case 11:

    theString += "<span class='black'><<cyclinglink 'end.'>></span>";

    break;
  }

  if (count == 9) theString += "<<timedgoto 'The Wasteland' 6s>>";
  else if (count < 11) theString += "<<timedgoto 'The Wasteland' 5s>>";


  // if (count < 11) theString += "<<generatenoise 'whitenoise' 0.2 " + (count*0.1) + " 1.0>>"

  count++;


  return theString;
}

function generateWastelandPassage(showDarks,darkCorruptRate,darkBreakRate,showLines,lineCorruptRate,lineBreakRate) {
  var theString = "";

  var darks = 100;
  console.log(linesIndex);
  console.log(theWastelandLines[linesIndex]);
  console.log(theWastelandLines[linesIndex].length);
  var textFrequency = Math.floor(darks/(theWastelandLines[linesIndex].length));
  var textCounter = 0;
  var textIndex = 0;


  for (var i = 0; i < darks; i++) {
    if (showDarks) {
      theString += "<span class='black'>";
      theString += "<span style='" + ((Math.random() < 0.5) ? "opacity: 1" : "opacity: 0") + "; animation: flicker " + (0.5 + Math.random() * 2) + "s infinite;'>";
      theString += corrupt("dark.",darkCorruptRate,darkBreakRate);
      theString += "</span>";
      theString += "</span> ";
    }

    if (showLines) {
      if (textCounter == textFrequency) {
        theString += "<span class='lightning-text'>";
        theString += "<span style='animation: lightning " + (1 + Math.random() * 8) + "s infinite;'>";
        theString += corrupt(theWastelandLines[linesIndex][textIndex],lineCorruptRate,lineBreakRate);
        theString += "</span>"
        theString += "</span> ";
        textIndex++;
        textCounter = 0;
      }

      textCounter++;
    }
  }
  if (showLines) linesIndex++;


  return theString;
}

function corrupt(text,corruptRate,breakRate) {
  // console.log("Corrupting: " + text);
  var corrupted = "";
  // First corrupt the text
  for (var i = 0; i < text.length; i++) {
    if (Math.random() < corruptRate) {
      corrupted += getRandomChar();
    }
    else {
      corrupted += text.charAt(i);
    }
  }

  var returnText = "";
  if (Math.random() > breakRate) {
    returnText += "<<cyclinglink '" + corrupted + "'>>";
  }
  else {
    var textArray = corrupted.split(' ');
    returnText += "<<" + textArray.join('') + ">><<timedinsert " + Math.floor(1+Math.random()*5) + "s>><<generatenoise 'whitenoise' 0.2 2 1.0>><<endtimedinsert>>";
  }

  return returnText;
}

function getRandomChar() {
  var char = String.fromCharCode(Math.random() * 0xffff);
  if ("|[]@;<>".indexOf(char) != -1) {
    char = "0";
  }
  return char;
}
