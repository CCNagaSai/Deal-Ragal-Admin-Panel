import ProtoTypes from "prop-types";
import bg from "../../assets/images/bg/upgrade-bg.png";
import logo from "../../assets/images/logo/logo-color.png";
import logoW from "../../assets/images/logo/logo-white.png";
import profileImg from "../../assets/images/avatar/profile-xs.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Sidebar({ handleActive }) {
  const [activeDashboard, setActiveDashboard] = useState(false);


  const [sorat, setSorat] = useState(false);
  const [gamelist, setGamelist] = useState(false);
  const [spin, setSpin] = useState(false);
  const [andarbahar, setAndarbahar] = useState(false);
  const [wheeloffortune, setWheeloffortune] = useState(false);
  const [barakadum, setBarakadum] = useState(false);
  const [roulette, setRoulette] = useState(false);


  const [payoutlist, setPayoutlist] = useState(false);

  const gamelistfunction = (flags) => {
    setGamelist(flags)
  }

  const backandwhitegame = (flags) => {

    
    setSorat(flags)
    setGamelist(true)
    console.log("gamelist ::::::::::::::::::::::::::", gamelist)
  }


  const { pathname: location } = useLocation();
  return (
    <aside className="sidebar-wrapper fixed top-0 z-30 block h-full w-[308px] bg-white dark:bg-darkblack-600 sm:hidden xl:block">
      <div className="sidebar-header relative z-30 flex h-[108px] w-full items-center border-b border-r border-b-[#F7F7F7] border-r-[#F7F7F7] pl-[50px] dark:border-darkblack-400">
        
          <img src={logo} className="block dark:hidden" alt="logo" />
          <img src={logoW} className="hidden dark:block" alt="logo" />
    
        <button
          aria-label="none"
          type="button"
          onClick={handleActive}
          className="drawer-btn absolute right-0 top-auto"
          title="Ctrl+b"
        >
          <span>
            <svg
              width="16"
              height="40"
              viewBox="0 0 16 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
                fill="#22C55E"
              />
              <path
                d="M10 15L6 20.0049L10 25.0098"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="sidebar-body overflow-style-none relative z-30 h-screen w-full overflow-y-scroll pb-[200px] pl-[48px] pt-[14px]">
        <div className="nav-wrapper mb-[36px] pr-[50px]">
          <div className="item-wrapper mb-5">

            <ul className="mt-2.5">
            {cookies.get('name') == "Super Admin" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/dashboard" ? "nav-active" : ""
                  } `}
              >
                <Link to="/dashboard">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Dashboard
                      </span>
                    </div>
                  </div>
                </Link>
              </li> : ""}

              {cookies.get('name') == "Super Admin" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/gamebetInfo" ? "nav-active" : ""
                  } `}
              >
                <Link to="/gamebetInfo">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 4C20 1.79086 18.2091 0 16 0H4C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M6 9C6 7.34315 4.65685 6 3 6H0V12H3C4.65685 12 6 10.6569 6 9Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Playing Table Bet
                      </span>
                    </div>
                  </div>
                </Link>
              </li> : ""
             }

             {cookies.get('name') == "Super Admin" ? <li
              className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/TableTranscation" ? "nav-active" : ""
                } `}
            >
              <Link to="/TableTranscation">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span className="item-ico">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse
                          cx="11.7778"
                          cy="17.5555"
                          rx="7.77778"
                          ry="4.44444"
                          className="path-1"
                          fill="#1A202C"
                        />
                        <circle
                          className="path-2"
                          cx="11.7778"
                          cy="6.44444"
                          r="4.44444"
                          fill="#22C55E"
                        />
                      </svg>
                    </span>
                    <span className="item-text text-lg font-medium leading-none">
                      Table Management
                    </span>
                  </div>
                </div>
              </Link>
              </li> : ""}
              
              {cookies.get('name') == "Agent" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/agentdashboard" ? "nav-active" : ""
                  } `}
              >
                <Link to="/agentdashboard">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Agent Dashboard
                      </span>
                    </div>
                  </div>
                </Link>
              </li> : ""}


              {cookies.get('name') == "Shop" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/shopdashboard" ? "nav-active" : ""
                  } `}
              >
                <Link to="/shopdashboard">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                      Sub Agent Dashboard
                      </span>
                    </div>
                  </div>
                </Link>
              </li>:""}

               <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/transaction" ? "nav-active" : ""
                  } `}
              >
                <Link to="/transaction">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Player Management
                      </span>
                    </div>
                  </div>
                </Link>
              </li>

              {cookies.get('name') == "Super Admin" ? <li
              className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/agentmanagement" ? "nav-active" : ""
                } `}
            >
              <Link to="/agentmanagement">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span className="item-ico">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                          fill="#1A202C"
                          className="path-1"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                        <path
                          d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                      </svg>
                    </span>
                    <span className="item-text text-lg font-medium leading-none">
                      Agent Management
                    </span>
                  </div>
                </div>
              </Link>
              </li> : ""}

                
              {cookies.get('name') == "Super Admin" || cookies.get('name') == "Agent" ? <li
              className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/shopmanagement" ? "nav-active" : ""
                } `}
              >
              <Link to="/shopmanagement">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span className="item-ico">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                          fill="#1A202C"
                          className="path-1"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                        <path
                          d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                      </svg>
                    </span>
                    <span className="item-text text-lg font-medium leading-none">
                      Sub Agent Management
                    </span>
                  </div>
                </div>
              </Link>
              </li> : ""}


              {cookies.get('name') == "Super Admin" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white`}
                onClick={() => setGamelist(!gamelist)}
              >
                <a className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="path-1"
                            d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                            fill="#1A202C"
                          />
                          <path
                            className="path-2"
                            d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                            fill="#22C55E"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Games
                      </span>
                    </div>
                    <span
                      className={`transition-all ${gamelist ? "-rotate-90" : "rotate-0"
                        }`}
                    >
                      <svg
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="currentColor"
                          d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
               

                <ul
                  className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${gamelist || roulette ? "active" : ""
                    }`}
                >
                  <li
                    className={`item py-[11px] text-bgray-900 dark:text-white`}
                    onClick={() => setRoulette(!roulette)}
                  >
                    <a className="cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <span className="item-ico">
                            <svg
                              width="18"
                              height="21"
                              viewBox="0 0 18 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="path-1"
                                d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                                fill="#1A202C"
                              />
                              <path
                                className="path-2"
                                d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                                fill="#22C55E"
                              />
                            </svg>
                          </span>
                          <span className="item-text text-lg font-medium leading-none">
                            Roulette
                          </span>
                        </div>
                        <span
                          className={`transition-all ${roulette ? "-rotate-90" : "rotate-0"
                            }`}
                        >
                          <svg
                            width="6"
                            height="12"
                            viewBox="0 0 6 12"
                            fill="none"
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="currentColor"
                              d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                    <ul
                      className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${roulette ? "active" : ""
                        }`}
                    >
                      <li>
                        <Link
                          to="/gamehistory?gamename=Roulette"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/" ? "nav-active" : ""
                            }`}
                        >
                          Game History
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gamelogic?gamename=ROULETTE"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/home-2" ? "nav-active" : ""
                            }`}
                        >
                          Game Logic
                        </Link>
                      </li>

                    </ul>

                  </li>
                </ul>

              </li> : ""}
             
              <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/SubAgentTranscation" ? "nav-active" : ""
                  } `}
              >
                <Link to="/SubAgentTranscation">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 4C20 1.79086 18.2091 0 16 0H4C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M6 9C6 7.34315 4.65685 6 3 6H0V12H3C4.65685 12 6 10.6569 6 9Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                      Sub Agent Transcation
                      </span>
                    </div>
                  </div>
                </Link>
              </li>

              {cookies.get('name') == "Super Admin"? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/AdminTranscation" ? "nav-active" : ""
                  } `}
              >
                <Link to="/AdminTranscation">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 4C20 1.79086 18.2091 0 16 0H4C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M6 9C6 7.34315 4.65685 6 3 6H0V12H3C4.65685 12 6 10.6569 6 9Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Admin Transcation
                      </span>
                    </div>
                  </div>
                </Link>
              </li> : ""}

              {cookies.get('name') == "Super Admin" || cookies.get('name') == "Agent" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/AgentTranscation" ? "nav-active" : ""
                  } `}
              >
                <Link to="/AgentTranscation">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 4C20 1.79086 18.2091 0 16 0H4C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M6 9C6 7.34315 4.65685 6 3 6H0V12H3C4.65685 12 6 10.6569 6 9Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Agent Transcation
                      </span>
                    </div>
                  </div>
                </Link>
              </li> : ""}

         
              {cookies.get('name') == "Super Admin" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/socialurl" ? "nav-active" : ""
                  } `}
              >
                <Link to="/socialurl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="11.7778"
                            cy="17.5555"
                            rx="7.77778"
                            ry="4.44444"
                            className="path-1"
                            fill="#1A202C"
                          />
                          <circle
                            className="path-2"
                            cx="11.7778"
                            cy="6.44444"
                            r="4.44444"
                            fill="#22C55E"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Social URL
                      </span>
                    </div>
                  </div>
                </Link>
              </li> :""}

              {cookies.get('name') == "Super Admin" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/noticetext" ? "nav-active" : ""
                  } `}
              >
                <Link to="/noticetext">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6.5C0 4.29086 1.79086 2.5 4 2.5H14C16.2091 2.5 18 4.29086 18 6.5V8V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8V6.5Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M14 2.5H4C1.79086 2.5 0 4.29086 0 6.5V8H18V6.5C18 4.29086 16.2091 2.5 14 2.5Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 0.25C5.41421 0.25 5.75 0.585786 5.75 1V4C5.75 4.41421 5.41421 4.75 5 4.75C4.58579 4.75 4.25 4.41421 4.25 4V1C4.25 0.585786 4.58579 0.25 5 0.25ZM13 0.25C13.4142 0.25 13.75 0.585786 13.75 1V4C13.75 4.41421 13.4142 4.75 13 4.75C12.5858 4.75 12.25 4.41421 12.25 4V1C12.25 0.585786 12.5858 0.25 13 0.25Z"
                            fill="#1A202C"
                            className="path-2"
                          />
                          <circle cx="9" cy="14" r="1" fill="#22C55E" />
                          <circle
                            cx="13"
                            cy="14"
                            r="1"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <circle
                            cx="5"
                            cy="14"
                            r="1"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Notice Text
                      </span>
                    </div>
                  </div>
                </Link>
              </li> : ""}

              {cookies.get('name') == "Super Admin" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/commission" ? "nav-active" : ""
                  } `}
              >
                <Link to="/commission">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6.5C0 4.29086 1.79086 2.5 4 2.5H14C16.2091 2.5 18 4.29086 18 6.5V8V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8V6.5Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M14 2.5H4C1.79086 2.5 0 4.29086 0 6.5V8H18V6.5C18 4.29086 16.2091 2.5 14 2.5Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 0.25C5.41421 0.25 5.75 0.585786 5.75 1V4C5.75 4.41421 5.41421 4.75 5 4.75C4.58579 4.75 4.25 4.41421 4.25 4V1C4.25 0.585786 4.58579 0.25 5 0.25ZM13 0.25C13.4142 0.25 13.75 0.585786 13.75 1V4C13.75 4.41421 13.4142 4.75 13 4.75C12.5858 4.75 12.25 4.41421 12.25 4V1C12.25 0.585786 12.5858 0.25 13 0.25Z"
                            fill="#1A202C"
                            className="path-2"
                          />
                          <circle cx="9" cy="14" r="1" fill="#22C55E" />
                          <circle
                            cx="13"
                            cy="14"
                            r="1"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <circle
                            cx="5"
                            cy="14"
                            r="1"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Setting
                      </span>
                    </div>
                  </div>
                </Link>
              </li> : ""}


              {cookies.get('name') == "Super Admin" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/security" ? "nav-active" : ""
                  } `}
              >
                <Link to="/security">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6.5C0 4.29086 1.79086 2.5 4 2.5H14C16.2091 2.5 18 4.29086 18 6.5V8V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8V6.5Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M14 2.5H4C1.79086 2.5 0 4.29086 0 6.5V8H18V6.5C18 4.29086 16.2091 2.5 14 2.5Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 0.25C5.41421 0.25 5.75 0.585786 5.75 1V4C5.75 4.41421 5.41421 4.75 5 4.75C4.58579 4.75 4.25 4.41421 4.25 4V1C4.25 0.585786 4.58579 0.25 5 0.25ZM13 0.25C13.4142 0.25 13.75 0.585786 13.75 1V4C13.75 4.41421 13.4142 4.75 13 4.75C12.5858 4.75 12.25 4.41421 12.25 4V1C12.25 0.585786 12.5858 0.25 13 0.25Z"
                            fill="#1A202C"
                            className="path-2"
                          />
                          <circle cx="9" cy="14" r="1" fill="#22C55E" />
                          <circle
                            cx="13"
                            cy="14"
                            r="1"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <circle
                            cx="5"
                            cy="14"
                            r="1"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Change Password
                      </span>
                    </div>
                  </div>
                </Link>
              </li> : ""}

              {cookies.get('name') == "Super Admin" ? <li
                className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/turn-over-report" ? "nav-active" : ""
                  } `}
              >
                <Link to="/turn-over-report">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6.5C0 4.29086 1.79086 2.5 4 2.5H14C16.2091 2.5 18 4.29086 18 6.5V8V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8V6.5Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M14 2.5H4C1.79086 2.5 0 4.29086 0 6.5V8H18V6.5C18 4.29086 16.2091 2.5 14 2.5Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 0.25C5.41421 0.25 5.75 0.585786 5.75 1V4C5.75 4.41421 5.41421 4.75 5 4.75C4.58579 4.75 4.25 4.41421 4.25 4V1C4.25 0.585786 4.58579 0.25 5 0.25ZM13 0.25C13.4142 0.25 13.75 0.585786 13.75 1V4C13.75 4.41421 13.4142 4.75 13 4.75C12.5858 4.75 12.25 4.41421 12.25 4V1C12.25 0.585786 12.5858 0.25 13 0.25Z"
                            fill="#1A202C"
                            className="path-2"
                          />
                          <circle cx="9" cy="14" r="1" fill="#22C55E" />
                          <circle
                            cx="13"
                            cy="14"
                            r="1"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <circle
                            cx="5"
                            cy="14"
                            r="1"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Turn Over Report
                      </span>
                    </div>
                  </div>
                </Link>
              </li> : ""}

            </ul>
          </div>

        </div>

      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  handleActive: ProtoTypes.func,
};

export default Sidebar;



 
                // <ul
                //   className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${gamelist || sorat ? "active" : ""
                //     }`}
                // >

                //   <li
                //     className={`item py-[11px] text-bgray-900 dark:text-white`}
                //     onClick={() => backandwhitegame(!sorat)}
                //   >
                //     <a className="cursor-pointer">
                //       <div className="flex items-center justify-between">
                //         <div className="flex items-center space-x-2.5">
                //           <span className="item-ico">
                //             <svg
                //               width="18"
                //               height="21"
                //               viewBox="0 0 18 21"
                //               fill="none"
                //               xmlns="http://www.w3.org/2000/svg"
                //             >
                //               <path
                //                 className="path-1"
                //                 d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                //                 fill="#1A202C"
                //               />
                //               <path
                //                 className="path-2"
                //                 d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                //                 fill="#22C55E"
                //               />
                //             </svg>
                //           </span>
                //           <span className="item-text text-lg font-medium leading-none">
                //             Sorat
                //           </span>
                //         </div>
                //         <span
                //           className={`transition-all ${sorat ? "-rotate-90" : "rotate-0"
                //             }`}
                //         >
                //           <svg
                //             width="6"
                //             height="12"
                //             viewBox="0 0 6 12"
                //             fill="none"
                //             className="fill-current"
                //             xmlns="http://www.w3.org/2000/svg"
                //           >
                //             <path
                //               fillRule="evenodd"
                //               clipRule="evenodd"
                //               fill="currentColor"
                //               d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                //             />
                //           </svg>
                //         </span>
                //       </div>
                //     </a>
                //     <ul
                //       className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${sorat ? "active" : ""
                //         }`}
                //     >
                //       <li>
                //         <Link
                //           to="/gamehistory?gamename=Sorat"
                //           className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/home-2" ? "nav-active" : ""
                //             }`}
                //         >
                //           Game History
                //         </Link>
                //       </li>
                //       <li>
                //         <Link
                //           to="/gamelogic?gamename=SORAT"
                //           className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/home-3" ? "nav-active" : ""
                //             }`}
                //         >
                //           Game Logic
                //         </Link>
                //       </li>
                //     </ul>
                //   </li>
                // </ul>

                // <ul
                //   className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${gamelist  || spin? "active" : ""
                //     }`}
                // >
                //   <li
                //     className={`item py-[11px] text-bgray-900 dark:text-white`}
                //     onClick={() => setSpin(!spin)}
                //   >
                //     <a className="cursor-pointer">
                //       <div className="flex items-center justify-between">
                //         <div className="flex items-center space-x-2.5">
                //           <span className="item-ico">
                //             <svg
                //               width="18"
                //               height="21"
                //               viewBox="0 0 18 21"
                //               fill="none"
                //               xmlns="http://www.w3.org/2000/svg"
                //             >
                //               <path
                //                 className="path-1"
                //                 d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                //                 fill="#1A202C"
                //               />
                //               <path
                //                 className="path-2"
                //                 d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                //                 fill="#22C55E"
                //               />
                //             </svg>
                //           </span>
                //           <span className="item-text text-lg font-medium leading-none">
                //             Spin
                //           </span>
                //         </div>
                //         <span
                //           className={`transition-all ${spin ? "-rotate-90" : "rotate-0"
                //             }`}
                //         >
                //           <svg
                //             width="6"
                //             height="12"
                //             viewBox="0 0 6 12"
                //             fill="none"
                //             className="fill-current"
                //             xmlns="http://www.w3.org/2000/svg"
                //           >
                //             <path
                //               fillRule="evenodd"
                //               clipRule="evenodd"
                //               fill="currentColor"
                //               d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                //             />
                //           </svg>
                //         </span>
                //       </div>
                //     </a>
                //     <ul
                //       className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${spin ? "active" : ""
                //         }`}
                //     >
                //       <li>
                //         <Link
                //           to="/gamehistory?gamename=Spin"
                //           className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/" ? "nav-active" : ""
                //             }`}
                //         >
                //           Game History
                //         </Link>
                //       </li>
                //       <li>
                //         <Link
                //           to="/gamelogic?gamename=SPIN"
                //           className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/home-2" ? "nav-active" : ""
                //             }`}
                //         >
                //           Game Logic
                //         </Link>
                //       </li>

                //     </ul>

                //   </li>
                // </ul>


                // <ul
                //   className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${gamelist  || andarbahar? "active" : ""
                //     }`}
                // >
                //   <li
                //     className={`item py-[11px] text-bgray-900 dark:text-white`}
                //     onClick={() => setAndarbahar(!andarbahar)}
                //   >
                //     <a className="cursor-pointer">
                //       <div className="flex items-center justify-between">
                //         <div className="flex items-center space-x-2.5">
                //           <span className="item-ico">
                //             <svg
                //               width="18"
                //               height="21"
                //               viewBox="0 0 18 21"
                //               fill="none"
                //               xmlns="http://www.w3.org/2000/svg"
                //             >
                //               <path
                //                 className="path-1"
                //                 d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                //                 fill="#1A202C"
                //               />
                //               <path
                //                 className="path-2"
                //                 d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                //                 fill="#22C55E"
                //               />
                //             </svg>
                //           </span>
                //           <span className="item-text text-lg font-medium leading-none">
                //           Andar Bahar
                //           </span>
                //         </div>
                //         <span
                //           className={`transition-all ${andarbahar ? "-rotate-90" : "rotate-0"
                //             }`}
                //         >
                //           <svg
                //             width="6"
                //             height="12"
                //             viewBox="0 0 6 12"
                //             fill="none"
                //             className="fill-current"
                //             xmlns="http://www.w3.org/2000/svg"
                //           >
                //             <path
                //               fillRule="evenodd"
                //               clipRule="evenodd"
                //               fill="currentColor"
                //               d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                //             />
                //           </svg>
                //         </span>
                //       </div>
                //     </a>
                //     <ul
                //       className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${andarbahar ? "active" : ""
                //         }`}
                //     >
                //       <li>
                //         <Link
                //           to="/gamehistory?gamename=AndarBahar"
                //           className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/" ? "nav-active" : ""
                //             }`}
                //         >
                //           Game History
                //         </Link>
                //       </li>
                //       <li>
                //         <Link
                //           to="/gamelogic?gamename=ANDARBAHAR"
                //           className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/home-2" ? "nav-active" : ""
                //             }`}
                //         >
                //           Game Logic
                //         </Link>
                //       </li>

                //     </ul>

                //   </li>
                // </ul>


                // <ul
                //   className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${gamelist  || wheeloffortune? "active" : ""
                //     }`}
                // >
                //   <li
                //     className={`item py-[11px] text-bgray-900 dark:text-white`}
                //     onClick={() => setWheeloffortune(!wheeloffortune)}
                //   >
                //     <a className="cursor-pointer">
                //       <div className="flex items-center justify-between">
                //         <div className="flex items-center space-x-2.5">
                //           <span className="item-ico">
                //             <svg
                //               width="18"
                //               height="21"
                //               viewBox="0 0 18 21"
                //               fill="none"
                //               xmlns="http://www.w3.org/2000/svg"
                //             >
                //               <path
                //                 className="path-1"
                //                 d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                //                 fill="#1A202C"
                //               />
                //               <path
                //                 className="path-2"
                //                 d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                //                 fill="#22C55E"
                //               />
                //             </svg>
                //           </span>
                //           <span className="item-text text-lg font-medium leading-none">
                //           Wheel of Fortune
                //           </span>
                //         </div>
                //         <span
                //           className={`transition-all ${wheeloffortune ? "-rotate-90" : "rotate-0"
                //             }`}
                //         >
                //           <svg
                //             width="6"
                //             height="12"
                //             viewBox="0 0 6 12"
                //             fill="none"
                //             className="fill-current"
                //             xmlns="http://www.w3.org/2000/svg"
                //           >
                //             <path
                //               fillRule="evenodd"
                //               clipRule="evenodd"
                //               fill="currentColor"
                //               d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                //             />
                //           </svg>
                //         </span>
                //       </div>
                //     </a>
                //     <ul
                //       className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${wheeloffortune ? "active" : ""
                //         }`}
                //     >
                //       <li>
                //         <Link
                //           to="/gamehistory?gamename=WheelofFortune"
                //           className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/" ? "nav-active" : ""
                //             }`}
                //         >
                //           Game History
                //         </Link>
                //       </li>
                //       <li>
                //         <Link
                //           to="/gamelogic?gamename=WHEELOFFORTUNE"
                //           className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/home-2" ? "nav-active" : ""
                //             }`}
                //         >
                //           Game Logic
                //         </Link>
                //       </li>

                //     </ul>

                //   </li>
                // </ul>


                // <ul
                //   className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${gamelist  || barakadum? "active" : ""
                //     }`}
                // >
                //   <li
                //     className={`item py-[11px] text-bgray-900 dark:text-white`}
                //     onClick={() => setBarakadum(!barakadum)}
                //   >
                //     <a className="cursor-pointer">
                //       <div className="flex items-center justify-between">
                //         <div className="flex items-center space-x-2.5">
                //           <span className="item-ico">
                //             <svg
                //               width="18"
                //               height="21"
                //               viewBox="0 0 18 21"
                //               fill="none"
                //               xmlns="http://www.w3.org/2000/svg"
                //             >
                //               <path
                //                 className="path-1"
                //                 d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                //                 fill="#1A202C"
                //               />
                //               <path
                //                 className="path-2"
                //                 d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                //                 fill="#22C55E"
                //               />
                //             </svg>
                //           </span>
                //           <span className="item-text text-lg font-medium leading-none">
                //           12 Ka Dum
                //           </span>
                //         </div>
                //         <span
                //           className={`transition-all ${barakadum ? "-rotate-90" : "rotate-0"
                //             }`}
                //         >
                //           <svg
                //             width="6"
                //             height="12"
                //             viewBox="0 0 6 12"
                //             fill="none"
                //             className="fill-current"
                //             xmlns="http://www.w3.org/2000/svg"
                //           >
                //             <path
                //               fillRule="evenodd"
                //               clipRule="evenodd"
                //               fill="currentColor"
                //               d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                //             />
                //           </svg>
                //         </span>
                //       </div>
                //     </a>
                //     <ul
                //       className={`sub-menu ml-2.5 mt-[22px]  border-l transition-all overflow-hidden border-success-100 pl-5  ${barakadum ? "active" : ""
                //         }`}
                //     >
                //       <li>
                //         <Link
                //           to="/gamehistory?gamename=12KaDum"
                //           className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/" ? "nav-active" : ""
                //             }`}
                //         >
                //           Game History
                //         </Link>
                //       </li>
                //       <li>
                //         <Link
                //           to="/gamelogic?gamename=BARAKADUM"
                //           className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300 ${location === "/home-2" ? "nav-active" : ""
                //             }`}
                //         >
                //           Game Logic
                //         </Link>
                //       </li>

                //     </ul>

                //   </li>
                // </ul>



                
