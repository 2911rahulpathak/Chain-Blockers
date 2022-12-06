import React from "react";
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined,} from "@material-ui/icons";
import styled from "styled-components"
import { useState } from "react";

  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    margin: 5px;
    width: 180px;
    height: 200px;
    display: block;
    justify-content: center;
    background-color: black;
    margin-top: 20%;
    margin-left: 60%;
    position: absolute;
    border-radius: 10px;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const CurvedBox = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 10%;
    background-color: #2f14af;
    position: absolute;
    opacitiy: 10%;
  `;

const Insurancelogin = () => {
    return(
        <div style={{
            display: "flex"
        }}>
                <Container>
        <CurvedBox>
            <h1 style={{
              color: "white",
              textAlign: "center",
              marginTop: 130,
              fontSize: 20
  
            }}>Insurer</h1>
        
        </CurvedBox>
        </Container>
        </div>
    );

}

export default Insurancelogin