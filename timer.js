function Countdown(timer) {
  //   const timer = [0, 0, 0, 5];
  const countdown_comtainer = document.querySelector(
    ".raft__countdown__container"
  );
  const ts = timer[0] * 86400 + timer[1] * 3600 + timer[2] * 60 + 28;

  setInterval(() => {
    if (timer[3] != 0) {
      timer[3] = timer[3] - 1;
    }
    if (timer[3] == 0) {
      if (timer[2] != 0) {
        timer[2] = timer[2] - 1;
        timer[3] = 59;
      }
    }
    if (timer[2] == 0) {
      if (timer[1] != 0) {
        timer[2] = 59;
        timer[1] = timer[1] - 1;
      }
    }
    if (timer[1] == 0) {
      if (timer[0] != 0) {
        timer[1] = 23;
        timer[0] = timer[0] - 1;
      }
    }
    if (timer[0] == 0) {
      timer[0] = 0;
    }
    const countdown = timerHtml(timer);
    countdown_comtainer.innerHTML = countdown;
    // console.log(timer);
  }, 1000);
}
const _day = 32;
const date = new Date();
const date_string = date.toDateString();
const time = date.toTimeString();
const current_day = Number(date_string.substring(8, 10));
const current_hr = Number(time.substring(0, 2));
const current_min = Number(time.substring(3, 5));
const current_sec = date.getSeconds();

const day = _day - current_day;
const hr = 24 - current_hr;
const min = 60 - current_min;
const sec = 60 - current_sec;
const timer = [day, hr, min, sec];

// console.log(timer);

document.addEventListener("DOMContentLoaded", () => {
  Countdown(timer);
});

function timerHtml(timer) {
  return `

                <div class="raft__countdown__containerCell">
                  <div class="raft__countdown__containerCellValue"
                    style="font-style: normal; font-size: 28px; line-height: 34px; color: var(--textSecondary); font-weight: 500; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                    ${timer[0]}
                    </div>
                  <div
                    style="font-style: normal; font-size: 12px; line-height: 16.8px; letter-spacing: 0.03em; color: var(--textSecondary); font-weight: 600; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                    DAYS</div>
                </div>
                <div class="raft__countdown__containerCellSeparator"
                  style="font-style: normal; font-size: 28px; line-height: 34px; color: var(--textSecondary); font-weight: 500; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                  :</div>
                <div class="raft__countdown__containerCell">
                  <div class="raft__countdown__containerCellValue"
                    style="font-style: normal; font-size: 28px; line-height: 34px; color: var(--textSecondary); font-weight: 500; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                    ${timer[1] < 10 ? `0${timer[1]}` : timer[1]}</div>
                  <div
                    style="font-style: normal; font-size: 12px; line-height: 16.8px; letter-spacing: 0.03em; color: var(--textSecondary); font-weight: 600; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                    HRS</div>
                </div>
                <div class="raft__countdown__containerCellSeparator"
                  style="font-style: normal; font-size: 28px; line-height: 34px; color: var(--textSecondary); font-weight: 500; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                  :</div>
                <div class="raft__countdown__containerCell">
                  <div class="raft__countdown__containerCellValue"
                    style="font-style: normal; font-size: 28px; line-height: 34px; color: var(--textSecondary); font-weight: 500; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                    ${timer[2]}</div>
                  <div
                    style="font-style: normal; font-size: 12px; line-height: 16.8px; letter-spacing: 0.03em; color: var(--textSecondary); font-weight: 600; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                    MIN</div>
                </div>
                <div class="raft__countdown__containerCellSeparator"
                  style="font-style: normal; font-size: 28px; line-height: 34px; color: var(--textSecondary); font-weight: 500; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                  :</div>
                <div class="raft__countdown__containerCell">
                  <div class="raft__countdown__containerCellValue"
                    style="font-style: normal; font-size: 28px; line-height: 34px; color: var(--textSecondary); font-weight: 500; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                    ${timer[3] < 10 ? `0${timer[3]}` : timer[3]}</div>
                  <div
                    style="font-style: normal; font-size: 12px; line-height: 16.8px; letter-spacing: 0.03em; color: var(--textSecondary); font-weight: 600; font-family: &quot;Work Sans&quot;, sans-serif; opacity: 1;">
                    SEC</div>
                </div>

  
  `;
}
