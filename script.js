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
