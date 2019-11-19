const gameStats = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
};
const game = {
    playerHand: "",
    aiHand: "",
};

const imgsGame = [...document.querySelectorAll(" .select img")];
const textResult = document.querySelector("h2 span");
//Wybór gracza
imgsGame.forEach((oneImg) => {
    oneImg.addEventListener("click", (e) => {
        //czyszczenie wyników przed grą
        document.querySelector('[data-summary="your-choice"]').textContent = "";
        document.querySelector('[data-summary="ai-choice"]').textContent = "";
        textResult.textContent = "";

        game.playerHand = e.target.dataset.option;
        imgsGame.forEach(img => img.style.boxShadow = "");
        e.target.style.boxShadow = "0 0 10px 10px rgb(235, 119, 10)";
        console.log(e.target.dataset.option);
    });
});
//Wybór AI
function aiChoice() {
    return imgsGame[Math.floor(Math.random() * imgsGame.length)].dataset.option;
}
//Sprawdzenie wyniku
function checkResult(player, ai) {
    if (player === ai) {
        return "draw";
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return "win";
    } else {
        return "lose";
    }
}
//Funkcja sterująca
document.querySelector(".start").addEventListener("click", () => {
    imgsGame.forEach(img => img.style.boxShadow = "");
    if (!game.playerHand) {
        alert("Wybierz przedmiot klikając w jego obrazek");
        return
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    document.querySelector('[data-summary="your-choice"]').textContent = game.playerHand;
    document.querySelector('[data-summary="ai-choice"]').textContent = game.aiHand;

    if (gameResult === "draw") {
        document.querySelector(".draws span").textContent = ++gameStats.draws;
        textResult.style.color = "orange";
        textResult.textContent = "REMIS";
    } else if (gameResult === "win") {
        document.querySelector(".wins span").textContent = ++gameStats.wins;
        textResult.style.color = "green";
        textResult.textContent = "TY";
    } else {
        document.querySelector(".losses span").textContent = ++gameStats.losses;
        textResult.style.color = "crimson";
        textResult.textContent = "PC";
    }
    document.querySelector(".numbers span").textContent = ++gameStats.games;
    if (gameStats.games === 10) {
        document.querySelector("div.fun").style.left = "0";
    }

});