var linked = false;

try {

  version.extensions['generatechessuiMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['generatechessui'] = {
    handler: function(place, macroName, params, parser) {

      if (params.length != 0) {

        var paragraphs = 1 + Math.floor(Math.random() * parseInt(params[0]));
        var linkBack = params[1];
        var lockVar = params[2];

        var theString = "";
        linked = false;

        var p = 0;
        while (p < paragraphs || !linked) {

          theString += generateParagraph(linkBack,lockVar);

          theString += "\n";
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

  var paragraphLength = 10 + Math.round(Math.random() * 10);

  var linking = false;
  var replacing = false;
  // var css = false;

  for (var i = 0; i < paragraphLength; i++) {

    if (!linking && Math.random() < 0.05) {
      thePara += "<span class=\"warning\">[[";
      linking = true;
    }
    else if (linking) {
      var link;
      if (Math.random() > 0.1) {
        link = "Chess UI";
      }
      else {
        link = linkBack;
      }
      thePara += "|" + link + "][" + lockVar + "= true]]</span>";
      linking = false;;
      linked = true;
    }

    thePara += getRandomChar();
  }

  if (linking) thePara += "|" + linkBack + "][" + lockVar + "= true]]</span>";

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
  var char = String.fromCharCode(0x2654 + Math.random() * 0x000b);
  if ("|[]@;".indexOf(char) != -1) {
    char = "0";
  }
  return char;
}
