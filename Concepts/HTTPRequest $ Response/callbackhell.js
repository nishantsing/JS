// calling async calls like sync.i.e.waiting for completion of previous async call....This genaerally happens when we contact different apis.
// To achieve this we call next api in the callback of previous api.

const getTodos = (resource, callback) => {
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', () => {
        // console.log(req);
        // console.log(req.readyState);
        if (req.readyState === 4 && req.status === 200) {
            const data = JSON.parse(req.responseText)
            callback(undefined, data);
        } else if (req.readyState === 4) {
            callback('could not fetch data', undefined);
            // console.log('could not fetch the data');
        }
    });

    req.open('GET', resource);
    req.send();

};


getTodos('todos/luigi.json', (err, data) => {
    console.log(data);
    getTodos('todos/mario.json', (err, data) => {
        console.log(data);
        getTodos('todos/shaun.json', (err, data) => {
            console.log(data);
        });
    });
});

// The above situation is known as Callback Hell and to avoid it we use promises.
