// let numeroUno, numeroDos

// function sumar() {
//     numeroUno = +document.getElementById('numero-uno').value ;
//     numeroDos = +document.getElementById('numero-dos').value ;
//     alert(numeroUno + numeroDos)

// }

const opciones = ['modulo1', 'modulo2', 'modulo3', 'modulo 3']

function generarListaOrdenada(vec){

    let s='';

    function comienzo(){
        s = '<ol>';
    }
    function fin(){
        s += '</ol>';
    }
    // ejecutar funcion comiezo 
    comienzo();
    // llenar lista con ol 
    for (let f = 0; f < vec.length; f++){
        s = s + '<li>' + vec[f] + '</li>';
    }
    // ejecutar funcion fin 
    fin();
    return s;
}
document.getElementById('div1').innerHTML = generarListaOrdenada(opciones);

// /////////////////////ejemplo2: creando div html con un array //////////////////////////////
const numPrueba = [2, 4, 6, 6, 8, 10, 12]

function crearDivs(div){
    let d = '';
    function comienzoDivs (){
        d = '<div>';
    }
    function finDivs (){
        d += '</div>';
    }
    comienzoDivs();
    for (let i = 0; i < div.length; i++) {
        d = d + '<div>' + div[i] + '</div>'
    }
    finDivs();
    return d;
}
document.getElementById('array1').innerHTML = crearDivs(numPrueba);


// opcion 1
// function mostrar(){
//     for (let i = 0; i < array.length; i++) {
//         console.log(arr[i]);
//     }
// }
// mostrar(numPrueba);

// opcion2
// const mtdMostrar = () => {
//     numPrueba.forEach((valor, i)=> {
//         alert('numero' + i + '['+valor+']')
//     })
// }
// mtdMostrar();

// opcion3 dom
function fnMostrarDom(arr){
    
    // for (let i = 0; i < arr.length; i++) {
    //     document.getElementById(elemento).innerHTML+=`<div> ${arr[i]}</div>`;
    // }

    //opcion4
    arr.forEach(valor => {
        document.getElementById(valor).innerHTML+=`<div> ${arr[i]}</div>`;
    } );
};

// fnMostrarDom(numPrueba);



// ////////////////////////////////////////////componentes formularios/////////////////////////////////////////// 

let resul;
function calcular() 
{
    let numUno = document.getElementById("n1").value
    numDos = document.getElementById("n2").value 
    if (numUno>0 && numDos>0) 
    {
        resul = parseInt(numUno) + parseInt(numDos)
    
    }else
    {
        alert

    }
    
     document.getElementById("formRes").value = resul
}


/* ///////////////////////////////////////////////////ejercicio 2//////////////////////////////////// */
window.onload = function() 
{
    document.querySelector("#sumar").onclick = sumar
    document.querySelector("#restar").onclick = restar
    document.querySelector("#multiplicar").onclick = multiplicar
    document.querySelector("#dividir").onclick = dividir
}
function sumar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) + parseInt(numDos);
}
function restar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) - parseInt(numDos);
}
function multiplicar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) * parseInt(numDos);
}
function dividir() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) / parseInt(numDos);
}
function calcularBoton()
{
    document.querySelector("#resul").value=resul
}
/* //////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////ejercicio 3///////////////////////////////////////////////// */
let num;
function cuentaRegre() 
{
    document.getElementById("tiempo").value = num
    num--
    if (num> 0) 
    {
       setTimeout(cuentaRegre, 1000)
    }
}


function datos() 
{
    num =+ document.getElementById("num").value
    cuentaRegre()
}

