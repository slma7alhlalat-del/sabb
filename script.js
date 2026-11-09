// =====================================
// القلوب المتحركة
// =====================================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 18 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

createHeart();
setInterval(createHeart, 550);


// =====================================
// فقاعة صورة الطفولة الواحدة
// =====================================

const memoryBubble = document.createElement("img");

memoryBubble.src = "images/childhood.png";
memoryBubble.alt = "ذكرى الطفولة";
memoryBubble.classList.add("memory-bubble");

heartsContainer.appendChild(memoryBubble);


// =====================================
// زر مو جاهز
// =====================================

const notReadyBtn = document.getElementById("notReadyBtn");

function moveButton() {

    const container = document.querySelector(".buttons");

    const maxX = Math.max(
        0,
        container.clientWidth - notReadyBtn.offsetWidth
    );

    const maxY = 100;

    notReadyBtn.style.position = "absolute";

    notReadyBtn.style.left =
        Math.random() * maxX + "px";

    notReadyBtn.style.top =
        (Math.random() * maxY - 20) + "px";
}

notReadyBtn.addEventListener("pointerenter", moveButton);

notReadyBtn.addEventListener("click", (event) => {
    event.preventDefault();
    moveButton();
});


// =====================================
// زر جاهز
// =====================================

const readyBtn = document.getElementById("readyBtn");

readyBtn.addEventListener("click", () => {

    document.body.classList.add("started");

    // إزالة فقاعة الطفولة
    memoryBubble.remove();

    // الانتقال للذكريات
    setTimeout(() => {

        document.getElementById("nextPage").scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

});