import totalEarn from "../../assets/images/icons/total-earn.svg";
import memberImg from "../../assets/images/avatar/members-2.png";

import offerContext from '../../context/offerContext'
import React,{useContext,useEffect,useState,useRef} from 'react';
import TotalWidgetCard from "./TotalWidgetCard";

function Dashboard() {

  const context = useContext(offerContext)
  const { dashboardData } = context
  let apiData = {}

  let [totalUser, settotalUser] = useState('');
  let [totalAgent, settotalAgent] = useState('');

  let [totalDeposit, settotalDeposit] = useState('');
  let [todayDeposit, settodayDeposit] = useState('');
  let [totalGamePay, setTotalgamePay] = useState('');

  useEffect( () => {
    const submitdata = async () => {
     
      apiData = await dashboardData("Admin")
      
      if(apiData.totalUser != undefined)
      settotalUser(apiData.totalUser)

      if(apiData.totalAgent != undefined)
      settotalAgent(apiData.totalAgent) 

      if(apiData.totalDeposit != undefined)
      settotalDeposit(apiData.totalDeposit)

      if(apiData.todayDeposit != undefined)
      settodayDeposit(apiData.todayDeposit)

      if(apiData.totalGamePay != undefined)
      setTotalgamePay(apiData.totalGamePay)

      

  }

  submitdata()
  },[]);
  
  return (
    <div className="mb-[24px] w-full">
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-3">
        <TotalWidgetCard
          totalEarnImg={totalEarn}
          memberImg={memberImg}
          title="Total Users"
          amount={totalUser}
          groth="+ 3.5%"
          id="totalEarn"
          logo=""
          link="/transaction"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn}
          memberImg={memberImg}
          title="Total Agent"
          amount={totalAgent}
          groth="+ 3.5%"
          id="totalEarn"
          logo=""
          link="/agentmanagement"
        />
      
        <TotalWidgetCard
          totalEarnImg={totalEarn}
          memberImg={memberImg}
          title="Total Deposit"
          amount={totalDeposit}
          groth="+ 3.5%"
          id="totalSpending"
          logo="₹"
          link="/depositList"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn}
          memberImg={memberImg}
          title="Today Deposit"
          amount={todayDeposit}
          groth="+ 3.5%"
          id="totalGoal"
          logo="₹"
          link="/depositList"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn}
          memberImg={memberImg}
          title="Games Played"
          amount={totalGamePay}
          groth="+ 3.5%"
          id="totalGoal"
          logo=""
          link="/gamename=balckandwhite"
        />
      </div>
    </div>
  );
}

export default Dashboard;
