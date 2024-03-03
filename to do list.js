var addlist = document.querySelector(".assbut");
var dolist = document.querySelector(".dolist");
var inpt = document.querySelector(".inpt");
var check = document.querySelector(".check");


addlist.addEventListener("click",function(e){
    if(inpt.value==""||inpt.value == "Invalid input"){
        inpt.value = "Invalid input";
    }
    else{
        var listelem = document.createElement("div");
        dolist.append(listelem);
        listelem.classList.add("listelem");
    
        var name = document.createElement("div");
        listelem.append(name);
        name.innerText = inpt.value;
        name.classList.add("name");
    
        var butlist = document.createElement("div");
        listelem.append(butlist);
        butlist.classList.add("butlist");
    
        var check = document.createElement("div");
        butlist.append(check);
        check.innerHTML = "&#10003;"
        check.classList.add("check");
    
        var trash = document.createElement("div");
        butlist.append(trash);
        trash.innerHTML = "&#128465;";
        trash.classList.add("trash");

        check.addEventListener("click",function(){
            if(this.parentElement.parentElement.firstElementChild.classList.contains("name2") == false){
                this.innerHTML = "x"
                this.parentElement.parentElement.firstElementChild.classList.toggle("name2")
            }
            else{
                check.innerHTML = "&#10003;"
                this.parentElement.parentElement.firstElementChild.classList.toggle("name2")
            }
        })

        trash.addEventListener("click",function(){
            this.parentElement.parentElement.remove()
        })
    }
})


