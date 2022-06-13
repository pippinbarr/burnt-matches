var linked = false;

try {

  version.extensions['addElevatorMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['addelevator'] = {
    handler: function(place, macroName, params, parser) {

      if (params.length != 0) {

        var floors = parseInt(params[0]);
        var bottomPassage = params[1];

        var theString = "<span class=\"warning\">";
        theString += "<<insert \"Down.\">>";

        for (var i = 0; i < floors; i++) {
          theString += "<<timedinsert 2s>>\n\nDown.";
        }

        theString += "<<timedinsert 2s>>\n\n<<display \"" + bottomPassage + "\">>";


        for (var i = 0; i < floors + 1; i++) {
          theString += "<<endtimedinsert>>";
        }

        theString += "<<endinsert>></span>";

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
