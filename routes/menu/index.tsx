import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { MenuHeader } from "../../components/MenuHeader.tsx";
import { Subnav } from "../../components/Subnav.tsx";
import { MenuDetails } from "../../islands/MenuDetails.tsx";

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

export default function Menu(props: PageProps<Props>) {
    const {ids} = props.data;
  return (
    <>
        <Head>
            <title>Choose Your Astrology, Tarot & Numerology Services | Custom Readings</title>
            <meta
            name="description"
            content="Select from a range of astrology, tarot, and numerology services. Customize your reading to get insights tailored to your life, love, and career."
            />
        </Head>
        <Subnav onlyLogo={true} />
        <MenuHeader />
        <MenuDetails ids={ids} />
    </>
  );
}
