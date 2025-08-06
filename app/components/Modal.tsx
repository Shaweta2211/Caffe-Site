"use client";
import React from "react";
import { MenuItem } from "../menu/type";

interface ModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded max-w-md w-full relative">
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-cover rounded mb-4"
        />
        <p className="mb-4">{item.description}</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-2xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
