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

        var theString = "";
        linked = false;


        var p = 0;
        while (p < paragraphs || !linked) {

          theString += generateParagraph(linkBack,lockVar);

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

function generateParagraph(linkBack,lockVar) {

  var thePara = "";

  var paragraphLength = Math.round(Math.random() * 200);

  var linking = false;
  var replacing = false;
  // var css = false;

  for (var i = 0; i < paragraphLength; i++) {

    if (!linking && Math.random() < 0.01) {
      thePara += "<span class=\"warning\">[[";
      linking = true;
    }
    else if (linking && Math.random() < 0.1) {
      thePara += "|" + linkBack + "][" + lockVar + "= false]]</span>";
      linking = false;;
      linked = true;
    }

    if (!linking && Math.random() < 0.75) {
      thePara += "<<timedcycle " + Math.random() * 20 + "s>>";

      thePara += getRandomChar();
      thePara += "<<becomes>>";

      thePara += getRandomChar();
      thePara += "<<endtimedcycle>>";
    }

    thePara += getRandomChar();
  }

  if (linking) thePara += "|" + linkBack + "][" + lockVar + "= false]]</span>";

  return thePara;
}

function getRandomChar() {
  var char = String.fromCharCode(Math.random() * 0xffff);
  if ("|[]@;".indexOf(char) != -1) {
    char = "0";
  }
  return char;
}
