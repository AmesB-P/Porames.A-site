import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faGithub,faFacebook,faInstagram}from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import { motion } from "framer-motion";
import { IoCaretUpOutline } from "react-icons/io5";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Footer =() =>{
    function componentDidMount() {
        Events.scrollEvent.register("begin", function (to, element) {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register("end", function (to, element) {
          console.log("end", arguments);
        });
    
        scrollSpy.update();
      }
      function componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
      }
      function scrollToTop() {
        scroll.scrollToTop();
      }
      function scrollToBottom() {
        scroll.scrollToBottom();
      }
      function scrollTo() {
        scroll.scrollTo(100);
      }
      function scrollMore() {
        scroll.scrollMore(100);
      }
      function handleSetActive(to) {
        console.log(to);
      }
    const fbIcon =<FontAwesomeIcon icon={faFacebook} />
    const igIcon =<FontAwesomeIcon icon={faInstagram} />
    const ghIcon =<FontAwesomeIcon icon={faGithub} />
    return (
        <div className='footer-container'>
            <div className='grid-footer-container'>
            <Link activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
          delay={0}>
            <motion.div className='backtotop-btn' whileHover={{scale:3}} style={{scale:2}}>
                <IoCaretUpOutline/>
            </motion.div>
            </Link>
            <div className='social'>
                <a href='https://www.facebook.com/SeaSonChangeRXBom/'><motion.div whileHover={{ scale: 1.5 }} className='socialIcon'>{fbIcon}</motion.div></a>
                <a href='https://www.instagram.com/bom_porames/'><motion.div whileHover={{ scale: 1.5 }} className='socialIcon'>{igIcon}</motion.div></a>
                <a href='https://github.com/AmesB-P'><motion.div whileHover={{ scale: 1.5 }} className='socialIcon'>{ghIcon}</motion.div></a>
            </div>
            <div className='copyRight'>
                <div className='.copyRight-box'>
                <h5>Porames.site &copy; 2021</h5>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Footer;