// hare krishna
// window.matchMedia('(max-width: 414px)').addListener((ev) => {
//   console.log(ev.matches);
// });
let pr = window.devicePixelRatio;
console.log(pr);

let showResult = (details) => {
  myDiv = document.createElement('section');
  myDiv.className = "element-details";
  myDiv.style.display = "flex";

  if (details) {
    let i = new Image;
    i.src = details[0];
    myDiv.append(i);

    let p = document.createElement('p');
    p.textContent = details[1];
    myDiv.append(p);
  } else {
    let p = document.createElement('p');
    p.style.color = "#ff4000";
    p.textContent = "Data not available !";
    myDiv.append(p);
  }
  return myDiv;
}


document.body.addEventListener('click', (ev) => {
  let checkEl = document.querySelector('.element-details');
  if (checkEl) {
    checkEl.remove();
  }

  if (ev.target.className === "box-content") {

    let el = ev.target.nextElementSibling.textContent.trim();
    let d = data[el];
    let myDiv = showResult(d);

    if (window.matchMedia('(max-width: 414px)').matches) {
      ev.target.parentElement.insertAdjacentElement('afterend', myDiv);
    } else {
      document.querySelector("body").append(myDiv);
    }
  }
})
