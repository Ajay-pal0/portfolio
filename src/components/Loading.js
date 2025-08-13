import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loading = ({ isVisible = true }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-gradient-to-br from-indigo-600/80 to-purple-600/80"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-12 h-12 border-4 border-transparent border-t-white rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
