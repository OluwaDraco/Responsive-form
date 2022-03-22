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
color.disabled = true;


design.addEventListener('change', (e)=>{
    const colorOptions = document.querySelectorAll('#color option');
    color.disabled = false;
    for(let i =1;i<colorOptions.length;i++){
        const target = e.target;
        const theme = colorOptions[i];
        
        if(target.value === theme.getAttribute('data-theme')){
            target.hidden =false;
            theme.selected = true;


           
        }
    }
})

