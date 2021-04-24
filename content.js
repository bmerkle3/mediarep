console.log("Chrome extension running...");

function addButtonElement() {
  //create a new div element
  const newButton = document.createElement("button");
  //give the button content
  newButton.textContent = "Click to Analyze";
  newButton.className = "taurusButton";
  console.log(newButton);
  // targetNode.appendChild(newButton);

  //styling for button
  newButton.style.background = "linear-gradient(to bottom, #2c3e50, #3498db) ";
  newButton.style.position = "relative";
  newButton.style.top = "12.5em";
  newButton.style.left = "50em";
  newButton.style.zIndex = 8000;
  newButton.style.color = "white";
  newButton.style.width = "10%";
  newButton.style.height = "30%";
  newButton.style.borderRadius = "20px";
  newButton.style.padding = "0.5em";
  newButton.style.boxSizing = "border-box";

  const currentButton = document.getElementById("headerMain");
  document.body.insertAdjacentElement("afterbegin", newButton, currentButton);

  newButton.onclick = function (e) {
    e.preventDefault();
    // logic here to link clicking with stuff happening
    if (newButton.classList.contains("button-showing-debunk")) {
      newButton.classList.remove("button-showing-debunk");
      newButton.textContent = "Click to Analyze";
      newButton.style.background =
        "linear-gradient(to bottom, #2c3e50, #3498db) ";
    } else {
      newButton.classList.add("button-showing-debunk");
      newButton.textContent = "I have been clicked!";
      newButton.style.background = "black";
    }

    console.log(
      "Heads up!! Labeling like 'Gluten Free' has no real health benefit unless you're celiac!"
    );
  };
}

document.body.onload = addButtonElement;
