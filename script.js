const prizes = [
    "🎁 Free Coffee",
    "🎉 $5 Gift Card",
    "🎟️ Discount Coupon",
    "🎊 Mystery Prize",
    "😢 Try Again",
    "🎈 Extra Spin"
];

function pickPrize() {
    let randomIndex = Math.floor(Math.random() * prizes.length);
    document.getElementById("result").innerText = "You got: " + prizes[randomIndex];
}
