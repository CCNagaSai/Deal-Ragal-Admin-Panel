import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import offerContext from '../../context/offerContext';
import React, { useState, useContext, useEffect } from 'react';

import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";


function PlayerInfo({ UserId, UserName, MobileNo, MainWallet, RegistrationDate, LastLogin,  status, profileUrl,email,uniqueId }) {

  const navigate = useNavigate();

  const context = useContext(offerContext)
  const { PlayerDelete } = context
  
  const navigateToContacts = (UserId, UserName, MobileNo,  MainWallet,  RegistrationDate, LastLogin, status, profileUrl,email,uniqueId) => {
    navigate('/playeredit', { state:{ UserId, UserName, MobileNo, MainWallet,  RegistrationDate, LastLogin, status, profileUrl,email,uniqueId } });
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
      
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
        ₹{MainWallet}
        </p>
      </td>
      
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {RegistrationDate}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {LastLogin}
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
          }} onClick={() => navigateToContacts( UserId, UserName, MobileNo, MainWallet, RegistrationDate, LastLogin, status, profileUrl ,email,uniqueId)} >
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
          }} onClick={() => PlayerDelete(UserId)} >
          <img style={{"width": "30px","height": "30px","margin": "30px"}} src={trash} />
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
