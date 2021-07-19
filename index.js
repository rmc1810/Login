
function clickOn(){

    let email = document.getElementById('user').value;
    let password = document.getElementById('passWord').value;
    let warning = document.getElementById('warning');

    if ( email == "" &&  password == ""){
        warning.innerHTML='Incorret data!';
    }else {
        warning.innerHTML='Longin ok!';
    }
    clickOn();
   }
        


