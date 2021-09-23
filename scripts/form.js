let informations = document.getElementsByClassName('information')
let listStep = document.getElementsByClassName('step')
let dialog = document.getElementsByClassName('dialog')[0]
function scrollInformation() {
    window.scroll(0, 530)
}
function simulate(step) {
    console.log(step);
    if (step == 5) {
        dialog.setAttribute('style', 'display: none')
    }
    if (step == 4) {
        dialog.setAttribute('style', 'display: flex')
    } else {
        if (step == 2 || step == 3) {
            console.log('entrooo');
            listStep[step - 2].className = 'step'
            listStep[step - 1].className += ' active'
        }
        informations[step - 1].className = 'information'
        informations[step].className += ' active'
    }
}