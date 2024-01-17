var main = document.querySelector(".main")
var height = document.querySelector("#Height")
var width = document.querySelector("#width")
var btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    var div = document.createElement("div")
    div.style.height = height.value + "px"
    div.style.position = "absolute"
    div.style.width = width.value + "px"
    div.style.backgroundColor = "red"
    main.appendChild(div)
    console.log(main.offsetWidth)
    // console.log(main.offsetHeight)
    // var lft = 
    // var rgt = 
})