// Проверяем поддержку браузером
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Ваш браузер не поддерживает Web Speech API");
} else {
  const recognition = new SpeechRecognition();

  // Устанавливаем язык распознавания
  recognition.lang = 'ru-RU'; // Русский язык
  recognition.interimResults = false; // Показывать промежуточные результаты

  // При успешном распознавании
  recognition.addEventListener('word', (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('word').value = transcript;
    console.log('Распознано:', transcript);
  });

  // При завершении распознавания
  recognition.addEventListener('end', () => {
    console.log('Распознавание завершено');
  });

  // Запуск распознавания по нажатию кнопки
  document.getElementById('start-btn').addEventListener('click', () => {
    recognition.start();
  });
}

function perevesti(){
let val = document.getElementById("lang").value
let colvo = document.getElementById("word").value
let val_2 = document.getElementById("lang2").value
fetch(`http://127.0.0.1:5000/translate?text=${colvo}&lang=${val_2}`)
    .then(resp => resp.json())
    .then(data => {
        let kurs=data["translated_text"]
        document.getElementById("result").value = kurs
        console.log(data)
    })
}
