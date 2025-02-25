# pptx\_to\_wav

Converti presentazioni PowerPoint (.pptx) in file audio .wav!

## Descrizione

**pptx\_to\_wav** è una web app basata su Flask che estrae il testo dalle slide di un file .pptx e lo converte in audio utilizzando Google Text-to-Speech (gTTS). Infine, unisce i file audio generati in un unico file .wav per un'esperienza di ascolto continua.

## Funzionalità

- Carica un file **.pptx** 
- Estrai il testo dalle slide 
- Converti il testo in **audio parlato** usando Google TTS 
- Unisci tutti gli audio generati in un unico file **.wav**
- Scarica il file audio finale

## Tecnologie utilizzate

- **Flask** (Framework backend Python)
- **gTTS** (Google Text-to-Speech per generare l'audio)
- **python-pptx** (Per estrarre testo dalle slide)
- **Librosa** & **SoundFile** (Per la conversione audio)
- **pydub** (Per unire file audio)
- **HTML/CSS** (Interfaccia utente)

## Installazione

### 1) Clona la repository

```sh
git clone https://github.com/lobott/pptx_to_wav.git
cd pptx_to_wav
```

### 2️) Crea un ambiente virtuale e installa le dipendenze

```sh
python -m venv venv
source venv/bin/activate  # (Windows: venv\Scripts\activate)
pip install -r requirements.txt
```

### 3️) Avvia l'app

```sh
python app.py
```

Ora puoi accedere all'applicazione su `http://127.0.0.1:5000/` 

## Esempio di utilizzo

1. **Carica un file PowerPoint**
2. **Attendi la conversione in audio**
3. **Scarica il file .wav generato**

## TODO / Miglioramenti futuri

-

## Licenza

Questo progetto è distribuito sotto licenza **MIT**.

---

💡 *Contribuisci o lascia un feedback su GitHub!* 
