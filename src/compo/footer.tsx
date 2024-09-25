import React from 'react';
import styled from "styled-components";


function Cfooter() {
    return (
        <Sfooter>
            <div className="copyright">
                <Sp>Copyright © 2024 Fumihiro Endo PortFolio</Sp>
            </div>
        </Sfooter>
    );
  }

  const Sfooter =styled.footer`
    width: 100%;
    height: 50px;
    background: rgb(95, 95, 95);
    font-size: 35px;
    font-family: 'Times New Roman', Times, serif;
    padding: 10px 10px;
    text-decoration: none;
    z-index: 999;
  `;

  const Sp = styled.p`
    font-size: 20px;
  `;
  
  export default Cfooter;