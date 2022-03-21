const nameField = document.getElementById('name');
const otherJobField = document.getElementById('other-job-role');
const jobField = document.getElementById('title');

nameField.focus();
otherJobField.style.display = 'none';

jobField.addEventListener('change',(e)=>{
    const list = document.querySelectorAll('#title option');

    for(let job of list){
        if(e.target.value === 'other'){
            otherJobField.style.display = ''
            
        }
        else{
            otherJobField.style.display = 'none'
        }
    }
});

const design = document.getElementById('design');
const color = document.getElementById('color');
const colorOptions = color.children;

color.disabled = true;

design.addEventListener('change', (e)=>{
    color.disabled = false;
})

