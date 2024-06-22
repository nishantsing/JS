const getTodos = (callback)=>{
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', () => {
        // console.log(req);
        // console.log(req.readyState);
        if (req.readyState === 4 && req.status === 200) {
            const data = JSON.parse(req.responseText)
          callback(undefined,data);
        } else if (req.readyState === 4) {
            callback('could not fetch data', undefined);
            // console.log('could not fetch the data');
        }
    });
    //over server
    req.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

    //Local
    // req.open('GET', 'todos.json');

    req.send();

};

console.log(1);
console.log(2);


getTodos((err, data)=>{
    console.log('callback fired');
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
});

console.log(3);
console.log(4);

//Whenever data is transfered over the browser it must be completely string. Therefore JSON is used.JSON is completely string.

// calling async calls like sync.i.e.waiting for completion of previous async call....This genaerally happens when we contact different apis.
// To achieve this we call next api in the callback of previous api.

// const getTodos = (resource, callback) => {
//     const req = new XMLHttpRequest();

//     req.addEventListener('readystatechange', () => {
//         // console.log(req);
//         // console.log(req.readyState);
//         if (req.readyState === 4 && req.status === 200) {
//             const data = JSON.parse(req.responseText)
//             callback(undefined, data);
//         } else if (req.readyState === 4) {
//             callback('could not fetch data', undefined);
//             // console.log('could not fetch the data');
//         }
//     });

//     req.open('GET', resource);
//     req.send();

// };


// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/mario.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });

// The above situation is known as Callback Hell and to avoid it we use promises.

//Promises Example
//resolve and reject are functions that are built into the Promise API.
const getSomething = ()=>{
  

    return new Promise((resolve, reject)=>{
        //fetch something
        // resolve('some data');
        reject('some error')
    });
};

// M1. getSomething().then((data)=>{
//     console.log(data);
// },(err)=>{
// console.log(err);
// });

// M2. 
getSomething().then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})