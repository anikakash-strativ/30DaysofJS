let icon = document.querySelector('.icon');
let ul = document.querySelector('ul');

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    console.log(ul);
    if(ul.className == "showData"){
        document.getElementById('bar').classList = "fa-solid fa-xmark";
    }else{
        document.getElementById('bar').classList = "fa-solid fa-bars";
    }
})