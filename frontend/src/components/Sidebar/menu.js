import {Home} from "@material-ui/icons"
import { Work } from "@material-ui/icons";
import { Link } from "@material-ui/icons";
export const details = [
    {
      key: 'dashboard',
      name: 'Dashboard',
      icon: <Home/>,
     
    },
   
    {
      key: 'work',
      name: 'Work',
      icon: <Work />,
      link: '/app/jobs'
    },
    {
      key: 'link',
      name: 'Link',
      icon: <Link />,
      
    } 
  ];
