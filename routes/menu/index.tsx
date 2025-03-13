import { MenuHeader } from "../../components/MenuHeader.tsx";
import { Subnav } from "../../components/Subnav.tsx";
import { MenuDetails } from "../../islands/MenuDetails.tsx";

export default function Home() {

  return (
    <>
        <Subnav onlyLogo={true} />
        <MenuHeader />
        <MenuDetails />
    </>
  );
}
