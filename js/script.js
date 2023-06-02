/**
 * La función devuelve un elemento HTML o una colección de elementos basada en un selector y un
 * elemento principal opcional.
 * @param selector - Una cadena que representa un selector CSS o un objeto HTMLElement.
 * @param parent - El parámetro opcional "principal" es una referencia al elemento principal dentro del
 * cual se debe buscar el selector. Si no se especifica ningún elemento principal, la función buscará
 * en todo el documento el selector dado.
 * @returns La función `E` devuelve un solo `HTMLElement` o una `NodeList` de `HTMLElements` que
 * coinciden con el selector dado dentro del elemento padre dado.
 */
function E(selector, parent){
    if(selector instanceof HTMLElement) 
        return selector;

    return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    E("." + className).forEach((elem) =>
    elem.classList.remove(className));
    element.classList.toggle(className);
}

/**
 * La función agrega detectores de eventos a un elemento de navegación y alterna la visibilidad de las
 * pestañas correspondientes.
 * @param nav - El parámetro "nav" es una cadena que representa el selector de CSS para el elemento de
 * navegación que contiene las pestañas.
 */

function tabs(nav) {
    let navElem = E(nav)[0];
  
    navElem.addEventListener("click", (e) => {
      let target = e.target;
  
      if (hasClass(target, "tab")) {
        radioClass(target, "active");
  
        let linkedTab = E("." + target.id)[0];
        radioClass(linkedTab, "visible");
      }
    });
  
    let active = E(".tab.active")[0];
    if (active) {
      radioClass(E("." + active.id)[0], "visible");
    }
  }
  
  tabs(".menu-nav");


/* Este código selecciona un elemento HTML con el ID "load-more-1" y lo asigna a la variable
`loadMoreBnt1`. También está inicializando la variable `currentItem1` a 4. */
let loadMoreBnt1 = document.querySelector("#load-more-1");
let currentItem1 = 4;

loadMoreBnt1.onclick = () => {
    let boxes = [...document.querySelectorAll(".box-container-1 .box-1")];
    for(var i = currentItem1; i< currentItem1 +4; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem1 += 4;
    if (currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = "none"
    }
}

let loadMoreBnt2 = document.querySelector("#load-more-2");
let currentItem2 = 4;

loadMoreBnt2.onclick = () => {
    let boxes = [...document.querySelectorAll(".box-container-1 .box-1")];
    for(var i = currentItem2; i< currentItem2 +4; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem2 += 4;
    if (currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = "none"
    }
}

let loadMoreBnt3 = document.querySelector("#load-more-3");
let currentItem3 = 4;

loadMoreBnt3.onclick = () => {
    let boxes = [...document.querySelectorAll(".box-container-1 .box-1")];
    for(var i = currentItem3; i< currentItem3 +4; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem3 += 4;
    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = "none"
    }
}

