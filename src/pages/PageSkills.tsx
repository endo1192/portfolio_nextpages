import React from 'react';
import styled from "styled-components";
import Pop from '../compo/pop';
import Poptext from '../compo/Poptext';
import Cheader from "../compo/header";
import Cfooter from "../compo/footer";
import Link from "next/link";
import styles from "../styles/home.module.css";

import BlogMain from '../compo/blogMain';

import { fetchNotionData } from "./api/notionfront";
import { GetStaticProps } from 'next';



export const getServerSideProps: GetStaticProps = async () => {
    const textid = process.env.NOTION_SKILLS_KEY

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

  interface PageSkillsProps {
    blocks: any;
  }


function PageSkills({ blocks }: PageSkillsProps) {
    return(
        <>
        <div className={styles.Home}>
            <Cheader /><br /><br /><br /><br />
            <Pop>{'Skills'}</Pop>
            <Poptext>{'実際の制作物は'}<SLink href="/PageWorks">Works</SLink>{'をご参照ください'}</Poptext><br /><br />
            <br /><br /><Shr></Shr><br />
            <BlogMain blocks={blocks} />
        </div>
        <Cfooter />
        </>
    );
}

const SLink = styled(Link)`
    color: aliceblue;
`;

const Shr = styled.hr`
    width: 80%;
    margin: auto;
`;

export default PageSkills;