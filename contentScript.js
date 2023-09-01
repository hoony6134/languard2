const wordMap = {
  "ㅅㅂ": "**",
  "shit": "s***",
  "fuck": "f***",
  "nigger": "[Don't be a racist!]",
  "어쩔티비": "어쩌라고",
  "damn": "d***",
  "cunt": "c***",
  "motherfucker": "******",
  "sex": "s**",
  "bitch": "b****",
  "asshole": "a******",
  "chink": "[Don't be a racist!]",
  "ass": "a**",
  "pussy": "p****",
  "porn": "p***",
  "pornhub": "***",
  "weed": "w***",
  "dick": "d***",
  "penis": "p****",
  "420": "***",
  "1488": "[Don't be a racist!]",
  "hell": "h***",
  "kike": "[Don't be a racist!]",
  "beaner": "[Don't be a racist!]",
  "병신": "**",
  "애미": "[패드립]",
  "씨발": "**",
  "시발": "**",
  "씨벌": "**",
  "꺼져": "**",
  "지랄": "**",
  "뒤져": "**",
  "섹스": "**",
  "새끼": "**",
  "쉣": "s***",
  "좆": "*"
};

function checkMessage(message) {
  const words = message.split(" ");
  let sanitizedMessage = "";
  let hasWarning = false;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let sanitizedWord = word;
    if (word in wordMap) {
      sanitizedWord = wordMap[word];
      hasWarning = true;
    }
    sanitizedMessage += sanitizedWord;
    if (i !== words.length - 1) {
      sanitizedMessage += " ";
    }
  }
  return [sanitizedMessage, hasWarning];
}

function displayWarning(badWord) {
  const warningContainer = document.createElement("div");
  warningContainer.style.position = "fixed";
  warningContainer.style.top = "0";
  warningContainer.style.left = "0";
  warningContainer.style.width = "100%";
  warningContainer.style.backgroundColor = "#f44336";
  warningContainer.style.color = "white";
  warningContainer.style.fontSize = "14px";
  warningContainer.style.padding = "8px";
  warningContainer.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
  warningContainer.style.zIndex = "9999"; // add this line
  warningContainer.innerHTML = `경고: 입력한 텍스트에 부적절한 단어(<span style="background-color: orange; font-weight: bold;">${badWord}</span>)가 포함되어 있습니다. 수정해 주세요.`;
  warningContainer.id = "koreanizer-warning-container";
  document.body.appendChild(warningContainer);
}


function removeWarning() {
  const warningContainer = document.querySelector("#koreanizer-warning-container");
  if (warningContainer) {
    document.body.removeChild(warningContainer);
  }
}

function sanitizeMessage(inputElement) {
  const message = inputElement.value;
  const [sanitizedMessage, hasWarning] = checkMessage(message);
  inputElement.value = sanitizedMessage;
  removeWarning();
  if (hasWarning) {
    const badWord = message.match(new RegExp(`(${Object.keys(wordMap).join('|')})`, 'i'))[1];
    inputElement.style.border = "2px solid orange";
    displayWarning(badWord);
  } else {
    inputElement.style.border = "none";
  }
}

function observeInput() {
  const inputElements = document.querySelectorAll("input[type='text'], input[type='search'], input[type='email'], input[type='password'], textarea");
  for (const inputElement of inputElements) {
    inputElement.addEventListener("input", () => {
      sanitizeMessage(inputElement);
    });
  }
}

window.addEventListener("load", () => {
  observeInput();
});
