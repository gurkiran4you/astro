import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/navbar.tsx";
import { Services } from "../components/Services.tsx";
import { USP } from "../components/USP.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <USP />
      <Footer />
    </>
  );
}
