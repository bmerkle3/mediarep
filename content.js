console.log("Chrome extension go?");

//Demo content
// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//   console.log(message);
//   let paragraphs = document.getElementsByTagName("p");
//   let imgs = document.getElementsByTagName("h1");
//   for (elt of paragraphs) {
//     elt.innerHTML = message.txt;
//     elt.style["border"] = "solid 3px red";
//   }
// }

document.body.onload = addButtonElement;

function addButtonElement() {
  //create a new div element
  const newButton = document.createElement("button");

  //give the button content
  const newContent = document.createTextNode("View claims");
  

  //add the text to the button
  newButton.appendChild(newContent);
  newButton.classList.add("buttonExtension");

  //styling for button
  newButton.style.background = "linear-gradient(to bottom, #2c3e50, #3498db) "
  newButton.style.border = "solid 2px #dfdfdf";
  newButton.style.position = "relative";
  newButton.style.top = "12.5em";
  newButton.style.left = "50em";
  newButton.style.zIndex = 8000;
  newButton.style.backgroundColor = "white";
  newButton.style.color = "white";
  newButton.style.width = "10%";
  newButton.style.borderRadius = '20px'
  newButton.style.padding = '0.5em'
  newButton.style.boxSizing = 'border-box'



  const currentButton = document.getElementById("headerMain");
  document.body.insertAdjacentElement("afterbegin", newButton, currentButton);

  

  newButton.onclick = function (e) {
    e.preventDefault();
    window.alert("you are current on " + document.baseURI);
  
  };
}
