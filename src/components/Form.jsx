import { useState } from "react";

export default function Form({
  emailInput,
  setEmailInput,
  showSucessModal,
  setShowSuccessModal,
}) {
  const [isValidEmail, setIsValidEmail] = useState(true);

  function handleChange(e) {
    const { value } = e.target;
    setEmailInput(value);
    const validEmail = /\S+@\S+\.\S+/.test(value);
    setIsValidEmail(validEmail);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailInput) return setIsValidEmail(false);
    setShowSuccessModal(true);
  }

  return (
    <form>
      <div className="input-container">
        <div className="input-row">
          <label htmlFor="email">Email address</label>
          {!isValidEmail && (
            <span className="error-message">Valid email required</span>
          )}
        </div>
        <input
          type="email"
          className={`email-input ${!isValidEmail ? "error-input" : ""}`}
          id="email"
          placeholder="email@company.com"
          value={emailInput}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn subscribe-btn"
        type="submit"
        onClick={handleSubmit}
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
