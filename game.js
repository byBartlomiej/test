const gameStats = {
    games: 0,
    wins: 0,
    lose: 0,
    draws: 0,
};
const game = {
    playerHand: "",
    aiHand: "",
};

const imgsGame = [...document.querySelectorAll(" .select img")];

imgsGame.forEach((oneImg) => {
    oneImg.addEventListener("click", (e) => {
        game.playerHand = e.target.dataset.option;
        imgsGame.forEach(img => img.style.boxShadow = "");
        e.target.style.boxShadow = "0 0 10px 10px rgb(235, 119, 10)";
        console.log(e.target.dataset.option);
    });
});