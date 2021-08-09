const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const tasklist = document.querySelector('#task-list');

const items = ['item1', 'item2', 'item3', 'item4','item5','item6'];


//load items

loadItems();

// call event listeners
eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    //delete an item
    tasklist.addEventListener('click', deleteItem);

    //deleteall an item

    btnDeleteAll.addEventListener('click', deleteAll);
}

function loadItems() {
    items.forEach(function (item) {
        createItem(item)
    })
}

function createItem(text) {
    // li creatElement
    const li = document.createElement('li');
    li.className = 'list-group-item  list-group-item-success';
    li.appendChild(document.createTextNode(text));
    // a creatElement
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>'

    //add a to li

    li.appendChild(a);

    //add li to ul

    tasklist.appendChild(li);
}



// add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
    }


    // creat item

    createItem(input.value);

    // clear input

    input.value = '';
    e.preventDefault();
}

//delete an item
function deleteItem(e) {

    if (e.target.className === 'fas fa-times') {
        if (confirm('are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }

    }

    console.log(e.target);

    e.preventDefault();




}

function deleteAll(e) {

    if (confirm('are you sure ?')) {
        //   tasklist.innerHTML = '';  

        tasklist.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }
        })
    }


    e.preventDefault();
}