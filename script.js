const form = document.querySelector('form') ;
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const tasklist = document.querySelector('#task-list');

// call event listeners
eventListeners();

function eventListeners(){
    // submit event
    form.addEventListener('submit',addNewItem);

    //delete an item
    tasklist.addEventListener('click',deleteItem);

    //deleteall an item

    btnDeleteAll.addEventListener('click',deleteAll);
}



    // add new item
function addNewItem(e){
    if(input.value ===''){
        alert('add new item');
    }
    // li creatElement
    const li = document.createElement('li');
    li.className = 'list-group-item  list-group-item-success';
    li.appendChild(document.createTextNode(input.value));
    // a creatElement
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML = '<i class="fas fa-times"></i>'

    //add a to li

    li.appendChild(a);

    //add li to ul

    tasklist.appendChild(li);

    // clear input

    input.value = '';
    e.preventDefault();
}

    //delete an item
function deleteItem(e){

    if(e.target.className === 'fas fa-times'){
        e.target.parentElement.parentElement.remove();
    }
    
    console.log(e.target);
    
    e.preventDefault();

}

function deleteAll(e){
 
    if(confirm('are you sure ?')){
    //   tasklist.innerHTML = '';  

     tasklist.childNodes.forEach(function(item){
          if(item.nodeType === 1) {
              item.remove();
            }
         })
    }
 
   
    e.preventDefault();
}