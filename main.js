let computerPoints = 0
let humanPoints = 0
const humanOptions = document.getElementById('humanOptions');
document.getElementById('humanOption0').addEventListener('click', () => play(0))
document.getElementById('humanOption1').addEventListener('click', () => play(1))
document.getElementById('humanOption2').addEventListener('click', () => play(2))
const hands = [
    './assets/rock.png',
    './assets/paper.png',
    './assets/scissor.png'
]

/**
 * 
 * @returns Un número aleatorio entre 0 y 2
 */
const randomComputerHand = () => {
    return Math.floor(Math.random() * 3);
}

/**
 * 
 * @param {number} human // Opcion o mano del jugador
 * @param {number} computer // Opcion o mano de la computadors
 * @returns // Asigna punto al ganador y lo actualiza en pantalla
 */
const calcPoints = (human, computer) => {
    if (human === computer) return;
    if (human === 0) {
        if (computer == 1) {
            computerPoints += 1
        } else {
            humanPoints += 1
        }
    } else if (human === 1) {
        if (computer === 0) {
            humanPoints += 1
        } else {
            computerPoints += 1
        }
    } else {
        if (computer === 0) {
            computerPoints += 1
        } else {
            humanPoints += 1
        }
    }
    document.getElementById('computerPoints').innerHTML = computerPoints
    document.getElementById('humanPoints').innerHTML = humanPoints
}

/**
 * 
 * @param {number} option // Opcion seleccionada por el jugador en base al número de boton
 */
const play = (option) => {
    const computerImage = document.getElementById('computerImage')
    const humanHandPlayed = option;
    const computerHandPlayed = randomComputerHand()
    computerImage.src = hands[computerHandPlayed];
    computerImage.style.opacity = 1
    document.getElementById('humanImage').src = hands[option]
    calcPoints(humanHandPlayed, computerHandPlayed)
}

/**
 * Inicializa a cero los puntajes y los actualiza en pantalla
 */
document.getElementById('btn-reset').addEventListener('click', () => {
    computerPoints = 0;
    humanPoints = 0;
    document.getElementById('humanImage').src = ''
    document.getElementById('computerImage').src = ''
    document.getElementById('computerPoints').innerHTML = computerPoints
    document.getElementById('humanPoints').innerHTML = humanPoints
})