import { JSX } from "preact";
import { LeafHeader } from "./LeafHeader.tsx";

export function AboutMe() {
  return (
    <section id="about" class="py-2 w-[95%] m-auto">
        <LeafHeader id="about" heading="About Me" />
        <article class="flex items-center flex-col gap-4">
            <div class="w-1/3">
                <img src="images/meetu_rounded.jpg" width="100%" />
            </div>
            <div class="w-2/3 flex flex-col justify-center items-center gap-4">
                <p class="font-serif text-lg md:text-4xl text-gray-500 text-center">
                    I’m <b>Meetu Proothi</b>, an <u>astrologer</u>, <u>numerologist</u>, and <u>tarot reader</u> with <em>15 years of experience</em>. 
                </p>
                <p class="md:font-mono font-sans text-xs md:text-sm text-gray-800 text-left md:text-center">
                    I’ve worked with leading astrology platforms , providing guidance through horoscopes, tarot, and numerology. 
                    A dedicated researcher in the field of occult sciences, exploring the hidden dimenstions of astrology, numerlorology, tarot and 
                    spiritual mytiscism. My work delved into the esoteric principles that govern cosmic enerfoes, karmic influeces and metaphysical connections
                    between the universe and human existence With a deep-rooted interest in both ancient wisdom and modern spiritual
                    practices, I integrate teachings from astrology, the Lotus sutra and other mystical tradtitions to unvocer the profound truths.
                    My research focuses on bridging the gap between intuition and structured knowledge, helping seekers gain clarity, empowerment, and a deeper
                    understanding of their self.
                </p>
            </div>
        </article>
    </section>
  );
}
