import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/footer";
import LoginPage from "@/features/projects/pages/LoginPage";

export default function Home() {
  return (
    <div>
      <div>
        <Header mode={"auth"} />
        <LoginPage />
        <Footer />
      </div>
    </div>
  );
}
