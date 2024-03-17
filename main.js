console.log("IITM Seek Helper Loaded");
function clipY() {
  document.querySelector(".units__container").style.overflowY = "clip";
}
// setInterval(clipY, 1000);

function makeInputsText() {
  // make all number inputs into text
  let inputs = document.querySelectorAll("input[type=number]");
  inputs.forEach((input) => {
    input.type = "text";
  });
}
setInterval(makeInputsText, 1000);

function addPrintButton() {
  submission_text = document.querySelector(".gcb-submission-due-date");
  if (!submission_text) {
    return;
  }
  let print_button = document.getElementById("printPAGA");
  if (!print_button) {
    print_button = document.createElement("button");
    print_button.id = "printPAGA";
    print_button.innerHTML = "Print";
    print_button.addEventListener("click", function() {
      let old_height = document.querySelectorAll("#target")[0].style.height;
      document.querySelectorAll("#target")[0].style.height = "auto";
      window.print();
      document.querySelectorAll("#target")[0].style.height = old_height;
    });
    print_button.style = `
      border: 2px solid var(--bs-primary);
      border-radius: 15px;
      background-color: var(--bs-primary);
      color: white;
      padding: 5px 20px;
      font-size: large;
      font-weight: 800;
`;
    submission_text.appendChild(print_button);
  }
}

setInterval(addPrintButton, 1000);
