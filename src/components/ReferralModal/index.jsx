import React, { useState } from "react";
import axiosInstance from "../../api/axiosInstance.js";

const ReferralModal = ({ isOpen, onClose }) => {
  const initialFormState = {
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset form when modal is closed
  const handleClose = () => {
    setFormData(initialFormState);
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (isSubmitted) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.referrerName.trim()) newErrors.referrerName = "Full Name is required";
    if (!formData.referrerEmail.trim()) newErrors.referrerEmail = "Email is required";
    if (!formData.refereeName.trim()) newErrors.refereeName = "Referee's Name is required";
    if (!formData.refereeEmail.trim()) newErrors.refereeEmail = "Referee's Email is required";
    if (!formData.course) newErrors.course = "Please select a course";

    // checking if both eamils are different
    if (formData.referrerEmail && formData.refereeEmail && formData.referrerEmail === formData.refereeEmail) {
      newErrors.refereeEmail = "Referee's email must be different from your email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      try {
        console.log(formData);
        
        console.log("Form Submitted Successfully");
        setTimeout(() => {
          handleClose(); // Reset form and close modal
        }, 1000);
        // await axiosInstance.post("/api/referral/submit", formData, {
        //   headers: { "Content-Type": "application/json" },
        // });
        console.log("Form Submitted Successfully");

        //this function is used to Reset form and close modal after successful submission
        handleClose();
      } catch (err) {
        console.error("Error submitting form:", err);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClose}>
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-xl">
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">Refer a Friend</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label>Enter your name</label>
            <input
              type="text"
              name="referrerName"
              placeholder="Your Full Name"
              value={formData.referrerName}
              onChange={handleChange}
              className={`border p-2 rounded w-full ${isSubmitted && errors.referrerName ? "border-red-500" : "border-gray-300"}`}
            />
            {isSubmitted && errors.referrerName && <p className="text-red-500 text-sm">{errors.referrerName}</p>}
          </div>

          <div>
            <label>Enter your email</label>
            <input
              type="email"
              name="referrerEmail"
              placeholder="Your Email"
              value={formData.referrerEmail}
              onChange={handleChange}
              className={`border p-2 rounded w-full ${isSubmitted && errors.referrerEmail ? "border-red-500" : "border-gray-300"}`}
            />
            {isSubmitted && errors.referrerEmail && <p className="text-red-500 text-sm">{errors.referrerEmail}</p>}
          </div>

          <div>
            <label>Enter Referee's Name</label>
            <input
              type="text"
              name="refereeName"
              placeholder="Referee's Full Name"
              value={formData.refereeName}
              onChange={handleChange}
              className={`border p-2 rounded w-full ${isSubmitted && errors.refereeName ? "border-red-500" : "border-gray-300"}`}
            />
            {isSubmitted && errors.refereeName && <p className="text-red-500 text-sm">{errors.refereeName}</p>}
          </div>

          <div>
            <label>Enter Referee's Email</label>
            <input
              type="email"
              name="refereeEmail"
              placeholder="Referee's Email"
              value={formData.refereeEmail}
              onChange={handleChange}
              className={`border p-2 rounded w-full ${isSubmitted && errors.refereeEmail ? "border-red-500" : "border-gray-300"}`}
            />
            {isSubmitted && errors.refereeEmail && <p className="text-red-500 text-sm">{errors.refereeEmail}</p>}
          </div>

          <div>
            <label>Which course do you want to refer?</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={`border p-2 rounded w-full ${isSubmitted && errors.course ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select Course</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="AI & ML">AI & ML</option>
            </select>
            {isSubmitted && errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
          </div>

          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 rounded w-full border-gray-300"
            rows="3"
          ></textarea>

          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
