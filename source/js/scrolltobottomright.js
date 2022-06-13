var linked = false;

try {

  version.extensions['scrollMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['scroll'] = {
    handler: function(place, macroName, params, parser) {
      var scrollDelay = 100;
      if (params.length != 0) {
        if (params[0] == "bottom") {
          window.setTimeout(function () {
            console.log(width() + "x" + height());
            // window.scrollBy(0,height());
            window.scrollBy(0,10000);
          },scrollDelay);
        }
        else if (params[0] == "right") {
          window.setTimeout(function () {
            window.scrollBy(10000,0);
          },scrollDelay);
        }
        else if (params[0] == "bottomright") {
          window.setTimeout(function () {
            console.log(width() + "x" + height());
            window.scrollBy(10000,10000);
          },scrollDelay);
        }
      }

      //
    },
    init: function() { },
  };
}
catch(e) {
  console.log(e.message);
  throwError(place,"randomunicode Setup Error: "+e.message);
}

function height() {
  var body = document.body;
  var html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );

  return 400;
  return height;
}

function width() {
  var body = document.body;
  var html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );

  return width;
}
