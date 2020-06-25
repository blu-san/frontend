/*
* basic javascript script that contains functions, local and global variables
* calls for 'document' which is the DOM element
*/
let mode = '';             
let imageSource = '';      

// Returns number's factorial
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

// Returns n-th number in the fibonacci sequence
function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Render result in the browser based on input
function render(el) {
    let num = document.getElementById('input-number').value;
    if (!num) return;
    if (el) mode = el.value;
    switch(mode) {
        case 'factorial':
            num = factorialize(num);
            imageSource = 'https://cdn.pixabay.com/photo/2020/06/22/04/18/cloud-5327556_960_720.png';
            break;
        case 'fibonacci':
            num = fibonacci(num);
            imageSource = 'https://cdn.pixabay.com/photo/2020/06/22/04/16/information-technology-5327546_960_720.png';
            break;
        case 'square':
            num = Math.pow(num, 2);
            imageSource = 'https://cdn.pixabay.com/photo/2020/06/22/04/18/information-technology-5327558_960_720.png';
            break;
    }
    document.getElementById('result').innerHTML = num;
    document.getElementById('change-image').src = imageSource;
}