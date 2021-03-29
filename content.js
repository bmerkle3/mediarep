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

document.body.onload = addElement;

function addElement() {
  //create a new div element
  const newButton = document.createElement("button");

  //give the button content
  const newContent = document.createTextNode("Click me");

  //add the text to the button
  newButton.appendChild(newContent);
  newButton.classList.add("buttonExtension");

  newButton.style.border = "solid 2px red";
  newButton.style.position = "relative";
  newButton.style.top = "12em";
  newButton.style.left = "50em";
  newButton.style.zIndex = 8000;
  newButton.style.backgroundColor = "white";
  newButton.style.color = "red";
  newButton.style.width = "5%";

  const currentButton = document.getElementById("headerMain");
  document.body.insertAdjacentElement("afterbegin", newButton, currentButton);

  newButton.onmouseenter = function (e) {
    e.preventDefault();
    window.alert("Hello there");
  };
}
