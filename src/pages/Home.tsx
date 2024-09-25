import Pop from '../compo/pop';
import Poptext from '../compo/Poptext';
import Slide from '../compo/Slide';
import {  Link  } from "react-router-dom";
import styled from "styled-components";


function Home() {
    return(
        <div className="Home">
            <p>Home</p>
            <Slide />
            <h1>Portfolio</h1>
            <h2>Welcome to my Portfolio Site</h2>
            <p>当サイトは遠藤史熙のポートフォリオサイトです</p>
            <p>どうぞごゆっくり御覧ください</p><br /><br /><br /><br />
            <h1></h1>
            <Pop>{'About'}</Pop>
            <Simg className="abo" src="/images/faceb.jpg" alt="ホーム"/>
            <Poptext>{'～私について～'}<br />{"2022年4月、群馬大学情報学部に入学"}<br />{"プログラミング,CG制作,音楽制作などPCに関わる幅広い分野のスキルを使い、行動力と好奇心の高さをもって様々な仕事を精力的にこなす"}<br />{"詳しくは"}<SLink to="/PageAbout">こちら</SLink><br /><br /><br /><br /></Poptext>
            <Shr></Shr>
            <Pop>{'Skills'}</Pop>
            <Simg className="abo" src="/images/internetb.jpg" alt="ホーム"/>
            <Poptext>{'～できること・スキル一覧～'}<br /><br />{"プログラミング"}<br />{"JavaScript{React,express,Babylon},Python{Django},C,Java,HTML,CSS等"}<br /><br />{"音楽制作"}<br />{"使用ソフト: Studio One"}<br /><br />{"CG制作"}<br />{"使用ソフト: Blender"}<br /><br />{"詳しくは"}<SLink to="/PageSkills">こちら</SLink><br /><br /><br /><br /></Poptext>
            <Shr></Shr>
            <Pop>{'Works'}</Pop>
            <Simg className="abo" src="/images/gakkib.jpg" alt="ホーム"/>
            <Poptext>{'～過去の実績一覧～'}<br />{"各種制作物等"}<br /><br /><br />{"詳しくは"}<SLink to="/PageWorks">こちら</SLink><br /><br /><br /><br /></Poptext>
            <Shr></Shr>
            <Pop>{'Contact'}</Pop>
            <Simg className="abo" src="/images/creatorb.jpg" alt="ホーム"/>
            <Poptext>{'ご連絡は'}<SLink to="/PageToi">こちら</SLink></Poptext>
            <SLink to="/menu">こちら</SLink><br /><br /><br />
        </div>
    );
}

const SLink = styled(Link)`
    color: aliceblue;
`;

const Shr = styled.hr`
    width: 80%;
`;

const Simg = styled.img`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-position: center;
    margin: auto;
`;


export default Home;