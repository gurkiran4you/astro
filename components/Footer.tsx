import { JSX } from "preact";

export function Footer() {
  return (
    <footer class="bg-[#dfcde9] px-6 py-8 flex flex-col gap-2 md:block items-center">
        <p class="text-2xl md:text-4xl capitalize">𝚈𝚘𝚞'𝚛𝚎 𝚑𝚎𝚛𝚎 𝚏𝚘𝚛 𝚊 𝚛𝚎𝚊𝚜𝚘𝚗 !</p>
        <div class="flex justify-end gap-4 items-center">
            <small class="text-sm font-bold font-sans capitalize">Follow us</small>
            <ul class="flex justify-end space-x-4">
                <li><img width="24px" src="icons/fb.svg" />
                    <a target="_blank" href="https://www.facebook.com/share/1Up4kZJuXc/"></a>
                </li>
                <li><img width="24px" src="icons/ig.svg" />
                    <a target="_blank" href="https://www.instagram.com/healing_by_meetu_proothi?igsh=MWE1OTY5NDhrbzhy"></a>
                </li>
                <li><img width="100px" src="icons/yt.svg" />
                    <a target="_blank" href="https://youtube.com/@enlightenmentbymeetuprooth7928?si=fgfCaOUqzgA6jKs8"></a>
                </li>
            </ul>
        </div>
        <hr class="border-black border-b-2 w-full inline-block my-4" />
        <div class="font-thin flex justify-between">
            <small class="text-xs md:text-sm">&copy; 2025 Meetu Proothi. All rights reserved.</small>
            {/* <small class="text-xs md:text-sm">Site by G. Singh</small> */}
        </div>
    </footer>
  );
}
