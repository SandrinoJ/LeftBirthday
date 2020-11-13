const countdown = document.querySelector(".countdown");
const launchdate = new Date('Jan 9, 2021 00:00:01').getTime();

const interval = setInterval(() => {
    console.log('tick-tack');

    //today Date
    const now = new Date().getTime();
    console.log(now);

    const timeLeft = launchdate - now;

    const days = Math.floor(timeLeft/(1000*60*60*24));
    const hours = Math.floor(timeLeft % (1000*60*60*60) / (100*60*60));
    const minutes = Math.floor(timeLeft % (1000*60*60) / (1000*60));
    const seconds = Math.floor(timeLeft % (1000*60) / (1000));
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

        countdown.innerHTML = `
        <div><span> ${days} päeva</span></div>
        <div><span> ${hours} tundi</span></div>
        <div><span> ${minutes} minutit</span></div>
        <div><span> ${seconds} sekondit</span></div>
        `;

}, 1000);