import React,{ useState} from 'react';
import Mypic from '../img/myPic.jpg'
import './aboutMe.css'
import { motion } from "framer-motion";
import { CircularProgressbarWithChildren,buildStyles, } from 'react-circular-progressbar';
import ProgressProvider from '../components/ProgressProvider';
import resumeFrontend from '../img/ResumeFront-end.Porames.A.png'
import '../components/moda.css'

const AboutMe = ()=> {

      const [popupPic,setpopupPic]= useState(false)
      const togglePop =()=>{
        setpopupPic(!popupPic)
      }
    return (
        <div className='abMe-container'>
            <div className='ab-body'name='text-me' >
            <motion.div  className='MyPic' initial={{ scale: 0 }}
    animate={{ rotate: 0, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20 }}
       whie whileHover={{ scale: 1.2}} whileTap={{scale:1.2}} whileFocus={{scale:1.2}}>
                <img src={Mypic} className='PicMe'></img>
            </motion.div>
            <div className='textAb-Me'>
                <div>
                    <h4>My name is Porames Atipattranan | Nickme : Bom</h4>
                </div>
                <div>
                    <h5>Business computer | King Mongkut's University of Technology North Bangkok | Rayong Campus</h5>
                </div>
                <div>
                    <p>I'm interested in front end developer.</p>
                    <p>I'm an extremely creative, a productive team player, fast learning, energetic & responsible.</p>
                    <p>Having good reletionship,continual improvment, possitive attitude & open mind.</p>
                </div>
                <div className='percent-box'>
                <div className='percentEng'>
                {/* <CircularProgressbarWithChildren value={reactpercent}
                text={`${reactpercent}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#028889",
                  textSize: '14px',
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}>
                </CircularProgressbarWithChildren> */}
                <ProgressProvider valueStart={0} valueEnd={80}>
        {percentage => (
          <CircularProgressbarWithChildren
            value={percentage}
            text={`${percentage}%`}
            background backgroundPadding={6}
            styles={buildStyles({
              pathTransitionDuration: 2,
              backgroundColor: "#028889",
                  textSize: '14px',
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
            })}
          ></CircularProgressbarWithChildren>
        )}
      </ProgressProvider>
                </div>
                <span>
                    <p>Fluent in english (speaking & communication skill )</p>
                </span>
                </div>
                <div>
                
                  <motion.button className='myResume' onClick={togglePop} style={{scale:2}} whileHover={{scale:2.3}} whileTap={{scale:1.9}} >
              Resume
            </motion.button>
            {popupPic &&(
              <div className='modal'>
                <div onClick={togglePop} className='overlay'>
                  <div className='modal-content'>
                    <img src={resumeFrontend}></img>
                    <button onClick={togglePop} className='close-modal'>Close</button>
                  </div>
                </div>
              </div>
            )}
              

            
                </div>
            </div>
            </div>
        
        </div>
    
    )
}
export default AboutMe;
