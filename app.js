//variables

//act1

let imagen = document.getElementById('img');

//act2

let saberMas = document.querySelectorAll('.sabermas');
let git = document.querySelector('.git');
let boton = document.querySelectorAll('.close');
//
let divFuera = document.querySelectorAll('.tarjeta');
let divDentro = document.querySelectorAll('.prueba-padre');

//act 4

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('.tricaja');

//imagen

function mouseover() {
    imagen.src = 'imagenes/cerebro.jpg'
};

imagen.addEventListener('mouseover', mouseover);

function mouseout() {
    imagen.src = 'imagenes/Imagen de WhatsApp 2023-12-29 a las 19.52.08_fff31522.jpg'
};

imagen.addEventListener('mouseout', mouseout);

//my portfolio


saberMas.forEach(function (mostrar, indice) {
    mostrar.addEventListener('click', function () {
        divFuera[indice].style.display = 'none';
        divDentro[indice].style.display = 'block'
    })  
});

boton.forEach(function (ocultar, indice) {
    ocultar.addEventListener('click', function () {
        divDentro[indice].style.display = 'none';
        divFuera[indice].style.display = 'block';
    })
});




//enviado con exito


document.getElementById('form').addEventListener('submit', function (event) {

    event.preventDefault();

    let nombre = document.getElementById('name').value;
    let telefono = document.getElementById('phone').value;
    let mail = document.getElementById('mail').value;
    let subject = document.getElementById('subject').value;
    let texto = document.getElementById('texto').value;

    if (!nombre || !telefono || !mail || !subject || !texto) {
        document.getElementById('respuesta').style.color = 'red';
        document.getElementById('respuesta').style.marginTop = '10px';
        document.getElementById('respuesta').style.marginLeft = '30%';
        document.getElementById('respuesta').innerText = 'Please complete all the form';
        return;
    };

    document.getElementById('respuesta').style.color = 'green';
    document.getElementById('respuesta').style.marginLeft = '26%';
    document.getElementById('respuesta').innerText = 'Your message was sent successfully!';

    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('mail').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('texto').value = "";
});


//slider

let sliderWidth = slider.offsetWidth;
let index = 0;

next.addEventListener('click', function () {
    if (index < slider.children.length - 1) {
        index++;
        slider.style.transform = `translateX(-${index * (sliderWidth / 2)}px)`;
        prev.style.display = 'block';
        next.style.display = 'none';
    }
});

prev.addEventListener('click', function () {
    if (index > 0) {
        index--;
        slider.style.transform = `translateX(-${index * (sliderWidth / 2)}px)`;
        next.style.display = 'block';
        prev.style.display = 'none';
    }
});



