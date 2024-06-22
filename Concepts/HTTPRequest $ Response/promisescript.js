const getTodos = (resource) => {
    return new Promise((resolve,reject)=>{
        const req = new XMLHttpRequest();

        req.addEventListener('readystatechange', () => {
            // console.log(req);
            // console.log(req.readyState);
            if (req.readyState === 4 && req.status === 200) {
                const data = JSON.parse(req.responseText)
               resolve(data);
            } else if (req.readyState === 4) {
                reject("error getting resource");
                // console.log('could not fetch the data');
            }
        });

        req.open('GET', resource);
        req.send();
    });
   

};

getTodos('todos/luigi.json').then(data=>{
    console.log('promise resolve:', data);
}).catch(err=>{
    console.log('promise rejected:', err);
})

