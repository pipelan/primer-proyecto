const boton = document.querySelector('.cont-menu')
const elementos_lista = document.querySelector('.menu-list')

    function mostrar(){
        if(elementos_lista.classList.contains('menu-active')){
            elementos_lista.classList.remove('menu-active')
        }else{
            elementos_lista.classList.add('menu-active')
        }
    }

boton.addEventListener('click', mostrar)