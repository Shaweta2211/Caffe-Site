"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  phone: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");

      if (digitsOnly.length > 10) {
        setErrors((prev) => ({
          ...prev,
          phone: "Phone number cannot exceed 10 digits",
        }));
        return;
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }

      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must be exactly 10 digits",
      }));
      return;
    }

    alert("Form submitted successfully!");
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 shadow-md rounded-md h-[500px] flex flex-col justify-between"> {/* ✅ Match map height */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-5"> {/* ✅ Increased spacing */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded mt-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded mt-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded mt-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />

              <button
                type="submit"
                className="bg-red-600 hover:bg-gray-700 text-white mt-2  py-2 px-4 rounded transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Location / Map */}
        <div className="w-full lg:w-1/2 h-[500px]"> {/* ✅ Equal height */}
          <iframe
            src="https://www.google.com/maps?q=New+Delhi&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            className="rounded shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
