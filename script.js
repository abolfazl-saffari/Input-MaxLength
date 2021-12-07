let $ = document;
let inputSelect = $.querySelector('input')
let spanSelect = $.querySelector('span')
let maxLength = inputSelect.getAttribute('maxlength')

inputSelect.addEventListener('keyup', () => {
    spanSelect.innerHTML = String(maxLength - inputSelect.value.length)
})