import { useState } from "preact/hooks";
import { menu_list, Menu_Types } from "../utils/menu_list.ts";
import { MenuCard } from "./MenuCard.tsx";

export function MenuDetails(props: { ids: number[] }) {
    const {ids} = props;
    const initial_selected = ids ?? []

    const [id, setId] = useState(initial_selected);

    const resetSelections = (e) => {
        e.preventDefault();
        setId([]);
    }

    const typed_menu = Object.groupBy(menu_list, ({type}) => type);
    return (
        <>
            <section class="w-[80%] m-auto">
                {
                    Object.entries(typed_menu).map(([category, items]) => <MenuCard selectedIds={id} setId={setId} type={category as Menu_Types} data={items} />)
                }
            </section>
            <div class="w-full fixed flex justify-between my-2 bottom-0 z-10">
                {
                    id.length > 0 && (
                    <>
                        <a 
                            class="w-fit gap-2 flex items-center cursor-pointer rounded-lg px-4 py-1 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-yellow-100 duration-300" 
                            onClick={(e) => resetSelections(e)}>
                                <img src="icons/reset.svg" class="md:block hidden" width="25%" />
                                <span class="text-nowrap">Reset</span>
                        </a>
                        <a 
                        href={`/book?ids=${id.join(',')}`}
                        class="w-fit gap-2 flex items-center cursor-pointer rounded-lg px-6 py-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-green-100 duration-300">
                            <span class="text-nowrap">Book</span>
                            <img src="icons/continuebooking.svg" class="md:block hidden" width="100%" />
                        </a>
                    </>
                    )
                }
                
            </div>
        </>
    )
}