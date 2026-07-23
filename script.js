/* =====================================
   HAPPY BIRTHDAY WEBSITE
   PHASE 1
===================================== */

// Loading Screen

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 3000);

});


// Password

const correctPassword = "09092024";

function checkPassword() {

    const input = document.getElementById("password").value.trim();

    const error = document.getElementById("error");

    const passwordScreen = document.getElementById("password-screen");

    const website = document.getElementById("website");

    if (input === correctPassword) {

        error.innerHTML = "";

        passwordScreen.style.display = "none";

        website.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        error.innerHTML =
        "Oops! Wrong password. 🤭<br>Hint: I miss the day we first met. ❤️";

    }

}

/* =====================================
   LETTER POPUP SYSTEM
===================================== */

const letters = {

1: {
title: "🌤️ Open when you wake up",
content: `Yahan tum apna pehla letter paste karogi.`
},

2: {
title: "🤍 Whenever you miss me",
content: `Yahan second letter paste karogi.`
},

3: {
title: "😊 When you smile",
content: `Coming soon...`
},

4: {
title: "🫂 When you're tired",
content: `Coming soon...`
},

5: {
title: "☕ While having breakfast",
content: `Coming soon...`
},

6: {
title: "🎧 While listening to our song",
content: `Coming soon...`
},

7: {
title: "📸 After seeing our memories",
content: `Coming soon...`
},

8: {
title: "💭 When you think about us",
content: `Coming soon...`
},

9: {
title: "😂 When you need a smile",
content: `Coming soon...`
},

10: {
title: "🥹 Read when you miss my hug",
content: `Coming soon...`
},

11: {
title: "🌸 When you need comfort",
content: `Coming soon...`
},

12: {
title: "✨ When you feel proud of yourself",
content: `Coming soon...`
},

13: {
title: "🤲🏻 Read after your dua",
content: `Coming soon...`
},

14: {
title: "💖 When you want to feel loved",
content: `Coming soon...`
},

15: {
title: "🌙 Before going to sleep",
content: `Coming soon...`
},

16: {
title: "🎂 Before cutting the cake",
content: `Coming soon...`
},

17: {
title: "🎁 After opening all surprises",
content: `Coming soon...`
},

18: {
title: "❤️ When you want to read my heart",
content: `Coming soon...`
},

19: {
title: "👑 Open Me Last",
content: `Coming soon...`
}

};

function openLetter(number){

document.getElementById("popupTitle").innerHTML = letters[number].title;

document.getElementById("popupContent").innerHTML = letters[number].content;

document.getElementById("letterPopup").classList.add("show");

document.body.style.overflow = "hidden";

}

function closeLetter(){

document.getElementById("letterPopup").classList.remove("show");

document.body.style.overflow = "auto";

}
function playMusic() {
    const music = document.getElementById("bgMusic");

    music.currentTime = 9;

    music.play().catch(() => {
        console.log("Music will play after user interaction.");
    });
}
