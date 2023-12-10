import Form from "./components/Form";

export default function App() {
  return (
    <div className="container">
      <main>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <Form />
      </main>
      <div className="img-container">
        <img
          src="assets/illustration-sign-up-mobile.svg"
          alt=""
          className="hero-img"
        />
      </div>
    </div>
  );
}
