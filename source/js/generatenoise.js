var linked = false;
var context = null;

try {

  version.extensions['generateNoiseMacro'] = {
    major:1, minor:0, revision:0
  };

  macros['generatenoise'] = {
    handler: function(place, macroName, params, parser) {

      if (params.length != 0) {

        var type = params[0];

        if (context) {
            context.close();
        }
        context = new (window.AudioContext || window.webkitAudioContext)();

        switch(type) {
          case "tone":

          var osc = context.createOscillator(); // instantiate an oscillator
          osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
          osc.frequency.value = parseInt(params[1]); // Hz
          osc.connect(context.destination); // connect it to the destination
          osc.start();

          break;

          case "whitenoise":

          var bufferSize = 2 * context.sampleRate,
          noiseBuffer = context.createBuffer(1, bufferSize, context.sampleRate),
          output = noiseBuffer.getChannelData(0);
          for (var i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
            output[i] *= 2;
          }
          whiteNoise = context.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          whiteNoise.playbackRate.value = parseFloat(params[1]);

          var gainNode = context.createGain();
          // gainNode.gain.setValueAtTime(1, context.currentTime);
          whiteNoise.connect(gainNode);
          gainNode.connect(context.destination);

          whiteNoise.start(0);
          // gainNode.gain.exponentialRampToValueAtTime(1.0, context.currentTime);
          // gainNode.gain.setValueAtTime(0, context.currentTime);
          gainNode.gain.value = 0;
          gainNode.gain.linearRampToValueAtTime(parseFloat(params[2]), context.currentTime+parseFloat(params[3]));
          // gainNode.gain.exponentialRampToValueAtTime(1.0, context.currentTime+1000);

          // gainNode.gain.setTargetAtTime(1.0, context.currentTime+4,1);

          break;

          case "browniannoise":

          var bufferSize = 4096;
          var brownNoise = (function() {
            var lastOut = 0.0;
            var node = context.createScriptProcessor(bufferSize, 1, 1);
            node.onaudioprocess = function(e) {
              var output = e.outputBuffer.getChannelData(0);
              for (var i = 0; i < bufferSize; i++) {
                var white = Math.random() * 2 - 1;
                output[i] = (lastOut + (0.02 * white)) / 1.02;
                lastOut = output[i];
                output[i] *= 3.5; // (roughly) compensate for gain
              }
            }
            node.playbackRate = 0.1;
            return node;
          })();

          brownNoise.playbackRate.value = parseFloat(params[1]);

          var gainNode = context.createGain();
          brownNoise.connect(gainNode);
          gainNode.connect(context.destination);
          gainNode.gain.value = 0;
          gainNode.gain.linearRampToValueAtTime(parseFloat(params[2]), context.currentTime+parseFloat(params[3]));

          // brownNoise.connect(context.destination);
          // brownNoise.start(0);

          break;
        }

        // new Wikifier(place, theString);
      }
    },
    init: function() {

    },
  };
}
catch(e) {
  console.log(e.message);
  throwError(place,"randomunicode Setup Error: "+e.message);
}
