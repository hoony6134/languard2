const wordMap = {
  "PROFANITY_EXAMPLE": "**",
  "NSFW_EXAMPLE": "[성적인 단어 감지]",
  "RACISM_EXAMPLE": "[인종차별적 단어 감지]",
  "PARENTS_ABUSE_EXAMPLE": "[패드립 감지]"
};

function checkMessage(message) {
  const words = message.split(" ");
  let sanitizedMessage = "";
  let hasWarning = false;
  let isRacism = false;
  let isParentsAbuse = false;
  let isNSFW = false;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let sanitizedWord = word;
    if (word in wordMap) {
      sanitizedWord = wordMap[word];
      hasWarning = true;
      // set isRacism to true if the word is racism
      isRacism = sanitizedWord === "[인종차별적 단어 감지]";
      isParentsAbuse = sanitizedWord === "[패드립 감지]";
      isNSFW = sanitizedWord === "[성적인 단어 감지]";
    }
    sanitizedMessage += sanitizedWord;
    if (i !== words.length - 1) {
      sanitizedMessage += " ";
    }
  }
  return [sanitizedMessage, hasWarning, isRacism, isParentsAbuse, isNSFW];
}

function displayWarning(badWord) {
  // Create a tooltip container element
  const tooltipContainer = document.createElement("div");

  // Set the tooltip's position and style
  tooltipContainer.style.position = "fixed";
  tooltipContainer.style.top = "16px";
  tooltipContainer.style.left = "16px";
  tooltipContainer.style.width = window.innerWidth - 64 + "px";
  tooltipContainer.style.padding = "16px";
  tooltipContainer.style.backgroundColor = "#f44336";
  tooltipContainer.style.color = "white";
  tooltipContainer.style.fontSize = "14px";
  tooltipContainer.style.borderRadius = "8px";
  tooltipContainer.style.border = "2px solid red";
  tooltipContainer.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
  tooltipContainer.style.zIndex = "9999";
  tooltipContainer.style.opacity = "0.85";
  tooltipContainer.style.transition = "opacity 0.3s";

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;"; // Unicode "x" character
  closeButton.style.position = "absolute";
  closeButton.style.top = "8px";
  closeButton.style.right = "8px";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontSize = "20px";
  closeButton.style.color = "white";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(tooltipContainer);
  });

  tooltipContainer.innerHTML = `
    <div style="padding: 0;">
      <div style="font-weight: bold; margin-bottom: 4px;">⚠️ 경고</div>
      <div style="margin-bottom: 4px;">
        입력한 텍스트에 부적절한 단어(<span style="background-color: orange; font-weight: bold;">${badWord}</span>)가 포함되어 있습니다. 수정해 주세요.
      </div>
    </div>
  `;

  // Append the tooltip container to the body
  document.body.appendChild(tooltipContainer);
  tooltipContainer.appendChild(closeButton);

  // Remove the tooltip after a certain duration (e.g., 5 seconds)
  chrome.storage.sync.get(["closeTime"], function (data) {
    const closeTime = data.closeTime * 1000 || 5000; // Default to 5 seconds

    // Remove the tooltip after the specified duration
    setTimeout(() => {
      document.body.removeChild(tooltipContainer);
    }, closeTime);
  });
}

