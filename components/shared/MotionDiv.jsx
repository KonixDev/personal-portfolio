// "use client";

// import React from "react";
// import { motion } from "framer-motion";

const MotionDiv = ({ children, ...props }) => {
  return (
    // <motion.div
    //   whileInView={{ opacity: 1 }}
    //   initial={{ opacity: 0 }}
    //   transition={{ duration: 2 }}
    //   {...props}
    // >
    <div>{children}</div>
    // </motion.div>
  );
};

export default MotionDiv;
