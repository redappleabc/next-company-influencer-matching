import Link from "next/link";

export default function InfluencerSidebar() {
  return (
    <div className="bg-[#F8F9FA] min-h-[100vh] w-[280px] sp:w-[0px] duration-200">
      <div className=" pt-[120px] pb-[30px] px-[20px]">
        <div className="p-[12px] text-[14px]">
          <Link href={"/influencerTop"}>TOP</Link>
        </div>
        <div className="p-[12px] text-[14px]">
          <Link href={"/appliedCase"}>応募案件一覧</Link>
        </div>
        <div className="p-[12px] text-[14px]">
          <Link href={"/collectingCase"}>募集中案件一覧</Link>
        </div>
        <div className="p-[12px] text-[14px] pb-[20px] border-b border-gray-300">
          {/* <Link href={"/chatting"}>チャット </Link> */}チャット
        </div>
      </div>
      <div className=" px-[20px] pb-[20px]">
        <span className="text-[#A8A8A8]">設定</span>
        <div className="p-[12px] text-[14px] border-b pb-[20px] border-gray-300">
          <Link href={"/influencerInfo"}>インフルエンサー情報変更</Link>
        </div>
      </div>
      <div className=" px-[20px] pb-[30px]">
        <div className="p-[12px] text-[14px]">
          <Link href={"/ask"}>マニュアル</Link>
        </div>
        <div className="p-[12px] text-[14px]">
          <Link href={"/ask"}>運営へのお問い合わせ</Link>
        </div>
      </div>
    </div>
  );
}
