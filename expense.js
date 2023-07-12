

function callexpenses(){
    let myObj={
        expense: document.getElementById("expense").value,
        discrip: document.getElementById("discrip").value,
        selecting: document.getElementById("mselect").value
    };
    let ediscrip=document.getElementById("discrip").value


    let myObj_serialzed=JSON.stringify(myObj);
    localStorage.setItem(ediscrip,myObj_serialzed)
}       

var myForm=document.querySelector('#my-form');
var expenses=document.querySelector('#expense');
var discripInput=document.querySelector('#discrip');
var selecting =document.querySelector('#mselect');
var expenseList=document.querySelector('#users');

// submit event
myForm.addEventListener('submit', onsubmit);//if not working try onsubmit

//delete event
expenseList.addEventListener('click', removeItem)
expenseList.addEventListener('click', editexpense)

//Add item
function onsubmit(e){
    e.preventDefault();

    const li=document.createElement('li');
    li.id=discripInput.value   
    li.expense=expenses.value
    li.num=selecting.value
    
    
    li.appendChild(document.createTextNode(`${expenses.value} - ${discripInput.value} - ${selecting.value}`));    
   
    // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');
   // Add classes to del button
   deleteBtn.className = 'btnbtnbtn';
   editBtn.className = 'btnedit';
   // Append text node
   deleteBtn.appendChild(document.createTextNode('delete'));
   editBtn.appendChild(document.createTextNode('edit'));
  // Append button to li
   li.appendChild(deleteBtn);  
   li.appendChild(editBtn);
   expenseList.appendChild(li);   

 //update
 expenses.value='';
 discripInput.value='';
 selecting.value='';    }

//remove items
function removeItem(e){
    if(e.target.classList.contains('btnbtnbtn')){
        var li=e.target.parentElement;
        expenseList.removeChild(li) 
        const key  = li.id;
        localStorage.removeItem(key);

         //update
         expenses.value='';
         discripInput.value='';
         selecting.value='';
    }
}

    function editexpense(e){
    if(e.target.classList.contains('btnedit')){
        var li=e.target.parentElement;
        expenseList.removeChild(li) 
        const key  = li.id;
        const n=li.num;
        const na=li.expense;
        localStorage.removeItem(key);
    
        //update
        expenses.value=na;
        discripInput.value=key;
        selecting.value=n;
    }
}