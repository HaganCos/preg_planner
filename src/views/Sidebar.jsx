import React from 'react'
import './css/Sidebar.css'
import Logo from '../imgs/plogo.png'
import { SidebarData } from '../data/Menu'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {UilBars} from "@iconscout/react-unicons";
import {motion} from 'framer-motion'

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  return (
    <>
      <div
        className="menuBar"
        style= {expanded ? { left: "80%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Preg <br />
            <span>Planner</span>
          </span>
        </div>

        {/* Menu */}
        <div className="menu">
          {SidebarData.map((item, index) => (
            <Link to={item.link} key={index}>
              <div
                className={selected === index ? 'menuItem active' : 'menuItem'}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar