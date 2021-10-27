import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Adminpage from "../img/ProjectAdminpage.png";
import Userpage from "../img/ProjectUserpage.png";
import Mainpage from "../img/ProjectMainpage.png";
import additem from '../img/additem.png'
import updateitem from '../img/updateitem.png'
import React, { useState } from "react";
import "./project .css";
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Project = () => {
  return (
    <div className="project-contianer">
      <div className="grid-project">
        <div className="grid-box">
          <div className="project-header">
            <h1>Project</h1>
          </div>
        </div>
        {/* <div className="project-body"> */}
        <div className="grid-box">
          <div className="project-title">
            <p>
Reporting system for repairing materials, equipment, systems in the building.</p>
            <p>
            Users can log in to the system to notify and fill in the repair status by themselves 24 hours a day.{" "}
            </p>
            <p>
            Using PHP language to write the system{" "}
            </p>
          </div>
        </div>
        <div className="grid-box">
          <div>
            <Tilt>
              <SRLWrapper>
                <motion.div
                  className="showPicMain"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  whileFocus={{ scale: 0.8 }}
                >
                  <img src={Adminpage} className="showPic"></img>
                  <img src={Userpage} hidden className="showPic"></img>
                  <img src={Mainpage} hidden className="showPic"></img>
                  <img src={additem} hidden className="showPic"></img>
                  <img src={updateitem} hidden className="showPic"></img>
                </motion.div>
              </SRLWrapper>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Project;
