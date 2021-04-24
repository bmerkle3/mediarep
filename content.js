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
  newButton.style.top = "18em";
  newButton.style.left = "46em";
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
    debunkModal.style.background = "#fefefe";
    debunkModal.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    debunkModal.style.borderRadius = "2px";
    debunkModal.style.padding = "12px";
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
      newButton.textContent = "Done";
      newButton.style.background = "black";

      targetNode.appendChild(debunkModal);
    }

    console.log(
      "Heads up!! Labeling like 'Gluten Free' has no real health benefit unless you're celiac!"
    );
  };
}

document.body.onload = addButtonElement;
