// Change paragraph 1 and 3 to blue, and paragraph 2 to red.
function changeParagraphsColour() {
    let paragraphs = document.getElementsByClassName('text');

    for (let i = 0; i < paragraphs.length; i++) {
        if (i === 1) {
            paragraphs[i].classList.add('red-text');
        } else {
        paragraphs[i].classList.add('blue-text');  // Apply the 'blue-text' class
        }
    }
}

// Reset the paragraph elements' color back to default
function resetStyling() {
    let paragraphs = document.getElementsByClassName('text');

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.remove('blue-text', 'red-text');  // Remove the 'blue-text' and 'red-text class
    }
}


///////////////
function showImage() {
    let image = document.getElementById('show-image');

    image.classList.remove('hidden'); //remove the hidden class
    image.classList.add('unhidden'); // add the show class
}

function hideImage() {
    let image = document.getElementById('show-image');

    image.classList.remove('unhidden'); //remove the hidden class
    image.classList.add('hidden'); // add the show class
}

////////////
// A more complicated version of the above
function showHideImage() {
    let image = document.getElementById('show-image');

    //use .contains to check for specific classes
    if (image.classList.contains('hidden')) {
        image.classList.add('unhidden');
        image.classList.remove('hidden'); 
    } else {
        image.classList.remove('unhidden'); 
        image.classList.add('hidden');
    }
}