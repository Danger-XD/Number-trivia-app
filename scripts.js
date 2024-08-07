const genBox = document.querySelector("#gen-box");
const numBox = document.querySelector("#number-value");
const triviaType = document.querySelector("#trivia-type");
const numbValue = document.querySelector("#trivia-number");
const genBtn = document.querySelector("#genTrivia-btn");
const triviaUrl = "http://numbersapi.com/";

function generateTrivia() {
  if (triviaType.value == "neutral" && numbValue.value === "") {
    fetch(triviaUrl + "random")
      .then((res) => res.text())
      .then((item) => {
        genBox.textContent = item;
        const numberMatch = item.match(/\d+/); //regex
        if (numberMatch) {
            numBox.textContent = numberMatch[0]; 
          }
      })
      .catch((error) => console.log(error));
  } else if (triviaType.value !== "neutral" && numbValue.value === "") {
    alert("Please, Enter a Number.");
  } else if (triviaType.value == "neutral" && numbValue.value !== "") {
    fetch(triviaUrl + numbValue.value)
      .then((res) => res.text())
      .then((item) => (genBox.textContent = item))
      .catch((error) => console.log(error));
      numBox.textContent = numbValue.value;
    triviaType.value = "neutral";
    numbValue.value = "";
  } else if (triviaType.value !== "neutral" && numbValue.value !== "") {
    fetch(triviaUrl + numbValue.value + "/" + triviaType.value)
      .then((res) => res.text())
      .then((item) => (genBox.textContent = item))
      .catch((error) => console.log(error));
    numBox.textContent = numbValue.value;
    triviaType.value = "neutral";
    numbValue.value = "";
  }

}
genBtn.addEventListener("click", generateTrivia);

/*
fetch(url) is to send request
and then we receive response in then().. then catch() 
*/