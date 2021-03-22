const button=document.querySelector('.mainservice .childservice');
const modal=document.querySelector('.modal-wrapper');
  

//button.forEach(film => {})

button.addEventListener('click', function(){
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.article').classList.add('blure');
})

document.querySelector('.modal span').addEventListener('click', function(){
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.article').classList.remove('blure');
})