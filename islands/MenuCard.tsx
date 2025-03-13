import { Dispatch, StateUpdater, useState } from "preact/hooks";
import { Menu, Menu_Types } from "../utils/menu_list.ts";

export type MenuProps = {
    type: Menu_Types,
    data: Menu[],
    setId: Dispatch<StateUpdater<number>>,
}

export function MenuCard(props: MenuProps) {
    const [toggle, setToggle] =  useState(false);
    const [selected, setSelected] = useState(0);
    const {type, data, setId} = props;

    const changeSelected = (id: number) => {
        setSelected(id);
        setId(id);

        globalThis.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
    return (
        <article id={type} class="w-full shadow-xl shadow-gray-400 rounded-lg my-4 bg-[floralwhite]">
            <div class="flex gap-4 cursor-pointer" onClick={() => setToggle(!toggle)}>
                <div class="flex gap-2">
                    { !toggle && <img src="icons/arrowup.svg" /> }
                    { toggle && <img src="icons/arrowdown.svg" /> }
                </div>
                <h3 class="px-2 py-4 font-serif text-gray-400 uppercase text-4xl">{type}</h3>
            </div>
            <ul class={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${toggle ? 'max-h-0' : 'max-h-[200vh]'}`}>
                {
                    data.map(datum => {
                        return (
                            <li 
                                onClick={() => changeSelected(datum.id)}
                                id={datum.id.toString()}
                                key={datum.id} 
                                class={`${selected === datum.id ? 'border-[hotpink] border-2' : ''} gap-4 md:items-stretch md:gap-0 shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset] md:shadow-none items-center md:items-start flex-col md:flex-row cursor-pointer flex my-2 mx-4 px-2 py-4 group hover:outline-dotted hover:outline-gray-300`} 
                                title="select">
                                <div class="w-4/5 text-center md:text-start">
                                    <div class="flex flex-col md:flex-rw items-center md:items-baseline gap-4">
                                        <h3 class="font-sans text-2xl capitalize">{datum.name}</h3>
                                        <span class="text-[hotpink]">({datum.duration})</span>
                                    </div>
                                    <p class="font-light text-lg group-hover:[text-shadow:1px_1px_2px_pink]">{datum.description}</p>
                                </div>
                                <div class="flex w-1/5 justify-center">
                                    <p class="flex flex-col w-full justify-center items-center relative md:flex-row font-bold text-teal-400 text-3xl">
                                        <img src="icons/rupee.svg" width="25%" class="opacity-50" />
                                        <span>{datum.price}</span>
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </article>
    )
}