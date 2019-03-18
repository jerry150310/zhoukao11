var now = document.querySelector(".now");
var over = document.querySelector(".over");
var main = document.querySelector(".main");
var main2 = document.querySelector(".main2");
console.log(main2)

now.onclick = function() {
    now.classList.add("active");
    over.classList.remove("active");
    main.classList.remove("active1")
    main2.classList.add("active1");
}
over.onclick = function() {
    now.classList.remove("active");
    over.classList.add("active");
    main.classList.add("active1")
    main2.classList.remove("active1");
}