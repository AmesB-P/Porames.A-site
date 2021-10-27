import React, { forwardRef, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./home.css";
import Particle from "../components/particle";
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
import { motion } from "framer-motion";

const Home = () => {
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
  return (
    <div>
      <Particle />

      <div className="html-container" name='home'>
        <div className="homeTitle">
          <h1>Hello !!</h1>
        </div>
        <div className="Iam">
          <h3>I am {}</h3>
        </div>
        <div className="typing">
          <h3>
            <ReactTypingEffect
              speed={100}
              eraseSpeed={100}
              typingDelay={500}
              text={["Porames A.", "Front end developer."]}
            />
          </h3>
        </div>
        <div className='basedIn'>
          <p>based in Thailand.</p>
        </div>

        <Link
          activeClass="active"
          to="text-me"
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
          delay={0}
        >
          <motion.button className="About-btn" whileHover={{scale:2.2}} whileFocus={{scale:2.2}} whileTap={{scale:1.9}} style={{scale:2}}>
            <div className="aboutMeLink">About me</div>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
