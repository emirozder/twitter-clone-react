import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";
import SendButton from "./SendButton";

export default function Sidebar() {
  return (
    <aside className="w-[594px] flex justify-end">
      <div className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col justify-between sticky top-0">
        <div>
          <Logo />
          <Menu />
          <SendButton />
        </div>
        <Account />
      </div>
    </aside>
  );
}
