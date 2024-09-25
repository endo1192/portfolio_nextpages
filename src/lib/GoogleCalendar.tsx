// api/googleCalendar.ts
const API_KEY = process.env.YOUR_GOOGLE_API_KEY;
const CALENDAR_ID = process.env.YOUR_CALENDAR_ID;
const API_URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`;

export const GoogleCalendar = async () => {
  const response = await fetch(`${API_URL}?key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  const data = await response.json();
  return data.items;
};
