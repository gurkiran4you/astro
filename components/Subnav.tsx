import { JSX } from "preact";

export function Subnav() {
  return (
    <article class="bg-[#efc9de] flex flex-col md:flex-row items-center md:items-start md:justify-between px-4 md:py-2 py-8">
        <p class="text-lg md:text-2xl">
            𝔐𝔢𝔢𝔱𝔲 𝔓𝔯𝔬𝔬𝔱𝔥𝔦
        </p>
        {/* <div class="flex justify-end items-center gap-2"> */}
            {/* <p class="text-black flex gap-1">
                <img src="icons/phone.svg" />
                <span class="font-extralight text-xs">+91 99999 99999</span>
            </p>
            <p class="text-black flex gap-1">
                <img src="icons/email.svg" />
                <span class="font-extralight text-xs">something@something.com</span>
            </p> */}
            <ul class="flex justify-end items-center gap-4 md:gap-6">
              <li class="font-sans font-light text-sm md:text-lg text-[hotpink] hover:underline">
                <a href="services">services</a>
              </li>
              <li class="font-sans font-light text-sm md:text-lg text-[hotpink] hover:underline">
                <a href="usp">why chose us</a>
              </li>
            </ul>
        {/* </div> */}
    </article>
  );
}
