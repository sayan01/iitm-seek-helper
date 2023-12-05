console.log("IITM Seek Helper Loaded");
function clipY() {
  document.querySelector(".units__container").style.overflowY = "clip";
}
setInterval(clipY, 1000);

function makeInputsText() {
  // make all number inputs into text
  let inputs = document.querySelectorAll("input[type=number]");
  inputs.forEach((input) => {
    input.type = "text";
  });
}
setInterval(makeInputsText, 1000);
