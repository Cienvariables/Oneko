// Ejercicios---- https://www.arkaitzgarro.com/javascript/capitulo-18.html#ej01

/* 18.3 EJERCICIO 3
Crear un array llamado meses y que almacene el nombre de los doce meses del año.
Mostrar por pantalla los doce nombres utilizando la función console.log(). */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"];

for (let index = 0; index < meses.length; index++) {
    console.log(meses[index] + "\n");
}

meses.forEach(element => {
    console.log(element + "\n");
});

meses.forEach(function (element) {
    console.log(" --> " + element + "\n");
});

/* 18.4 EJERCICIO 4
A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];

Determinar cual de los dos elementos de texto es mayor
Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores 
necesarios para obtener un resultado true y otro resultado false
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos */

const valores = [true, 5, false, "hola", "adios", 2];
let posicion = -1;
let longitud = -1;

console.table(valores);
for (let i = 0; i < valores.length; i++) {
    const element1 = valores[i];
    if (typeof (element1) == "string") {
        if (element1.length > longitud) {
            longitud = element1.length;
            posicion = i;
        }
    }
}

if (longitud > 0) {
    console.log(`El texto de mayor longitud es ${valores[posicion]}`);
}



/* 18.5 EJERCICIO 5
Completar las condiciones de los if del siguiente script para que
los mensajes se muestren siempre de forma correcta:

var numero1 = 5;
var numero2 = 8;

if(...) {
  console.log("numero1 no es mayor que numero2");
}
if(...) {
  console.log("numero2 es positivo");
}
if(...) {
  console.log("numero1 es negativo o distinto de cero");
}
if(...) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
*/





/* 18.6 EJERCICIO 6
El cálculo de la letra del Documento Nacional de Identidad (DNI)
es un proceso matemático sencillo que se basa en obtener el resto
de la división entera del número de DNI y el número 23.
A partir del resto de la división, se obtiene la letra seleccionándola
dentro de un array de letras.

El array de letras es:

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
Por tanto si el resto de la división es 0, la letra del DNI es la T
y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:

Almacene en una variable el número de DNI indicado por el usuario y en otra variable
la letra del DNI que se ha indicado.
En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor
que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario
indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
Una vez calculada la letra, se debe comparar con la letra indicada por el usuario.
Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que
ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que
el número y la letra de DNI son correctos.*/

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = Number(prompt("Escribe tu numero de DNI: "));
if (!isNAN(dni)) {
    let indice = dni % 23;
    if (indice < letras.length) {
        let letra = letras[indice];
        console.log(`${dni}${letra}`);
    }
}

//Proyecto de una hora.
