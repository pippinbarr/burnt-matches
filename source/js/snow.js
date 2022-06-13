var linked = false;

try {

  version.extensions['addSnowMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['addsnow'] = {
    handler: function(place, macroName, params, parser) {

      if (params.length != 0) {

        var numSnows = parseInt(params[0]);

        var indentAmount = 10;
        var indentDirection = 1;
        var currentIndent = indentAmount;
        var previousIndent = 0;
        var theString = "";

        for (var i = 0; i < numSnows; i++) {
          theString += "<span class=\"snow\">";
          for (var j = 0; j < 3; j++) {
            if (Math.random() < 0.5) {
              theString += " ";
            }
          }
          // theString += "@@padding-left: 2px;"
          theString += "<<cyclinglink \"snow\" \"snow\" \"end\">>";
          // theString += "@@";
          theString += "</span>";
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
