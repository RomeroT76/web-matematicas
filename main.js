const upperSection = document.querySelector(".upperSection");
const lowerSection = document.querySelector(".lowerSection");
const buttons = document.querySelectorAll(".button");
const rexp = new RegExp("[*]{2}");

buttons.forEach((bt) => {
  bt.addEventListener("click", () => {
    let pb = bt.textContent;
    if (bt.id === "c") {
      upperSection.textContent = "";
      return;
    }

    if (bt.id === "del") {
      upperSection.textContent = upperSection.textContent.slice(0, -1);
      return;
    }

    if (bt.id === "eq") {
      try {
        if (rexp.test(upperSection.textContent)) {
          upperSection.textContent = "";
          throw SyntaxError;
        }
        lowerSection.textContent = eval(upperSection.textContent);
        upperSection.textContent = "";
      } catch {
        upperSection.textContent = "";
        lowerSection.textContent = "Syntax Error";
      }
      return;
    } else {
      upperSection.textContent += pb;
    }
  });
});
