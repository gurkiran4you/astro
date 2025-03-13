import { JSX } from "preact";
import { Subnav } from "./Subnav.tsx";
import { Mainbar } from "./Mainbar.tsx";

export function Navbar() {
  return (
    <nav>
        <Subnav onlyLogo={false} />
        <Mainbar />
    </nav>
  );
}
