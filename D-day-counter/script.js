const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const savedDate = localStorage.getItem("saved-date");

const intervalIdArr = [];

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear  + '_' + inputMonth + '_' + inputDate
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};

const counterMaker = function (data) {
  if (data !== savedDate) {
    localStorage.setItem("saved-date", data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  if (remaining <= 0) {
    // 만약, remaining이 0이라면, 타이머가 종료 되었습니다. 출력
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료 되었습니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    //만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentArr = ["days", "hours", "min", "sec"];
  const timeKeys = Object.keys(remainingObj);

  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }
};

const starter = function (targetDateInput) {
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }
  container.style.display = "flex";
  messageContainer.style.display = "none";
  setClearInterval();
  counterMaker(targetDateInput);
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);
  intervalIdArr.push(intervalId);
};

const setClearInterval = function () {
  localStorage.removeItem("saved-date");
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval[intervalIdArr[i]];
  }
};

const resetTimer = function () {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>";
  messageContainer.style.display = "flex";
  setClearInterval();
};

if (savedDate) {
  starter(savedDate);
} else {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>";
}
//   const remainingDate = Math.floor(remaining / 3600 / 24);
//   const remainingHours = Math.floor(remaining / 3600) % 24;
//   const remainingMin = Math.floor(remaining / 60) % 60;
//   const remainingSec = Math.floor(remaining) % 60;

//   const days = document.getElementById("days");
//   const hours = document.getElementById("hours");
//   const min = document.getElementById("min");
//   const sec = document.getElementById("sec");

//   for (let i = 0; i < timeKeys.length; i = i + 1) {
//     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
//   }

//   let i = 0;
//   while (i < 100) {
//     i++;
//     // setTimeout(() => {
//     //   counterMaker();
//     // }, 1000 * 1);
//     setTimeout(counterMaker, 1000 * i);
//   }
//   for (let i = 0; i < 100; i++) {
//     setTimeout(counterMaker, 1000 * i);
//   }

//   const documentObj = {
//     days: document.getElementById("days"),
//     hours: document.getElementById("hours"),
//     min: document.getElementById("min"),
//     sec: document.getElementById("sec"),
//   };

//   let i = 0;
//   for (let key in documentObj) {
//     documentObj[key].textContent = remainingObj[timeKeys[i]];
//     // i = i + 1
//     i++;
//   }

//   documentObj["days"].textContent = remainingDate["remainingDate"];
//   documentObj["hours"].textContent = remainingHours["remainingHOurs"];
//   documentObj["min"].textContent = remainingMin["remainingMin"];
//   documentObj["sec"].textContent = remainingSec["remainingSec"];
