let form = document.querySelector('form');

form.addEventListener('submit', e=>{
    e.preventDefault();
    const obj = {
        name : document.querySelector('#name').value,
        description : document.querySelector('#description').value,
    }

    axios.post('http://localhost:3000/add',obj)
    .then(location.reload())
})

const remain = document.querySelector('.remaining');
const complete = document.querySelector('.completed');




const deleteTodo=(id)=>{
    console.log('delete')
    axios.delete(`http://localhost:3000/delete/${id}`)
    location.reload()
    
}


const doneTodo=(id)=>{
    axios.patch(`http://localhost:3000/update/${id}`)
    location.reload()
    
}


axios.get('http://localhost:3000/')
.then(data => {
    console.log(data.data);
    data.data.forEach(i=>{
        if (i.done){
            complete.innerHTML += `<div>${i.name} -- ${i.description}</div>`
        }
        else {
            remain.innerHTML += `<div>${i.name} -- ${i.description} --     <button class='done' onclick='doneTodo(${i.id})'  id="${i.id}">Done</button> -- 
            <button class='delete' onclick='deleteTodo(${i.id})' id="${i.id}">Delete</button></div>`
        }
    })
})