//           <div className="item-wrapper mb-5">
//             <h4 className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
//               Help
//             </h4>
//             <ul className="mt-2.5">
//               <li
//                 className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/support-ticket" ? "nav-active" : ""
//                   } `}
//               >
//                 <Link to="/support-ticket">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2.5">
//                       <span className="item-ico">
//                         <svg
//                           width="20"
//                           height="18"
//                           viewBox="0 0 20 18"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M5 2V11C5 12.1046 5.89543 13 7 13H18C19.1046 13 20 12.1046 20 11V2C20 0.895431 19.1046 0 18 0H7C5.89543 0 5 0.89543 5 2Z"
//                             fill="#1A202C"
//                             className="path-1"
//                           />
//                           <path
//                             d="M0 15C0 13.8954 0.895431 13 2 13H2.17157C2.70201 13 3.21071 13.2107 3.58579 13.5858C4.36683 14.3668 5.63317 14.3668 6.41421 13.5858C6.78929 13.2107 7.29799 13 7.82843 13H8C9.10457 13 10 13.8954 10 15V16C10 17.1046 9.10457 18 8 18H2C0.89543 18 0 17.1046 0 16V15Z"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                           <path
//                             d="M7.5 9.5C7.5 10.8807 6.38071 12 5 12C3.61929 12 2.5 10.8807 2.5 9.5C2.5 8.11929 3.61929 7 5 7C6.38071 7 7.5 8.11929 7.5 9.5Z"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                           <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M8.25 4.5C8.25 4.08579 8.58579 3.75 9 3.75L16 3.75C16.4142 3.75 16.75 4.08579 16.75 4.5C16.75 4.91421 16.4142 5.25 16 5.25L9 5.25C8.58579 5.25 8.25 4.91421 8.25 4.5Z"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                           <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M11.25 8.5C11.25 8.08579 11.5858 7.75 12 7.75L16 7.75C16.4142 7.75 16.75 8.08579 16.75 8.5C16.75 8.91421 16.4142 9.25 16 9.25L12 9.25C11.5858 9.25 11.25 8.91421 11.25 8.5Z"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                         </svg>
//                       </span>
//                       <span className="item-text text-lg font-medium leading-none">
//                         Support
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </li>
//               <li
//                 className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/settings" ? "nav-active" : ""
//                   } `}
//               >
//                 <Link to="/settings">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2.5">
//                       <span className="item-ico">
//                         <svg
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M13.0606 2H10.9394C9.76787 2 8.81817 2.89543 8.81817 4C8.81817 5.26401 7.46574 6.06763 6.35556 5.4633L6.24279 5.40192C5.22823 4.84963 3.93091 5.17738 3.34515 6.13397L2.28455 7.86602C1.69879 8.8226 2.0464 10.0458 3.06097 10.5981C4.17168 11.2027 4.17168 12.7973 3.06096 13.4019C2.0464 13.9542 1.69879 15.1774 2.28454 16.134L3.34515 17.866C3.93091 18.8226 5.22823 19.1504 6.24279 18.5981L6.35555 18.5367C7.46574 17.9324 8.81817 18.736 8.81817 20C8.81817 21.1046 9.76787 22 10.9394 22H13.0606C14.2321 22 15.1818 21.1046 15.1818 20C15.1818 18.736 16.5343 17.9324 17.6445 18.5367L17.7572 18.5981C18.7718 19.1504 20.0691 18.8226 20.6548 17.866L21.7155 16.134C22.3012 15.1774 21.9536 13.9542 20.939 13.4019C19.8283 12.7973 19.8283 11.2027 20.939 10.5981C21.9536 10.0458 22.3012 8.82262 21.7155 7.86603L20.6548 6.13398C20.0691 5.1774 18.7718 4.84965 17.7572 5.40193L17.6445 5.46331C16.5343 6.06765 15.1818 5.26402 15.1818 4C15.1818 2.89543 14.2321 2 13.0606 2Z"
//                             fill="#1A202C"
//                             className="path-1"
//                           />
//                           <path
//                             d="M15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                         </svg>
//                       </span>
//                       <span className="item-text text-lg font-medium leading-none">
//                         Setting
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="item-wrapper mb-5">
//             <h4 className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
//               Others
//             </h4>
//             <ul className="mt-2.5">
//               <li
//                 className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/signin" ? "nav-active" : ""
//                   } `}
//               >
//                 <Link to="/signin">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2.5">
//                       <span className="item-ico">
//                         <svg
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <ellipse
//                             cx="11.7778"
//                             cy="17.5555"
//                             rx="7.77778"
//                             ry="4.44444"
//                             fill="#1A202C"
//                             className="path-1"
//                           />
//                           <circle
//                             cx="11.7778"
//                             cy="6.44444"
//                             r="4.44444"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                         </svg>
//                       </span>
//                       <span className="item-text text-lg font-medium leading-none">
//                         Signin
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </li>
//               <li
//                 className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/signup" ? "nav-active" : ""
//                   } `}
//               >
//                 <Link to="/signup">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2.5">
//                       <span className="item-ico">
//                         <svg
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <ellipse
//                             cx="11.7778"
//                             cy="17.5555"
//                             rx="7.77778"
//                             ry="4.44444"
//                             fill="#1A202C"
//                             className="path-1"
//                           />
//                           <circle
//                             cx="11.7778"
//                             cy="6.44444"
//                             r="4.44444"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                         </svg>
//                       </span>
//                       <span className="item-text text-lg font-medium leading-none">
//                         Signup
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </li>
//               <li
//                 className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/coming-soon" ? "nav-active" : ""
//                   } `}
//               >
//                 <Link to="/coming-soon">
//                   <div className="flex items-center space-x-2.5">
//                     <span className="item-ico">
//                       <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M18.4 17.2C19.8833 19.1777 18.4721 22 16 22L8 22C5.52786 22 4.11672 19.1777 5.6 17.2L8.15 13.8C8.95 12.7333 8.95 11.2667 8.15 10.2L5.6 6.8C4.11672 4.82229 5.52787 2 8 2L16 2C18.4721 2 19.8833 4.82229 18.4 6.8L15.85 10.2C15.05 11.2667 15.05 12.7333 15.85 13.8L18.4 17.2Z"
//                           fill="#1A202C"
//                           className="path-1"
//                         />
//                         <path
//                           d="M12.7809 9.02391C12.3805 9.52432 11.6195 9.52432 11.2191 9.02391L9.29976 6.6247C8.77595 5.96993 9.24212 5 10.0806 5L13.9194 5C14.7579 5 15.2241 5.96993 14.7002 6.6247L12.7809 9.02391Z"
//                           fill="#22C55E"
//                           className="path-2"
//                         />
//                       </svg>
//                     </span>
//                     <span className="item-text text-lg font-medium leading-none">
//                       Coming Soon
//                     </span>
//                   </div>
//                 </Link>
//               </li>
//               <li
//                 className={`item py-[11px] text-bgray-900 dark:text-white ${location === "/404" ? "nav-active" : ""
//                   } `}
//               >
//                 <Link to="/404">
//                   <div className="flex items-center space-x-2.5">
//                     <span className="item-ico">
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <circle
//                           cx="10"
//                           cy="10"
//                           r="10"
//                           fill="#1A202C"
//                           className="path-1"
//                         />
//                         <path
//                           d="M9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15Z"
//                           fill="#22C55E"
//                           className="path-2"
//                         />
//                         <path
//                           fillRule="evenodd"
//                           clipRule="evenodd"
//                           d="M10 12.75C9.58579 12.75 9.25 12.4142 9.25 12L9.25 5C9.25 4.58579 9.58579 4.25 10 4.25C10.4142 4.25 10.75 4.58579 10.75 5L10.75 12C10.75 12.4142 10.4142 12.75 10 12.75Z"
//                           fill="#22C55E"
//                           className="path-2"
//                         />
//                       </svg>
//                     </span>
//                     <span className="item-text text-lg font-medium leading-none">
//                       404
//                     </span>
//                   </div>
//                 </Link>
//               </li>
//               <li className={`item py-[11px] text-bgray-900 dark:text-white`}>
//                 <Link to="#">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2.5">
//                       <span className="item-ico">
//                         <svg
//                           width="21"
//                           height="18"
//                           viewBox="0 0 21 18"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M17.1464 10.4394C16.8536 10.7323 16.8536 11.2072 17.1464 11.5001C17.4393 11.7929 17.9142 11.7929 18.2071 11.5001L19.5 10.2072C20.1834 9.52375 20.1834 8.41571 19.5 7.73229L18.2071 6.4394C17.9142 6.1465 17.4393 6.1465 17.1464 6.4394C16.8536 6.73229 16.8536 7.20716 17.1464 7.50006L17.8661 8.21973H11.75C11.3358 8.21973 11 8.55551 11 8.96973C11 9.38394 11.3358 9.71973 11.75 9.71973H17.8661L17.1464 10.4394Z"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                           <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M4.75 17.75H12C14.6234 17.75 16.75 15.6234 16.75 13C16.75 12.5858 16.4142 12.25 16 12.25C15.5858 12.25 15.25 12.5858 15.25 13C15.25 14.7949 13.7949 16.25 12 16.25H8.21412C7.34758 17.1733 6.11614 17.75 4.75 17.75ZM8.21412 1.75H12C13.7949 1.75 15.25 3.20507 15.25 5C15.25 5.41421 15.5858 5.75 16 5.75C16.4142 5.75 16.75 5.41421 16.75 5C16.75 2.37665 14.6234 0.25 12 0.25H4.75C6.11614 0.25 7.34758 0.82673 8.21412 1.75Z"
//                             fill="#1A202C"
//                             className="path-1"
//                           />
//                           <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M0 5C0 2.37665 2.12665 0.25 4.75 0.25C7.37335 0.25 9.5 2.37665 9.5 5V13C9.5 15.6234 7.37335 17.75 4.75 17.75C2.12665 17.75 0 15.6234 0 13V5Z"
//                             fill="#1A202C"
//                             className="path-1"
//                           />
//                         </svg>
//                       </span>
//                       <span className="item-text text-lg font-medium leading-none">
//                         Logout
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </li>
//             </ul>
//           </div>


