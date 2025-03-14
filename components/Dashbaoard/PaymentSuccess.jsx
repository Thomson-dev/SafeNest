"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const transactionRef = searchParams.get("transactionRef");
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Verifying payment...");

  useEffect(() => {
    const verifyPayment = async () => {
      if (!transactionRef) return;

      try {
        const response = await axios.get(`/api/payments/verify?transactionRef=${transactionRef}`);
        if (response.data.success) {
          setMessage("Payment successful! Redirecting...");
          setTimeout(() => router.push("/dashboard"), 3000); // Redirect after 3 sec
        } else {
          setMessage("Payment verification failed.");
        }
      } catch (error) {
        console.error("Verification error:", error);
        setMessage("Error verifying payment.");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [transactionRef, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-xl font-semibold">{message}</h2>
        {loading && <p className="text-gray-500">Please wait...</p>}
      </div>
    </div>
  );
}
