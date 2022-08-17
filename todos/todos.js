const list = document.querySelector(".List");
const Input = document.querySelector("input");
const mark = document.querySelector("i");
const Legend = document.createElement("div")
const Lig1 = document.createElement("div");
const Lig2 = document.createElement("div");
const Lig3 = document.createElement("div");
const Func1 = document.createElement("span");
const Func2 = document.createElement("span");
const Func3 = document.createElement("span");
const By = document.createElement("div");
const ac = document.createElement("span");
const Name = document.createElement("name")
const main = document.querySelector(".Main");
var counter = 0

document.addEventListener("keyup", (e) =>{
    if(e.code === "Enter"){
        counter++;

        const block = document.createElement("div");
        const Do = document.createElement("div")
        const check = document.createElement("div")
        const xmarK = document.createElement("div");
        const Xmark = document.createElement("i");

        Do.innerHTML = Input.value;

        if(mark.className == "fa-solid fa-angle-up"){
            list.style.display = "inline-block"
            mark.className = "fa-solid fa-angle-down"
        }

        block.className = "block";
        Do.className = "NeedToDo";
        check.className = "Check"
        xmarK.className = "xmark"
        Xmark.className = "fa-solid fa-xmark"
        Legend.className = "Legend";
        Lig1.className = "lig1";
        Lig2.className = "lig2";
        Lig3.className = "lig3";
        Func1.className = "function1";
        Func2.className = "function2";
        Func3.className = "function3";
        By.className = "createdBy";
        ac.className = "AC";
        Name.className = "name";
        check.setAttribute("onclick", "CheckShow(this)");
        xmarK.setAttribute("onclick", "DeleteBlock(this)");
        Lig3.setAttribute("onclick", "ClearCompleted(this)");
        Func1.setAttribute("onclick", "ALLfunction(this)");
        Func2.setAttribute("onclick", "ACTIVEfunction(this)");
        Func3.setAttribute("onclick", "COMPLETEDfunction(this)");

        if(counter == 1){
            Lig1.innerHTML = counter + " item left"
        }

        else{
            Lig1.innerHTML = counter + " item left" 
        }

        Func1.innerHTML = "All";
        Func2.innerHTML = "Active";
        Func3.innerHTML = "Completed";

        Lig3.innerHTML = "Clear completed";

        ac.innerHTML = "Created by ";
        Name.innerHTML = "Maxim Pavlov";

        By.append(ac, Name);

        Lig2.append(Func1, Func2, Func3)
        Legend.append(Lig1, Lig2, Lig3);
        main.append(Legend, By);
        xmarK.append(Xmark);
        block.append(check);
        block.append(Do);
        block.append(xmarK);
        list.append(block);

        Input.value = ""
    }
})

mark.addEventListener("click", () =>{
    if(mark.className == "fa-solid fa-angle-up"){
        mark.className = "fa-solid fa-angle-down";
        list.style.display = "inline-block";
    }

    else{
        mark.className = "fa-solid fa-angle-up";
        list.style.display = "none";
    }
})

function CheckShow(check){
    if(check.childNodes.length == 0){
        mark2 = document.createElement("i");
        mark2.className = "fa-solid fa-check";
        check.append(mark2)
        const block = check.parentNode;
        const Do = block.childNodes[1];
        Do.style.textDecoration = "line-through";
        Do.style.opacity = "0.6";
        const Lig1 = document.querySelector(".lig1")
        counter --;
        if(counter == 1){
            Lig1.innerHTML = counter + " item left"
        }

        else{
            Lig1.innerHTML = counter + " items left"
        }
    }

    else{
        mark2.remove();
        const block = check.parentNode;
        const Do = block.childNodes[1];
        Do.style.textDecoration = "";
        Do.style.opacity = "1";
        counter++;
        const Lig1 = document.querySelector(".lig1")
        if(counter == 1){
            Lig1.innerHTML = counter + " item left"
        }

        else{
            Lig1.innerHTML = counter + " items left"
        }
    }
}

function DeleteBlock(xmark) {
    const block = xmark.parentNode;
    const Lig1 = document.querySelector(".lig1")
    if(block.childNodes[1].style.textDecoration == ""){
        counter --;
        if(counter == 1){
            Lig1.innerHTML = counter + " item left"
        }

        else{
            Lig1.innerHTML = counter + " items left"
        }
    }
    block.remove();
}

function ClearCompleted(Text) {
    for(const i of list.childNodes){
        if(i.childNodes[1].style.textDecoration == "line-through"){
            i.remove();
            if(counter == 1){
                Lig1.innerHTML = counter + " item left";
            }

            else{
                Lig1.innerHTML = counter + " items left";
            }
        };
    }
}

function ALLfunction(Text){
    for(const i of list.childNodes){
        i.style.display = "flex";
    };
}

function ACTIVEfunction(Text){
    for(const i of list.childNodes){
        if(i.childNodes[1].style.textDecoration == "line-through"){
            i.style.display = "none";
        }

        else{
            i.style.display = "flex";
        }
    }
}

function COMPLETEDfunction(Text ){
    for(const i of list.childNodes){
        if(i.childNodes[1].style.textDecoration == ""){
            i.style.display = "none";
        }

        else{
            i.style.display = "flex";
        }
    }
}