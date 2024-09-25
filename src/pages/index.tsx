import Pop from '../compo/pop';
import Poptext from '../compo/Poptext';
import Slide from '../compo/Slide';
import styled from "styled-components";
import Link from "next/link";
import styles from "../styles/home.module.css";
import Cheader from "../compo/header";
import Cfooter from "../compo/footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
  


function Home() {
    return(
        <>
        <div className={styles.Home}>
            <Cheader />
            <br /><br /><br /><br /><br /><br />
            <Sh2>Welcome to my Portfolio Site !</Sh2><br /><br /><br /><br /><br />
            <Slide /><br /><br />
            <p>当サイトは遠藤史熙のポートフォリオサイトです</p>
            <p>どうぞごゆっくり御覧ください</p><br /><br /><br /><br />
            <h1></h1><br /><br /><br /><br /><br /><br /><br /><Shr></Shr><br /><br />
            <Pop>{'About'}</Pop><br />
            <Simg className="abo" src="/images/faceb.jpg" alt="ホーム"/><br /><br /><br />
            <Poptext>{'～私について～'}<br />{"2022年4月、群馬大学情報学部に入学"}<br />{"プログラミング,CG制作,音楽制作などPCに関わる幅広い分野のスキルを使い、行動力と好奇心の高さをもって様々な仕事を精力的にこなす"}<br /><br />{"詳しくは"}<SLink href="/PageAbout">こちら</SLink><br /><br /><br /><br /></Poptext>
            <Shr></Shr><br /><br />
            <Pop>{'Skills'}</Pop><br />
            <Simg className="abo" src="/images/internetb.jpg" alt="ホーム"/><br /><br />
            <Poptext>{'～できること・スキル一覧～'}<br /><br />{"プログラミング"}<br />{"TypeScript{React,Hono,Babylon},Python{Django},C,Java,HTML,CSS等"}<br /><br />{"音楽制作"}<br />{"使用ソフト: Studio One"}<br /><br />{"CG制作"}<br />{"使用ソフト: Blender"}<br /><br />{"詳しくは"}<SLink href="/PageSkills">こちら</SLink><br /><br /><br /><br /></Poptext>
            <Shr></Shr><br />
            <Pop>{'Works'}</Pop><br />
            <Simg className="abo" src="/images/gakkib.jpg" alt="ホーム"/><br /><br />
            <Poptext>{'～過去の実績一覧～'}<br />{"各種制作物等"}<br /><br />{"詳しくは"}<SLink href="/PageWorks">こちら</SLink><br /><br /><br /></Poptext>
            <Shr></Shr>
            <Pop>{'Contact'}</Pop><br />
            <Simg className="abo" src="/images/creatorb.jpg" alt="ホーム"/><br /><br />
            <Poptext>{'ご連絡は'}<SLink href="/PageToi">こちら</SLink></Poptext><br /><br /><br /><br /><br /><br />
            
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

const Sh2 = styled.h2`
    font-size: 5em;
`;

const Simg = styled.img`
    width: 30%;
    display: block;
    background-position: center;
    margin: auto;
`;

/*<Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>*/


export default Home;