"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your API logic here
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20 px-4 text-center"
      style={{
        backgroundImage: `url('/images/contact-bg.png')`,
      }}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="border-5 border-black inline-block px-6 py-2 mb-4">
          <h2 className="text-base md:text-lg font-semibold tracking-widest">CONTACT</h2>
        </div>
        <p className="max-w-xl mx-auto text-sm text-gray-800">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-6 mt-12 text-left"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="ENTER YOUR NAME*"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-l-4 border-b-4 border-black bg-transparent px-2 py-3 placeholder-black text-black outline-none"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="ENTER YOUR EMAIL*"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-l-4 border-b-4 border-black bg-transparent px-2 py-3 placeholder-black text-black outline-none"
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="PHONE NUMBER"
          value={formData.phone}
          onChange={handleChange}
          className="border-l-4 border-b-4 border-black bg-transparent px-2 py-3 placeholder-black text-black outline-none"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="YOUR MESSAGE*"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="border-l-4 border-b-4 border-black bg-transparent px-2 py-3 placeholder-black text-black outline-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-4 px-6 py-2 text-black text-sm tracking-wider hover:bg-black hover:text-white transition-all"
        >
          <span className="text-lg font-light">|</span>
          <span className="font-semibold">SUBMIT</span>
          <span className="text-lg font-light">|</span>
        </button>
      </form>
    </section>

  );
};

export default ContactSection;
