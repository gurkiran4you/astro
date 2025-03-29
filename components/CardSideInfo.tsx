import { JSX } from "preact";

export type USPProps = {
    infoLeft: boolean,
    pic: string,
    info: {
        heading: string,
        message: string,
    },
}

export function CardSideInfo(props: USPProps) {
    const { infoLeft, pic, info } = props;
  return (
    <section class="px-10 mb-4">
        <div class="flex md:flex-row flex-col justify-between gap-2 shadow-[10px_5px_5px_lightpink]">
            <article class={`flex justify-center items-center md:w-1/2 bg-[aliceablue] p-12 ' ${infoLeft ? 'md:-order-1' : 'md:order-1'}`}>
                <img loading="lazy" alt={`USP ${pic.slice(2)}`} src={pic} width="100%" />
            </article>
            <article class="flex flex-col justify-center items-center md:w-1/2 p-2 order-0">
                <h3 class="text-lg md:text-4xl font-serif text-center">{info.heading}</h3>
                <p class="[text-shadow:1px_1px_2px_pink] text-sm md:text-2xl font-sans font-extralight text-center px-8 py-4">{info.message}</p>
            </article>
        </div>
    </section>
  );
}
