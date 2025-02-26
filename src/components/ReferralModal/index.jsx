import React from "react";

const ReferralModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 hover:text-gray-900 text-xl">
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">Refer a Friend</h2>

        {/* Form */}
        <form className="flex flex-col gap-3">
          {/* Referrer Details */}
          <input type="text" placeholder="Your Full Name" className="border p-2 rounded w-full" required />
          <input type="email" placeholder="Your Email" className="border p-2 rounded w-full" required />

          {/* Referee Details */}
          <input type="text" placeholder="Friend's Full Name" className="border p-2 rounded w-full" required />
          <input type="email" placeholder="Friend's Email" className="border p-2 rounded w-full" required />

          {/* Course Selection */}
          <select className="border p-2 rounded w-full" required>
            <option value="">Select Course</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="AI & ML">AI & ML</option>
          </select>

          {/* Message */}
          <textarea placeholder="Message (Optional)" className="border p-2 rounded w-full" rows="3"></textarea>

          {/* Terms & Conditions */}
          <label className="flex items-center text-sm">
            <input type="checkbox" required className="mr-2" />
            I agree to the terms and conditions.
          </label>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
