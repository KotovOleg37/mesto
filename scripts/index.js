/*Обьявление переменных*/ 
const popupButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const save = document.querySelector('.popup__button');
let popupName = document.querySelector('.popup__name');
let popupJob = document.querySelector('.popup__job');
let titleName = document.querySelector('.profile__title-text')
let titleJob = document.querySelector('.profile__subtitle')

//Открытие-закрытие popap*
popupButton.addEventListener('click', function (){
  popup.classList.add('popup_opened');
});

popupClose.addEventListener('click', function (){
  popup.classList.remove('popup_opened');
});



//Редактирование имени и информации о себе
function handleFormSubmit(evt) {
  evt.preventDefault();
  titleName.textContent = popupName.value;
  titleJob.textContent = popupJob.value;
  popup.classList.remove('popup_opened');
}

save.addEventListener('click', handleFormSubmit); 