function displayNSFWWarning(badWord) {
  // Create a tooltip container element
  const tooltipContainer = document.createElement("div");

  // Set the tooltip's position and style
  tooltipContainer.style.position = "fixed";
  tooltipContainer.style.top = "16px";
  tooltipContainer.style.left = "16px";
  tooltipContainer.style.width = window.innerWidth - 64 + "px";
  tooltipContainer.style.padding = "16px";
  tooltipContainer.style.backgroundColor = "#f44336";
  tooltipContainer.style.color = "white";
  tooltipContainer.style.fontSize = "14px";
  tooltipContainer.style.borderRadius = "8px";
  tooltipContainer.style.border = "2px solid red";
  tooltipContainer.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
  tooltipContainer.style.zIndex = "9999";
  tooltipContainer.style.opacity = "0.85";
  tooltipContainer.style.transition = "opacity 0.3s";

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;"; // Unicode "x" character
  closeButton.style.position = "absolute";
  closeButton.style.top = "8px";
  closeButton.style.right = "8px";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontSize = "20px";
  closeButton.style.color = "white";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(tooltipContainer);
  });
  tooltipContainer.innerHTML = `
    <div style="padding: 0;">
      <div style="font-weight: bold; margin-bottom: 4px;">⚠️ 성적인 단어/NSFW 감지</div>
      <div style="margin-bottom: 4px;">
        입력한 텍스트에 성적인 단어/NSFW(<span style="background-color: orange; font-weight: bold;">${badWord}</span>)가 포함되어 있습니다. 수정해 주세요.
      </div>
    </div>
  `;

  // Append the tooltip container to the body
  document.body.appendChild(tooltipContainer);
  tooltipContainer.appendChild(closeButton);

  // Remove the tooltip after a certain duration (e.g., 5 seconds)
  chrome.storage.sync.get(["closeTime"], function (data) {
    const closeTime = data.closeTime * 1000 || 5000; // Default to 5 seconds

    // Remove the tooltip after the specified duration
    setTimeout(() => {
      document.body.removeChild(tooltipContainer);
    }, closeTime);
  });
}

function displayRacismWarning(badWord) {
  // Create a tooltip container element
  const tooltipContainer = document.createElement("div");

  // Set the tooltip's position and style
  tooltipContainer.style.position = "fixed";
  tooltipContainer.style.top = "16px";
  tooltipContainer.style.left = "16px";
  tooltipContainer.style.width = window.innerWidth - 64 + "px";
  tooltipContainer.style.padding = "16px";
  tooltipContainer.style.backgroundColor = "#f44336";
  tooltipContainer.style.color = "white";
  tooltipContainer.style.fontSize = "14px";
  tooltipContainer.style.borderRadius = "8px";
  tooltipContainer.style.border = "2px solid white";
  tooltipContainer.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
  tooltipContainer.style.zIndex = "9999";
  tooltipContainer.style.opacity = "0.85";
  tooltipContainer.style.transition = "opacity 0.3s";

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;"; // Unicode "x" character
  closeButton.style.position = "absolute";
  closeButton.style.top = "8px";
  closeButton.style.right = "8px";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontSize = "20px";
  closeButton.style.color = "white";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(tooltipContainer);
  });

  tooltipContainer.innerHTML = `
    <div style="padding: 0;">
      <div style="font-weight: bold; margin-bottom: 4px;">⛔️ 인종차별 경고</div>
      <div style="margin-bottom: 4px;">
        입력한 텍스트에 인종 차별적인 단어(<span style="background-color: orange; font-weight: bold;">${badWord}</span>)가 포함되어 있습니다. 수정해 주세요.
      </div>
    </div>
  `;

  // Append the tooltip container to the body
  document.body.appendChild(tooltipContainer);
  tooltipContainer.appendChild(closeButton);

  // Remove the tooltip after a certain duration (e.g., 5 seconds)
  chrome.storage.sync.get(["closeTime"], function (data) {
    const closeTime = data.closeTime * 1000 || 5000; // Default to 5 seconds

    // Remove the tooltip after the specified duration
    setTimeout(() => {
      document.body.removeChild(tooltipContainer);
    }, closeTime);
  });
}

