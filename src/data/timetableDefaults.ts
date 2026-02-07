import { TimetableRow } from '../types';

export const defaultTimetable: TimetableRow[] = [
  { id: 'def-1',  time: '8:00 AM',   task: 'Morning blood glucose check' },
  { id: 'def-2',  time: '8:15 AM',   task: "Take medication (as per your clinician's advice)" },
  { id: 'def-3',  time: '8:30 AM',   task: 'Breakfast' },
  { id: 'def-4',  time: '10:00 AM',  task: 'Mid-morning blood glucose check' },
  { id: 'def-5',  time: '12:30 PM',  task: 'Lunch' },
  { id: 'def-6',  time: '1:15 PM',   task: 'Post-lunch medication reminder' },
  { id: 'def-7',  time: '3:00 PM',   task: 'Afternoon blood glucose check' },
  { id: 'def-8',  time: '4:30 PM',   task: 'Light activity - e.g. 20-30 min slow walk' },
  { id: 'def-9',  time: '6:30 PM',   task: 'Evening medication reminder' },
  { id: 'def-10', time: '6:45 PM',   task: 'Dinner' },
  { id: 'def-11', time: '8:15 PM',   task: 'Evening blood glucose check' },
  { id: 'def-12', time: '10:30 PM',  task: 'Bedtime routine & wind down' },
];
