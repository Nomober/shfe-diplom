const loginForm = document.querySelector('.login__form');
const loginPassword = document.querySelector('.login__input-password');
const loginEmail = document.querySelector('.login__input-email');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(loginEmail.value.trim() && loginPassword.value.trim()) {
            const formData = new FormData(loginForm);

        fetch( 'https://shfe-diplom.neto-server.ru/login' ,{
            method: 'POST',
            body: formData
        })
        .then( response => response.json())
        .then( function(data){
            if(data.success === true){
                document.location="./index-admin.html"
            } else {
                alert("Неверный логин/пароль!")
            }
        });
    }
});

