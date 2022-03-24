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
/**
 * this is where the problem is
 */
const design = document.getElementById('design');
const color = document.getElementById('color');
color.disabled = true;



design.addEventListener('change', (e)=>{
    const colorOptions = document.querySelectorAll('#color option');
    color.disabled = false;
    for(let colors of colorOptions){
        colors.style.display ='none'
        if(e.target.value === colors.getAttribute('data-theme')){
            console.log('true')
            colors.style.display =''
          



           
        }
    }
})

