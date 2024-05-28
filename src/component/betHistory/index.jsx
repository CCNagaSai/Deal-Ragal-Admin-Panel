import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';
import "./styles.css";
function betHistory(data) {
  console.log("BET ::::::::::::::", data.data)
  
  const [betinfo, setBetinfo] = useState({});


  useEffect(() => {
    const submitdata = async () => {
      if (data != undefined && data.data != undefined && data.data.length > 0) {
        let datajson = {}
        for (let i = 0; i <= data.data.length-1; i++) {
          if (data.data[i].type != undefined) {
            
            
              datajson[data.data[i].betIndex] = data.data[i].bet
    
          
          }
        }
    
    
        setBetinfo(datajson)
      }


    }
    submitdata()
  }, []);


 
  //   const location = useLocation();
  //   //console.log("location ", location.state)
  //   const Botinfo = location.state;

  //   console.log("Player Info  ",Botinfo)

  //   const context = useContext(offerContext)
  //   const { BotUpdate, UploadProfile, host } = context


  //   const navigate = useNavigate();
  //   const navigateToContacts = () => {
  //       // 👇️ navigate to /contacts 
  //       navigate('/transaction');
  //   };

  //   let [userInfo, SetuserInfo] = useState({
  //     userId: Botinfo.UserId,
  //     username: Botinfo.username,
  //     profileUrl: Botinfo.profileUrl,
  //     status: Botinfo.status,
  //     MobileNo:Botinfo.MobileNo,
  //     MainWallet:Botinfo.MainWallet,
  //     RegistrationDate:Botinfo.RegistrationDate,
  //     LastLogin:Botinfo.LastLogin,
  //     Status:Botinfo.status
  //   })

  //   useEffect(() => {

  //     const submitdata = async () => {
  //         SetuserInfo({
  //           userId: Botinfo.UserId,
  //           username: Botinfo.UserName,
  //           profileUrl: Botinfo.img,
  //           status: Botinfo.Status
  //         })

  //     }
  //     submitdata()
  // },[]);

  //   const OnChange = (event) => {
  //     let { name, value } = event.target;

  //     value = (value?.toLowerCase?.() === 'true') ? true : false


  //     SetuserInfo({
  //       ...userInfo,
  //       [name]: value,
  //     });


  //     console.log("handleChange ::::::::::::::::::::::", userInfo)

  //   };


  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //         console.log("NAME :::::::::::::::::",value)
  //     SetuserInfo({
  //         ...userInfo,
  //         [name]: value,
  //     });

  //     console.log("handleChange ::::::::::::::::::::::",userInfo)

  // };

  //   const handleImage = async (e) => {
  //     console.log("Upload image ", e.target.files[0])
  //     const value = await UploadProfile(e.target.files[0])
  //     console.log("value ::::::::::::::::::",value)
  //     console.log("e.target.name ::::::::::::::::::",e.target.name)

  //     SetuserInfo({
  //       ...userInfo,
  //       [e.target.name]: value,
  //     });

  //     console.log("userInfo handleImage KKKKKKKKKKKKKKKKKKKKKKKKKKK", userInfo)

  //   }


  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     // You can handle the form submission here
  //     // This example just logs the data to the console

  //     console.log("userInfo ",userInfo)

  //     let res = await BotUpdate(userInfo)

  //     console.log("REsponce ::::::::::::::::::::::",res)

  //     if(res.status == "ok"){
  //         navigateToContacts()
  //     }else{
  //         alert("Error Please enter")
  //     }
  //     console.log(userInfo);
  // };


  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
          Player Bet Information
        </h3>
        <div className="table-section">
          <table className="roulette-table">
            <tr>
              <td rowSpan="3" className="zero" data-bet="number" data-number="0"><p className='Chipsbet'>{betinfo["0"]}</p>0</td>
              <td className="red" data-bet="number" data-number="3"><p className='Chipsbet'>{betinfo["3"]}</p>3</td>
              <td className="black" data-bet="number" data-number="6"><p className='Chipsbet'>{betinfo["6"]}</p>6</td>
              <td className="red" data-bet="number" data-number="9"><p className='Chipsbet'>{betinfo["9"]}</p>9</td>
              <td className="black" data-bet="number" data-number="12"><p className='Chipsbet'>{betinfo["12"]}</p>12</td>
              <td className="red" data-bet="number" data-number="15"><p className='Chipsbet'>{betinfo["15"]}</p>15</td>
              <td className="black" data-bet="number" data-number="18"><p className='Chipsbet'>{betinfo["18"]}</p>18</td>
              <td className="red" data-bet="number" data-number="21"><p className='Chipsbet'>{betinfo["21"]}</p>21</td>
              <td className="black" data-bet="number" data-number="24"><p className='Chipsbet'>{betinfo["24"]}</p>24</td>
              <td className="red" data-bet="number" data-number="27"><p className='Chipsbet'>{betinfo["27"]}</p>27</td>
              <td className="black" data-bet="number" data-number="30"><p className='Chipsbet'>{betinfo["30"]}</p>30</td>
              <td className="red" data-bet="number" data-number="33"><p className='Chipsbet'>{betinfo["33"]}</p>33</td>
              <td className="black" data-bet="number" data-number="36"><p className='Chipsbet'>{betinfo["36"]}</p>36</td>
              <td className="first-dozen" data-bet="number" data-number="C3"><p className='Chipsbet'>{betinfo["39"]}</p>C3</td>

            </tr>
            
            <tr>
              <td className="black" data-bet="number" data-number="2"><p className='Chipsbet'>{betinfo["2"]}</p>2</td>
              <td className="red" data-bet="number" data-number="5"><p className='Chipsbet'>{betinfo["5"]}</p>5</td>
              <td className="black" data-bet="number" data-number="8"><p className='Chipsbet'>{betinfo["8"]}</p>8</td>
              <td className="red" data-bet="number" data-number="11"><p className='Chipsbet'>{betinfo["11"]}</p>11</td>
              <td className="black" data-bet="number" data-number="14"><p className='Chipsbet'>{betinfo["14"]}</p>14</td>
              <td className="red" data-bet="number" data-number="17"><p className='Chipsbet'>{betinfo["17"]}</p>17</td>
              <td className="black" data-bet="number" data-number="20"><p className='Chipsbet'>{betinfo["20"]}</p>20</td>
              <td className="red" data-bet="number" data-number="23"><p className='Chipsbet'>{betinfo["23"]}</p>23</td>
              <td className="black" data-bet="number" data-number="26"><p className='Chipsbet'>{betinfo["26"]}</p>26</td>
              <td className="red" data-bet="number" data-number="29"><p className='Chipsbet'>{betinfo["29"]}</p>29</td>
              <td className="black" data-bet="number" data-number="32"><p className='Chipsbet'>{betinfo["32"]}</p>32</td>
              <td className="red" data-bet="number" data-number="35"><p className='Chipsbet'>{betinfo["35"]}</p>35</td>
              <td className="first-dozen" data-bet="number" data-number="C2"><p className='Chipsbet'>{betinfo["38"]}</p>C2</td>

            </tr>
            <tr>
              <td className="red" data-bet="number" data-number="1"><p className='Chipsbet'>{betinfo["1"]}</p>1</td>
              <td className="black" data-bet="number" data-number="4"><p className='Chipsbet'>{betinfo["4"]}</p>4</td>
              <td className="red" data-bet="number" data-number="7"><p className='Chipsbet'>{betinfo["7"]}</p>7</td>
              <td className="black" data-bet="number" data-number="10"><p className='Chipsbet'>{betinfo["10"]}</p>10</td>
              <td className="red" data-bet="number" data-number="13"><p className='Chipsbet'>{betinfo["13"]}</p>13</td>
              <td className="black" data-bet="number" data-number="16"><p className='Chipsbet'>{betinfo["16"]}</p>16</td>
              <td className="red" data-bet="number" data-number="19"><p className='Chipsbet'>{betinfo["19"]}</p>19</td>
              <td className="black" data-bet="number" data-number="22"><p className='Chipsbet'>{betinfo["22"]}</p>22</td>
              <td className="red" data-bet="number" data-number="25"><p className='Chipsbet'>{betinfo["25"]}</p>25</td>
              <td className="black" data-bet="number" data-number="28"><p className='Chipsbet'>{betinfo["28"]}</p>28</td>
              <td className="red" data-bet="number" data-number="31"><p className='Chipsbet'>{betinfo["31"]}</p>31</td>
              <td className="black" data-bet="number" data-number="34"><p className='Chipsbet'>{betinfo["34"]}</p>34</td>
              <td className="first-dozen" data-bet="number" data-number="C1"><p className='Chipsbet'>{betinfo["37"]}</p>C1</td>


            </tr>
            <tr>
              <td></td>
              <td colSpan={4} className="first-dozen" data-bet="first-dozen"><p className='Chipsbet'>{betinfo["40"]}</p>1st 12</td>
              <td colSpan={4} className="second-dozen" data-bet="second-dozen"><p className='Chipsbet'>{betinfo["41"]}</p>2nd 12</td>
              <td colSpan={4} className="third-dozen" data-bet="third-dozen"><p className='Chipsbet'>{betinfo["42"]}</p>3rd 12</td>
            </tr>
            <tr>
              <td></td>
            <td colSpan={2} className="low" data-bet="low"><p className='Chipsbet'>{betinfo["43"]}</p>1-18</td>
              <td colSpan={2} className="even" data-bet="even"><p className='Chipsbet'>{betinfo["46"]}</p>Even</td>
              
              <td colSpan={2} className="red" data-bet="red"><p className='Chipsbet'>{betinfo["47"]}</p>Red</td>
              <td colSpan={2} className="black" data-bet="black"><p className='Chipsbet'>{betinfo["48"]}</p>Black</td>
              
              <td colSpan={2} className="odd" data-bet="odd"><p className='Chipsbet'>{betinfo["45"]}</p>Odd</td>
              <td colSpan={2} className="high" data-bet="high"><p className='Chipsbet'>{betinfo["44"]}</p>19-36</td>
            </tr>
           
          </table>
        </div>
      </div>
    </div>
  );
}


export default betHistory;