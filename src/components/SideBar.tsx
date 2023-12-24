import "./SideBar.css";

type SideBarProps = {};

export default function SideBar(props: SideBarProps) {
  return (
    <>
      <div className="appSideBar">
        <div className="sideBarUsers">Users</div>
        <div className="sideBarChannels">Channels</div>
        <div className="sideBarDirect">Direct Messages</div>
      </div>
    </>
  );
}
