import "./Header.css";

type HeaderProps = {
  name: string;
};

export default function Header(props: HeaderProps) {
  return (
    <>
      <div className="appHeader">
        <div className="headerContainer">
          <div className="headerMain">Chat Client</div>
          <div className="headerUser">{props.name}</div>
        </div>
      </div>
    </>
  );
}
