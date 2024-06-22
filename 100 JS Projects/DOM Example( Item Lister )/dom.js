const form = document.getElementById('addForm');
const list = document.getElementById('list');
const filter = document.getElementById('filter')


form.addEventListener('submit', addItem);
list.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e) {
    e.preventDefault();

    const newItem = document.getElementById('item').value;

    //Create new li Element.
    const li = document.createElement('li');
    li.className = 'items'

    // Add text node with input li
    li.appendChild(document.createTextNode(newItem));

    //Create delete button Element
    const deleteBtn = document.createElement('button')

    deleteBtn.className = 'btn danger'

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);


    list.appendChild(li)
}



function removeItem(e) {
    if (e.target.classList.contains('danger')) {
        if (confirm('Are you sure you want to remove')) {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    }
}

function filterItems(e) {
    const text = e.target.value.toLowerCase();
    const items = list.getElementsByTagName('li');
    //return html collection we need to convert this html collection to array

    //Covert HTML Collection to array
    Array.from(items).forEach(function (item) {
        const itemName = item.firstChild.textContent;
        console.log(item);
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    })



}