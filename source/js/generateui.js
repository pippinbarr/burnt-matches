var linked = false;

try {

  version.extensions['generateuiMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['generateui'] = {
    handler: function(place, macroName, params, parser) {

      if (params.length != 0) {

        var paragraphs = 1 + Math.round(Math.random() * parseInt(params[0]));
        var linkBack = params[1];
        var lockVar = params[2];
        var includeUI = params[3] == "true";
        var timedReplace = params[4] == "true";
        var linkbackChance = params[5];
        var linkSelf = params[6];

        var theString = "";
        linked = false;

        var p = 0;
        while (p < paragraphs || !linked) {
          var forceLink = (p + 1 == paragraphs);
          theString += generateParagraph(linkBack,lockVar,includeUI,timedReplace,forceLink,linkbackChance,linkSelf);
          theString += "\n\n";
          p++;
        }

        new Wikifier(place, theString);
      }
    },
    init: function() { },
  };
}
catch(e) {
  console.log(e.message);
  throwError(place,"randomunicode Setup Error: "+e.message);
}

function generateParagraph(linkBack,lockVar,includeUI,timedReplace,forceLink,linkbackChance,linkSelf) {

  var thePara = "";

  var paragraphLength = 20 + Math.round(Math.random() * 50);

  var linking = false;
  var replacing = false;
  // var css = false;

  for (var i = 0; i < paragraphLength; i++) {

    if (!linking && Math.random() < 0.01) {
      thePara += "<span class=\"warning\">[[";
      linking = true;
    }
    else if (linking && Math.random() < 0.1) {
      if (Math.random() < linkbackChance) {
        thePara += "|" + linkBack + "][" + lockVar + "= true]]</span>";
      }
      else {
        thePara += "|" + linkSelf + "]]</span>";
      }
      linking = false;;
      linked = true;
    }

    if (timedReplace && !linking && Math.random() < 0.9) {
      thePara += "<<timedcycle " + Math.random() * 10 + "s>>";

      thePara += getRandomChar();
      thePara += "<<becomes>>";

      thePara += getRandomChar();
      thePara += "<<endtimedcycle>>";
    }

    if (includeUI) {
      if (!linking && Math.random() < 0.1) {
        if (Math.random() < linkbackChance) {
          link = linkBack;
        }
        else {
          link = linkSelf;
        }

        thePara += "<<textinput $value [[" + getNRandomChars(1+Math.floor(Math.random()*8)) +"|" + link + "][" + lockVar + "= true]]>>";
      }

      if (!linking && Math.random() < 0.1) {
        thePara += "<<radio $value \"" + getNRandomChars(1+Math.floor(Math.random()*8)) +"\">>";
      }

      if (!linking && Math.random() < 0.1) {
        thePara += "<<checkbox $value \"" + getNRandomChars(1+Math.floor(Math.random()*8)) +"\">>";
      }
    }

    thePara += getRandomChar();
  }

  if (linking) thePara += "|" + linkBack + "][" + lockVar + "= true]]</span>";

  if (forceLink && !linked) {
    thePara += "<span class=\"warning\">[[";
    var chars = Math.floor(Math.random() * 5) + 3;
    for (var i = 0; i < chars; i++) {
      thePara += getRandomChar();
    }
    if (Math.random() < linkbackChance) {
      thePara += "|" + linkBack + "][" + lockVar + "= true]]</span>";
    }
    else {
      thePara += "|" + linkSelf + "]]</span>";
    }
    linked = true;
  }

  return thePara;
}

function getNRandomChars(n) {
  var chars = "";
  for (var i = 0; i < n; i++) {
    chars += getRandomChar();
  }
  return chars;
}

function getRandomChar() {
  var char = String.fromCharCode(Math.random() * 0xffff);
  if ("|[]@;".indexOf(char) != -1) {
    char = "0";
  }
  return char;
}
