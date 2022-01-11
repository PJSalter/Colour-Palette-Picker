// This js page will include functionality and Dom manipulation

// I will now write a function that will pick up class elements, the function name will be MakingThoseElements
// I will be taking in a tagName within the brackets
//also will have a classes attribute with a list of classes

/**
 * This will create the element that originate from a tagname and classes
 * @param {string} tagName name of tag for the element ('div' etc)
 * @param {string} classes this places the classes the class attribute, several which are seperated by a space
 * @returns {HTMLElement}
 */

function makingThoseElements(tagName, classes){

    //creating the element
    const feature = document.createElement(tagName);
    feature.setAttribute("class", classes)

    return feature
}

/**
 * This will be the palette piece from the specific color info
 * @param {string} color This will be the color code such as HEX 
 * @param {string} text This will be the description of the colour itself
 * @returns {HTMLElement}
 */

function makingAComponent(color, text){
     const detailPiece = makingThoseElements("div", "palette-component");
     const detailColor = makingThoseElements("div", "palette-show-color");
     const detailText = makingThoseElements("div", "palette-text");
     const detailInput = makingThoseElements("div", "palette-color-input");

     detailColor.style.backgroundColor = color;
     detailInput.value = color;
     detailText.textContent = text;

     detailPiece.appendChild(detailColor);

     // To place the text of the color in the bottom left corner.
     detailPiece.appendChild(detailInput);
     detailColor.appendChild(detailText);

     // When gaining focus/sight from an input field it will then select all of these elements automatically.
     detailInput.onfocus = () => detailInput.select();

     // then using the keyword return I will then return the main container

     return detailPiece;

}

const codeColorContainter = document.querySelector(".palette-art");

fetch("data/color.json").then(response => {
   return response.json()
}).then(colorChoices => {
    for (const {text, color} of colorChoices) {
        console.log(text, color);
    codeColorContainter.appendChild(makingAComponent(color, text));
    }
})