/* //////////////////////////////////////   //////ejecicio 7/////////////////////////////   ////////////////////// */
let color= document.getElementById('select1')
function cambiarColor() 
{
    document.getElementById('text1').value = color.selectedIndex
    document.getElementById('text2').value = color.options[color.selectedIndex].text
    document.getElementById('text3').value = color.options[color.selectedIndex].value
    let valuecolor = color.options[color.selectedIndex].value
    document.getElementById('valuecolor').value = ("#"+valuecolor)  
    
}
/*  el evenentlistener es el que esta pendiente de los eventos o agregar eventos*/
color.addEventListener('change', cambiarColor )
/* ///////////////////////////////////// */
/* ///////////////////////////////////////////////////ejercicio 5 textarea//////////////////////////////////////// */
const controlarCaracteres = () =>
{
    let tamTextarea = document.getElementById('description')
    if (tamTextarea.value.length == 0) {
        alert('campo de texto vacío')
        
    }else if (tamTextarea.value.length > 50) {
        alert(' Texto debe ser de 50max')
        
    }else{
        alert(' Tamaño de texto correcto')

    }
}
/* funcion caracteres */
let boton= document.getElementById('btnTextArea')
boton.addEventListener("click", controlarCaracteres)
/* ///////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////////ejercicio/////////////////////////////////////////////////////// 6 *
/*  expresiones regulares*/

/* PATRON SE CREA CON SLASH INICIA ^ FINALIZA $ */
/* let patron = /[a-zA-Z]/
let patroFinaliza = /[a-zA-Z]$/arent
let patronInicia = /^[a-zA-Z]/ */

let patronStartLet = /^[a-zA-Z]/;
/* let patronStartLet = "Hola"; */
let patronVocales = /[aeiouAEIOUáéíóú]/;
let alertTexto = document.getElementById("alertTexto");

let textoAfirmar = "Ha ingresado los caracteros correctamente";
let textoNegar = "Los caracteres no están correctos";

function validarCaracteres()
{
    alert("gh")
    let textoExp = document.getElementById("textoExp").value;
    
    if(patronStartLet.test(textoExp) && patronVocales.test(textoExp))
    {
        alertTexto.innerHTML = textoAfirmar;
        
        alertTexto.classList.remove("text-danger")
        alertTexto.classList.add("text-success")
    }
    else
    {
        alertTexto.innerHTML = textoNegar;
        alertTexto.classList.remove("text-success")
        alertTexto.classList.add("text-danger")
    } 
}

/* //////////////////////////////////////////////////ejercicio 7////////////////////////////////////////////////////////////// */

let patronNumLet = /^[a-zA-Z0-9]*$/
let patronNumeros = /[0-9]{1}/

let alertTexto2 = document.getElementById(`alertTexto2`);

function validarNumeros(){

    let textoVali = document.getElementById(`textoVali`).value;
    
    if(patronNumLet.test(textoVali) && patronNumeros.test(textoVali))
    {
        alertTexto2.innerHTML = textoAfirmar;

        alertTexto2.classList.remove("text-danger")
        alertTexto2.classList.add("text-success")
    }
    else
    {
        alertTexto2.innerHTML = textoNegar;
        alertTexto2.classList.remove("text-success")
        alertTexto2.classList.add("text-danger")
    }
}

// ///////////////////////////////////////////////ejercicio 8 /////////////////////////////////////////////////////////////
// let patronCodLet = /^[a-zA-Z0-9]*$/
// let patronCodigo = /[0-9]{1}/
let patronCodigo = /^607[0-9]{7}$/

let alertTexto3 = document.getElementById(`alertTexto3`);

function validarCodigo(){
    
    let textoCod = document.getElementById(`textoCod`).value;
    
    if(patronCodigo.test(textoCod))
    {
        alertTexto3.innerHTML = textoAfirmar;

        alertTexto3.classList.remove("text-danger")
        alertTexto3.classList.add("text-success")
    }
    else
    {
        alertTexto3.innerHTML = textoNegar;
        alertTexto3.classList.remove("text-success")
        alertTexto3.classList.add("text-danger")
    }
}
/* inneHTML:texto interno de un selector */
/* ejemplo 2 */


// /////////////////////////////////////////////////////////ejercicio 9 ////////////////////////////////////////////////////////////

let textoP = document.getElementById(`texto-p`)
let textoTeclado = document.getElementById(`texto-teclado`)

textoTeclado.addEventListener('input', function ()
{
    textoP.innerHTML = `Ha ingresado ${textoTeclado.value.length} palabras`
}
)

// //////////////////////////////////////////////////////////ejercicio 10 //////////////////////////////////////////////////////////

