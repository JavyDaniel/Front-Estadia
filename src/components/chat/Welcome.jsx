import React from 'react'
import styled from "styled-components";
import { useState, useEffect} from "react";
function Welcome({currentUser}) {
    const [userName, setUserName] = useState();

    useEffect(() => {
      if (currentUser) {
        setUserName(currentUser.data.username);
      }
    }, [currentUser]);

    return (
        <Container>
          <img src='' alt="" />
          <h1>
            Bienvenido, <span>{userName}!</span>
          </h1>
          <h3>Seleccione un chat para comenzar a enviar mensajes.</h3>
        </Container>
      );
}

const Container = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
  flex-direction: column;
  flex:2;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
    font-size:30px;
  }
`;

export default Welcome