const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')

// console.log(idInput, colorInput)

const setCard = () => {
 const card = document.getElementById(idInput.value)
 console.log(card)
 card.style.color = colorInput.value
}

