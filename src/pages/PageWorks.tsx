import React from 'react';
import styled from "styled-components";
import Pop from '../compo/pop';
import Poptext from '../compo/Poptext';
import Cheader from "../compo/header";
import Cfooter from "../compo/footer";
import styles from "../styles/home.module.css";
import { fetchNotionData } from "./api/notionfront";
import { GetStaticProps, GetStaticPaths } from 'next';
import BlogMain from '../compo/blogMain';


// `getStaticProps`の代わりにデータをAPI経由で取得
export const getServerSideProps: GetStaticProps = async () => {
    const textid = process.env.NOTION_WORKS_KEY

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


function PageWorks({ page, blocks }) {
    return(
        <>
        <div className={styles.Home}>
            <Cheader /><br /><br /><br />
            <Pop>{'Works'}</Pop>
            <BlogMain page={page} blocks={blocks} />
        </div>
        <Cfooter />
        </>
    );
}

export default PageWorks;