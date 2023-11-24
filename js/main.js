const punto = ".";
const blanco = " ";
let nombre;
let altura;
let peso;
let edad;
let alturaCuadrado;
let imc;
let nivelActividad;
let resultadoImb;
let reqCalorico;

//FUNCIONES

//CALCULO DE IMB Y REQUERIMIENTO CALORICO SEGUN SEXO Y NIVEL DE ACTIVIDAD DECLARADO 
function imbHombre() {
    if (edad > 60) {
        resultadoImb = peso * 13.5 + 487;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 30) {
        resultadoImb = peso * 11.6 + 879;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 18) {
        resultadoImb = peso * 15.3 + 679;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 9) {
        resultadoImb = peso * 17.5 + 651;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else {
        alert("Su metabolismo basal no se debe calcular.");
    }

    nivelActividad = prompt("Indique su nivel de actividad: \n 1 generalmente inactivo (Sentado), \n 2 levemente activo(Caminatas), \n 3 moderadamente activo (Ejercicio 2 a 3 veces por semana), \n 4 Activo (Ejerc. más de 3 veces por semana), \n 5 Muy activo (Ejerc. todos los días)");
    switch (nivelActividad) {
        case "1":
            reqCalorico = resultadoImb * 1.2;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "2":
            reqCalorico = resultadoImb * 1.3;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "3":
            reqCalorico = resultadoImb * 1.4;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "4":
            reqCalorico = resultadoImb * 1.5;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "5":
            reqCalorico = resultadoImb * 1.7;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        default:
            alert("Digite una opción válida.");
            break;
    }

};

function imbMujer() {
    if (edad > 60) {
        resultadoImb = peso * 10.5 + 596;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 30) {
        resultadoImb = peso * 8.7 + 829;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 18) {
        resultadoImb = peso * 14.7 + 479;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 9) {
        resultadoImb = peso * 12.2 + 746;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else {
        alert("Su metabolismo basal no se debe calcular.");
    }
    nivelActividad = prompt("Indique su nivel de actividad: \n 1 generalmente inactivo (Sentado), \n 2 levemente activo(Caminatas), \n 3 moderadamente activo (Ejercicio 2 a 3 veces por semana), \n 4 Activo (Ejerc. más de 3 veces por semana), \n 5 Muy activo (Ejerc. todos los días)");
    switch (nivelActividad) {
        case "1":
            reqCalorico = resultadoImb * 1.2;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "2":
            reqCalorico = resultadoImb * 1.3;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "3":
            reqCalorico = resultadoImb * 1.4;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "4":
            reqCalorico = resultadoImb * 1.5;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "5":
            reqCalorico = resultadoImb * 1.7;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        default:
            alert("Digite una opción válida.");
            break;
        }
    };
    
function calculoIMC(){
        imc = parseFloat(peso.value) / parseFloat(alturaCuadrado);
        console.log(imc.toFixed(2));
       
};

//AGREGAR OBJETO AL ARRAY
function ingresarDatos() {

    // INGRESAR DATOS

    //NOMBRE
    nombre = document.getElementById("nombre");
    nombre.addEventListener("change", () => {
        alert("Buen día "+nombre.value+".");
    });
     
        //EDAD

        edad = document.getElementById("edad");
        edad.addEventListener("change", () => {
            console.log(edad.value);
        });
        
        //ALTURA
        
        altura = document.getElementById("altura");
        altura.addEventListener("change", () => {
            console.log(altura.value);   

            alturaCuadrado = altura.value*altura.value;
            console.log(alturaCuadrado.toFixed(2));
            
            });       
       
        //PESO
    
        peso = document.getElementById("peso");
        peso.addEventListener("change", () => {
            console.log(peso.value);
        });
        
        // let nuevoUsuario = {
            //     nombre: nombre,
            //     edad: edad,
            //     peso: peso,
            //     imc: imc
            
            // };
            
            // console.log(nuevoUsuario);
            
            // Usuarios.push(nuevoUsuario);
            
            // alert("Usuario: " + nuevoUsuario.nombre + ",\nEdad: " + nuevoUsuario.edad + " años,\nPeso: " + nuevoUsuario.peso + " kilos,\nIMC: " + nuevoUsuario.imc.toFixed(2) + ".\nDatos guardados correctamente.");
            
        };
        
        
        
        //INICIO DEL PROGRAMA
        
        //DECLARACION DE ARRAY
        const Usuarios = [];
        
        ingresarDatos();
        
        const boton = document.getElementById("imc");
        boton.addEventListener("click", ()=>{
            calculoIMC();
            let parrafo=document.createElement("div");
            parrafo.innerHTML=`<p>Según los datos ingresados su <b>IMC</b> (Índice de Masa Corporal) es <b>${imc.toFixed(2)}</b></p>`;
            document.body.appendChild(parrafo);
        });


        //SOLICITUD DE CONDICION
/*
let condicion = prompt("Indiquenos su condición.\nDigite:\n 1 para Hombre\n 2 para Mujer");

while (condicion != "1" && condicion != "2") {

    alert("OPCION INGRESADA INCORRECTA");

    condicion = prompt("Indiquenos su condición.\nDigite:\n 1 para Hombre\n 2 para Mujer");
};
switch (condicion) {
    case "1":
        imbHombre();
        break;
    case "2":
        imbMujer();
        break;

};


let continuar = prompt("Cómo desea continuar?\n Digite una de las siguientes opciones:\n 1 Realizar otra consulta.\n 0 Salir.")

while (continuar !== "0") {

    switch (continuar) {
        case "1":
            
        agregarUsuario();

            //SOLICITUD DE CONDICION

            condicion = prompt("Indiquenos su condición.\nDigite:\n 1 para Hombre\n 2 para Mujer");

            while (condicion != "1" && condicion != "2") {

                alert("OPCION INGRESADA INCORRECTA");

                condicion = prompt("Indiquenos su condición.\nDigite:\n 1 para Hombre\n 2 para Mujer");
            }
            switch (condicion) {
                case "1":
                    imbHombre();
                    break;
                case "2":
                    imbMujer();
                    break;

            };

            continuar = prompt("Cómo desea continuar?\n Digite una de las siguientes opciones:\n 1 Realizar otra consulta.\n 0 Salir.")

    }
}
alert("Hasta luego.")
*/


