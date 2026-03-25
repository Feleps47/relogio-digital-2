const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

setInterval(() => {
    let data = new Date();

    let hr = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

}, 1000);


// MENU MOBILE
function menuShow(){
    let menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
}

var menuItem = document.querySelectorAll('.item-menu');

function selectlink(){
    menuItem.forEach(item => item.classList.remove('ativo'));
    this.classList.add('ativo');
}

menuItem.forEach(item => item.addEventListener('click', selectlink));

function darkMode(){
    let body = document.querySelector('body');
    body.classList.toggle('dark');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
} 

else {
    let darkModeToggle = document.querySelector('.dark-mode-toggle');
    darkModeToggle.addEventListener('click', darkMode);
}

menuItem.forEach(item => item.addEventListener('click', selectlink));

if (document.querySelector('.dark-mode-toggle')) {
    document.querySelector('.dark-mode-toggle').addEventListener('click', darkMode);
}

// BOTÃO DARK / LIGHT MODE
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Troca o texto do botão
    const btn = document.querySelector('.dark-mode-toggle');
    if(document.body.classList.contains('dark-mode')){
        btn.textContent = 'Light Mode';
    } else {
        btn.textContent = 'Dark Mode';
    }
}


// ===== MENU MOBILE =====
function menuShow() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active'); // Adiciona ou remove a classe "active"
}


// ===== DARK / LIGHT MODE =====
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const btn = document.querySelector('.dark-mode-toggle');
    if(document.body.classList.contains('dark-mode')){
        btn.textContent = 'Light Mode';
    } else {
        btn.textContent = 'Dark Mode';
    }
}


// ===== MENU LATERAL - ITEM ATIVO =====
const menuItems = document.querySelectorAll('.menu-lateral .item-menu a');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe "ativo" de todos os itens
        menuItems.forEach(i => i.parentElement.classList.remove('ativo'));
        // Adiciona "ativo" no item clicado
        this.parentElement.classList.add('ativo');
    });
});