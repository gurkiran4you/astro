import { JSX } from "preact";
import { Menu } from "../utils/menu_list.ts";


type Props = {
    selected_menu: Menu[]
}


export function SelectedMenuCard(props: Props) {
    const { selected_menu } = props;
    const menu_title = selected_menu.reduce((acc, item) => {
        acc.push(item.name);
        return acc;
    }, [] as string[])

    const total_price = selected_menu.reduce((acc, item) => {
        acc += item.price;
        return acc;
    }, 0)

    const total_duration = selected_menu.reduce((acc, item) => {
        acc += parseInt(item.duration.split(" ")[0], 10);
        return acc;
    }, 0)

    const selected_ids = selected_menu.map(menu => menu.id);
  return (
    <section id="selected_menu_card" class="w-[95%] md:w-[50%] m-auto my-10">
        {
            selected_ids.length > 0 && (
                <div>
                    <article class="flex flex-col gap-4 justify-between text-sm md:text-xl text-gray-500 my-5 border-dashed border">
                        <div>
                            <p>You cart:</p>
                            {
                                selected_menu.map((menu, index) => {
                                return (
                                    <div class="flex flex-wrap justify-between  border-black border-b-2 border-t-2 my-4">
                                        <p class="w-1/2 flex gap-1 md:gap-4 my-2 font-mono text-sm">
                                            <span class="">{index + 1}.</span>
                                            <span class="capitalize">{menu.name}</span>
                                        </p>
                                        <div class="w-1/2 flex gap-1 md:gap-4 text-xs md:text-xl">
                                            <p class="w-full flex gap-1 md:gap-2 text-bold items-center">
                                                <img src="icons/rupee_thin.svg" width="" />
                                                <span>{menu.price}</span>
                                            </p>
                                            <p class="w-full flex gap-1 md:gap-2 text-bold items-center">
                                                <img src="icons/time.svg" />
                                                <span class="whitespace-nowrap">{menu.duration}</span>
                                            </p>
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </div>
                        <div class="flex justify-between items-center gap-1 md:gap-4 text-xs md:text-xl">
                            <p class="">Total: </p>
                            <div class="w-1/2 flex gap-1 md:gap-4">
                                <p class="w-full flex gap-2 text-bold items-center">
                                    <img src="icons/rupee_thin.svg"  />
                                    <span>{total_price}</span>
                                </p>
                                <p class="w-full flex gap-1 md:gap-2 text-bold items-center">
                                    <img src="icons/time.svg" />
                                    <span class="whitespace-nowrap">{total_duration} minutes</span>
                                </p>
                            </div>
                        </div>

                         <a class="self-center my-2 px-4 py-2 border border-orange-300 rounded-sm hover:text-orange-300" href={`/menu?ids=${selected_ids.join(',')}`}>Change selection ?</a>
                    </article>
                </div>
            )
        }
        {
            selected_ids.length === 0 && (
                <article>
                    <p>You don't have any services selected</p>
                    Please <a class="text-[hotpink]" href="/menu">Go Back</a> to select services from our
                    highly customized menu
                </article>
            )
        }
    </section>
  );
}
