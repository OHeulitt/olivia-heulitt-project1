// modal pops up after a certain amount of time
const modal = document.querySelector(".subscribe");
const form = document.querySelector("form");
const closeButtons = document.querySelectorAll(".close-window");

const subscribeToPlanted = function() {
    modal.setAttribute("style", "display:block");
}

const sellYourSoul = setTimeout(subscribeToPlanted, 3000);

// when "close" and "not now" buttons are clicked modal "hides"


for ( let closeButton of closeButtons) {
    // console.log(closeButton);
    closeButton.addEventListener("click", function() {
        modal.setAttribute("style", "display:none");
    });
}

//when submit button is clicked/form submission
form.addEventListener("submit", function(event) {
    // prevent form from refreshing (default)
    event.preventDefault();

    //  accepts user input and stores them in variables 
    const userNameInput = document.querySelector("#name");
    const userEmailInput = document.querySelector("#user-email");
    const userName = userNameInput.value;
    const userEmail = userEmailInput.value;

    // console.log(userName, userEmail);

    // update the HTML to reflect that their name and email have successfully been accepted
    if (userName !== "" &&
        userEmail !== "") {
        // clears inputs after submit
        userNameInput.value = "";
        userEmailInput.value = "";
        // then update text in modal to welcome user
        this.innerHTML = `<p>Hello, ${userName}! We will send our exciting newsletters to ${userEmail}.</p>`;
     
    }
    else {
        alert("Please fill out all fields");
    }
});


