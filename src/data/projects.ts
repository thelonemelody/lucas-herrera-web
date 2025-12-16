import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'RTOL Turbo-Electric Aircraft',
    description: 'Undergraduate capstone project designing a rocket-assisted takeoff, hybrid-powered aircraft combining turbo-electric propulsion systems.',
    techStack: ['Aircraft Design', 'Hybrid Propulsion', 'Aerospace Engineering', 'MATLAB'],
    featured: true,
  },
  {
    id: '2',
    title: 'Project Management Application',
    description: 'Created and managed a custom project management application in SharePoint using PowerApps for team coordination and workflow tracking.',
    techStack: ['SharePoint', 'PowerApps', 'Workflow Automation'],
    featured: true,
  },
  {
    id: '3',
    title: 'Hydraulically Powered Systems',
    description: 'End-to-end development of hydraulically powered mechanical systems, from requirements through prototyping and deployment.',
    techStack: ['Hydraulics', 'SolidWorks', 'Mechanical Design', 'Prototyping'],
    featured: true,
  },
  {
    id: '4',
    title: 'Remote Controlled Robot',
    description: 'Designed and built a remote controlled robot with custom electronics and mechanical components.',
    techStack: ['Arduino', 'Electronics', 'Mechanical Design', 'C++'],
    featured: false,
  },
  {
    id: '5',
    title: 'Heavy Trailer Design',
    description: 'Engineered heavy-duty trailer systems with structural analysis and manufacturing documentation.',
    techStack: ['SolidWorks', 'FEA Analysis', 'Structural Design'],
    featured: false,
  },
  {
    id: '6',
    title: 'Custom Enclosures & Tables',
    description: 'Designed and fabricated custom enclosures and industrial tables for various applications.',
    techStack: ['CAD Design', 'Fabrication', 'CNC', 'Sheet Metal'],
    featured: false,
  },
];
