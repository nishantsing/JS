//fetch api

// fetch('todos/luigi.json').then((response)=>{
//     console.log('resolved', response);
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log('reected',err);
// });

//response.json returns promise


//async & await
//async and await allow us to chain promises in muvh more clean and readable way.

//  async keyword makes a function promise
// The await operator is used to wait for a Promise.It can only be used inside an async function.

const getTodos = async ()=>{

 const response = await  fetch('todos/luigi.json');
//  console.log(response);
if(response.status !== 200){
    throw new Error('cannot fetch the data'); 
}
const data = await response.json();
// console.log(data);
return data;
};

getTodos().then(data => console.log('resolved', data)).catch(err=>console.log('rejected',err,err.message));
// const test = getTodos();
// console.log(test);

