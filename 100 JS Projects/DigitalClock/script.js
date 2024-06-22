const clock = document.querySelector('.clock');

const tick = ()=>{
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    // console.log(h, m ,s);
    const html = `<span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>`;
    //carefully observe = instead of += becoz we want to replace and not concatenate.
    clock.innerHTML = html; 
};


//To run tick functions every 1 second
setInterval(tick, 1000);