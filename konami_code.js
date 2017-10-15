const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
const body = document.querySelector('body');

function init() {
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    console.log(e.which);

    if (key === code[index]) {
      index++;
      console.log(`Index is: ${index}`);

      if (index === code.lenth) {
        alert('Congratulations, you have successfully entered the Konami Code!');
        console.log("Did it!");
        index = 0;
      }

    } else {
      index = 0;
    }
  });

}
