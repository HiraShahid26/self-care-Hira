const msgButton = document.querySelector(".btn1")
const delButton = document.querySelector(".btn2")
const choiceBox = document.querySelector(".choice")
const imgLogo = document.querySelector(".img")
const msgAppear = document.querySelector(".text")
const selectElement = document.querySelectorAll("input[name='affirmation-mantras']");





let affirmation = [
    "I am successful.",
    "I am confident.",
    "I am powerful.",
    "I am strong.",
    "I am getting better and better every day.",
    "I wake up motivated.",
    "I am an unstoppable force nature.",
    "I am living with abundance.",
    "I am inspiring people through my work.",
    "Today is a phenomenal day." ,
    "I am filled with focus.",
    "I am not pushed by my problems; I am led by my dreams.",
    "I am grateful for everything I havein my life.",
    "I am independent and self-sufficient."
];


let mantras = [
    "My breaths will be deep and my heart will be open.",
    "I’ll release the things out of my control.",
    "There are blessings hidden everywhere; I will find them.",
    "I am not a drop in the ocean. I am the entire ocean in a drop.",
    "I am whole, I am creative, and I am capable of change.",
    "This too shall pass.",
    "I focus on how I feel, not what I want to achieve.",
    "I honor my spirit and trust my vibes.",
    "With change comes opportunity.",
    "Dare to be present.",
    "Just to be alive is a grand thing.",
    "I am thankful for everything I have.",
    "Breathe in joy and strength, breathe out wisdom and peace.",
    "I am stronger than my excuses.",
    "Don’t postpone joy.",
];

function random(array) {
    return Math.floor(Math.random() * array.length);
}

function display() {
    for (let i=0; i<selectElement.length;i++){
        let selection = selectElement[i];
        if (selection.checked) {
            return selection.value; 
        }
   } 
}


msgButton.addEventListener("click", function (e){
    e.preventDefault();
    // delButton.classList.remove("hide");
    delButton.style.display = "block ";
    msgAppear.classList.remove("hide");
    imgLogo.classList.add("hide");
    

    if(display() === "affirmation"){
        msgAppear.innerHTML = `${affirmation[random(affirmation)]}`;
    }
    else  {
        msgAppear.innerHTML = `${mantras[random(mantras)]}`;
    }

})


delButton.addEventListener("click", function (){
    
    // delButton.classList.add("hide");
    delButton.style.display = "none";
    msgAppear.classList.add("hide");
    imgLogo.classList.remove("hide");
    
});
