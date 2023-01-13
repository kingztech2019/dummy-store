import React from "react";

export default function OrderAlert({
  modalOpen,
  setModalOpen,
  orderMessage,
  showErrorIcon,
}) {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className={`modal ${modalOpen}`}>
        <div className="modal-box relative">
          <label
            onClick={() => setModalOpen("")}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-center">
            {!showErrorIcon ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16 text-green-700"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16 text-red-700"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <div className="py-4 text-2xl font-black text-center">
            {orderMessage}
          </div>
        </div>
      </div>
    </div>
  );
}
