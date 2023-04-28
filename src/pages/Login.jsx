import React, { useEffect, useState, useRef } from "react";
import {useNavigate } from "react-router-dom";
import { login, register } from "../utils/Controller";
import "../styles/Login.css";
// import '../pages/jav.js'

function Login() {
  const navigate = useNavigate();

  const container = useRef();

  const [valuesLogin, setValuesL] = useState({
    email: "",
    password: "",
  });

  const [valuesRegister, setValuesR] = useState({
    username:"",
    email: "",
    password: "",
  });


  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  });

  const handleSubmit = async (event) => {
    console.log(valuesLogin)
    event.preventDefault();
    const data = await login(valuesLogin);

    if (data.status === 200) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Invalido");
    }
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    const data = await register(valuesRegister);

    if (data.status === 200) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    }
  };

  const handleChange = (event) => {
    setValuesL({ ...valuesLogin, [event.target.name]: event.target.value });
  };

  const handleChange2 = (event) => {
    setValuesR({ ...valuesRegister, [event.target.name]: event.target.value });
  };



  return (
    // <div className="contenedor-fondo">
    //   {/* <div className="imagen-formulario"></div> */}

    //   <div className="login-container">
    //     <div className="login-info-container">
    //       <h1 className="title">Inicio de Sesion</h1>
    //       <p>¡Bienvenido de nuevo! Por favor, introduzca sus datos.</p>
    //       <form
    //         className="formulario"
    //         onSubmit={(event) => handleSubmit(event)}
    //       >
    //         <input
    //           type="email"
    //           placeholder="Email"
    //           name="email"
    //           onChange={(e) => handleChange(e)}
    //         ></input>
    //         <input
    //           type="password"
    //           placeholder="Password"
    //           name="password"
    //           onChange={(e) => handleChange(e)}
    //         ></input>
    //         <p>
    //           ¿Olvidaste tu contrasena? <span className="span">Click aqui</span>
    //         </p>
    //         <button type="submit">Iniciar Sesion</button>
    //         <span>
    //           ¿Aun no tienes una cuenta?<Link to="/register">Registrate</Link>
    //         </span>
    //       </form>
    //     </div>
    //     <img className="image-container" src="images/soluciones.jpg" alt=""></img>
    //   </div>
    // </div>

    <div className="contenedor-fondo">
      <div className="container" id="container" ref={container}>
        <div className="form-container sign-up-container">
          <form onSubmit={(event) => handleSubmit2(event)}>
            <h1>Crear Cuenta</h1>
            <div className="social-container">
              {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
            </div>
            <span>Por favor, introduzca sus datos para aperturar su cuenta.</span>
            <input type="text" placeholder="Username" name="username" onChange={(e) => handleChange2(e)}/>
            <input type="email" placeholder="Email" name="email" onChange={(e) => handleChange2(e)}/>
            <input type="password" placeholder="Password" name="password" onChange={(e) => handleChange2(e)}/>
            <button>Registrar</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={(event) => handleSubmit(event)}>
            <h1>Inicio de sesion</h1>
            <div className="social-container">
              {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
            </div>
            <span>¡Bienvenido de nuevo! Por favor, introduzca sus datos.</span>
            <input type="email" placeholder="Email" name="email"onChange={(e) => handleChange(e)}/>
            <input type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />
            <a href="/">Forgot your password?</a>
            <button type="submit">Iniciar Sesion</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hola, Cliente!</h1>
              <p>
                Ya tiene una cuenta?
              </p>
              <button className="ghost" id="signIn" onClick={()=>{
                container.current.classList.remove("right-panel-active");
              }}>
                Inicio de Sesion
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hola, Cliente!</h1>
              <p>Aun no tiene una cuenta?</p>
              <button className="ghost" id="signUp" onClick={()=>{
                container.current.classList.add("right-panel-active");
              }}>
                Registro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
