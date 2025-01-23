const list = document.querySelector(".list");
const agregar = document.querySelectorAll(".agregar");
agregar.forEach((boton)=>{
    boton.addEventListener('click', () =>{
        const form = document.querySelector('form');
        const task = document.querySelector('input').value;
        const item = list.appendChild(document.createElement("li"));
        item.classList.add("item");
        const newItem = list.lastChild
        if (task.length === 0){
            alert("No has escrito tu tarea");
            item.remove();
            del.remove();
            return
        }
        if (task.length >=1){
            item.textContent = task;
            const del = newItem.appendChild(document.createElement("button"));
            del.classList.add("delete");
            del.textContent = "Delete";
            del.addEventListener('click', () =>{
                newItem.remove();
            })
        }
        form.reset();
    })
})
