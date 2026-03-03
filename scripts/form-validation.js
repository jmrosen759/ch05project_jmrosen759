function checkMissing() {
  var req = document.querySelectorAll(".required");
  var missing = 0;

  for (var i = 0; i < req.length; i++) {
    var val = req[i].value;

    // just for spaces
    if (val.trim() === "") {
      missing++;
    }
  }

  var span = document.getElementById("missing-count");

  if (missing > 0) {
    span.textContent = "Missing required fields: " + missing;
  } else {
    span.textContent = "";
  }

  return missing;
}

function validateEmail() {
  var emailBox = document.getElementById("email");
  var emailVal = emailBox.value.trim();

  // requirement is 8 characters
  if (emailVal.length < 8) {
    emailBox.classList.add("invalid-email");
    return false;
  } else {
    // go back to normal styling
    emailBox.classList.remove("invalid-email");
    return true;
  }
}

function runValidation() {
  var missing = checkMissing();
  var emailGood = validateEmail();

  if (missing > 0 || emailGood === false) {
    alert("Form blocked. Fill out the required fields and fix the email adress");
    return false;
  }

  // not actually submitting just showing its good
  alert("submitted");
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("submit-btn");

  btn.addEventListener("click", function (e) {
    var ok = runValidation();

    if (!ok) {
      e.preventDefault();
    }
  });
});