import { JSX } from "preact";
import { CardSideInfo, USPProps } from "./CardSideInfo.tsx";
import { LeafHeader } from "./LeafHeader.tsx";

const usps: USPProps[] = [
    {
        infoLeft: false,
        pic: 'images/personalized.svg',
        info: {
            heading: 'Personalized Insights',
            message: 'Every reading is tailored to your unique energy, ensuring guidance that resonates deeply with your life path.'
        }
    }, 
    {
        infoLeft: true,
        pic: 'images/balance.jpg',
        info: {
            heading: 'Affordable & Transparent Pricing',
            message: 'Get high-quality astrological insights without breaking the bank—no hidden charges, just honest and fair pricing.'
        }
    },
    {
        infoLeft: false,
        pic: 'images/options.svg',
        info: {
            heading: 'Your Choice, Your Path',
            message: 'Whether you seek astrological guidance, numerology insights, or tarot wisdom, you have the freedom to choose what resonates with you the most. Each service is available individually, ensuring a focused and meaningful experience.'
        }
    }
]

export function USP() {
  return (
    <>
        <LeafHeader id="usp" heading="Why chose us ?" />
        {
            usps.map(usp => <CardSideInfo info={usp.info} pic={usp.pic} infoLeft={usp.infoLeft} />)
        }
    </>
  );
}

