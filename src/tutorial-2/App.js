import React from "react";

const Form = () => {
  let email;
  let password;
  
    const changeCheck = (e) => {
        if(e.target.name === 'email'){
            email = e.target.value
        } else if (e.target.name === 'password') {
            password = e.target.value
        }
    }

    const handleSubmit = (e) => {
        
        if (password === undefined || email === undefined){
            alert('Заполните поля!')
        } else if (!email.trim() || !password.trim()) {
			alert('Вы заполнили поле пробелами!');
        } else if (email && password){
			console.log({ email, password });
			email = '';
			password = '';
			e.target.reset();
		} 
		e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={changeCheck}  type={'email'} placeholder={'E-Mail'}  name="email"></input>
                <input onChange={changeCheck} type={'password' } placeholder={'Пароль'}  name="password"></input>
                <button  type={'submit'}><div>Войти</div></button>
            </form>
        </>
    );
}

const App = () =>{
    return (
    <Form />
    );
} 

export default App;