import { JSX } from "preact";

type Props = {
  onlyLogo: boolean
}

export function Subnav(props: Props) {
  const { onlyLogo = false }  = props;
  return (
    <article class="bg-black sticky z-10 top-0 flex flex-col md:flex-row items-center md:items-start md:justify-between px-4 md:py-2 py-8">
        <p class="text-lg md:text-2xl text-white mb-4 md:mb-0">
          <a href="/" class="text-slate-200 inline-block pr-2 capitalize [text-shadow:2px_2px_0px_hotpink] shadow-[2px_5px_5px_brown]">
         astrology with meetu proothi
          </a>
        </p>
            {
              !onlyLogo && (
              <ul class="flex justify-end items-center gap-4 md:gap-6">
                <li class="">
                  <a class="text-stone-200 hover:text-[#ff668c] text-inherit no-underline bg-[linear-gradient(to_top,#ffa3ba_0,#ffa3ba_0.13169rem,rgba(255,102,140,0)_0.13169rem,rgba(255,102,140,0)_100%)] transition-[0.2s]" href="#services">services</a>
                </li>
                <li class="">
                  <a class="text-stone-200 hover:text-[#ff668c] text-inherit no-underline bg-[linear-gradient(to_top,#ffa3ba_0,#ffa3ba_0.13169rem,rgba(255,102,140,0)_0.13169rem,rgba(255,102,140,0)_100%)] transition-[0.2s]" href="#about">about</a>
                </li>
                <li class="">
                  <a class="text-stone-200 hover:text-[#ff668c] text-inherit no-underline bg-[linear-gradient(to_top,#ffa3ba_0,#ffa3ba_0.13169rem,rgba(255,102,140,0)_0.13169rem,rgba(255,102,140,0)_100%)] transition-[0.2s]" href="#usp">why chose us</a>
                </li>
              </ul>
              )
            }
        {/* </div> */}
    </article>
  );
}
