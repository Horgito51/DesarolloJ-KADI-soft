
const prueba= document.getElementById('pruebaxd');
console.log(prueba);
prueba.classList.add('Fondo-Rojo');
prueba.innerHTML='<p>Eres increible</p> <button onclick="cambiarColor(\'pruebaxd\')"> Presione</button>';
let hola=document.createElement('p');
hola.textContent='Hola Mundo';
prueba.appendChild(hola);x
prueba.addChild
function cambiarColor(idElemento){
    const elemento= document.getElementById(idElemento);
    let texto=document.createElement('p');
    texto.textContent='SALUDOS';

    elemento.appendChild(texto);
}


