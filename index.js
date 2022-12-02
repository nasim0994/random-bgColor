const display = document.querySelector(".display");
const changeBtn = document.querySelector(".up");
const RunBtn = document.querySelector(".run");
const push = document.querySelector(".push");

const colorCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let toggled = false;
const toggle = () => {
  if (!toggled) {
    toggled = true;
    RunBtn.innerHTML = `Reset`;
    RunBtn.style.backgroundColor = "green";
    changeBtn.disabled = false;
    changeBtn.style.backgroundColor = "#ffa500";
    push.disabled = false;
    return;
  }
  if (toggled) {
    toggled = false;
    RunBtn.innerHTML = `Run`;
    RunBtn.style.backgroundColor = "#ffa500";
    changeBtn.disabled = true;
    changeBtn.style.backgroundColor = "#a5a2a2";
    push.disabled = true;
    push.style.backgroundColor = "#a5a2a2";
    display.style.backgroundColor = "#ffffff";
    return;
  }
};

const pushToggle = () => {
  if (!toggled) {
    toggled = true;
    push.innerHTML = `Push`;
    push.style.backgroundColor = "#a5a2a2";
    changeBtn.disabled = false;
    changeBtn.style.backgroundColor = "#ffa500";

    return;
  }
  if (toggled) {
    toggled = false;
    push.innerHTML = `Start`;
    push.style.backgroundColor = "green";
    changeBtn.disabled = true;
    changeBtn.style.backgroundColor = "#a5a2a2";

    return;
  }
};

changeBtn.addEventListener("click", () => {
  let codeKey = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * colorCode.length);
    codeKey = codeKey + colorCode[index];
  }
  display.style.backgroundColor = codeKey;
});

changeBtn.addEventListener("keyup", () => {
  alert("sdfdg");
});
