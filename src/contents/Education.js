import logo1 from '../img/Logo1.png'
import logo2 from '../img/logo2_2.png'
import logo3 from '../img/logo3_2.png'
import { motion } from "framer-motion";
import './education.css'
import Tilt from 'react-parallax-tilt';
const Education = ()=> {
    return (
        <div className='edu-container'>
            <di className='edu-header'>
                <h1>Education</h1>
            </di>
            <div className='edu-body'>

           <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale:1.2}} className='edu-uni'>
                <Tilt>
                <h3>
                BACHELOR OF BUSINESS 
                ADMINISTRATION
                </h3>
                <h4>
                King Mongkut's University of Technology North Bangkok | Rayong Campus
                </h4>
                <h4>
                2016-2020
                </h4>
                <div></div>
                <div>
                    <img src={logo1} className='logo'></img>
                </div>
                </Tilt>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale:1.2}}  className='edu-highSchool'>
               <Tilt>
               <h3>
                HIGH SCHOOL DIPLOMA, MATH & SCIENCE
                </h3>
                <h4>
                Satreesiriket school
                </h4>
                <h4>
                2011-2015
                </h4>
                <div><img src={logo2} className='logo'></img></div>
               </Tilt>
                </motion.div>
            
           
                    
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale:1.2}} className='edu-exchangeStudent'>
                <Tilt>
                <h3>
                EXCHANGE STUDENT
                </h3>
                <h4>
                Wabasha-Kellogg school
                </h4>
                <h4>
                2012-2013
                </h4>
                <div><img src={logo3} className='logo'></img></div>
                </Tilt>
            </motion.div>
            
            </div>
        </div>
    )
}
export default Education;