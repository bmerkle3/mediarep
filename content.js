console.log("Chrome extension running...");

function addButtonElement() {
  //create a new div element
  const newButton = document.createElement("button");
  //give the button content
  newButton.textContent = "Click to Analyze";
  newButton.className = "taurusButton";

  //styling for button
  newButton.style.background = "#E4572E";
  newButton.style.position = "relative";
  newButton.style.top = "12.5em";
  newButton.style.left = "50em";
  newButton.style.zIndex = 8000;
  newButton.style.color = "white";
  newButton.style.width = "175px";
  newButton.style.height = "40px";
  newButton.style.borderRadius = "10px";
  newButton.style.padding = "0.5em";
  newButton.style.boxSizing = "border-box";

  //attach button to page
  const currentButton = document.getElementById("headerMain");
  document.body.insertAdjacentElement("afterbegin", newButton, currentButton);

  // document.body.insertAdjacentElement("afterend", debunkModal, newButton);

  newButton.onclick = function (e) {
    e.preventDefault();

    const allDivs = document.getElementsByTagName("div");
    const targetNode =
      allDivs[0].firstChild.childNodes[3].childNodes[1].childNodes[1]
        .childNodes[1].childNodes[1];

    // create the debunking modal
    const debunkModal = document.createElement("div");
    debunkModal.innerHTML = "debunking with some knowledge here!";
    debunkModal.style.background = "gray";
    debunkModal.style.height = "100px";

    // logic here to link clicking with stuff happening
    if (newButton.classList.contains("button-showing-debunk")) {
      newButton.classList.remove("button-showing-debunk");
      newButton.textContent = "Click to Analyze";
      newButton.style.background =
        "#E4572E";
      const modalChild = targetNode.lastChild;
      targetNode.removeChild(modalChild);
    } else {
      newButton.classList.add("button-showing-debunk");
      newButton.textContent = "I have been clicked!";
      newButton.style.background = "black";

      targetNode.appendChild(debunkModal);
    }

    console.log(
      "Heads up!! Labeling like 'Gluten Free' has no real health benefit unless you're celiac!"
    );
  };
}

document.body.onload = addButtonElement;
