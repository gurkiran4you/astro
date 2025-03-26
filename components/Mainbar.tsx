import { JSX } from "preact";

export function Mainbar() {
  return (
    <article class="relative flex flex-col md:flex-row items-start gap-5 justify-center px-6 py-4 md:py-2 m-auto">
      <div class="absolute inset-0 bg-[url('images/cover.jpg')] opacity-20 -z-10"></div>
      <div class="flex flex-col items-center pt-4 md:pt-0 gap-2 md:w-1/2 order-1 md:order-0">
        <img  src="images/main.jpg" width="400" class="w-[25%] md:w-[50%] rounded-[50%]" />
        <div class="flex flex-col gap-4">
          <h1 class="text-[#9c8c7a] capitalize md:text-3xl text-center">𝚄𝚗𝚕𝚘𝚌𝚔 𝚝𝚑𝚎 𝙼𝚢𝚜𝚝𝚎𝚛𝚒𝚎𝚜 𝚘𝚏 𝚈𝚘𝚞𝚛 𝙻𝚒𝚏𝚎 – 𝙶𝚞𝚒𝚍𝚎𝚍 𝚋𝚢 𝚝𝚑𝚎 𝚂𝚝𝚊𝚛𝚜, 𝙽𝚞𝚖𝚋𝚎𝚛𝚜, 𝚊𝚗𝚍 𝙲𝚊𝚛𝚍𝚜</h1>
          <a href="/book" class="border-[color:#2b2b2b] bg-[color:white] hover:shadow-[0_0_0_0_#2b2b2b] shadow-[3px_3px_0_0_#2b2b2b] text-[color:#2b2b2b] text-center tracking-[0.5px] uppercase justify-center items-center font-bold transition-all duration-[0.3s] flex px-6 py-3 rounded-lg border-2 border-solid;
  font-family: Kobe, sans-serif;">Book now!</a>
          <a href="/menu" class="border-[color:#2b2b2b] bg-[color:white] hover:shadow-[0_0_0_0_#2b2b2b] shadow-[3px_3px_0_0_#2b2b2b] text-[color:#2b2b2b] text-center tracking-[0.5px] uppercase justify-center items-center font-bold transition-all duration-[0.3s] flex px-6 py-3 rounded-lg border-2 border-solid;
  font-family: Kobe, sans-serif;">explore menu</a>
        </div>
      </div>
      <div class="md:w-1/2 order-0 md:order-1 flex justify-center">
        <img class="w-3/4" src="images/meetu_main.jpg" />
      </div>
      {/* <img class="aspect-square w-1/2 rounded-[50%] scale-125 md:scale-100 order-0 md:order-1" src="images/meetu_main.jpg" /> */}

    </article>
  );
}
