const data= document.querySelector("#input");
const list=document.querySelector(".task");
const button= document.querySelector(".button");
function addtask(){
    if(data.value===''){
        alert("ADD TASK");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=data.value;
        
        list.appendChild(li);
        data.value='';
        let span= document.createElement("span");
        li.appendChild(span);
        
    }
    saveData();
};
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        
    saveData();
       
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        
    saveData();
        
    }
},false);
function saveData(){
    
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    var savedData = localStorage.getItem("data");
    if (savedData) {
        list.innerHTML = savedData;
}
}
showTask();