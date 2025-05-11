// Проверяем поддержку браузером
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
window.Telegram.WebApp.requestFullscreen();
if (!SpeechRecognition) {
  alert("Ваш браузер не поддерживает Web Speech API");
} else {
  const recognition = new SpeechRecognition();

  // Устанавливаем язык распознавания
  recognition.lang = 'ru-RU'; // Русский язык
  recognition.interimResults = false; // Показывать промежуточные результаты

  // При успешном распознавании
  recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('word').value = transcript;
    console.log('Распознано:', transcript);
  });

  // При завершении распознавания
  recognition.addEventListener('end', () => {
    console.log('Распознавание завершено');
  document.getElementById('start-btn').style.backgroundColor=""
  document.getElementById('start-btn').textContent="Начать говорить"
  });

  // Запуск распознавания по нажатию кнопки
  document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('start-btn').style.backgroundColor="red"
  document.getElementById('start-btn').textContent="Говорите..."
    recognition.start();
  });
}

function perevesti(){
let val = document.getElementById("lang").value
let colvo = document.getElementById("word").value
let val_2 = document.getElementById("lang2").value
document.getElementById('loading').style.display = 'flex';
document.getElementById('result').style.display = 'none';
fetch(`https://vpn.rafailvv.ru:8443/translate?text=${colvo}&lang=${val_2}`)
    .then(resp => resp.json())
    .then(data => {
        let kurs=data["translated_text"]
        document.getElementById("result").value = kurs
        console.log(data)
    }).finally(() => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
    })

}
