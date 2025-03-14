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
    <section id="selected_menu_card" class="w-[50%] m-auto my-10">
        {
            selected_ids.length > 0 && (
                <div>
                    <article class="text-sm md:text-xl text-gray-500 my-5 border-dashed border">
                        You have selected the follwing services:
                        {
                            menu_title.map((title, index) => {
                            return (
                                <p class="flex gap-4">
                                    <span class="">{index + 1}.</span>
                                    <span class="capitalize">{title}</span>
                                </p>
                            )
                            })
                        }
                        for a total price of <b>Rs. {total_price}</b> with
                        total tim of <b>{total_duration} minutes</b>

                    </article>
                    <a class="px-4 py-2 border border-orange-300 rounded-sm hover:text-orange-300" href={`/menu?ids=${selected_ids.join(',')}`}>Change selection ?</a>
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
