var listaTarea= [
      {
        "title": "delectus aut autem"
      },
      {
        "title": "quis ut nam facilis et officia qui"
      },
      {
        "title": "fugiat veniam minus"
      },
      {
        "title": "et porro tempora"
      },
      {
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum"
      },
      {
        "title": "qui ullam ratione quibusdam voluptatem quia omnis"
      },
      {
        "title": "illo expedita consequatur quia in"
      },
      {
        "title": "quo adipisci enim quam ut ab"
      },
      {
        "title": "molestiae perspiciatis ipsa"
      },
      {
        "title": "illo est ratione doloremque quia maiores aut"
      }
];

function toDoList (title){ 
    this.title = title;
};

var columna =[''];//array con un elemento para dibujar la columna

//generando estilos de html desde ja
var body = document.body;
var h1 = document.createElement('h1');
h1.setAttribute('align','center');
h1.innerHTML = "LISTA DE TAREAS";

var div = document.createElement('div');
div.setAttribute('align','center');

var table1 = document.createElement('table');
table1.border = "1";
table1.setAttribute('bordercolor','red');
table1.setAttribute('width','35%');

//for que recorre e imprime los primeros 10 arrays
for(var i = 0; i<listaTarea.length; i++){
    var trx = document.createElement('tr');
    for(var j = 0; j<columna.length; j++){
        var tdx = document.createElement('td');
        tdx.setAttribute('contenteditable','true');
        tdx.innerHTML = listaTarea[i].title;
        trx.appendChild(tdx);
    }
    table1.appendChild(trx);
    var closeX = document.createElement("BUTTON");
    closeX.setAttribute('class','deleteTask');
    closeX.innerHTML = "X";

    trx.appendChild(closeX);
    table1.appendChild(trx);
}

body.appendChild(h1);
body.appendChild(div);
div.appendChild(table1);

//funcion que genera tabla y tambien agrega texto
function addTarea (){
    var tarea = document.getElementById("tarea");
    tarea = tarea.value;
    var datos = new toDoList(tarea);
    listaTarea.push(datos);
    
    if(tarea === ''){
        alert("Usted deberia de escribir una tarea...");
    }else{
            
        for(var i = listaTarea.length - 1; i<listaTarea.length; i++){
            var trx = document.createElement('tr');
            for(var j = 0; j<columna.length; j++){
                var tdx = document.createElement('td');
                tdx.setAttribute('contenteditable','true');//etiqueta para editar texto
                tdx.innerHTML = listaTarea[i].title;
            }
            table1.appendChild(trx);
            trx.appendChild(tdx);

        }
        
        var closeX = document.createElement("BUTTON");
        closeX.setAttribute('class','deleteTask');
        closeX.innerHTML = "X";
        
        trx.appendChild(closeX);
        table1.appendChild(trx);
        
        tarea = document.getElementById('tarea').value = ""; //para limpiar despues del imput
    }
 
}

//generar evento para tachar
table1.addEventListener('click', function(event){
    if(event.target.nodeName=='TD'){
        event.target.classList.toggle('completeTask');
    }
}, false);

//generar evento para ocultar
table1.addEventListener("click", function(event) {
	if (event.target && event.target.className == "deleteTask") {
    event.target.parentNode.remove();
  }
});


