import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { LeafHeader } from "../../components/LeafHeader.tsx";
import { SelectedMenuCard } from "../../components/SelectedMenuCard.tsx";
import { Subnav } from "../../components/Subnav.tsx";
import { BookingForm } from "../../islands/BookingForm.tsx";
import {  } from "../../islands/MenuDetails.tsx";
import { menu_list } from "../../utils/menu_list.ts";

interface Props {
    ids: number[]
}

export const handler: Handlers<Props> = {
    GET(req: Request, ctx: FreshContext) {
      const url = new URL(req.url);
      const ids = url.searchParams.get('ids');
      if (ids != null) {
        const numeric_ids = ids.split(',').map(id => parseInt(id, 10));
        return ctx.render({
            ids: numeric_ids
          })
      }
      return ctx.render({
        ids: []
      })
    },
  };

export default function Book(props: PageProps<Props>) {
    const { ids } = props.data;
    const selected_menu_items = menu_list.filter(li => {
        return ids.includes(li.id)
    });
  return (
    <>
        <Subnav onlyLogo={true} />
        <LeafHeader heading="Book Appointment" />
        <SelectedMenuCard selected_menu={selected_menu_items} />
        <BookingForm selected_menu={selected_menu_items} />
    </>
  );
}
