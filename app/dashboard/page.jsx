import Featured from "@/components/Dashbaoard/Featured";
import FinancialServices from "@/components/Dashbaoard/FinancialServices";
import Wallet from "@/components/Dashbaoard/Wallet";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4 px-4">
        <Wallet title="Total Balance" amount="500,000.00" />
        <Wallet title="Purse Balance" amount="250,000.00" />
        <Wallet title="Total Investments" amount="100,000.00" />
      </div>

      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4">
      <FinancialServices
        title="Investments" 
        description="Grow your money and make impact." 
        href="/investments"
      />
      <FinancialServices 
        title="Start a Savings Plan" 
        description="Save in NGN. Earn up to 14% interest yearly." 
        href="/dashboard/savings"
      />
      <FinancialServices 
        title="Get a Loan" 
        description="Quick access to loans at low interest rates." 
        href="/loans"
      />
    </div>



      {/* <Featured /> */}
    </div>
  );
};

export default page;
