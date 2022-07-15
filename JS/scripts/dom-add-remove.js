function addNode() {
    let paragraphElement = document.querySelector('p');

    let childParagraphElement = document.createElement('p');

    childParagraphElement.textContent = "This is my added paragraph"
    childParagraphElement.style.backgroundColor = "tomato"
    childParagraphElement.style.color = "white"

    paragraphElement.appendChild(childParagraphElement)
}

function removeNode() {
    let paragraphElement = document.querySelector('p')
    let descendentParagraph = document.querySelector("p p");

    paragraphElement.removeChild(descendentParagraph)
}