// Todas las preguntas disponibles para este examen
const preguntas = [
    {
        //pregunta 1
        pregunta: "Complete the phrase with the correct answer: What ___ your name?",
        respuesta: [
            { texto: "is", correct:true},
            { texto: "are", correct:false},
            { texto: "do", correct:false},
            { texto: "am", correct:false},
        ]
    },
    {
        //pregunta 2
        pregunta: "Complete the phrase with the correct answer: How old ___ you?",
        respuesta: [
            { texto: "do", correct:false},
            { texto: "are", correct:true},
            { texto: "does", correct:false},
            { texto: "is", correct:false},
        ]
    },
    {
        //pregunta 3
        pregunta: "Complete the phrase with the correct answer: What ___ you want?",
        respuesta: [
            { texto: "are", correct:false},
            { texto: "am", correct:false},
            { texto: "do", correct:true},
            { texto: "is", correct:false},
        ]
    },
    {
        //pregunta 4
        pregunta: "Complete the phrase with the correct answer: ___ Diego like to play piano?",
        respuesta: [
            { texto: "does", correct:true},
            { texto: "am", correct:false},
            { texto: "is", correct:false},
            { texto: "are", correct:false},
        ]
    },
    {
        //pregunta 5
        pregunta: "Complete the phrase with the correct answer: I ___ from Peru",
        respuesta: [
            { texto: "am", correct:true},
            { texto: "is", correct:false},
            { texto: "do", correct:false},
            { texto: "does", correct:false},
        ]
    },
    {
        //pregunta 6
        pregunta: "Complete the phrase with the correct answer: They ___ good friends",
        respuesta: [
            { texto: "is", correct:false},
            { texto: "do", correct:false},
            { texto: "am", correct:false},
            { texto: "are", correct:true},
        ]
    },
    {
        //pregunta 7
        pregunta: "Complete the phrase with the correct answer: He ___ her homework",
        respuesta: [
            { texto: "are", correct:false},
            { texto: "does", correct:true},
            { texto: "is", correct:false},
            { texto: "do", correct:false},
        ]
    },
    {
        //pregunta 8
        pregunta: "Complete the phrase with the correct answer: ___ you speak French?",
        respuesta: [
            { texto: "am", correct:false},
            { texto: "is", correct:false},
            { texto: "do", correct:true},
            { texto: "does", correct:false},
        ]
    },
    {
        //pregunta 9
        pregunta: "Complete the phrase with the correct answer: I ___ proud of you",
        respuesta: [
            { texto: "does", correct:false},
            { texto: "do", correct:false},
            { texto: "is", correct:false},
            { texto: "am", correct:true},
        ]
    },
    {
        //pregunta 10
        pregunta: "Complete the phrase with the correct answer: ___ you ok?",
        respuesta: [
            { texto: "do", correct:false},
            { texto: "is", correct:false},
            { texto: "does", correct:false},
            { texto: "are", correct:true},
        ]
    },
    {
        //pregunta 11
        pregunta: "Complete the phrase with the correct answer: She ___ always late for work",
        respuesta: [
            { texto: "are", correct:false},
            { texto: "is", correct:true},
            { texto: "does", correct:false},
            { texto: "do", correct:false},
        ]
    },
    {
        //pregunta 12
        pregunta: "Complete the phrase with the correct answer: She ___ her job",
        respuesta: [
            { texto: "is", correct:false},
            { texto: "do", correct:false},
            { texto: "are", correct:false},
            { texto: "does", correct:true},
        ]
    },
    {
        //pregunta 13
        pregunta: "Complete the phrase with the correct answer: What ___ you doing?",
        respuesta: [
            { texto: "do", correct:false},
            { texto: "is", correct:false},
            { texto: "are", correct:true},
            { texto: "am", correct:false},
        ]
    },
    {
        //pregunta 14
        pregunta: "Complete the phrase with the correct answer: I ___ ok",
        respuesta: [
            { texto: "are", correct:false},
            { texto: "does", correct:false},
            { texto: "is", correct:false},
            { texto: "am", correct:true},
        ]
    },
    {
        //pregunta 15
        pregunta: "Complete the phrase with the correct answer: ___ this well done?",
        respuesta: [
            { texto: "do", correct:false},
            { texto: "is", correct:true},
            { texto: "are", correct:false},
            { texto: "am", correct:false},
        ]
    },
];


// Para que funcione el examen
const numeracion = document.getElementById("numeracion");
const ejercicioTexto = document.getElementById("ejercicioTexto");
const respuestasBoton = document.getElementById("respuestasbtn");
const siguientePreguntabtn = document.getElementById("siguientePreguntabtn");
const barraInferior = document.getElementById("barraInferior");
// La ventana de resultado
const ventanaResultado = document.getElementById("ventana");
const tituloVentana = document.getElementById("tituloEmergente");
const resultadoExamen = document.getElementById("resultado");
const cerrarbtn = document.getElementById("cerrarbtn");
// Boton para la IA
const IAbtn = document.getElementById("IAbtn");
const IAventana = document.getElementById("IAventana");

