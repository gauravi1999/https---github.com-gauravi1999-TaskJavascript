function allowDrop(ev) 
{
    ev.preventDefault();
}

function drag(ev) 
{
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "copy";
}

function drop(ev) 
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var copyimg = document.createElement("img");
    var original = document.getElementById(data);
    copyimg.src = original.src;
    ev.target.appendChild(copyimg);
    
    copyimg.setAttribute("style", "display: block; margin-left: auto; margin-right:auto; width:50%;margin-top:50px ");
}