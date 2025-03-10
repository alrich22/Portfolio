import List from './List.jsx'
import shelter from '../assets/images/shelter.png'
import candidate from '../assets/images/candidate.png'
import kanban from '../assets/images/kanban.jpg'
import empTracker from '../assets/images/employeeracker.jpg'
import portfolio from '../assets/images/portfolio.jpg'
const projects = [
  {
    id: 1,
    projectName: "Saye's Shelter (Project 1)",
    projectImg: shelter,
    projectRepoLink: 'https://github.com/alrich22/Project-1-Group-6',
    projectDeployedLink: 'https://alrich22.github.io/Project-1-Group-6/',
  },
  {
    id: 2,
    projectName: 'Candidate Search',
    projectImg: candidate,
    projectRepoLink: 'https://github.com/alrich22/CandidateSearch',
  },
  {
    id: 3,
    projectName: 'Kanban Board',
    projectImg: kanban,
    projectRepoLink: 'https://github.com/alrich22/KanbanBoard',
  },
  {
    id: 4,
    projectName: 'Employee Tracker',
    projectImg: empTracker,
    projectRepoLink: 'https://github.com/alrich22/EmployeeTracker',
  },
  {
    id: 5,
    projectName: 'Portfolio',
    projectImg: portfolio,
    projectRepoLink: 'https://github.com/alrich22/Portfolio',
    projectDeployedLink: 'https://my-portfolio-yvt5.onrender.com/',
  },
];

export default function Project() {
  return (
    <div className="container">
      <div className="row">
        <List projects={projects} />
      </div>
    </div>
  );
}
