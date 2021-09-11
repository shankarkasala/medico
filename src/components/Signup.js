// import React from 'react'
// //import Tabs from 'react-bootstrap/Tabs'
// //import Tab from 'react-bootstrap/Tab'
import Login from './signup/Login'
import Register from './signup/Register'
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';



// function Signup() {
//     const [value, setValue] = React.useState(2);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//     return (
//         <div>
//             {/* <Tabs defaultActiveKey="profile" id="noanim-tab-example"className="mb-3" transition={false}>
//                 <Tab eventKey="login" title="Login">
//                     <Login/>
//                 </Tab>
//                 <Tab eventKey="register" title="Register">
//                     <Register/>
//                 </Tab>
//             </Tabs> */}
// <Paper square>
//       <Tabs
//       className="mb-3"
//         value={value}
//         indicatorColor="primary"
//         textColor="primary"
//         onChange={handleChange}
//         aria-label="disabled tabs example"
//       >
//         <Tab label="Login" value="1">
//         <Login/>
//         </Tab>

//         <Tab label="Register" value="2">
//         <Register/>
//         </Tab>
//       </Tabs>


//     </Paper>
//          </div>
//     )
// }
// export default Signup


import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Background from './signup/Background';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div

      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  line:{
    boxShadow: '0 3px 5px 2px #b9abf1',
    borderRadius: 4,
  
  }
}));

export default function Signup() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} >
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="mb-3">
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />

        </Tabs>
      </AppBar>
      <div className={classes.line}>
      <TabPanel value={value} index={0} >
    
          <Login />
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      
          <Register />
  
      </TabPanel>
      </div>
    </div>
  );
}

// import React from 'react'

// function Signup() {
//   let tabHeader = document.getElementsByClassName("tab-header")[0];
// let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
// let tabBody = document.getElementsByClassName("tab-body")[0];
 
// let tabsPane = tabHeader.getElementsByTagName("div");
 
// for(let i=0;i<tabsPane.length;i++){
//   tabsPane[i].addEventListener("click",function(){
//     tabHeader.getElementsByClassName("active")[0].classList.remove("active");
//     tabsPane[i].classList.add("active");
//     tabBody.getElementsByClassName("active")[0].classList.remove("active");
//     tabBody.getElementsByTagName("div")[i].classList.add("active");
    
//     tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
//   });
// }
//   return (
//     <div>
//       <div class="tabs">
//   <div class="tab-header">
//     <div class="active">
//       <i class="fa fa-code"></i> Code
//     </div>
//     <div>
//       <i class="fa fa-pencil-square-o"></i> About
//     </div>
//     <div>
//       <i class="fa fa-bar-chart"></i> Services
//     </div>
//     <div>
//       <i class="fa fa-envelope-o"></i> Contact
//     </div>
//   </div>
//   <div class="tab-indicator"></div>
//   <div class="tab-body">
//     <div class="active">
//       <h2>This is code section</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error neque saepe commodi blanditiis fugiat nisi aliquam ratione porro quibusdam in, eveniet accusantium cumque. Dolore officia reprehenderit perferendis quod libero omnis.</p>
//     </div>
//     <div>
//       <h2>This is about section</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus exercitationem vero, id autem fugit assumenda a molestiae numquam at, quisquam cumque. Labore eligendi perspiciatis quia incidunt quaerat ut ducimus?</p>
//     </div>
//     <div>
//       <h2>This is services section</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus exercitationem vero, id autem fugit assumenda a molestiae numquam at, quisquam cumque. Labore eligendi perspiciatis quia incidunt quaerat ut ducimus?</p>
//     </div>
//     <div>
//       <h2>This is contact section</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus exercitationem vero, id autem fugit assumenda a molestiae numquam at, quisquam cumque. Labore eligendi perspiciatis quia incidunt quaerat ut ducimus?</p>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Signup

