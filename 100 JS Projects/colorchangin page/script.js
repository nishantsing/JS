const change = document.querySelector('.box');


change.addEventListener('mousemove', e => {
    const random = Math.random();
    // console.log(e);
    e.target.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${Math.round(random * 255)})`;
    console.log(e.target.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${Math.round(random * 255)})`);
});