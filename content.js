console.log("Chrome extension running...");

document.body.onload = addElement;

function addElement() {
  //create a new div element
  const newButton = document.createElement("button");

  //give the button content
  const newContent = document.createTextNode("Click to Analyze");

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

  newButton.onclick = function (e) {
    e.preventDefault();

    console.log("Heads up! Labeling like 'Gluten Free' has no real health benefit unless you're celiac!");

  };
}
