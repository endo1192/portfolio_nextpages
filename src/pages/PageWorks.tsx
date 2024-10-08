import React from 'react';

import Pop from '../compo/pop';

import Cheader from "../compo/header";
import Cfooter from "../compo/footer";
import styles from "../styles/home.module.css";
import { fetchNotionData } from "./api/notionfront";
import { GetStaticProps } from 'next';
import BlogMain from '../compo/blogMain';



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

  interface PageWorksProps {
    blocks: any;
  }


function PageWorks({ blocks }: PageWorksProps) {
    return(
        <>
        <div className={styles.Home}>
            <Cheader /><br /><br /><br />
            <Pop>{'Works'}</Pop>
            <BlogMain blocks={blocks} />
        </div>
        <Cfooter />
        </>
    );
}

export default PageWorks;