const input = document.querySelector('.input-color')
const para = document.querySelector('.color-box')

input.addEventListener('change', function(){
    para.style.backgroundColor = input.value
})