let textoPDos = document.getElementById(`texto-p2`)
let cincuentaCaracteres = document.getElementById(`cincuenta-caracteres`)

cincuentaCaracteres.addEventListener('input', function ()
{
    let cantCaracteres = 50 - cincuentaCaracteres.value.length
    
    textoPDos.innerHTML = `la cantidad de caracteres disponibles es: ${cantCaracteres}`
}
)

// ///////////////////////////////////////////////////////////ejercicio 13 /////////////////////////////////////////////////////

function muestra(num) {
    let imagen =  document.images[num].src
    let grande = document.images["pantalla"]
    grande.src = imagen;
}


// const imgUno = document.querySelector('#imgA');
// const imgDos = document.querySelector('#imgB')
// const imgTres = document.querySelector('#imgC')
// const imgCuatro = document.querySelector('#imgD')

// function muestra(num) {
//     let imagen =  document.images[num].src
//     let grande = document.images["screen"]
//     grande.src = imagen;
// }

// imgUno.addEventListener("click", ()=> muestra('primera'))
// imgDos.addEventListener("click", ()=> muestra(2))
// imgTres.addEventListener("click", ()=> muestra(3))
// imgCuatro.addEventListener("click", ()=> muestra(4))



// function fnAgregarLista (){
//     const node = document.createElement('li');
//     const textNode = document.createTextNode('water')
//     node.appendChild(textNode)
//     document.getElementById('myList')
// }

// let cualquiernombre = document.getElementById("btnadd");
// cualquiernombre.addEventListener('click',fnAgregarLista);




// ///////////////////////////////////////////////////ejercicio 14 /////////////////////////////////////////////////////////////////

const nuevoElemento = document.createElement("p")

// crenado un nodo de texto 
const nuevoTexto = document.createTextNode("insertando nuevo texto - Coex")

// opcio 1 
const nuevoNodo = nuevoElemento.appendChild(nuevoTexto)

// opcion 2 
// nuevoElemento.appendChild(nuevoTexto)

function fnCrear(){
    // document.getElementById("nuevoTexto").appendChild(nuevoElemento);

    let contenedor = document.getElementById("nuevoTexto");
    contenedor.appendChild(nuevoNodo);
}
let bnt7 = document.getElementById("btnCrear").addEventListener("click",fnCrear)


function fnCopiar(){
    let copiarNodo = document.getElementById('nuevoTexto')
    copia = copiarNodo.cloneNode(true);
    document.getElementById('copia').appendChild(copia);
}
let bnt8 = document.getElementById("btnCopiar").addEventListener("click",fnCopiar)


function fnEliminar(){
    let eliminarNodo = document.getElementById('nuevoTexto')
    elimianrNodo.parentNode.removeChild(eliminarNodo)
}
let bnt9 = document.getElementById("btnEliminar").addEventListener("click",fnEliminar)


// ejercicio 15 

let listaElementos = document.querySelector('elementos')

function fnAgregarElemento(evento){
    evento.preventDefault();
    // capturar el valor de la caja de texto 
    let newElement = document.getElementById("txtElemento").value;

    // crear nuevo elemento de lista li 
    let li  = document.createElement("li");

    // crear nuevo elemento de tipo boton 
    let btnDelete = document.createElement("button");

    //agregar elementos a las clases 
    li.className = "list-group-item";
    btnDelete.className = "btn btn-light btn-outline-danger btn-sm float-end delete"

    //agregar el nodo de textoNote
    li.appendChild(document.createTextNode(newElement));
    btnDelete.appendChild(document.createTextNode("X"));

    listaElementos.appendChild(li);
    li.appendChild(btnDelete);
}
let form = document.querySelector("#frmList");
form.addEventListener("submit",fnAgregarElemento)

function fnEliminarElemento (evento){
    if (evento.target.classList.contains("delete")) {
        if (confirm("¿Seguro que deseas elimianr?")) {
            let li = evento.target.parentElement;
            listaElementos.removeChild(li);            
        }
        
    }
}
listaElementos.addEventListener("click", fnEliminarElemento);