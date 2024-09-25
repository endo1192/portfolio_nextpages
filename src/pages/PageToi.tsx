import React, { useState } from 'react';
import styled from "styled-components";
import { FormEventHandler } from "react";
import Cheader from "../compo/header";
import Cfooter from "../compo/footer";
import FullCalendar from '@fullcalendar/react';

import dayGridPlugin from '@fullcalendar/daygrid';

import interactionPlugin from "@fullcalendar/interaction";
import styles from "../styles/home.module.css";



import  {Calendar}  from '../compo/calendar';


const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    //const form = new FormData(event.currentTarget);

    
    //for (const [key, value] of form.entries()) {
    //    console.log(`${key}: ${value}`);
    //}

    
    //const formDataObj = Object.fromEntries(form.entries());

    const formDataObj = {
        firstName: event.currentTarget.firstName.value,
        lastName: event.currentTarget.lastName.value,
        question: event.currentTarget.question.value,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mailform`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formDataObj), 
        //body: form, 
    });

    if (response.ok) {
        const result = await response.text();
        alert("Form submitted successfully!");
        console.log('Success:', result);
    } else {
        alert("Failed to submit form.");
        console.error('Error:', response.statusText);
    }
};

function PageToi() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [question, setQuestion] = useState('');

    return (
        <>
        <div className="aaa">
            <Cheader /><br /><br /><br /><br /><br /><br />
            <p>ご連絡・ご要望のある方は以下のフォーム、または「j2200026@gunma-u.ac.jp」までお願いします</p><br /><br /><br /><br />
            <Sform method="POST" action="/mailform" onSubmit={handleSubmit}>
                <Slabel>
                    <p>おなまえ:</p>
                    <Sinput 
                        type="text" 
                        name="firstName" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                </Slabel><br /><br />
                <Slabel>
                    <p>メールアドレス:</p>
                    <Sinput 
                        type="text" 
                        name="lastName" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                    />
                </Slabel><br /><br />
                <Slabel>
                    <p>お問い合わせ内容:</p>
                    <Stextarea 
                        name="question" 
                        value={question} 
                        onChange={(e) => setQuestion(e.target.value)} 
                    />
                </Slabel><br /><br />
                <SUinput type="submit" value="Submit" />
            </Sform><br /><br /><br />

            <Calendar /><br /><br />
        </div>
        <Cfooter />
        </>
    );
}

const Sform = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Slabel = styled.label`
    color: white;
    font-size: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Sinput = styled.input`
    font-size: 30px;
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    color: black;
`;

const SUinput = styled.input`
    font-size: 30px;
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    color: white;
`;

const Stextarea = styled.textarea`
    font-size: 30px;
    width: 400px;
    height: 200px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    color: black;
`;

export default PageToi;
