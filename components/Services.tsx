import { JSX } from "preact";
import { LeafHeader } from "./LeafHeader.tsx";
import { Cards } from "../islands/Cards.tsx";

export function Services() {
  return (
    <section class="my-2">
        <LeafHeader id="services" heading="Services" />
        <Cards />
    </section>
  );
}