function displayParentsAbuseWarning(badWord) {
  // Create a tooltip container element
  const tooltipContainer = document.createElement("div");

  // Set the tooltip's position and style
  tooltipContainer.style.position = "fixed";
  tooltipContainer.style.top = "16px";
  tooltipContainer.style.left = "16px";
  tooltipContainer.style.width = window.innerWidth - 64 + "px";
  tooltipContainer.style.padding = "16px";
  tooltipContainer.style.backgroundColor = "#f44336";
  tooltipContainer.style.color = "white";
  tooltipContainer.style.fontSize = "14px";
  tooltipContainer.style.borderRadius = "8px";
  tooltipContainer.style.border = "2px solid white";
  tooltipContainer.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
  tooltipContainer.style.zIndex = "9999";
  tooltipContainer.style.opacity = "0.85";
  tooltipContainer.style.transition = "opacity 0.3s";

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;"; // Unicode "x" character
  closeButton.style.position = "absolute";
  closeButton.style.top = "8px";
  closeButton.style.right = "8px";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontSize = "20px";
  closeButton.style.color = "white";

  closeButton.addEventListener("click", () => {
    document.body.removeChild(tooltipContainer);
  });

  tooltipContainer.innerHTML = `
    <div style="padding: 0;">
      <div style="font-weight: bold; margin-bottom: 4px;">⛔️ 패드립 경고</div>
      <div style="margin-bottom: 4px;">
        입력한 텍스트에 부모님에 대한 욕설/패드립(<span style="background-color: orange; font-weight: bold;">${badWord}</span>)이 포함되어 있습니다. 수정해 주세요.
      </div>
    </div>
  `;

  // Append the tooltip container to the body
  document.body.appendChild(tooltipContainer);
  tooltipContainer.appendChild(closeButton);

  // Remove the tooltip after a certain duration (e.g., 5 seconds)
  chrome.storage.sync.get(["closeTime"], function (data) {
    const closeTime = data.closeTime * 1000 || 5000; // Default to 5 seconds

    // Remove the tooltip after the specified duration
    setTimeout(() => {
      document.body.removeChild(tooltipContainer);
    }, closeTime);
  });
}

function removeWarning() {
  const warningContainer = document.querySelector("#languard-warning-container");
  if (warningContainer) {
    document.body.removeChild(warningContainer);
  }
}

function sanitizeMessage(inputElement) {
  const message = inputElement.value;
  const [sanitizedMessage, hasWarning, isRacism, isParentsAbuse, isNSFW] = checkMessage(message);
  chrome.storage.sync.get(["nsfwEnabled"], function (data) {
    const isNsfwEnabled = data.nsfwEnabled !== false; // Default to true
    if (isNsfwEnabled && isNSFW) {
      sanitizedMessage = message;
    }
    inputElement.value = sanitizedMessage;
  });
  removeWarning();
  if (isRacism) {
    const badWord = message.match(new RegExp(`(${Object.keys(wordMap).join('|')})`, 'i'))[0];
    inputElement.style.border = "2px solid red";
    displayRacismWarning(badWord);
  } else if (isParentsAbuse) {
    const badWord = message.match(new RegExp(`(${Object.keys(wordMap).join('|')})`, 'i'))[0];
    inputElement.style.border = "2px solid red";
    displayParentsAbuseWarning(badWord);
  } else if (isNSFW) {
    chrome.storage.sync.get(["nsfwEnabled"], function (data) {
      const isNsfwEnabled = data.nsfwEnabled !== false; // Default to true
      if (!isNsfwEnabled) {
        const badWord = message.match(new RegExp(`(${Object.keys(wordMap).join('|')})`, 'i'))[0];
        inputElement.style.border = "2px solid orange";
        displayNSFWWarning(badWord);
      }
    });
  } else if (hasWarning) {
    const badWord = message.match(new RegExp(`(${Object.keys(wordMap).join('|')})`, 'i'))[0];
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
      chrome.storage.sync.get(["filteringEnabled"], function (data) {
        const filteringEnabled = data.filteringEnabled !== false; // Default to true
        if (filteringEnabled) {
          sanitizeMessage(inputElement);
        }
      });
    });
  }
}


window.addEventListener("load", () => {
  observeInput();
});
