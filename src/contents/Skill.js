import "./Skills.css";
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faReact,faHtml5,faCss3,faJs,faGithub,faFacebook}from '@fortawesome/free-brands-svg-icons'
// import { FaAdobePremierePro } from "@react-icons/all-files/fa/FaAdobePremierePro";
import {SiAdobepremierepro } from 'react-icons/si';
// import '../components/mobile/mobile.styles.css'

const Skill = () => {
  const reactpercent = 100;
  const reactIcon =<FontAwesomeIcon icon={faReact} />
  const htmlIcon =<FontAwesomeIcon icon={faHtml5} />
  const cssIcon =<FontAwesomeIcon icon={faCss3} />
  const jsIcon =<FontAwesomeIcon icon={faJs} />
  
  
  return (
    <div className="skill-container">

      
      <div className='grid-container'>

      
      <div className='grid-box'>
      <div className="skill-header">
        <h1>Skills</h1>
      </div>
      </div>
      
      

            {/* <div className='box-body'> */}
            
            
            
            <div className='grid-box'>
            <div  className='html-box'>
              <CircularProgressbarWithChildren value={reactpercent}
                text={``}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#9696cd",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}>
                <div className='htmlIcon'>{htmlIcon}</div>
                <div className='html'><strong>HTML5</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            </div>
            
            
            
            
            <div className='grid-box'>
            <div className='CSS-box'>
              <CircularProgressbarWithChildren
                value={reactpercent}
                text={``}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#9696cd",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}>
                <div className='cssIcon'>{cssIcon}</div>
                <div className='cssText'><strong>CSS3</strong></div>
                </CircularProgressbarWithChildren>
            </div>
            </div>
            
            
            
            
            <div className='grid-box'>
            <div className='javaScript-box'>
              <CircularProgressbarWithChildren
                value={reactpercent}
                text={``}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#9696cd",
                  textSize: '14px',
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}>
                <div className='jsIcon'>{jsIcon}</div>
              <div className='jsText'><strong>JavaScript</strong></div>
                </CircularProgressbarWithChildren>
            </div>
            </div>
            
            
            
            <div className='grid-box'>
            <div className='React-box'>
              <CircularProgressbarWithChildren
                value={reactpercent}
                text={``}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#9696cd",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}>
                  <div className='reactIcon' >{reactIcon}</div>
                <div className='reactText'><strong>React</strong></div>
                </CircularProgressbarWithChildren>
            </div>
            </div>
            
            
            
          <div className='grid-box'>
          <div className='PremierePro-box'>
              <CircularProgressbarWithChildren
                value={reactpercent}
                text={``}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#9696cd",
                  textSize: '12px',
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}>

                  <div className='prIcon'>
                    <div className='siPrIcon'>
                      <SiAdobepremierepro/>
                    {/* <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Adobe Premiere Pro</title><path d="M10.15 8.42a2.93 2.93 0 00-1.18-.2 13.9 13.9 0 00-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 00-.93-1.46zM19.75.3H4.25A4.25 4.25 0 000 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.09 11.65c-.4.56-.96.98-1.61 1.22-.68.25-1.43.34-2.25.34l-.5-.01-.43-.01v3.21a.12.12 0 01-.11.14H5.82c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm6.82-3.15v1.95c0 .08-.05.11-.16.11a4.35 4.35 0 00-1.92.37c-.19.09-.37.21-.51.37v5.1c0 .1-.04.14-.13.14h-1.97a.14.14 0 01-.16-.12v-5.58l-.01-.75-.02-.78c0-.23-.02-.45-.04-.68a.1.1 0 01.07-.11h1.78c.1 0 .18.07.2.16a3.03 3.03 0 01.13.92c.3-.35.67-.64 1.08-.86a3.1 3.1 0 011.52-.39c.07-.01.13.04.14.11v.04z"/></svg> */}
                  {/* <img src={premiereIcon} ></img> */}
                  </div>
                  <div className='prText'>
                  <strong>PremierePro</strong>
                  </div>
                  </div>
                </CircularProgressbarWithChildren>
              
            </div>
          </div>
            

            </div>
      </div>
            
            
          //  </div>

          
        // </div>
  );
};

export default Skill;
