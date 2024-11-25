import Logo from "./logo";
import Menu from "./menu";
import SendButton from "./SendButton";

export default function Sidebar() {
  return (
    <aside className="w-[594px] flex justify-end">
      <div className="w-[275px] min-h-screen px-2">
        <Logo />
        <Menu />
        <SendButton />
      </div>
    </aside>
  );
}
