'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
const contentBody = document.querySelector('body');
contentBody.style.fontFamily = 'Arial, sans-serif';

document.querySelector('#nickname').textContent = ' Mustafa';
document.querySelector('#fav-food').textContent = ' Pizza';
document.querySelector('#hometown').textContent = ' Edlib';

const li = document.querySelectorAll('li');
li.forEach((li) => {
  li.className = 'list-item';
});

const head = document.querySelector('head');
const style = document.createElement('style');
head.appendChild(style);
style.textContent = '.list-item {color: red;}';
