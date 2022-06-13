var linked = false;

try {

  version.extensions['runtrackingMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['runtracking'] = {
    handler: function(place, macroName, params, parser) {
      window.runtracking = function () {
        // var sc_project=6867947;
        // var sc_invisible=1;
        // var sc_security="458bbcb5";
        // var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");
        // document.write("<sc"+"ript type='text/javascript' src='" +scJsHost+"statcounter.com/counter/counter.js'></"+"script>");
        // <!-- End of StatCounter Code for Default Guide -->

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-25915730-1', 'auto');
        ga('send', 'pageview');
      }

      window.runtracking();

      console.log("Tracking.");
    },
    init: function() {
    },
  };
}
catch(e) {
  console.log(e.message);
  throwError(place,"randomunicode Setup Error: "+e.message);
}
