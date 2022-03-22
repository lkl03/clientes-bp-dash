const modal = document.getElementById('firstModal')
const form = document.getElementById('form')
const opener = document.getElementById('modal_opener')
const button1 = document.getElementById('firstModal_button')

opener.addEventListener('click', showModal)
button1.addEventListener('click', closeModal)

function showModal() {
    modal.style.display = 'flex'
    form.style.display = 'none'
}
function closeModal(){
    modal.style.display = 'none'
    form.style.display = 'flex'
}