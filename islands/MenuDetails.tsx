import { useState } from "preact/hooks";
import { menu_list, Menu_Types } from "../utils/menu_list.ts";
import { MenuCard } from "./MenuCard.tsx";

export function MenuDetails() {
    const [id, setId] = useState(0);

    const scrollToSelectedItem = (e) => {
        e.preventDefault();
        const elem = document.getElementById(id.toString());
        if (elem == null) {
            document.getElementById('menu_header')?.scrollIntoView({behavior: "smooth"});
        } else {
            elem.scrollIntoView({behavior: "smooth"});
        }
    }

    const typed_menu = Object.groupBy(menu_list, ({type}) => type);
    return (
        <>
            <section class="w-[95%] m-auto">
                {
                    Object.entries(typed_menu).map(([category, items]) => <MenuCard setId={setId} type={category as Menu_Types} data={items} />)
                }
            </section>
            <div class="flex w-[25%] items-center flex-col mx-auto my-16 justify-around gap-5">
                <a 
                    class="w-fit gap-2 flex items-center cursor-pointer rounded-lg px-4 py-1 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-yellow-100 duration-300" 
                    onClick={(e) => scrollToSelectedItem(e)}>
                        <img src="icons/reset.svg" width="25%" />
                        <span class="text-nowrap">Change selection</span>
                </a>
                <a 
                    href={`/book?id=${id}`}
                    class="w-fit gap-2 flex items-center cursor-pointer rounded-lg px-6 py-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-green-100 duration-300">
                        <span class="text-nowrap">Continue to book</span>
                        <img src="icons/continuebooking.svg" width="100%" />
                </a>
            </div>
        </>
    )
}