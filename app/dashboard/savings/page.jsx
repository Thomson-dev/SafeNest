"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BalanceComponent from "@/components/Dashbaoard/BalanceComponent";
import AddCash from "@/components/Dashbaoard/AddCash";

export default function DepositPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeposit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Deposit successful!");
        router.push("/");
      } else {
        alert(`Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      alert(`Error: ${error.message || "Something went wrong"}`);
    } finally {
      setIsLoading(false);
    }
  };

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
