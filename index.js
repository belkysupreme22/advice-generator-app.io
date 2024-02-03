const dice = document.getElementById("dice");
const adviceNum = document.getElementById("advice-id");
const advices = document.getElementById("advices");
dice.addEventListener("click", () => {
  dice.style.boxShadow = "-2px -2px 50px hsl(150, 100%, 66%)";
  getAdvice();
});

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const advice = data.slip;
    adviceNum.textContent = advice.id;
    advices.textContent = advice.advice;
  } catch (err) {
    alert(err);
  }
}
