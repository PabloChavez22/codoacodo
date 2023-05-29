/*------cuadros-color nose si dejarlo--------*/
const color1 = document.getElementById("cuadro_color1");
const color2 = document.getElementById("cuadro_color2");
const color3 = document.getElementById("cuadro_color3");
const color = ["rgba(158, 193, 204, 0.5)", "rgba(173, 216, 230, 0.5)", "rgba(255, 255, 0, 0.4)"];

const persona = [];
var numeroTicket = 1000;
/*-----------total a pagar----------*/
var valor_ticket = 200;

function calculo(){
    ShowSelected();
    var multi = ShowSelected();
    return multi;
}

function ShowSelected(){
    var cod = cantDescuento//document.getElementById("seleccion").value; aca cambie
    switch(cod){
        case '0':
            color1.style.backgroundColor = "";
            color2.style.backgroundColor = "";
            color3.style.backgroundColor = "";
            break;
        case '0.8':
            color1.style.backgroundColor = color[0];
            color2.style.backgroundColor = "";
            color3.style.backgroundColor = "";
            break;
        case '0.5':
            color1.style.backgroundColor = "";
            color2.style.backgroundColor = color[1];
            color3.style.backgroundColor = "";
            break;
        case '0.15':
            color1.style.backgroundColor = "";
            color2.style.backgroundColor = "";
            color3.style.backgroundColor = color[2];
            break;
    }
    return cod;
}

function mostrar() {
    var resultado = 0;
    resultado = (cantTicketTotal * (valor_ticket - (valor_ticket * calculo())));
    document.getElementById("total_mostrar").innerHTML = "Total a Pagar: $ " + resultado;//aca muestro en total a pagar.
    totalApagar = resultado;
}

//variables en general. para guardar y usar en las funciones.
var cantTicketTotal = 0;
var cantDescuento = 0;
var totalApagar = 0;

const aca =document.getElementById("seleccion");
aca.addEventListener("change", (e) =>  {
    e = (document.getElementById("seleccion").value);
    cantDescuento = e;
    console.log("aca esta el valor "+ cantDescuento);//puedo borrar esto
    if(cantTicketTotal < 1){
        document.getElementById("total_mostrar").innerHTML = "Total a Pagar: $ NaN";
    }else{
        mostrar();
    }
});

/*---------------------------*/

const boton_borrar = document.getElementById("borrar");
boton_borrar.addEventListener("click",(event) =>{
    document.getElementById("total_mostrar").innerHTML = "Total a Pagar: $";
    comprobante = document.getElementById('comprobante');
    comprobante.classList.add("ocultar");
});

const inputCantidad = document.getElementById("cant_tickets");
inputCantidad.addEventListener("change",(event) =>{
    cantTicketTotal = event.target.value;
    if(event.target.value < 1){
        document.getElementById("total_mostrar").innerHTML = "Total a Pagar: $ NaN";
    }else{
        mostrar();
    }
});
/**datos */
const boton_resumen = document.getElementById("resumen");
boton_resumen.onclick = agregar;
function aviso() {
    cuadro_vacio = document.getElementById('alert_vacio');
    cuadro_vacio.innerHTML = 
    '\nTicket N° : '+numeroTicket+'\n\n'+
    'Nombre : '+persona[0] +'\n'+
    'Apellido : '+persona[1] +'\n'+
    'Correo : '+persona[2] +'\n'+
    'Cantidad : '+persona[3] +'\n'+
    'Categoria : '+persona[4] +'\n\n'+
    'Total : $ '+persona[5] +'.\n\n';   
}
/*const persona = [nombre,apellido,correo,cantidad,categoria,total];*/

function agregar (){
    boxvalue = document.getElementById('name1').value;
    boxvalue1 = document.getElementById('apellido').value;
    boxvalue2 = document.getElementById('email').value;
    boxvalue3 = document.getElementById('seleccion').options[seleccion.selectedIndex].text;
    boxvalue4 = document.getElementById('cant_tickets').value;
    const sujeto = [];

    sujeto.push(boxvalue);
    sujeto.push(boxvalue1);
    sujeto.push(boxvalue2);
    sujeto.push(boxvalue4);
    sujeto.push(boxvalue3);
    sujeto.push(totalApagar);
    console.log(sujeto);//muestro en consola array.

    
    sujeto.map((item) => {//array clonado en persona.
        persona.push(item);
        return item;
    });
    console.log(persona);//muestro en consola que clono array.
    
    numeroTicket = numeroTicket+1;
    comprobante = document.getElementById('comprobante');
    if(boxvalue && boxvalue1 && boxvalue2 && boxvalue4 > 0){
        comprobante.classList.toggle("ocultar");
        if ( comprobante.classList.contains("ocultar")) {
            comprobante.classList.toggle("ocultar");
        }
        aviso();
    }
    
    persona.splice(0,persona.length);//limpio el array exterior.
    console.log(persona);//verifico en consola array exterior vacio.
};

let loginForm = document.getElementById('formulario1');//para q no envie formulario sin ver ticket.
loginForm.addEventListener('submit',(e) => {
    e.preventDefault();

    botonclickeado = document.getElementById('posta');
    if(!botonclickeado.onclick){
        console.log('msj no se preciona');
    }else{
        console.log('aca tiene q mandar ticket');
    }
});

function enviar_formularioConBoton(){//para q envie 
    let formulario = document.getElementById("formulario1");
    formulario.submit();
}