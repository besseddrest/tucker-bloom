const desc = document.querySelector('div[data-title="Description"] p:first-child').cloneNode(true);
/*const cloned = desc.cloneNode();*/
const descMain = document.querySelector('.product--description');
console.log(desc);
descMain.appendChild(desc);
