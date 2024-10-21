"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  // State untuk menyimpan nilai input form
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // State untuk mengontrol apakah form telah disubmit
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Fungsi untuk menangani perubahan pada setiap input
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk menangani submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true); // Menandai bahwa form telah disubmit
  };

  // Fungsi untuk menangani clear input
  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Jika form telah disubmit, tampilkan pesan sukses
  if (isSubmitted) {
    return (
      <div className="container mx-auto p-5 text-center">
        <p>Nama: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Pesan: {formData.message}</p>
        <p>Data di atas akan segera di input ke database. Terima kasih!</p>
      </div>
    );
  }

  // Tampilan form
  return (
    <div className="container mx-auto p-5 text-center">
      <h2 className="text-2xl mb-5">Contact Me!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-black text-center border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-black text-center border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="text-black text-center border border-gray-300 p-2 rounded-md w-full"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
