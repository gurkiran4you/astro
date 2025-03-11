import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact";

export type what_to_expect = {
    type: string,
    what: {key: string, value: string},
    expect: {key:string, value: string}[]
}

const data: what_to_expect[] = [
    {
        type: 'horoscope',
        what: {
            key: 'What is a Horoscope?',
            value: 'A horoscope is a celestial blueprint of your life based on the alignment of planets and stars at the moment of your birth. It provides deep insights into your personality, strengths, weaknesses, and the opportunities and challenges that may come your way.'
        },
        expect: [
            {
            key: 'Personalized Birth Chart Analysis',
            value:'A detailed interpretation of your natal chart, covering your Sun, Moon, and Rising signs.'
            },
            {
            key: 'Daily, Weekly, or Monthly Forecasts',
            value:'Insights into upcoming planetary influences and how they may affect your love life, career, and personal growth.'
            },
            {
            key: 'Compatibility Readings',
            value:'Understand how your energy aligns with others, whether in love, friendships, or professional relationships.'
            },
            {
            key: 'Career & Life Guidance',
            value:'Discover the best times for making important decisions, job changes, or major life shifts.'
            },
    ]
    },
    {
        type: 'tarot',
        what: {
            key: 'What is Tarot?',
            value: 'Tarot is a powerful tool for self-discovery and spiritual guidance, using a deck of symbolic cards to provide clarity on life\'s questions. Each card carries deep meanings, offering insights into your past, present, and future.'
        },
        expect: [
            {
            key: 'One-on-One Tarot Sessions',
            value:'A personalized reading tailored to your specific questions and concerns.'
            },
            {
            key: 'In-Depth Card Interpretations',
            value:' Each card’s meaning will be explained to help you understand the messages being revealed.'
            },
            {
            key: 'Actionable Guidance',
            value:'The reading will not just tell you what’s coming but also provide advice on how to navigate challenges or maximize opportunities.'
            },
    ]
    },
    {
        type: 'numerology',
        what: {
            key: 'What is Numerology?',
            value: 'Numerology is the study of numbers and their mystical influence on our lives. Every number carries an energy that can reveal deep insights about our personality, destiny, and life purpose.'
        },
        expect: [
            {
            key: 'Personal Life Path Number Calculation',
            value:'Your unique number based on your birth date, revealing your life\'s purpose and strengths.'
            },
            {
            key: 'Destiny & Soul Numbers',
            value:' Insights into your inner desires, talents, and the challenges you may face.'
            },
            {
            key: 'Name Numerology',
            value:'Understand how the vibrations of your name influence your success and relationships.'
            },
            {
            key: 'Compatibility Readings',
            value:'Discover how your numbers align with those of your loved ones for better harmony in relationships.'
            },
    ]
    },
]

export function Cards() {

    const [open, setOpen] = useState('');

    const opened = data.find(datum => datum.type === open);

    useEffect(() => {
        const elem = document.getElementById(open);
        if(elem) {
            elem.scrollIntoView();
        }
    }, [open])

  return (
    <article class="w-[95%] m-auto">
        <div class="flex flex-col md:flex-row gap-2 items-center justify-around">
            <div class="w-[95%] m-auto md:w-1/3 relative">
                <figure class="relative group">
                    <img src="images/horo.svg" />
                    <figcaption class="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3>Horoscope</h3>
                        <p class="text-xs text-gray-400 mt-1">
                            Unlock celestial guidance for your destiny. Gain insights and clarity on life’s journey through expert astrology services tailored just for you.
                        </p>
                    </figcaption>
                </figure>
                <span onClick={() => setOpen('horoscope')} class={` ${open === 'horoscope' ? 'pb-5' : ''} text-black cursor-pointer hover:underline border w-full inline-block text-center bg-cyan-100 border-t-[navajowhite] border-solid border-[cadetblue]`}>Learn more</span> 
            </div>
            <div class="w-[95%] m-auto  md:w-1/3 relative">
                <figure class="relative group">
                    <img src="images/tarot.svg" />
                    <figcaption class="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3>Tarot Reading</h3>
                        <p class="text-xs text-gray-400 mt-1">
                            Unlock celestial guidance for your destiny. Gain insights and clarity on life’s journey through expert astrology services tailored just for you.
                        </p>
                    </figcaption>
                </figure>
                <span onClick={() => setOpen('tarot')} class={` ${open === 'tarot' ? 'pb-5' : ''} text-black cursor-pointer hover:underline border w-full inline-block text-center  bg-cyan-100 border-t-[navajowhite] border-solid border-[cadetblue]`}>Learn more</span> 
            </div>
            <div class="w-[95%] m-auto  md:w-1/3 relative">
                <figure class="relative group">
                    <img src="images/numerology.svg" />
                    <figcaption class="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3>Numerology</h3>
                        <p class="text-xs text-gray-400 mt-1">
                            Decode the numbers of your life’s path. Explore personality traits, destiny, and potential through personalized numerology guidance and ancient wisdom.
                        </p>
                    </figcaption>
                </figure>
                <span onClick={() => setOpen('numerology')} class={`${open === 'numerology' ? 'pb-5' : ''} text-black cursor-pointer hover:underline border w-full inline-block text-center  bg-cyan-100 border-t-[navajowhite] border-solid border-[cadetblue]`}>Learn more</span> 
            </div>
        </div>

        {
            open !== '' && (
                <aside id={open} class="bg-cyan-100 px-2 py-4 relative">
                    <div class="mb-2">
                        <h3 class="text-2xl capitalize font-serif">{opened?.what.key}</h3>
                        <p class="text-lg font-sans font-extralight">{opened?.what.value}</p>
                    </div>
                    <div>
                        <h3 class="text-2xl capitalize font-serif">What to expect as a customer</h3>
                        <ul>
                            {
                                opened?.expect.map(ex => {
                                    return (
                                        <li>
                                            <b>{ex.key}</b> - <span>{ex.value}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </aside>
            )
        }

    </article>
  );
}
