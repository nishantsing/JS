db.collection('todos').get().then((snapshot)=>{
    //when we have the data
    // console.log(snapshot.docs[0].data());

    snapshot.docs.forEach((doc)=>{
        console.log(doc.data());
    });
    
}).catch(err=>{
    console.log(err);
})








const form = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');


const generateTemplate = todo=>{

    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                    <i class="fa fa-trash delete">

                    </i>
                
            </li>`;
 ul.innerHTML += html;
};

form.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = form.add.value.trim();
    if (todo.length){
        // console.log(todo);
        generateTemplate(todo);
        form.reset();
    }
   



} );

//Deleting Todo
// We can attach eventListener to each li but it increases the work of javascript and also new li wont have that eventListener.
// So what we can use is event deligation. we can add EventListener to the ul instead and then we can detect the target element.
// We are attaching one event listener to one element that is ul which reduces the work of the js and we dont need to add new eventListener for every new li.

ul.addEventListener('click',e=>{

if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}

});

const filterTodos = (term) =>{
    // console.log(Array.from(ul.children));//Array.from converts ul.children output i.e., HTMLCollection into Array and then we can use array methods on them.

// How does .includes work?

//    Array.from(ul.children).forEach((todo)=>{
//        console.log(todo.textContent.toLowerCase().includes(term));
//    })


    Array.from(ul.children)
    .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=> todo.classList.add('filtered'));

    Array.from(ul.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));

};

//Searching todos

search.addEventListener('keyup',()=>{
    const term = search.value.trim();
    filterTodos(term);
});

