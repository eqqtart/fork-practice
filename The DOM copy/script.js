
//change a specific element by its ID
function changeBoxOne() {
    // find the element with the id 'box-id'
        let box = document.getElementById("box-id");

    // CHANGE THE STYLE
        box.style.backgroundColor = "darkblue";
        box.style.fontSize = "16pt";
        box.style.color = "white";
        box.style.width = "40%";

    // Remove everything from the element and replace it with text
        // box.innerHTML = "New Text (Bye Blastoise)";

    // You can also use HTML tags to help with styling:
        box.innerHTML = "<p>New Text (Hi Blastoise)</p><img src='blastoise.png' alt='blastoise'>";
}

// Make something appear
function makeBoxAppear() {
    let box = document.getElementById("hidden-box");
    
    box.style.display = "block";
}

// Make something disappear
function makeBoxDisappear() {
    let box = document.getElementById("hidden-box");
    
    box.style.display = "none";
}

///////////////////////

// change elements by their class
function changeBoxesColour() {
    //find all the elements with the class 'box'
    let boxes = document.getElementsByClassName("box-class");

    // loop through all the boxes to change all of them!
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "lightcoral";
    }
}

// reset styling choices - notice the issues JavaScript can create in your HTML and CSS!
function resetStyling() {
    let boxes = document.getElementsByClassName("box-class");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "";
        boxes[i].style.fontSize = "";
        boxes[i].style.color = "";
        boxes[i].style.width = "";
    }
}

// change all the paragraph elements
function changeParagraphsColour() {
    //target paragraph elements
    let paragraphs = document.getElementsByTagName("p");

    // loop through all the paragraph elements and change them

    for (let i = 0; i<paragraphs.length; i++) {
        paragraphs[i].style.color = 'blue';
    }
}

// change all the heading elements
function changeHeadingsColour() {
    //target heading elements
    let headings = document.getElementsByTagName("h2");

    // loop through all the heading elements and change them

    for (let i = 0; i<headings.length; i++) {
        headings[i].style.color = 'blue';
    }
}

///////////////////////

// change an image
function changeImage() {
    // finding image from HTML using its id
    let image = document.getElementById("change-image");

    image.src = "blastoise.png";
    image.alt = "blastoise";
}

// use getAttribute to check if the image has changed or not
function swapImages() {
    // find image from HTML using id
    let image = document.getElementById("change-image");
    
    if (image.getAttribute('src') === "blastoise.png") {
        image.src="squirtle.png";
        image.alt = "squirtle";
    } else {
        image.src = "blastoise.png";
        image.alt = "blastoise";
    }
}

///////////////////////

// add an element
function addHeading() {
    // create new heading element
    let newElement = document.createElement("h2");

    //find the HTML parent you want this element to go into using the parent's id. I want it inside the section with the id "manipulating-content"
    let parentContainer = document.getElementById("manipulating-content")

    // add the content to the new element
    newElement.innerHTML = "A New Heading"

    // add the new element into the parent container
    parentContainer.appendChild(newElement);
}
//////////////////////////////


// add an element in a more specific location
function addParaSpecific() {
    let newElement = document.createElement("p");
    let parentContainer = document.getElementById("manipulating-content");

    newElement.innerHTML = "A paragraph placed more specifically!"

    // add the new element before the parent container
    parentContainer.insertAdjacentElement("beforebegin", newElement);

    // //add the new element as the first child of the parent container
    // parentContainer.insertAdjacentElement("afterbegin", newElement);

    // //add new element as the last child of the element
    // parentContainer.insertAdjacentElement("beforeend", newElement);

    // // add new element after the element itself
    // parentContainer.insertAdjacentElement("afterend", newElement);


}