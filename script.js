// const inputarea = document.querySelectorAll(".inputarea")
const studentname = document.querySelector("#studentname")
const id = document.querySelector("#id")
const rollno = document.querySelector("#rollno")
const classname = document.querySelector("#class")
const buttons = document.querySelector("#buts")
const maindiv = document.querySelector("#todo")
const textarea = document.querySelectorAll('.inputarea')

buttons.addEventListener("click", todolist)
function todolist() {
  // console.log("clicked")
  // console.log(studentname.value)
  // console.log(id.value)
  // console.log(rollno.value)
  // console.log(classname.value)
  if(studentname.value == '' || id.value == '' || rollno.value == '' || classname.value== ''){
    alert("fill the data")
  }else{
    const tocreateul = document.createElement("ul")
    tocreateul.classList.add("newui");
    const tocreateli1 = document.createElement("li")
    tocreateli1.classList.add("newli");
    const tocreateli2 = document.createElement("li")
    tocreateli2.classList.add("newli");
    const tocreateli3 = document.createElement("li")
    tocreateli3.classList.add("newli");
    const tocreateli4 = document.createElement("li")
    tocreateli4.classList.add("newli");
    tocreateli1.innerHTML = studentname.value;
    tocreateli2.innerHTML = id.value;
    tocreateli3.innerHTML = classname.value;
    tocreateli4.innerHTML = rollno.value;
    tocreateul.appendChild(tocreateli1)
    tocreateul.appendChild(tocreateli2)
    tocreateul.appendChild(tocreateli3)
    tocreateul.appendChild(tocreateli4)
    if (maindiv == '') return;
    if (maindiv == '') return;
    if (maindiv == '') return;
    if (maindiv == '') return;
   
    
    
  
    maindiv.appendChild(tocreateul)
    const deluts = document.createElement("button")
    tocreateul.appendChild(deluts)
    deluts.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deluts.classList.add("trash-buts")
    const edit = document.createElement("button")
    tocreateul.appendChild(edit)
    edit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
    edit.classList.add("trash-buts")
    
  
  
    deluts.addEventListener("click", delparents);
  
    function delparents(e) {
      const item = e.target;
  
  
      if (item.classList.contains("trash-buts") || item.parentElement.classList.contains("trash-buts")) {
        const parents = item.closest("ul");
        parents.remove();
      }
    }
    edit.addEventListener("click", editparents);
  
    function editparents(e) {
      const item = e.target;
      studentname.value = tocreateli1.innerHTML;
      console.log(tocreateli1.innerHTML)
      id.value = tocreateli2.innerHTML;
      classname.value = tocreateli3.innerHTML;
      rollno.value = tocreateli4.innerHTML;
      if (item.classList.contains("trash-buts") || item.parentElement.classList.contains("trash-buts")) {
        const parents = item.closest("ul");
        parents.remove();
        
      }
    }
  
  }
  

  studentname.value = ' ';
  id.value = ' ';
  classname.value = '';
  rollno.value = '';

}
//   i have to do if i can understood it/


    // console.log(tocreateli1)
    // console.log(tocreateli2)
    // console.log(tocreateli3)
    // console.log(tocreateli4)




