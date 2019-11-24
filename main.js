const biggifyButton = document.querySelector('.biggify');
const nasafyButton = document.querySelector('.nasafy');
const crazifyButton = document.querySelector('.crazify');
const reversifyButton = document.querySelector('.reversify');
const titleifyButton = document.querySelector('.titleify');


const userInput = document.querySelector('.user-input');
const newLi = document.createElement('li');
const answer = document.querySelector('.result');


const buttonOne = function () {
    newLi.innerText = biggify((userInput.value)*1);
    answer.append(newLi);
}
const buttonTwo = function () {
    newLi.innerText = nasafy((userInput.value));
    answer.append(newLi);
}
const buttonThree = function () {
    newLi.innerText = crazify((userInput.value));
    answer.append(newLi);
}
const buttonFour = function () {
    newLi.innerText = reversify((userInput.value));
    answer.append(newLi);
}
const buttonFive = function () {
    newLi.innerText = titleify((userInput.value));
    answer.append(newLi);
}

biggifyButton.addEventListener('click', buttonOne);
nasafyButton.addEventListener('click', buttonTwo);
crazifyButton.addEventListener('click', buttonThree);
reversifyButton.addEventListener('click', buttonFour);
titleifyButton.addEventListener('click', buttonFive);
