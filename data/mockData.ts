
import type { User, Lead, Feedback, Activity, Todo, Unit, Deal, Campaign } from '../types';

export const mockUser: User = {
  id: 1,
  name: 'Ahmed Maher',
  email: 'ahmed@example.com',
  avatar: 'AM',
  role: 'Admin',
  phone: '+201001234567',
};

export const mockUsers: User[] = [
  mockUser,
  { id: 2, name: 'Fatma Ali', email: 'fatma@example.com', avatar: 'FA', role: 'Team Leader', phone: '+201007654321' },
  { id: 3, name: 'Mohamed Said', email: 'mohamed@example.com', avatar: 'MS', role: 'Sales', phone: '+201001122334' },
  { id: 4, name: 'Sara Adel', email: 'sara@example.com', avatar: 'SA', role: 'Sales', phone: '+201004455667' },
];

export const mockLeads: Lead[] = [
  { id: 1, name: 'John Doe', phone: '123-456-7890', status: 'Touched', type: 'Fresh', assignedTo: 'Mohamed Said', lastContacted: '2024-09-26' },
  { id: 2, name: 'Jane Smith', phone: '234-567-8901', status: 'Untouched', type: 'Fresh', assignedTo: 'Sara Adel', lastContacted: '2024-09-26' },
  { id: 3, name: 'Peter Jones', phone: '345-678-9012', status: 'Untouched', type: 'Rotated', assignedTo: 'Mohamed Said', lastContacted: '2024-09-25' },
  { id: 4, name: 'Mary Brown', phone: '456-789-0123', status: 'Touched', type: 'My Lead', assignedTo: 'Sara Adel', lastContacted: '2024-09-24' },
  { id: 5, name: 'Cold Lead', phone: '567-890-1234', status: 'Cold', type: 'Fresh', assignedTo: 'Unassigned', lastContacted: '2024-08-01' },
];

export const mockMyLeads: Lead[] = [
  { id: 4, name: 'Mary Brown', phone: '456-789-0123', status: 'Touched', type: 'My Lead', assignedTo: 'Sara Adel', lastContacted: '2024-09-24' },
  { id: 6, name: 'David Williams', phone: '678-901-2345', status: 'Touched', type: 'My Lead', assignedTo: 'Ahmed Maher', lastContacted: '2024-09-23' },
];
export const mockFreshLeads: Lead[] = [
   { id: 1, name: 'John Doe', phone: '123-456-7890', status: 'Touched', type: 'Fresh', assignedTo: 'Mohamed Said', lastContacted: '2024-09-26' },
   { id: 2, name: 'Jane Smith', phone: '234-567-8901', status: 'Untouched', type: 'Fresh', assignedTo: 'Sara Adel', lastContacted: '2024-09-26' },
   { id: 7, name: 'Olivia Garcia', phone: '789-012-3456', status: 'Untouched', type: 'Fresh', assignedTo: 'Unassigned', lastContacted: '2024-09-27' },
];
export const mockRotatedLeads: Lead[] = [
  { id: 3, name: 'Peter Jones', phone: '345-678-9012', status: 'Untouched', type: 'Rotated', assignedTo: 'Mohamed Said', lastContacted: '2024-09-25' },
  { id: 8, name: 'James Johnson', phone: '890-123-4567', status: 'Untouched', type: 'Rotated', assignedTo: 'Sara Adel', lastContacted: '2024-09-22' },
];
export const mockColdLeads: Lead[] = [
 { id: 5, name: 'Cold Lead Example', phone: '567-890-1234', status: 'Cold', type: 'Fresh', assignedTo: 'Unassigned', lastContacted: '2024-08-01' },
 { id: 9, name: 'Inactive Prospect', phone: '901-234-5678', status: 'Cold', type: 'Rotated', assignedTo: 'Unassigned', lastContacted: '2024-07-15' },
];


export const mockFeedbacks: Feedback[] = [
  { id: 1, date: '15/04/2025 00:42', agent: 'admin', client: 'احمد عسيري', stage: 'No Answer', stageColor: 'orange', feedbackText: '-' },
  { id: 2, date: '14/04/2025 14:10', agent: 'admin', client: 'احمد عسيري', stage: 'Meeting', stageColor: 'purple', feedbackText: '-' },
];

export const mockActivities: Activity[] = [
  { id: 1, user: 'Mohamed Said', type: 'Call', leadName: 'John Doe', date: '09/26', details: 'Discussed pricing.' },
  { id: 2, user: 'Sara Adel', type: 'Meeting', leadName: 'Mary Brown', date: '09/24', details: 'Site visit scheduled.' },
];

export const mockTodos: Todo[] = [
    { id: 1, description: 'Follow up call with John Doe', lead: 'John Doe', time: '10:00 AM', date: '09/26', type: 'call' },
    { id: 2, description: 'Meeting with Jane Smith', lead: 'Jane Smith', time: '02:00 PM', date: '09/26', type: 'meeting' },
    { id: 3, description: 'Prepare proposal for Mary Brown', lead: 'Mary Brown', time: '11:00 AM', date: '09/25', type: 'call' },
    { id: 4, description: 'Call Peter Jones', lead: 'Peter Jones', time: '03:00 PM', date: '09/24', type: 'call' },
];


export const mockUnits: Unit[] = [
    { id: 1, name: 'Apartment 101', project: 'Skyline', developer: 'Emaar', price: 2500000, status: 'Available' },
    { id: 2, name: 'Villa 22', project: 'Uptown', developer: 'SODIC', price: 7800000, status: 'Sold' },
    { id: 3, name: 'Apartment 305', project: 'Skyline', developer: 'Emaar', price: 3100000, status: 'Available' },
];

export const mockDeals: Deal[] = [
    { id: 1, leadName: 'Mary Brown', unit: 'Villa 22', project: 'Uptown', value: 7800000, status: 'Won', closedDate: '2024-09-20' },
    { id: 2, leadName: 'John Doe', unit: 'Apartment 101', project: 'Skyline', value: 2500000, status: 'In Progress', closedDate: '-' },
];

export const mockCampaigns: Campaign[] = [
    { id: 1, name: 'Facebook Ads - Q3', platform: 'Facebook', status: 'Active', leads: 152, cost: 5000 },
    { id: 2, name: 'Google Search - Skyline', platform: 'Google', status: 'Paused', leads: 88, cost: 3200 },
    { id: 3, name: 'Instagram Influencers', platform: 'Instagram', status: 'Ended', leads: 210, cost: 8000 },
];

export const mockTeamsReportData = [
    { team: 'Team Alpha', leads: 50, touched: 45, meetings: 20, deals: 5, value: 15000000 },
    { team: 'Team Beta', leads: 62, touched: 50, meetings: 25, deals: 8, value: 22500000 },
];

export const mockEmployeesReportData = [
    { id: 3, name: 'Mohamed Said', team: 'Team Alpha', leads: 28, touched: 25, meetings: 12, deals: 3, value: 9000000 },
    { id: 4, name: 'Sara Adel', team: 'Team Alpha', leads: 22, touched: 20, meetings: 8, deals: 2, value: 6000000 },
    { id: 5, name: 'Ali Hassan', team: 'Team Beta', leads: 35, touched: 30, meetings: 15, deals: 5, value: 14000000 },
    { id: 6, name: 'Nour Tarek', team: 'Team Beta', leads: 27, touched: 20, meetings: 10, deals: 3, value: 8500000 },
];
