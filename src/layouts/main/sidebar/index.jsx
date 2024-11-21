import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <aside className="w-[594px] flex justify-end">
      <div className="w-[275px] min-h-screen px-2">
        <Logo />
        <Menu />
      </div>
    </aside>
  );
}
