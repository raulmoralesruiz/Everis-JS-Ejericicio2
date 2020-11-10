// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".

// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

const funcion1 = () => {
  //
};

window.addEventListener("load", onLoad);

function onLoad() {
  console.log("hi");

  let selected = document.getElementsByClassName("selected")[0];
  // console.log(selected);

  let liSelected = selected.parentNode;
  // console.log(liSelected);

  let list1 = liSelected.parentNode;
  // console.log(list1);

  let spanOfList1 = list1.getElementsByTagName("span");
  // console.log(spanOfList1);

  // se recorren todos los span de la lista 1
  for (let i = 0; i < spanOfList1.length; i++) {
    // se define el elemento recorrido
    let elemento = spanOfList1[i];

    // se inserta la clase correspondiente
    elemento.classList.add("element-" + (i + 1));
  }

  // Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

  // se obtienen todos los elementos "li"
  let liElements = document.querySelectorAll("li");
  // console.log(liElements);

  // se obtiene el padre de los elementos "li" anteriores
  let padreLiElements = liElements[0].parentNode;
  // console.log(padreLiElements);

  // se eliminan los hijos correspondientes
  padreLiElements.removeChild(liElements[1]);
  padreLiElements.removeChild(liElements[3]);
}
