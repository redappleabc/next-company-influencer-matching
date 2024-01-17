import Link from "next/link";

export default function CompanySidebar() {
  return (
    <div className="bg-[#F8F9FA] min-h-[100vh] w-[264px] sp:hidden px-[20px]">
      <div className=" pt-[120px] pb-[30px] border-b border-gray-300 ">
        <div className="p-[12px] text-[14px]">
          <Link href={"/top"}>TOP</Link>
        </div>
        <div className="p-[12px] text-[14px]">
          <Link href={"/appliedList"}>登録案件一覧</Link>
        </div>
        <div className="p-[12px] text-[14px]">
          <Link href={"/newCase"}>案件の新規登録</Link>
        </div>
      </div>
      <div className="pb-[20px] pt-[20px]  border-b border-gray-300 ">
        <span className="text-[#A8A8A8]">設定</span>
        <div className="p-[12px] text-[14px]">
          <Link href={"/companyInfo"}>企業情報変更</Link>
        </div>
      </div>
      <div className="pt-[20px] pb-[30px]">
        <div className="p-[12px] text-[14px]">
          <Link href={"/pdfdoonload"}>マニュアル</Link>
        </div>
        <div className="p-[12px] text-[14px]">
          <Link href={"/ask"}>運営へのお問い合わせ</Link>
        </div>
      </div>
    </div>
  );
}
