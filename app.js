var container=document.querySelector('.container');
// var skill=document.querySelector('.m')

container.addEventListener('mouseover',e=>{
    if(e.target.parentElement.classList.contains('m')){
        add(e.target);
    }
});

container.addEventListener('mouseout',e=>{
    if(e.target.parentElement.classList.contains('m')){
        remove(e.target);
    }
});


function add(skill){
    skill.classList.add('animated', 'pulse', 'infinite', 'fast');
}
function remove(skill){
    skill.classList.remove('animated', 'pulse', 'infinite', 'fast')
}