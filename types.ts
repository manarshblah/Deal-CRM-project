
export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: 'Admin' | 'Team Leader' | 'Sales';
  phone: string;
}

export interface Lead {
  id: number;
  name: string;
  phone: string;
  status: 'Touched' | 'Untouched' | 'Cold';
  type: 'Fresh' | 'Rotated' | 'My Lead';
  assignedTo: string;
  lastContacted: string;
}

export interface Feedback {
  id: number;
  date: string;
  agent: string;
  client: string;
  stage: string;
  stageColor: 'orange' | 'purple' | 'gray';
  feedbackText: string;
}

export interface Activity {
  id: number;
  user: string;
  type: string;
  leadName: string;
  date: string;
  details: string;
}

export interface Todo {
  id: number;
  description: string;
  lead: string;
  time: string;
  date: string;
  type: 'call' | 'meeting';
}

export interface Unit {
    id: number;
    name: string;
    project: string;
    developer: string;
    price: number;
    status: 'Available' | 'Sold';
}

export interface Deal {
    id: number;
    leadName: string;
    unit: string;
    project: string;
    value: number;
    status: 'Won' | 'Lost' | 'In Progress';
    closedDate: string;
}

export interface Campaign {
    id: number;
    name: string;
    platform: string;
    status: 'Active' | 'Paused' | 'Ended';
    leads: number;
    cost: number;
}
