'use client';

import { createContext, useContext, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ConsultationForm } from "@/components/forms/ConsultationForm";


// Define the shape of the context
interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

// Create the context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Create a custom hook to easily access the context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

// Create the provider component
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      
      {/* The actual modal component lives here */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTitle className="sr-only">Get a Free Consultation</DialogTitle>
        <DialogContent className=" lg:max-w-4xl">
          <ConsultationForm onSuccess={closeModal} />
        </DialogContent>
      </Dialog>
    </ModalContext.Provider>
  );
};