const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var pressed = [];
const body = document.querySelector('body');

function init() {
  body.addEventListener('keydown', function(e) {
    console.log(e.which);
  });

}