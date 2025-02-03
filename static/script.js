document.getElementById('file-input').addEventListener('change', function() {
    let fileName = this.files[0] ? this.files[0].name : "nessun file selezionato"
    document.getElementById('file-name').textContent = fileName
})

const form = document.getElementById('upload-form')
const container = document.getElementById('container')
const loadingScreen = document.getElementById('loading-screen')
const logFrame = document.getElementById('log-frame')
const statusText = document.getElementById('status-text')


form.addEventListener('submit', () => {
    container.style.display = 'none'
    loadingScreen.classList.add('loading-screen')
})



