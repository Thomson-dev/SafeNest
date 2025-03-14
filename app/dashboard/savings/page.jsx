"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BalanceComponent from "@/components/Dashbaoard/BalanceComponent";
import AddCash from "@/components/Dashbaoard/AddCash";

export default function DepositPage() {

 

  return (
    <div className="p-4  mx-auto">
      <h1 className="text-xl font-bold mb-4">Deposit Money</h1>
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
        <BalanceComponent />
        <div className="">
          <AddCash />
        </div>
      </div>
    </div>
  );
}
