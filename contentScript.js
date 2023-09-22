const wordMap = {
  "PROFANITY_EXAMPLE": "**",
  "NSFW_EXAMPLE": "[성적인 단어 감지]",
  "RACISM_EXAMPLE": "[인종차별적 단어 감지]",
  "PARENTS_ABUSE_EXAMPLE": "[패드립 감지]",
  "ㅅㅂ": "**",
  "shit": "****",
  "fuck": "****",
  "nigger": "[인종차별적 단어 감지]",
  "어쩔티비": "어쩌라고",
  "damn": "****",
  "cunt": "****",
  "nigga": "[인종차별적 단어 감지]",
  "mofo": "[패드립 감지]",
  "motherfucker": "[패드립 감지]",
  "느금마": "[패드립 감지]",
  "니애미": "[패드립 감지]",
  "니에미": "[패드립 감지]",
  "sex": "[성적인 단어 감지]",
  "ㄴㄷㅌ": "[성적인 단어 감지]",
  "bitch": "*****",
  "asshole": "*******",
  "chink": "[인종차별적 단어 감지]",
  "ass": "***",
  "pussy": "[성적인 단어 감지]",
  "porn": "[성적인 단어 감지]",
  "pornhub": "[성적인 단어 감지]",
  "weed": "****",
  "dick": "[성적인 단어 감지]",
  "penis": "[성적인 단어 감지]",
  "420": "***",
  "니거": "[인종차별적 단어 감지]",
  "1488": "[인종차별적 단어 감지]",
  "hell": "****",
  "kike": "[인종차별적 단어 감지]",
  "beaner": "[인종차별적 단어 감지]",
  "병신": "**",
  "애미": "[패드립 감지]",
  "씨발": "**",
  "시발": "**",
  "씨벌": "**",
  "꺼져": "**",
  "지랄": "**",
  "뒤져": "**",
  "섹스": "[성적인 단어 감지]",
  "새끼": "**",
  "쉣": "s***",
  "좆": "*",
  "엠뒤련": "[패드립 감지]",
  "꺼져": "**",
  "뒤져": "**",
  "병신": "**",
  "걸래새끼": "****",
  "안닥쳐": "***",
  "찐따야": "***",
  "병신년": "***",
  "니엄마": "[패드립 감지]",
  "찐따년": "***",
  "지랄": "**",
  "미친년": "***",
  "또라이년": "****",
  "개새끼": "***",
  "좆같다": "***",
  "년": "*",
  "놈": "*",
  "미친": "**",
  "병신": "**",
  "새끼": "**",
  "개년": "**",
  "등신 ": "***",
  "썅년 ": "***",
  "싸가지없는년": "******",
  "뒤져라": "***",
  "아가리": "***",
  "씨발년": "***",
  "씨발새끼": "****",
  "개씨발년 ": "*****",
  "거지년": "***",
  "썅놈": "**",
  "좆같은년": "****",
  "좆까": "**",
  "창녀": "**",
  "거지새끼": "****",
  "인간말종새끼": "******",
  "개지랄": "***",
  "염병": "**",
  "염병떠네": "****",
  "등신": "**",
  "등신새끼": "****",
  "엄마뒤진년": "[패드립 감지]",
  "개씨발": "***",
  "야발": "**",
  "야발년": "***",
  "보지년": "[성적인 단어 감지]",
  "보지새끼": "[성적인 단어 감지]",
  "섹스년": "[성적인 단어 감지]",
  "자지년": "[성적인 단어 감지]",
  "자지새끼": "[성적인 단어 감지]",
  "고자년": "[성적인 단어 감지]",
  "고자새끼": "[성적인 단어 감지]",
  "보지": "[성적인 단어 감지]",
  "자지": "[성적인 단어 감지]",
  "개시발새끼": "*****",
  "개씨발새끼": "*****",
  "개씨브랄년": "*****",
  "개씨브랄놈": "*****",
  "개씹팔새끼": "*****",
  "개씹할새끼": "*****",
  "미친개새끼": "*****",
  "종간나새끼": "*****",
  "ㅁㅣ친년": "****",
  "ㅁㅣ친놈": "****",
  "ㅇㅐㅁㅣ": "****",
  "ㅇㅐㅂㅣ": "****",
  "개시발년": "****",
  "개시발놈": "****",
  "개씨발년": "****",
  "개씨발놈": "****",
  "개씹팔년": "****",
  "개씹팔놈": "****",
  "개씹할년": "****",
  "개씹할놈": "****",
  "미친새끼": "****",
  "미친세리": "****",
  "미친쉐이": "****",
  "시발로마": "****",
  "신발샛길": "****",
  "씨발로마": "****",
  "씨발새끼": "****",
  "씨부럴놈": "****",
  "씨팔로마": "****",
  "씹할로마": "****",
  "좃방망이": "****",
  "좆대가리": "****",
  "지랄옘병": "****",
  "ㄱㅅㄲ": "***",
  "개새꺄": "***",
  "개새끼": "***",
  "개새퀴": "***",
  "개소리": "***",
  "개수작": "***",
  "개쉐키": "***",
  "개쌍년": "***",
  "개쌍놈": "***",
  "개썅년": "***",
  "개썅놈": "***",
  "개자식": "***",
  "개잡년": "***",
  "개잡놈": "***",
  "도라이": "***",
  "돌아이": "***",
  "똥구녕": "***",
  "똥꾸녕": "***",
  "띠부랄": "***",
  "미췬놈": "***",
  "미친냔": "***",
  "미친넘": "***",
  "미친년": "***",
  "미친놈": "***",
  "미친뇬": "***",
  "미친쉑": "***",
  "상병신": "***",
  "시부랄": "***",
  "쌍노무": "***",
  "써글넘": "***",
  "써글뇬": "***",
  "썩을냔": "***",
  "썩을넘": "***",
  "썩을년": "***",
  "썩을놈": "***",
  "쓉장생": "***",
  "씨발년": "***",
  "씨발놈": "***",
  "씨발롬": "***",
  "씨부랄": "***",
  "씨부럴": "***",
  "씹새끼": "***",
  "씹장생": "***",
  "아가리": "***",
  "아갈이": "***",
  "아구통": "***",
  "양아치": "***",
  "염병할": "***",
  "엿먹어": "***",
  "육시럴": "***",
  "젓탱이": "***",
  "족가튼": "***",
  "족같네": "***",
  "존마니": "***",
  "존만이": "***",
  "개냔": "**",
  "개넘": "**",
  "개년": "**",
  "개놈": "**",
  "개뇬": "**",
  "개새": "**",
  "개색": "**",
  "게년": "**",
  "게놈": "**",
  "등신": "**",
  "띱새": "**",
  "미췬": "**",
  "미칀": "**",
  "상년": "**",
  "상놈": "**",
  "시발": "**",
  "시팔": "**",
  "쌍년": "**",
  "쌍놈": "**",
  "쌍뇬": "**",
  "썅년": "**",
  "썅놈": "**",
  "쒸파": "**",
  "씨바": "**",
  "씨발": "**",
  "씨빠": "**",
  "씨팔": "**",
  "씹냔": "**",
  "씹년": "**",
  "씹뇬": "**",
  "씹물": "**",
  "씹새": "**",
  "씹질": "**",
  "씹창": "**",
  "씹팔": "**",
  "씹할": "**",
  "염병": "**",
  "엿먹": "**",
  "옘병": "**",
  "육갑": "**",
  "저까": "**",
  "전나": "**",
  "젓밥": "**",
  "조까": "**",
  "조빱": "**",
  "존나": "**",
  "존만": "**",
  "좃국": "**",
  "좃까": "**",
  "좃나": "**",
  "좃망": "**",
  "좃물": "**",
  "좃밥": "**",
  "좆국": "**",
  "좆까": "**",
  "좆나": "**",
  "좆도": "**",
  "좆망": "**",
  "좆물": "**",
  "좆밥": "**",
  "즤랄": "**",
  "지랄": "**",
  "지롤": "**",
  "쓉": "*",
  "니애미": "***",
  "탈룰라": "***",
  "니엠보지": "****",
  "마더리스": "****",
  "애미창년새끼": "******",
  "씹창년": "***",
  "개씹노숙자년": "******",
  "후장": "[성적인 단어 감지]",
  "게이년": "[성적인 단어 감지]",
  "개봉지련": "[성적인 단어 감지]",
  "개봉지": "[성적인 단어 감지]",
  "개보지련": "[성적인 단어 감지]",
  "개보지년": "[성적인 단어 감지]",
  "개보지새끼": "[성적인 단어 감지]",
  "걸래보지": "[성적인 단어 감지]",
  "걸래자지": "[성적인 단어 감지]",
  "니엄마걸래": "[성적인 단어 감지]",
  "니기미": "[성적인 단어 감지]",
  "니아빠걸래": "[성적인 단어 감지]",
  "니애비걸래": "[성적인 단어 감지]",
  "클리토리스 강간": "[성적인 단어 감지]",
  "강간": "[성적인 단어 감지]",
  "따먹어": "[성적인 단어 감지]",
  "뒷치기": "[성적인 단어 감지]",
  "따먹기": "[성적인 단어 감지]",
  "보지쑤신다": "[성적인 단어 감지]",
  "흑자지": "[성적인 단어 감지]",
  "대왕자지": "[성적인 단어 감지]",
  "흑보지": "[성적인 단어 감지]",
  "흑두년": "[성적인 단어 감지]",
  "흑두련": "[성적인 단어 감지]",
  "핑두련": "[성적인 단어 감지]",
  "핑두년": "[성적인 단어 감지]",
  "좆물": "[성적인 단어 감지]",
  "보짓물": "[성적인 단어 감지]",
  "걸래보짓물": "[성적인 단어 감지]",
  "니엄마걸래년": "[성적인 단어 감지]",
  "니애미걸래련": "[성적인 단어 감지]",
  "니동생걸래": "[성적인 단어 감지]",
  "니동생보지": "[성적인 단어 감지]",
  "핑두": "[성적인 단어 감지]",
  "흑두": "[성적인 단어 감지]",
  "핑보지": "[성적인 단어 감지]",
  "클리비빈다": "[성적인 단어 감지]",
  "자지잘라버린다": "[성적인 단어 감지]",
  "섹스보지년": "[성적인 단어 감지]",
  "섹스걸래년": "[성적인 단어 감지]",
  "걸래보지자지년": "[성적인 단어 감지]",
  "귀두없는년": "[성적인 단어 감지]",
  "귀두자른다": "[성적인 단어 감지]",
  "귀두비빈다": "[성적인 단어 감지]",
  "정액받이": "[성적인 단어 감지]",
  "정액먹는년": "[성적인 단어 감지]",
  "정액싸는년": "[성적인 단어 감지]",
  "쿠퍼액없는새끼": "[성적인 단어 감지]",
  "질질싸는년": "[성적인 단어 감지]",
  "질질흘린다": "[성적인 단어 감지]",
  "쿠퍼액없는새끼": "[성적인 단어 감지]",
  "니거자지": "[성적인 단어 감지]",
  "니꼬3": "[성적인 단어 감지]",
  "박아버린다": "[성적인 단어 감지]",
  "박는다": "[성적인 단어 감지]",
  "쑤신다": "[성적인 단어 감지]",
  "쑤셔버린다": "[성적인 단어 감지]",
  "니자지쑤신다": "[성적인 단어 감지]",
  "니보지쑤신다": "[성적인 단어 감지]",
  "얼굴에싸버린다": "[성적인 단어 감지]",
  "얼싸한다": "[성적인 단어 감지]",
  "배싸한다": "[성적인 단어 감지]",
  "입싸한다": "[성적인 단어 감지]",
  "페티시": "[성적인 단어 감지]",
  "스타킹찢어버린다": "[성적인 단어 감지]",
  "대딸친다": "[성적인 단어 감지]",
  "조루년": "[성적인 단어 감지]",
  "지루년": "[성적인 단어 감지]",
  "3초컷년": "[성적인 단어 감지]",
  "등싸한다": "[성적인 단어 감지]",
  "조루": "[성적인 단어 감지]",
  "패티시": "[성적인 단어 감지]",
  "패티쉬": "[성적인 단어 감지]",
  "페티쉬": "[성적인 단어 감지]",
  "걸레": "[성적인 단어 감지]",
  "니엄마개새끼": "[패드립 감지]",
  "니엄마씹창년": "[패드립 감지]",
  "니엄마씨발련": "[패드립 감지]",
  "니엄마씨발년": "[패드립 감지]",
  "니애미개새끼": "[패드립 감지]",
  "니애미씹창년": "[패드립 감지]",
  "니애미씨발련": "[패드립 감지]",
  "니애미씨발년": "[패드립 감지]",
  "니애비씨발놈": "[패드립 감지]",
  "니애비개새끼": "[패드립 감지]",
  "니애미대가리구멍난년": "[패드립 감지]",
  "니애비대가리구멍난새끼": "[패드립 감지]",
  "니애미미친년": "[패드립 감지]",
  "니애미미친놈": "[패드립 감지]",
  "애미잃은새끼": "[패드립 감지]",
  "엠디련": "[패드립 감지]",
  "엄마없는놈": "[패드립 감지]",
  "니애미보지": "[패드립 감지]",
  "니애미개또라이년": "[패드립 감지]",
  "니애미병신년": "[패드립 감지]",
  "니애미병신": "[패드립 감지]",
  "니애미개년": "[패드립 감지]",
  "니애미싸가지없는년": "[패드립 감지]",
  "니애미걍뒤져라": "[패드립 감지]",
  "애미없는년": "[패드립 감지]",
  "애미없는새끼": "[패드립 감지]",
  "부모잃은새끼": "[패드립 감지]",
  "좆까니엄마": "[패드립 감지]",
  "응니엄마": "[패드립 감지]",
  "응니아빠": "[패드립 감지]",
  "응니엄마뒤졌어": "[패드립 감지]",
  "응니아빠뒤졌어": "[패드립 감지]",
  "응니엄마엿먹어": "[패드립 감지]",
  "응니아빠엿먹어": "[패드립 감지]",
  "응니애미씹년": "[패드립 감지]",
  "응니애비씹새끼": "[패드립 감지]"
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
        <div style="font-size: 12px; font-weight: semi-bold; margin-top: 4px;">대한민국 『형법』 제 311조에 따르면, 공연히 사람을 모욕한 자는 1년 이하의 징역이나 금고 또는 200만 원 이하의 벌금에 처해집니다. </div>
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
        입력한 텍스트에 성적인 단어(<span style="background-color: orange; font-weight: bold;">${badWord}</span>)가 포함되어 있습니다. 수정해 주세요.<br>
        <div style="font-size: 12px; font-weight: semi-bold; margin-top: 4px;">대한민국 『성폭력범죄의 처벌 등에 관한 특례법』 제 13조에 따르면, 통신매체를 통한 성적 수치심이나 혐오감을 일으키는 글을 상대방에게 도달하게 한 사람은 2년 이하의 징역 또는 500만원 이하의 벌금형에 처해집니다.</div>
      </div>
    </div>
  `;

  // Append the tooltip container to the body
  document.body.appendChild(tooltipContainer);
  tooltipContainer.appendChild(closeButton);

  // Remove the tooltip after a certain duration (e.g., 5 seconds)
  chrome.storage.sync.get(["closeTime"], function (data) {
    const closeTime = data.closeTime * 1000 || 10000; // Default to 10 seconds

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
        <div style="font-size: 12px; font-weight: semi-bold; margin-top: 4px;">UN 『모든 형태의 인종차별 철폐에 관한 국제협약(International Convention on the Elimination of All Forms of Racial Discrimination)』을 비롯한 각종 국제 협약 및 미국 차별금지법 등에 의해 인종차별적인 발언은 부적절하며, 경중에 따라 처벌될 수 있습니다.</div>
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
        inputElement.style.border = "2px dashed red";
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
