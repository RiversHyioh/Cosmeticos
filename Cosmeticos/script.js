function E(selector, parent){
    if(selector instanceof HTMLElement) {
        return selector;
    }

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

function tabs(nav){
    let navElem = E(nav)[0];

    navElem.addEventListener("clic", (e) => {

        if(hasClass(target, "tab"))
            radioClass(target, "active");

            let linkedTab = E("." + target.id)[0];

            radioClass(linkedTab, "visible");
    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id)[0], "visible");
    }
}

tabs(".menu-nav")

let loadMoreBnt1 = document.querySelector("#load-more-1");
let currentItem1 = 4;

loadMoreBnt1.onclick = () => {
    let boxes = [...document.querySelectorAll(".box-container-1 .box-1")];
    for(var i = currentItem1; i< currentItem1 +4; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentIntem1 += 4;
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

    currentIntem2 += 4;
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

    currentIntem3 += 4;
    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = "none"
    }
}

