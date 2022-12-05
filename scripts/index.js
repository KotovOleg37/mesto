/*Обьявление переменных*/ 
const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupButtonSave = document.querySelector('.popup__form');
let popupName = document.querySelector('.popup__name');
let popupJob = document.querySelector('.popup__job');
let titleName = document.querySelector('.profile__title-text')
let titleJob = document.querySelector('.profile__subtitle')


//Открытие popap. При открытии формы поля «Имя» и «О себе» должны быть заполнены теми значениями, которые отображаются на странице."
function openPopup(){
  popup.classList.add('popup_opened');
  popupName.value = titleName.textContent;
  popupJob.value = titleJob.textContent;
}
profileButton.addEventListener('click', openPopup);

//Закрытие popap
function closePopup(){
  popup.classList.remove('popup_opened');
}
popupClose.addEventListener('click', closePopup);

//Обработчик отправки формы хотя пока она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault();
  titleName.textContent = popupName.value;
  titleJob.textContent = popupJob.value;
  closePopup();
}
// Прикрепляем обработчик к форме.Он будет следить за событием “submit” - «отправка»
popupButtonSave.addEventListener('submit', handleFormSubmit); 


