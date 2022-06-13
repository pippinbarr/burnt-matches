var linked = false;

try {

  version.extensions['linkToAnchorMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['linktoanchor'] = {
    handler: function(place, macroName, params, parser) {

      if (params.length != 0) {

        theString = "[[" + params[0] + "]]";

        var link = new Wikifier(place, theString);

        console.log(link);
      }
    },
    init: function() { },
  };
}
catch(e) {
  console.log(e.message);
  throwError(place,"randomunicode Setup Error: "+e.message);
}
