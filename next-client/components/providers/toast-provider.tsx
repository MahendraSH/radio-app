"use client";
import { FC } from "react";
import { Toaster } from "react-hot-toast";
interface ToastProviderProps {}

const ToastProvider: FC<ToastProviderProps> = ({}) => {
  return (
    <Toaster
      position="top-center"
      gutter={5}
      toastOptions={{
        duration: 3000,
        className:
          "bg-primary text-primary-foreground border border-2 border-primary-foreground rounded px-4 py-2 text-sm font-bold transition-colors",
      }}
    />
  );
};

export default ToastProvider;
