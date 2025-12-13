"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim())
      errors.firstName = "First name is required.";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) errors.message = "Message cannot be empty.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setSuccessMessage("Your message has been sent successfully!");
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      setErrorMessage(
        error.message || "Failed to send message. Please try again."
      );
      setTimeout(() => setErrorMessage(""), 5000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 lg:p-16 max-w-7xl mx-auto gap-12">
      {/* Left Section - Remains the same */}
      <div className="lg:w-1/2 space-y-8">
        {" "}
        <div>
          <div className=" space-x-2 mb-2">
            <div className="flex mb-5 ">
              <div className="px-4 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text- text-sm uppercase font-sans">
                ____ Contact Me
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-black leading-tight">
            Let{"’"}s connect
          </h1>
        </div>
        <p className="text-gray-600 leading-relaxed lg:pr-8">
          Have a question, idea, or opportunity? Feel free to reach out. I{"’"}ll
          respond as soon as possible!
        </p>
        {/* Contact Details */}
        <div className="space-y-6">
          {/* Email Section */}
          <div className="flex items-center gap-4 border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-gray-200 rounded-full p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75M21.75 6.75l-9 6-9-6m18 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">Email</h3>
              <a
                href="mailto:mirxahussain4@gmail.com"
                className="text-gray-600 text-sm hover:text-black underline"
              >
                mirxahussain4@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center gap-4 border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-gray-200 rounded-full p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75a4.5 4.5 0 014.5-4.5h10.5a4.5 4.5 0 014.5 4.5v10.5a4.5 4.5 0 01-4.5 4.5H6.75a4.5 4.5 0 01-4.5-4.5V6.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 9.75l-9 6"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">Phone</h3>
              <a
                href="tel:+923007243178"
                className="text-gray-600 text-sm hover:text-black underline"
              >
                +923007243178
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Send a Message</h3>
          {successMessage && (
            <p className="text-green-600 mb-6">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-600 mb-6">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black w-full"
                  disabled={loading}
                />
                {formErrors.firstName && (
                  <p className="text-red-600 text-sm mt-1">
                    {formErrors.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black w-full"
                  disabled={loading}
                />
                {formErrors.lastName && (
                  <p className="text-red-600 text-sm mt-1">
                    {formErrors.lastName}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                disabled={loading}
              />
              {formErrors.email && (
                <p className="text-red-600 text-sm">{formErrors.email}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Enter your message"
                className="w-full p-3 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                disabled={loading}
              ></textarea>
              {formErrors.message && (
                <p className="text-red-600 text-sm">{formErrors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white w-full py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
