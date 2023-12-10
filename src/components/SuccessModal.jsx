export default function SuccessModal() {
  return (
    <div className="sucess-modal">
      <img
        src="assets/icon-sucess.svg"
        alt="checkmark icon"
        className="checkmark-icon"
      />
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to EMAIL. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <button className="btn dismiss-btn">Dismiss message</button>
    </div>
  );
}
