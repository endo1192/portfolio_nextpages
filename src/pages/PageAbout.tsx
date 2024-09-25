import React from 'react';
import styled from "styled-components";
import Pop from '../compo/pop';
import Poptext from '../compo/Poptext';
import Cheader from "../compo/header";
import Cfooter from "../compo/footer";
import { fetchNotionData } from "./api/notionfront";
import BlogMain from '../compo/blogMain';
import styles from "../styles/home.module.css";
import { GetStaticProps, GetStaticPaths } from 'next';





export const getServerSideProps: GetStaticProps = async () => {
    const textid = process.env.NOTION_ABOUT_KEY

    if (!textid) {
        throw new Error('NOTION_ABOUT_KEY is not defined in the environment variables');
    }

    
    const data = await fetchNotionData(textid);
  
    return {
      props: {
        page: data.page,
        blocks: data.blocks,
      },
    };
  };

function PageAbout({ page, blocks }) {
    return(
        <>
        <div className={styles.Home}>
            <Cheader /><br /><br /><br /><br />
            <Pop>{'About me'}</Pop><br />
            <Simg className="abo" src="/images/myphoto.jpg" alt="ホーム"/><br /><br />
            <Poptext>{'遠藤史熙 - Fumihiro Endo'}</Poptext><br /><br />
            <Poptext>{'2003年生まれ,群馬県在住'}<br />
            {'愛知県立一宮高等学校を卒業後、群馬大学情報学部に入学'}<br />
            {'大学入学後は部活動・国際交流・アルバイトなど様々な活動に取り組みつつ、PC関連のスキルの学習なども積極的に行っており、幅広い分野の仕事で活躍できるよう日々精進しています'}<br /><br />
            </Poptext>
            <br /><br /><Shr></Shr><br />
            <BlogMain page={page} blocks={blocks} />
        </div>
        <Cfooter />
        </>
    );
}

const Shr = styled.hr`
    width: 80%;
    margin: auto;
`;

const Simg = styled.img`
    width: 30%;
    display: block;
    background-position: center;
    margin: auto;
`;

export default PageAbout;