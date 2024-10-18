// const form = document.getElementById("palindrome-form");
const textInput = document.getElementById("text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.getElementById("result");

const removeSpicialChars = (string) => {
  const spicialChars = [".", ",", "-", "_", " "];
  for (const char of spicialChars) {
    string = string.replaceAll(char, "");
  }
  return string;
};

const switchOpenCloseChars = (string) => {
  let newString = string;
  const openCloseChars = [
    { open: "{", close: "}" },
    { open: "(", close: ")" },
    { open: "[", close: "]" },
    { open: "\\", close: "/" },
  ];
  for (const char of openCloseChars) {
    string = newString;
    newString = "";
    for (let i = 0; i < string.length; i++) {
      if (string.at(i) === char.open) newString += char.close;
      else if (string.at(i) === char.close) newString += char.open;
      else newString += string.at(i);
    }
  }
  return newString;
};

function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string.at(i);
  }
  return newString;
}

const checkPalindrome = () => {
  if (textInput.value) {
    const cleanValue = removeSpicialChars(textInput.value).toLowerCase();
    const cleanSwitchValue = switchOpenCloseChars(cleanValue);
    console.log(cleanValue);
    console.log(reverseString(cleanSwitchValue));
    if (cleanValue === reverseString(cleanSwitchValue))
      result.textContent = `${textInput.value} is a palindrome`;
    else {
      result.textContent = `${textInput.value} is not a palindrome`;
      result.classList.add("false");
    }
    result.classList.add("show");
  } else alert("Please input a value");
};

textInput.addEventListener("input", () =>
  result.classList.remove("show", "false")
);
checkBtn.addEventListener("click", checkPalindrome);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPalindrome();
});
