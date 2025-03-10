import List from './List.jsx'
import shelter from '../assets/images/sayes-shelter.png'
import candidate from '../assets/images/candidate.jpg'
import kanban from '../assets/images/kanban.jpg'
import empTracker from '../assets/images/employee-tracker.jpg'
import portfolio from '../assets/images/portfolio.jfif'
const projects = [
  {
    id: 1,
    projectName: "Saye's Shelter (Project 1)",
    projectImg: shelter,
    projectRepoLink: 'https://github.com/alrich22/Project-1-Group-6',
    projectDeployedLink: '',
  },
  {
    id: 2,
    projectName: 'Candidate Search',
    projectImg: candidate,
    projectRepoLink: 'https://github.com/alrich22/CandidateSearch',
    projectDeployedLink: 'https://youtu.be/qD4sCNJhR2k',
  },
  {
    id: 3,
    projectName: 'Kanban Board',
    projectImg: kanban,
    projectRepoLink: 'https://github.com/alrich22/KanbanBoard',
    projectDeployedLink: 'https://weather-dashboard-fvb6.onrender.com',
  },
  {
    id: 4,
    projectName: 'Employee Tracker',
    projectImg: empTracker,
    projectRepoLink: 'https://github.com/alrich22/EmployeeTracker',
    projectDeployedLink: 'https://youtu.be/OuKMgkM4JYg',
  },
  {
    id: 5,
    projectName: 'Portfolio',
    projectImg: portfolio,
    projectRepoLink: 'https://github.com/alrich22/Portfolio',
    projectDeployedLink: 'https://portfolio-a2lw.onrender.com/',
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