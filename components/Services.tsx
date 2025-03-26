import { JSX } from "preact";
import { LeafHeader } from "./LeafHeader.tsx";
import { Cards } from "../islands/ServiceCards.tsx";

export function Services() {
  return (
    <section class="py-2 bg-[aliceblue]">
        <LeafHeader id="services" heading="Services" />
        <Cards />
    </section>
  );
}
