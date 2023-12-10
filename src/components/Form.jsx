export default function Form() {
  return (
    <form>
      <div className="input-container">
        <input
          type="email"
          className="email-input"
          id="email"
          placeholder="email@company.com"
        />
        <label htmlFor="email">Email address</label>
      </div>
      <button className="btn subscribe-btn">
        Subscribe to montly newsletter
      </button>
    </form>
  );
}
