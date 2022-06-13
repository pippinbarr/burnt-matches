var linked = false;

try {

  version.extensions['addCorridorMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['addcorridor'] = {
    handler: function(place, macroName, params, parser) {

      if (params.length != 0) {

        theString = "";

        theString += "<span class=\"nowrap\">";

        theString += "[[home]]. "; // Add the default home tag.

        theString += "<span class=\"warning\">";

        for (var i = 0; i < params.length - 1; i++) {
          theString += params[i];
          theString += " <<revise walk" + i + " \"Walk.\">><<insertion walk" + i + ">> ";
        }
        theString += "</span>"; // Close warning

        theString += "<<display \"" + params[params.length -1] + "\">>";

        for (var i = 0; i < params.length - 1; i++) {
          theString += "<<endinsertion>>"
        }

        theString += "</span>"; // Close nowrap

        new Wikifier(place, theString);
      }
    },
    init: function() { },
  };


  bodyText = bodyText.replace(/On[\r\n\s.]*?wrote:/g,'******************')


}
catch(e) {
  console.log(e.message);
  throwError(place,"randomunicode Setup Error: "+e.message);
}
