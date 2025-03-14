"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

export default function AddCash() {
  const [isOpen, setIsOpen] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  
  const handleCustomPrice = async (e) => {
    e.preventDefault();
    
    // Ensure input is valid
    const amountValue = parseFloat(customAmount.replace(/[₦$,]/g, ""));
    if (isNaN(amountValue) || amountValue <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      const response = await axios.post(
        "http://localhost:8000/api/deposit", // Adjust URL based on your backend
        { amount: amountValue }, // Sending amount to the backend
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );

      if (response.data.checkoutUrl) {
        // Redirect user to Squad checkout page
        window.location.href = response.data.checkoutUrl;
      } else {
        alert("Payment initiation failed. Try again.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white w-full">
      <h3 className="text-gray-600 font-semibold text-lg mb-3">Add cash</h3>
      <div className="grid grid-cols-3 gap-3">
        {["20000", "50000", "100000", "10000", "20000"].map((amount, index) => (
          <button
            key={index}
            className="bg-gray-100 text-blue-600 font-semibold py-3 px-5 rounded-xl hover:bg-gray-200"
            onClick={() => {
              setCustomAmount(amount);
              setIsOpen(true);
            }}
          >
            ₦{parseInt(amount).toLocaleString()}
          </button>
        ))}
        <button
          className="bg-gray-100 text-blue-600 font-semibold py-3 px-5 rounded-xl hover:bg-gray-200 flex items-center justify-center"
          onClick={toggleModal}
        >
          <FaPlus />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0  bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
              <h3 className="text-gray-700 font-semibold text-lg mb-4">
                Enter Custom Amount
              </h3>
              <form onSubmit={handleCustomPrice} className="space-y-4">
                <input
                  type="text"
                  name="amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400 outline-none"
                  placeholder="Enter amount (NGN)"
                  required
                />
                <div className="text-center text-gray-600 font-semibold my-2">
                  Selected Amount: ₦{parseFloat(customAmount) || 0}
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Pay"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}