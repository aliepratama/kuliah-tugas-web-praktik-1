let dropdown = false;
function toogleDropdown(){
    if(dropdown){
        document.getElementById('nav-dropdown-list').style.display = 'none';
        dropdown = false;
    }else{
        document.getElementById('nav-dropdown-list').style.display = 'flex';
        dropdown = true;
    }
}
function keBeranda(){
    window.location.reload();
}
function keAtas(){
    window.location.href = '#content';
}
function keSkill(){
    window.location.href = '#skill';
}
function keKontak(){
    window.location.href = '#kontak';
}
function keIg(){
    window.open('http://instagram.com/aliepratama_', 'blank');
}
function keMail(){
    window.location.href = 'mailto:aliepratama2@gmail.com';
}
function keGithub(){
    window.open('https://github.com/aliepratama', 'blank');
}
function keDribble(){
    window.open('https://dribbble.com/designwithzimo', 'blank');
}