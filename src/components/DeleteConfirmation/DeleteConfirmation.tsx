"use client";

import { useState } from "react";
import React from "react";
import "./DeleteConfirmation.css";
import { AnimatePresence, motion } from "motion/react";

export default function DeleteConfirmation({
  handleDelete,
}: {
  handleDelete: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="delete-confirm-container">
      <div>
        <button onClick={() => setIsOpen(true)}>Eyða</button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="delete-confirm-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setIsOpen(false)}
          >
            <div className="delete-confirm-dialog">
              <motion.div
                className="delete-confirm-item-container"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p>Are you sure you want to delete this?</p>
                <div className="delete-confirm-button-container">
                  <button
                    onClick={handleDelete}
                    className="delete-confirm-button"
                  >
                    Yes I&apos;m sure
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
