let informations = document.getElementsByClassName('information')
let listStep = document.getElementsByClassName('step')
let dialog = document.getElementsByClassName('dialog')[0]
function scrollInformation() {
    window.scroll(0, 530)
}
function simulate(step) {
    let valorCasa = document.getElementById('cost-house2').value
    let dineroPorcentual = document.getElementById('porcent').value
    let years = document.getElementById('years').value
    let value = document.getElementsByClassName('value')[0]
    let price = document.getElementsByClassName('price')[0]
    if (step == 1 && valorCasa && dineroPorcentual && years) {
        console.log(valorCasa);
        console.log(dineroPorcentual);
        let total = (valorCasa * dineroPorcentual) / 100
        value.innerHTML = 'asdasd'
        total = total / (12 * years)
        price.innerHTML = total.toFixed(3)

    }
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