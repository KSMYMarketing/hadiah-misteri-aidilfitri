const prizes = [
    "🎁 Free Coffee",
    "🎉 $5 Gift Card",
    "🎟️ Discount Coupon",
    "🎊 Mystery Prize",
    "😢 Try Again",
    "🎈 Extra Spin"
];

let spinning = false;

function startSpinning() {
    if (spinning) return; // Prevent multiple clicks
    spinning = true;

    let prizeText = document.getElementById("prize-text");
    let totalTime = 5000; // 5 seconds spinning
    let intervalTime = 100; // Speed of spin
    let elapsedTime = 0;

    let spinInterval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * prizes.length);
        prizeText.innerText = prizes[randomIndex];
        elapsedTime += intervalTime;

        if (elapsedTime >= totalTime) {
            clearInterval(spinInterval);
            spinning = false; // Allow another spin
        }
    }, intervalTime);
}
