import Link from "next/link";

export default function SideBar() {
  return (
    <div className="bg-[#F8F9FA] min-h-[100vh] w-[264px] sp:hidden">
      <div className="px-[20px] py-[120px]">
        <div className="p-[12px] text-[14px]">
          <Link href={"/companyList"}>企業一覧</Link>
        </div>
        <div className="p-[12px] text-[14px]">
          <Link href={"/influencerList"}>インフルエンサー一覧</Link>
        </div>
        <div className="p-[12px] text-[14px]">
          <Link href={"/applicationList"}>申請案件一覧</Link>
        </div>
        <div className="p-[12px] text-[14px]">
          <Link href={"/notification"}>お知らせ更新</Link>
        </div>
      </div>
    </div>
  );
}
