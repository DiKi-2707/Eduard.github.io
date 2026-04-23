/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');


const messages = [
  "Ну вот, уже первый баг — пользователь не читает инструкции.",
  "Ты уверен, что всё работает правильно?)",
  "Баги есть всегда. Вопрос — где.",
  "Тест пройден. Но это ничего не значит.",
  "Ты уверен, что всё работает правильно?",
  "Кажется, ты что-то упустил",

];
button.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * messages.length);
  alert(messages[randomIndex]);
});