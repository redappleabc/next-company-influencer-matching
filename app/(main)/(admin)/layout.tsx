import Header from "@/components/organisms/Header";
import SideBar from "@/components/organisms/sidebar";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Header mode={'main'}/>
        <div className="flex">
          <SideBar />
          <div className="w-full bg-[white]">{children}</div>
        </div>
      </div>
    </div>
  );
}
