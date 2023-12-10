import { useState } from "react";
import Form from "./components/Form";
import SuccessModal from "./components/SuccessModal";

export default function App() {
  const [showSucessModal, setShowSuccessModal] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  return (
    <>
      {!showSucessModal ? (
        <div className="container">
          <main>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <Form
              showSucessModal={showSucessModal}
              setShowSuccessModal={setShowSuccessModal}
              emailInput={emailInput}
              setEmailInput={setEmailInput}
            />
          </main>
          <div className="img-container">
            <img
              src="assets/illustration-sign-up-mobile.svg"
              alt=""
              className="hero-img"
            />
          </div>
        </div>
      ) : (
        <SuccessModal
          emailInput={emailInput}
          setShowSuccessModal={setShowSuccessModal}
        />
      )}
    </>
  );
}
