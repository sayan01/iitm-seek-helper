/**
 * This function makes the page not have blank space at the bottom
 */
function clipY() {
  let offender = document.querySelector(".custom-scrollbar-horizontal")
  if(offender){
    offender.style.overflowY = "clip";
  }
}
setInterval(clipY, 1000);

/**
  * This function makes the input number boxes of NAT assignments
  * into text boxes to prevent accidental ±1 errors on scroll.
  */
function makeInputsText() {
  // make all number inputs into text
  let inputs = document.querySelectorAll("input[type=number]");
  inputs.forEach((input) => {
    input.type = "text";
  });
}
setInterval(makeInputsText, 1000);

/**
  * This function adds a print button to the page
  */
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

/**
  * This function removes the related videos from the youtube iframe
  * by adding `&rel=0` to the src attribute
  * This does not totally remove the popup anymore since 2018.
  * To do that add the following filters to your adblocker:
  * ```
  * !YouTube embed pause overlay
  * youtube.com##.ytp-pause-overlay
  * www.youtube-nocookie.com##.ytp-pause-overlay
  * ```
  */
function noReliFrame() {
  iframe = document.querySelector("iframe");
  if(!iframe){
    return;
  }
  if(iframe.src.indexOf('rel=0') < 0){
    iframe.src += '&rel=0';
    console.log("Relative Videos removed");
  }
}

setInterval(noReliFrame, 1000);

console.log('iitm-seek-helper v0.6 loaded');