// variables predefinidas que se usaran
let preguntasRespondidas = 0;
let numeroPreguntaActual = 0;
let errores = 0;
let aciertos = 0;
var preguntasMostradas = [];

// Empezando el examen
function empezarExamen(){
    // datos iniciales del examen
    preguntasRespondidas = 0;
    errores = 0;
    aciertos = 0;
    preguntasMostradas = [];
    mostrarPregunta();
}

// Funcion para mostrar la pregunta
function mostrarPregunta(){
    // Reiniciar cada vez que muestre una pregunta
    resetear();
    // Numero de la pregunta
    numeroPreguntaActual = preguntasRespondidas + 1;
    numeracion.innerHTML = "Ejercicio " + numeroPreguntaActual;

    // Asegurarnos que la pregunta no se haya repetido
    var indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * preguntas.length);
    } while (preguntasMostradas.includes(indiceAleatorio));
    
    // Mostrar la pregunta
    let preguntaActual = preguntas[indiceAleatorio];
    ejercicioTexto.innerHTML = preguntaActual.pregunta;
    
    // Agregar el índice de la pregunta mostrada al registro
    preguntasMostradas.push(indiceAleatorio);

    // Poniendo cada opcion en cada pregunta
    preguntaActual.respuesta.forEach(respuesta => {
        const boton = document.createElement("button");
        boton.innerHTML = respuesta.texto;
        boton.classList.add("respuesta");
        respuestasBoton.appendChild(boton);
        if (respuesta.correct){
            boton.dataset.correct = respuesta.correct;
        }
        boton.addEventListener("click", respuestaSeleccionada);
    });
}

// Funcion que reiniciara mostrara solo la pregunta y seccion de arriba cuando inicie una pregunta
function resetear(){
    // Ocultar la barra de abajo con el boton next y la IA
    barraInferior.style.display = "none";
    IAventana.style.display = "none";
    while(respuestasBoton.firstChild){
        respuestasBoton.removeChild(respuestasBoton.firstChild);
    }
}

// Mostrar los resultados cuando se cumplan las condiciones
function resultados(){
    // Mostrar la ventana resultado
    ventanaResultado.style.display = "flex";
    resultadoExamen.innerHTML = aciertos + " / " + numeroPreguntaActual;
    // Pagina a la que regresaras tras dar cerrar
    cerrarbtn.addEventListener("click", () =>{
            window.location.href = "/cursos/ingles/ingles.html";
        });
    // si tuvo 3 errores desaprobo, si no aprobo
    if (errores >= 3){
        tituloVentana.innerHTML = "Fallaste, Intentalo de nuevo";
    } else{
        tituloVentana.innerHTML = "Felicidades, Aprobaste con exito";
        // (FALTA PODER GUARDAR TUS EXAMENES COMPLETADOS EN LA BASE DE DATOS Y ASI VER TU AVANCE)
    }
}

// Funcion para quitar un corazon cuando te equivocas
function quitarCorazon(){
    // Quita una vida 
    var eliminarVida = document.querySelector("#vidas i:nth-child(" + (errores) + ")");
    if (eliminarVida){
        eliminarVida.remove();
    } else{
        // Si pierde todas las vidas muestra su resultado
        resultados();
    }
}

// Verifica el boton que seleccionaste
function respuestaSeleccionada(e){
    // Ve si el boton seleccionado es la respuesta correcta
    const btnSeleccionado = e.target;
    const isCorrect = btnSeleccionado.dataset.correct == "true";
    if (isCorrect){
        btnSeleccionado.classList.add("correcto");
        aciertos++;
    } else{
        btnSeleccionado.classList.add("incorrecto");
        errores++;
        quitarCorazon();
    }
    // Desabilita los botones de opcion
    Array.from(respuestasBoton.children).forEach(boton => {
        boton.disabled = true;
    });
    barraInferior.style.display = "flex";
    // 
    if (numeroPreguntaActual == 10){
        siguientePreguntabtn.innerHTML = "Terminar Examen";
    }
}


// Define que hara el boton IAbtn al dar click
IAbtn.addEventListener("click", () => { 
    // Para que aparezca la ventana al dar click
    IAventana.style.display = "flex";
})

// Define que hara el boton siguiente al dar click
siguientePreguntabtn.addEventListener("click", () => { 
    // Si todavia no llega a la pregunta 10 seguira el examen, si no vera su resultado
    if (numeroPreguntaActual < 10){
        preguntasRespondidas++;
        mostrarPregunta();
    } else{
        resultados();
    }
})


// Llamado a la funcion para que empieze el examen cuando entras a la pagina
empezarExamen();