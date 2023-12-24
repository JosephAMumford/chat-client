import "./Login.css";

type LoginProps = {
  updateName: any;
};

export default function Login(props: LoginProps) {
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      updateName();
    }
  };
  
  const updateName = () => {
    const loginElement = document.getElementById(
      "loginInput"
    ) as HTMLInputElement;
    props.updateName(loginElement.value);
  };

  return (
    <>
      <div className="loginContainer">
        <h2>Choose your diplay name and login</h2>
        <div className="loginInputContainer">
          <input id="loginInput" onKeyDown={handleKeyPress} />
          <button className="loginButton" onClick={updateName}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
