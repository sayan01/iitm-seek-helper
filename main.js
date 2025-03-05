import jsPDF from "jspdf";

/**
 * This function makes the page not have blank space at the bottom
 */
function clipY() {
  let offender = document.querySelector(".custom-scrollbar-horizontal")
  if (offender) {
    offender.style.overflowY = "clip";
  }
}
setInterval(clipY, 1000);

/**
  * This function makes the input number boxes of NAT assignments
  * into text boxes to prevent accidental ±1 errors on scroll.
  */
function makeInputsText() {
  let inputs = document.querySelectorAll("input[type=number]");
  inputs.forEach((input) => {
    input.type = "text";
  });
}
setInterval(makeInputsText, 1000);

var errors = 0;
async function print() {
  const target = document.querySelector("#target");
  if (!target) return;

  // Temporarily force full height to capture all content
  target.style.height = "auto";
  target.style.maxHeight = "none";
  const courseTitle = document.querySelectorAll('.course-title')[0].innerHTML;
  const assTitle = document.querySelectorAll('.modules__content-head-title')[0].innerText;

  try {
    const pdf = new jsPDF("p", "mm", "a4");

    await pdf.html(target, {
      callback: function (pdf) {
        pdf.save(`${courseTitle} - ${assTitle}.pdf`);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      x: 10,
      y: 10,
      width: 190, // Fit within A4 width
      windowWidth: target.scrollWidth, // Ensures full content capture
    });
    errors = 0;
  } catch (error) {
    console.error(error);
    errors++;
    if (errors > 3) {
      alert("An error occurred while trying to print the page. Please try again later.");
    }
    else {
      print();
    }
  }
}

/**
  * This function adds a print button to the page
  */
function addPrintButton() {
  submission_text = document.querySelector(".gcb-submission-due-date");
  let print_button = document.getElementById("printPAGA");
  if (!submission_text || print_button) {
    return;
  }
  print_button = document.createElement("button");
  print_button.id = "printPAGA";
  print_button.innerHTML = "Print";
  print_button.addEventListener("click", print);
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
  if (!iframe) {
    return;
  }
  if (iframe.src.indexOf('rel=0') < 0) {
    iframe.src += '&rel=0';
    console.log("Relative Videos removed");
  }
}

setInterval(noReliFrame, 1000);

/**
 * This function makes the links blue and underlined
 */
function visibleLinks() {
  let links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.color = "blue";
    link.style.textDecoration = "underline";
  });
}

setInterval(visibleLinks, 1000);

console.log('iitm-seek-helper v0.7 loaded');
