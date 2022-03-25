import {Dashboard, School, Work, People, ListAlt} from "@material-ui/icons"

export const details = [
    {
      key: 'dashboard',
      name: 'Dashboard',
      icon: <Dashboard/>,
     
    },
   
    {
      key: 'work',
      name: 'Courses',
      icon: <School />,
      link: '/app/courses'
    },
    {
      key: 'job',
      name: 'Jobs',
      icon: <Work />,
      
    } ,
    {
      key: 'mentor',
      name: 'Mentors',
      icon: <People />,
    },
    {
      key: 'startup',
      name: 'Startups',
      icon: <ListAlt/>,
    }
  ];
