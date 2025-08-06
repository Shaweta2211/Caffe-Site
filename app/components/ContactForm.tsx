"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
  });

  const handleChange = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must be exactly 10 digits",
      }));
      return;
    }

    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 flex flex-col lg:flex-row gap-6">
      {/* Contact Form */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone (10 digits only)
            </label>
            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              maxLength={10}
              pattern="\d{10}"
              placeholder="Enter 10-digit number"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="w-full lg:w-1/2 h-[500px]">
        <iframe
          src="https://www.google.com/maps?q=delhi&output=embed"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded shadow-md border"
        ></iframe>
      </div>
    </div>
  );
}
