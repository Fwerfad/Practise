function Registration()
{
    if(document.registration.Pwd.value==document.registration.PwdCheck.value)
        alert("Вас зарегистрировали\nID = "+document.registration.Id.value+"\nPassword = "+document.registration.Pwd.value);
    else
        alert("Ошибка при вводе пароля\nПопробуйте еще раз");
}
function btnClick()
{
    if(document.radio.Sex[0].checked){
        document.radio.Sex[1].click();
    }else{
        document.radio.Sex[0].click();
    }
}
function addition() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);

    var c = a + b;

    document.getElementById('result').innerHTML = c;
}