import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: ['Python', 'C++', 'C', 'MATLAB', 'C#', 'VBA', 'LabVIEW', 'Java', 'RobotC', 'Ansys APDL', 'G-code'],
  },
  {
    id: 'software',
    name: 'Software',
    skills: ['Git', 'Simulink', 'RTOS', 'Polarian', 'Jira', 'SolidWorks', 'PDM', 'FEA Simulation', 'Various Slicers', 'SAP'],
  },
  {
    id: 'hardware',
    name: 'Hardware',
    skills: ['Arduino', 'ESP32', 'FDM 3D Printing', 'SLA 3D Printing', 'Hydraulics', 'Pneumatics', 'Encoders', 'Photocells', 'Motors', 'Turbine Engines', 'Sonar', 'Servos', 'Infrared', 'Aircraft Systems', 'Fanuc Robot Arm'],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    skills: ['Product Development', 'Process Engineering', 'FEA Analysis', 'CAD Design', 'Prototyping', 'Technical Documentation', 'Quality Control'],
  },
  {
    id: 'leadership',
    name: 'Leadership',
    skills: ['Team Leadership', 'Cross-functional Collaboration', 'Project Management', 'Technical Writing', 'Training & Mentoring'],
  },
];
