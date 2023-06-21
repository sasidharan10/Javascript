let button=document.querySelector(".btn");


function util() {
    button.setAttribute("class","btn-alt");
}

// 1:
// button.addEventListener("click", util);

// 2:
// button.addEventListener("click", () => {
//     button.style.backgroundColor="blue";
// });

// 3:
button.addEventListener("click", function util() {
    button.setAttribute("class","btn-alt");
});
