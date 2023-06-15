//Variables
const Objetivo = document.querySelector('#Objetivo');
const Tiempo = document.querySelector('#Tiempo');
const Minimo = document.querySelector('#Minimo');
const Maximo = document.querySelector('#Maximo');
const Sett = document.querySelector('#Sett');
const Nivel = document.querySelector('#Nivel');
const Sexo = document.querySelector('#Sexo');
const resultado = document.querySelector('#resultado');


//Generar un objeto  con la busqueda 
const datosBusqueda = {
    Objetivo : '',
    Tiempo : '',
    Minimo : '',
    Maximo : '',
    Sett : '',
    Nivel : '',
    Sexo : '',

}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarRutinas(rutina);//muestra las rutinas la cargar

});
//leer los select de busqueda
Objetivo.addEventListener('change', e => {
    datosBusqueda.Objetivo = e.target.value;

    filtrarRutina();

});
Tiempo.addEventListener('change', e => {
    datosBusqueda.Tiempo = e.target.value;

    filtrarRutina();

});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarRutina();

});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    
    filtrarRutina();


});
Sett.addEventListener('change', e => {
    datosBusqueda.Sett = parseInt( e.target.value);
    filtrarRutina();


});
Nivel.addEventListener('change', e => {
    datosBusqueda.Nivel = e.target.value;
    filtrarRutina();


});
Sexo.addEventListener('change', e => {
    datosBusqueda.Sexo = e.target.value;
    filtrarRutina();

    console.log(datosBusqueda);
});


//funciones
function mostrarRutinas (rutina) {

    LimpiarHTML(); //elimina el html previo

    rutina.forEach ( rutina => {
        const {Objetivo, Rutina, Tiempo, Ejercicios, Sett, Sexo, Nivel} = rutina;
        const rutinaHTML = document.createElement('p');
        rutinaHTML.textContent = `${Objetivo} - ${Tiempo} - N°Ejer: ${Ejercicios} - Set: ${Sett} - Sexo: ${Sexo} - Nivel: ${Nivel} - Rutina:  ${Rutina} `;
         

         //insertar resultado en el HTML
         resultado.appendChild(rutinaHTML);
    } )
}
//Limpiar HTML
function LimpiarHTML (){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//funcion que filtra en base a la busqueda
function filtrarRutina(){
    const resultado = rutina.filter( filtrarObjetivo).filter(filtrarTiempo).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarSett).filter(filtrarNivel).filter(filtrarSexo);
    
    //si no hay resultados lo avisa.
    if(resultado.length){
        mostrarRutinas(resultado);  
    } else{
        noResultado();
    }

 };
 //funcion para cuando no hay resultado.
 function noResultado (){
    LimpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = "No hay rutinas con esas caracteristicas, Intenta con otros datos";
    resultado.appendChild(noResultado);
 }
//funcion que fultra el objetivo del buscador
function filtrarObjetivo (rutina){
    if (datosBusqueda.Objetivo) {
        return rutina.Objetivo === datosBusqueda.Objetivo;
    }
    return rutina;
};
function filtrarTiempo (rutina){
    if (datosBusqueda.Tiempo) {
        return rutina.Tiempo === datosBusqueda.Tiempo;
    }
    return rutina;
};
function filtrarMinimo (rutina){
    if (datosBusqueda.minimo) { 
        return rutina.Ejercicios >= datosBusqueda.minimo;
    }
    return rutina;
};
function filtrarMaximo (rutina){
    if (datosBusqueda.maximo) { 
        return rutina.Ejercicios <= datosBusqueda.maximo;
    }
    return rutina;
};
function filtrarSett (rutina){
    if (datosBusqueda.Sett) {
        return rutina.Sett === datosBusqueda.Sett;
    }
    return rutina;
};
function filtrarNivel (rutina){
    if (datosBusqueda.Nivel) {
        return rutina.Nivel === datosBusqueda.Nivel;
    }
    return rutina;
};
function filtrarSexo (rutina){
    if (datosBusqueda.Sexo) {
        return rutina.Sexo === datosBusqueda.Sexo;
    }
    return rutina;
};