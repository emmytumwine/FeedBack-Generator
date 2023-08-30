const emmy = document.querySelectorAll(".ratings");
const btnEl = document.getElementById("btn")
const containerEl = document.getElementById("container");


let selectedRating = "";

emmy.forEach((ratings)=>{
    ratings.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click", () => {
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`;
    }
})

function removeActive(){
    emmy.forEach((ratings)=>{
        ratings.classList.remove("active")
    });
}