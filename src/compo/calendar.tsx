import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';
import { GoogleCalendar } from '../lib/GoogleCalendar';

const Calendarcon = styled.div`
  width: 60%;  
  max-width: 1200px;  
  margin: 0 auto;  
  padding: 20px;  
`;

export const Calendar: React.FC = () => {
  /*const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const fetchedEvents = await GoogleCalendar();
        
        // Google Calendar API から取得したイベントを FullCalendar 用に変換する
        const formattedEvents = fetchedEvents.map((event: any) => ({
          
          title: event.summary,
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    getEvents();
  }, []);*/

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Network response was not ok: ${errorMessage}`);
        }
        console.log('API URL:', `${process.env.NEXT_PUBLIC_API_URL}/events`);

        const fetchedEvents = await response.json();  // jsonに変換

        console.log(fetchedEvents);  
        
        
        const formattedEvents = fetchedEvents.items.map((event: any) => ({
          
          title: event.summary,
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
        }));

        console.log('Formatted Events:', formattedEvents);  
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    getEvents();
  }, []);

  
  
  
  return (
    <Calendarcon>
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      editable={true}
      selectable={true}
    />
    </Calendarcon>
  );
};


