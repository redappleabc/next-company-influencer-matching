import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/footer";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <div >
        <Header mode={'auth'}/>
            {children}
        <Footer/>
      </div>
    </div>
  );
}
