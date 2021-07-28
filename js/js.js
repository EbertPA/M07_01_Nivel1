// window.onload = inicio;
// function inicio() {
//     console.log("Hola M07_01");
// }

window.addEventListener("load", function () {

    // Exercici 1
    console.log('Hola mundo');

    // Exercici 2
    alert('¡Me llamo Ebert!');

    // Exercici 3
    var name = "Ebert";
    var surname = "Pérez";
    console.log(`${name} ${surname}`);

    // Exercici 4
    var num1 = 15;
    var num2 = 53;
    console.log(`La suma entre ${num1} i ${num2} es ${num1 + num2}`);

    // Exercici 5
    var nota_examen = 4.6;
    var mensaje = "";
    if (nota_examen < 5)
        mensaje = `Ohh has suspendido el examen con un ${nota_examen}`
    else
        mensaje = `Ohh has aprobado el examen con un ${nota_examen}`
    alert(mensaje);

    // Exercici 6
    var color_coche = 'Tinc un cotxe de color blau';
    console.log(color_coche.replace("blau", "verd"));
    console.log(color_coche.replace(/[o]/g, "u"));


    // Exercici 7
    var lista = ['taula', 'cadira', 'ordinador', 'libreta'];
    console.log(lista);
    lista.forEach((element, pos) => console.log(`L'onjecte ${element} està a la posició ${pos}.`));

    // Exercici 8
    function calculadora(operador, valor1, valor2) {
        let resultado = 0;
        if (operador == "suma") resultado = valor1 + valor2;
        else if (operador == "resta") resultado = valor1 - valor2;
        else if (operador == "multiplica") resultado = valor1 * valor2;
        return resultado;
    }

    var resultat = calculadora('suma', 23, 10);
    console.log("suma: " + resultat);
    resultat = calculadora('resta', 23, 10);
    console.log("resta: " + resultat);
    resultat = calculadora('multiplica', 10, 23);
    console.log("multiplicación: " + resultat);

})
