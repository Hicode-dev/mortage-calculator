const HideDiv = document.getElementById('hide-div')
const HideText = document.getElementById('hide-text')

function HandleHide(params) {
    HideDiv.classList.toggle("hidden")
}

HideDiv.addEventListener('click',HandleHide)


