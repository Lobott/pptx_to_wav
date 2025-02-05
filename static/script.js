document.getElementById('file-input').addEventListener('change', function() {
    let fileName = this.files[0] ? this.files[0].name : "nessun file selezionato"
    document.getElementById('file-name').textContent = fileName
})

const form = document.getElementById('upload-form')
const container = document.getElementById('container')
const loadingScreen = document.getElementById('loading-screen')
const generaNuovo = document.getElementById('genera-nuovo')

form.addEventListener('submit', () => {
    container.style.display = 'none'
    loadingScreen.classList.add('loading-screen')
})

generaNuovo.addEventListener('click', () => {
    window.history.back()
})


