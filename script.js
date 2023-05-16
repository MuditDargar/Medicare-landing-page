let menu = Document.querySelector('#menu-btn');
let navbar = Document.querySelector('.navbar');

menu.onclick=() =>{
    menu.classlist.toggle('fa-times');
    navbar.classlist.toggle('active');
}

window.onscroll=() =>{
    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');
}