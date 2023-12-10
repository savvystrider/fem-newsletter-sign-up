export default function SuccessModal({ setShowSuccessModal, emailInput }) {
  return (
    <div className="success-modal">
      <img
        src="assets/icon-success.svg"
        alt="checkmark icon"
        className="checkmark-icon"
      />
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to <strong>{emailInput}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button
        onClick={() => setShowSuccessModal((prev) => !prev)}
        className="btn dismiss-btn"
      >
        Dismiss message
      </button>
    </div>
  );
}
