import React from 'react';
import styled from "styled-components";
//import {  Link  } from "react-router-dom";
import Link from "next/link";
//import PageAbout from "./PageAbout";
//import PageSkills from "./PageSkills";
//import PageWorks from "./PageWorks";
//import PageToi from "./PageToi";
//import App from "./App";

function Cheader() {
    return (
        <Sheader>
            <Snav>
                <Sul className="main-nav">
                    <Sli><SLink href="/"><Simg className="logo" src="/images/sadokur120.png" alt="ホーム"/></SLink></Sli>
                    <Sli><SLink href="/">Fumihiro Endo</SLink></Sli>
                </Sul>
                <S2ul className="pages">
                    <Sli><SLink href="/PageAbout">about</SLink></Sli>
                    <Sli><SLink href="/PageSkills">skills</SLink></Sli>
                    <Sli><SLink href="/PageWorks">work</SLink></Sli>
                    <Sli><SLink href="/PageToi">Contact</SLink></Sli>
                </S2ul>
            </Snav>
        </Sheader>
    );
  }

  const Snav =styled.nav`
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    list-style: none;
    text-align: center;
  `;

  const Simg =styled.img`
    width: 100px;
  `;

  const Sli = styled.li`
    margin-right: 20px;
    list-style: none;
    &:last-child {
        margin-right: 0;
    }
  `;

  const Sul = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: flex-start;
  `;

  const S2ul = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: flex-end;
    flex-grow: 1; 
    color: #f7f9ff;
  `;

  const SLink = styled(Link)`
    text-decoration: none;
    color: inherit; /* テキストの色を継承する */
  `;

  const Sheader =styled.header`
    width: 100%;
    height: 80px;
    background: rgb(95, 95, 95);
    font-size: 45px;
    font-family: 'Times New Roman', Times, serif;
    padding: 20px 50px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    z-index: 999;
    text-decoration: none;
  `;
  
  export default Cheader;