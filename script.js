document.querySelector(".form__auth-btn").onclick = function () {
  const userPassFirst = document.querySelector("#password1").value;
  const userPassSecond = document.querySelector("#password2").value;

  switch (userPassFirst) {
    case "":
      document.getElementById("password1").style = "border: 1px solid red";
      document.getElementById("password2").style = "border: 1px solid red";
      break;
    case userPassSecond:
      document.getElementById("password1").style = "border: 1px solid green";
      document.getElementById("password2").style = "border: 1px solid green";
      return true;
    default:
      document.getElementById("password1").style = "border: 1px solid red";
      document.getElementById("password2").style = "border: 1px solid red";
      return false;
  }
};
