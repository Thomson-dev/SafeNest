"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, ShieldCheck, UserCheck } from "lucide-react";

export default function Walkthrough() {
  return (
    <section className="bg-[#F0FAF4] py-16 px-6 md:px-12 rounded-2xl max-w-5xl mx-auto mb-16">
      <div className="text-center">
        <motion.h2
          className="text-4xl font-bold text-[#2E8B57]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get Started with SafeNest in 4 Simple Steps
        </motion.h2>
      </div>

      <div className="mt-10 space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#2E8B57]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <step.icon className="text-[#2E8B57] w-8 h-8" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <motion.button
          className="px-6 py-3 bg-[#2E8B57] text-white font-semibold rounded-full shadow-md hover:bg-[#256b44] transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Start Saving Now
        </motion.button>
      </div>
    </section>
  );
}

// Updated Steps
const steps = [
  {
    icon: UserCheck,
    title: "Step 1 - Sign Up Easily",
    description: "Join SafeNest with just your phone number and start your journey to financial security.",
  },
  {
    icon: Globe,
    title: "Step 2 - Save Without Hassle",
    description: "Deposit funds securely and build your savings effortlessly—no unnecessary transactions.",
  },
  {
    icon: ShieldCheck,
    title: "Step 3 - Instant Emergency Access",
    description: "Withdraw emergency funds whenever needed—no debt, no delays, just support.",
  },
  {
    icon: Smartphone,
    title: "Step 4 - Manage Anytime, Anywhere",
    description: "Access your savings and withdrawals via the website, with USSD support coming soon!",
  },
];
