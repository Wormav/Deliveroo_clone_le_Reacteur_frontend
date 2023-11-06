import logo from "../../../public/favicon.ico";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="hearder-container">
        <img className="logo" src={logo} alt="Logo de deliveroo" />
        <h1>deliveroo</h1>
      </div>
      <div className="line"></div>
    </>
  );
}