// <div className="upgrade-wrapper mb-[26px] h-[172px] w-full pr-[24px]">
//           <div
//             className="upgrade-banner relative h-full w-full rounded-lg"
//             style={{ backgroundImage: `url(${bg})` }}
//           >
//             <div
//               style={{ left: `calc(50% - 20px)`, top: `-20px` }}
//               className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-white bg-success-300"
//             >
//               <span>
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M14 12.75C14 11.7835 13.1046 11 12 11C10.8954 11 10 11.7835 10 12.75C10 13.7165 10.8954 14.5 12 14.5C13.1046 14.5 14 15.2835 14 16.25C14 17.2165 13.1046 18 12 18C10.8954 18 10 17.2165 10 16.25"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                   />
//                   <path
//                     d="M12 9.5V11"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M12 18V19.5"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M5.63246 11.1026C6.44914 8.65258 8.74197 7 11.3246 7H12.6754C15.258 7 17.5509 8.65258 18.3675 11.1026L19.3675 14.1026C20.6626 17.9878 17.7708 22 13.6754 22H10.3246C6.22921 22 3.33739 17.9878 4.63246 14.1026L5.63246 11.1026Z"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M14.0859 7L9.91411 7L8.51303 5.39296C7.13959 3.81763 8.74185 1.46298 10.7471 2.10985L11.6748 2.40914C11.8861 2.47728 12.1139 2.47728 12.3252 2.40914L13.2529 2.10985C15.2582 1.46298 16.8604 3.81763 15.487 5.39296L14.0859 7Z"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </span>
//             </div>
//             <h1 className="mb-2 pt-8 text-center text-xl font-bold text-white">
//               Unlimited Cashback
//             </h1>
//             <p className="mb-2 px-7 text-center text-sm leading-5 text-white opacity-[0.5]">
//               Instant 2% back on all your spend to your account.
//             </p>
//             <div className="flex justify-center">
//               <a href="#">
//                 <div className="flex h-[36px] w-[134px] justify-center rounded-lg bg-success-300 transition duration-300 ease-in-out hover:bg-success-400">
//                   <div className="flex items-center space-x-1.5">
//                     <span className="text-sm font-semibold text-white">
//                       Upgrade Now
//                     </span>
//                     <span>
//                       <svg
//                         width="12"
//                         height="8"
//                         viewBox="0 0 12 8"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M1.33301 4H10.6663"
//                           stroke="white"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M8 6.66667L10.6667 4"
//                           stroke="white"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M8 1.33325L10.6667 3.99992"
//                           stroke="white"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="copy-write-text">
//           <p className="text-sm text-[#969BA0]">© 2023 All Rights Reserved</p>
//           <p className="text-sm font-medium text-bgray-700">
//             Made with ❤️ by
//             <a
//               href="#"
//               target="_blank"
//               className="border-b font-semibold hover:text-blue-600"
//             >
//               QuomodoTheme
//             </a>
//           </p>
//         </div>