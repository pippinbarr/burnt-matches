var linked = false;

try {

  version.extensions['reversibleStepsMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['reversiblesteps'] = {
    handler: function(place, macroName, params, parser) {

      console.log(place);
      console.log(parser);


      if (params.length != 0) {

        var steps = parseInt(params[0]);
        var bottomPassage = params[1];

        var indentAmount = 10;
        var indentDirection = 1;
        var currentIndent = indentAmount;
        var previousIndent = 0;
        var theString = "";

        theString += "<span class=\"nowrap\">";

        theString += "[[Home.|home]]\n";

        theString += "<span class=\"warning\">";

        theString += "@@margin:" + currentIndent + "%;@@<<insert \"Step.\">>\n";

        for (var i = 0; i < steps; i++) {
          if (currentIndent > indentAmount && Math.random() < 0.1) {
            indentDirection *= -1;
          }
          if (currentIndent == 0 && indentDirection == -1) {
            indentDirection = 1;
          }
          currentIndent += indentDirection * indentAmount;

          theString += "@@margin:" + currentIndent + "%;@@<<insert \"Step.\">>\n";
        }

        theString += "@@margin:" + (currentIndent + indentDirection*indentAmount) + "%;@@<<display \"" + bottomPassage + "\">>"

        for (var i = 0; i < steps + 1; i++) {
          theString += "<<endinsert>></span>";
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
