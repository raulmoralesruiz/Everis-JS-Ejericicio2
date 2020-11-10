// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".

// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!



// Función que resuelve la primera parte del ejercicio
const parte1 = () => {

  // se guarda el elemento que contiene la clase selected
  let selected = document.getElementsByClassName("selected")[0];

  // se guarda el padre del elemento anterior
  let liSelected = selected.parentNode;

  // se guarda el padre del elemento anterior
  let list1 = liSelected.parentNode;

  // se guardan los elementos "span" de la lista 1
  let spanOfList1 = list1.getElementsByTagName("span");


  // se recorren todos los span de la lista 1
  for (let i = 0; i < spanOfList1.length; i++) {
    // se define el elemento recorrido
    let elemento = spanOfList1[i];

    // se inserta la clase correspondiente
    elemento.classList.add("element-" + (i + 1));
  }


  // se obtienen todos los elementos "li"
  let liElements = document.querySelectorAll("li");

  // se obtiene el padre de los elementos "li" anteriores
  let padreLiElements = liElements[0].parentNode;

  // se eliminan los hijos correspondientes
  padreLiElements.removeChild(liElements[1]);
  padreLiElements.removeChild(liElements[3]);
};



const parte2 = () => {
  // se obtiene la lista2
  let lista2 = document.getElementById("list2");

  // se obtienen los elementos "li" de la lista1
  let liLista1 = list1.getElementsByTagName("li");

  // se recorren todos los span de la lista 1
  for (let i = 0; i < liLista1.length; i++) {
    // se define el elemento recorrido
    let elemento = liLista1[i];

    // se crea elemento tipo li
    let newLi = document.createElement("li");
    

    // se crea elemento tipo botón
    let newButton = document.createElement("button");
    
    // se copia el texto del elemento recorrido al botón
    newButton.textContent = elemento.textContent;
    
    // se copian las clases del elemento recorrido al botón
    newButton.classList = elemento.firstChild.classList;


    // se inserta el botón a la fila creada 
    newLi.appendChild(newButton);

    // se inserta la fila creada a la lista2
    lista2.appendChild(newLi);
  }

  // se obtiene el último botón
  let lastButton = lista2.lastChild.firstChild;

  // se deshabilita el último botón
  lastButton.disabled = true;
};

window.addEventListener("load", onLoad);

function onLoad() {
  // ejecución de la primera parte
  parte1();

  // ejecución de la segunda parte
  parte2();
}
