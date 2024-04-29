import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import PlayerImg from "../../assets/images/icon/player.png";

import offerContext from '../../context/offerContext';
import React, { useState, useContext, useEffect } from 'react';

import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";


function PlayerInfo({ UserId, UserName, MobileNo, location, area, createdAt, lastLoginDate,  status,email,uniqueId,password }) {

  const navigate = useNavigate();
  const navigateToContacts = (UserId, UserName, MobileNo, location, area, createdAt, lastLoginDate,  status,email,uniqueId,password) => {
    navigate('/agentedit', { state:{ UserId, UserName, MobileNo, location, area, createdAt, lastLoginDate,  status,email,uniqueId,password } });
  }


  const context = useContext(offerContext)
  const { AgentDelete } = context

  const NavigateDelete = async (UserId) =>{
    await AgentDelete(UserId)

    navigate('/agentmanagement');
  }

  const NavigateTotalShop = async (UserId) =>{
    navigate('/transaction', { state:{ UserId} });
  }

  return (
    <tr className="border-b border-bgray-300 dark:border-darkblack-400">
      
      <td className="px-6 py-5 xl:px-0">
        <div className="flex w-full items-center space-x-2.5">
          <p className="text-base font-semibold text-bgray-900 dark:text-white">
            {UserName}
          </p>
        </div>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {MobileNo}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {location}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {area}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
        {createdAt}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
        {lastLoginDate}
        </p>
      </td>
     
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {status}
        </p>
      </td>

      <td className="px-6 py-5 xl:px-0">
        <div className="flex justify-center">
          <button styles={{
            "margin": "1px",
            "background-color": "white",
            "color": "white",
            "border": "none",
            "padding": "5px 10px",
            "cursor": "pointer",
            "border-radius": "4px"
          }} onClick={() => navigateToContacts( UserId, UserName, MobileNo, location, area, createdAt, lastLoginDate,  status,email,uniqueId,password)} >
          <img style={{"width": "30px","height": "30px","margin": "30px"}} src={edit} />
          </button>

          <button styles={{
            "margin": "1px",
            "background-color": "white",
            "color": "white",
            "border": "none",
            "padding": "5px 10px",
            "cursor": "pointer",
            "border-radius": "4px"
          }} onClick={() => NavigateDelete(UserId) } >
          <img style={{"width": "30px","height": "30px","margin": "30px"}} src={trash} />
           
          </button>

          <button styles={{
            "margin": "1px",
            "background-color": "white",
            "color": "white",
            "border": "none",
            "padding": "5px 10px",
            "cursor": "pointer",
            "border-radius": "4px"
          }} onClick={() => NavigateTotalShop(UserId) } >
            <img style={{ "width": "30px", "height": "30px", "margin": "30px" }} src={ PlayerImg} />

          </button>

        </div>
      </td>
    </tr>
  );
}

// PlayerInfo.propTypes = {
//   UserId:ProtoTypes.string,
//   UserName:ProtoTypes.string,
//   MobileNo:ProtoTypes.string,
//   GamePlay:ProtoTypes.Number,
//   MainWallet:ProtoTypes.Number,
//   RegistrationDate:ProtoTypes.string,
//   LastLogin:ProtoTypes.string,
//   status:ProtoTypes.string,
//   Status:ProtoTypes.string
// };

export default PlayerInfo;
