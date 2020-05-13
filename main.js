const addbutton = document.querySelector('.addbutton');
var inputvalue = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itenname){
    this.creatediv(itemname);

}
    creatediv(itemname){
    var input = document.createElement("input");
    input.value = itemname;
    input.disabled = true;
    input.classList.add('item_input');
    input.type = "text";
    

    var itembox = document.createElement('div');
    itembox.classList.add('item');

    var editButton = document.createElement('button');
    editButton.innerHTML = "EDIT";
    editButton.classList.add('editButton');
    
    var removeButton = document.createElement('button');
    removeButton.innerHTML = 'REMOVE';
    removeButton.classList.add('editButton');


    container.appendChild(itembox);
    itembox.appendChild(input);
    itembox.appendChild(editbutton);
    itembox.appendChild(removeButton);

    editButton.addEventListener('click',() => this.edit(input));

    removeButton.addEventListener('click',() => this.remove(itembox)); 
    }

    edit (input){
        input.disabled = !input.disabled;
    }
    remove (item){
        container.removeChild(item)
 }
    

}
new item('plan');
function check(){
    if(input.value != ""){
        new item(input.value)
        input.value = "";
    }
}

addbutton.addEventListener('click',check)
window.addEventListener('keydown',(e) => {
    if (e.which == 13){
        check();
    }
})
