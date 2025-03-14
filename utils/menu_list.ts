export type Menu_Types = 'astrology' | 'tarot' | 'numerology';
export type Menu = {
    id: number,
    type: Menu_Types,
    name: string,
    duration: string,
    price: number
    description: string
}

export const menu_list: Menu[] = [
    {
        id: 1,
        type: "astrology",
        name: 'kundli matching',
        duration: '30 minutes',
        price: 1000,
        description: 'kundli matching is an important vedic astrology practice used to assess compatibility for marriage . It involves comparing the birth charts of the prospective bride and groom based on astrological factors.'
    },
    {
        id: 2,
        type: "astrology",
        name: 'chakra healing',
        duration: '40 minutes',
        price: 1500,
        description: 'chakra healing is a holistic practice that focuses on balancing the body\'s energy centers to promote physical, emotional and spiritual well being . There are seven main chakras, each associated with specific aspects of life and health.'
    },
    {
        id: 3,
        type: "astrology",
        name: 'relationship healing',
        duration: '40 minutes',
        price: 1200,
        description: 'Relationship healing in astrology focuses on identifying astrological reasons for conflicts, emotional wounds,and karmic patterns in relationships by using remedies to restore harmony.'
    },
    {
        id: 4,
        type: "astrology",
        name: 'career healing',
        duration: '30 minutes',
        price: 1000,
        description: 'Career healing in astrology involves identifying planetary influences affecting professional growth , overcoming career obstacles, and using astrological remedies to attract success.'
    },
    {
        id: 5,
        type: "astrology",
        name: 'nakshatra reading',
        duration: '20 minutes',
        price: 500,
        description: 'Nakshatra readings in vedic astrology focus on the 27lunar constellations(Nakshatra ) that play a key role in shaping personality , destiny and karmic patterns . Each Nakshatra is ruled by a planet and has unique traits.'
    },
    {
        id: 6,
        type: "astrology",
        name: 'mahadasha healing',
        duration: '30 minutes',
        price: 1000,
        description: 'Mahadashas are major planetary periods in vedic astrology that influences different life areas for extended periods. If a mahadasha brings challenges , specific remedies can help balance its effects.'
    },
    {
        id: 7,
        type: "astrology",
        name: 'Meditation and 9 planets healing',
        duration: '60 minutes',
        price: 2000,
        description: 'Each of the 9 planets in vedic  astrology influences different aspects of our life .Meditation aligned with planetary energies can balance karmic influences and enhance spiritual growth .'
    },
    {
        id: 8,
        type: "astrology",
        name: 'remedies and solutions',
        duration: '30 minutes',
        price: 1000,
        description: 'Astrological remedies help balance planetary energies and reduce the negative effects of malefic planets while enhancing the positive influences . Remedies can be spiritual , ritualistic , or practical , depending on the planetary issues in your birth chart.'
    },
    {
        id: 9,
        type: "tarot",
        name: 'Tarot card reading',
        duration: '20 minutes',
        price: 750,
        description: 'Tarot card reading is a form of divination that provides guidance on different aspects of life - love ,career ,spirituality and personal growth .'
    },
    {
        id: 10,
        type: "tarot",
        name: 'Osho Zen tarot card reading',
        duration: '15 minutes',
        price: 500,
        description: 'The Osho zen tarot is a unique tarot deck focused on inner transformation , mindfulness and spiritual awakening . It helps you to understand the present moment and your deeper subconscious energies.'
    },
    {
        id: 11,
        type: "tarot",
        name: 'Vedic tarot card reading',
        duration: '20 minutes',
        price: 600,
        description: 'Vedic tarot is a blend of vedic astrology and traditional tarot , offering insights based on planetary influences , karma , and spiritual evolution .'
    },
    {
        id: 12,
        type: "tarot",
        name: 'Spiritual tarot card reading',
        duration: '15 minutes',
        price: 500,
        description: 'This tarot card helps you to connect with your inner self ,life purpose and soul lessons , overcoming spiritual blocks , divine guidance from higher realms.'
    },
    {
        id: 13,
        type: "numerology",
        name: 'Life path ',
        duration: '15 minutes',
        price: 500,
        description: 'Discover your soul\'s purpose and life journey.'
    },
    {
        id: 14,
        type: "numerology",
        name: 'Destiny (Expression)',
        duration: '15 minutes',
        price: 500,
        description: 'Understand your talents, strengths and destiny'
    },
    {
        id: 15,
        type: "numerology",
        name: 'Life path number reading',
        duration: '15 minutes',
        price: 500,
        description: 'Discover your soul\'s purpose and life journey.'
    },
    {
        id: 16,
        type: "numerology",
        name: 'Soul urge (Heart\'s desire)',
        duration: '15 minutes',
        price: 500,
        description: 'reveal your inner desires and motivations.'
    },
    {
        id: 17,
        type: "numerology",
        name: 'Personality',
        duration: '15 minutes',
        price: 500,
        description: 'Learn how others pervceive you.'
    },
    {
        id: 18,
        type: "numerology",
        name: 'Personal year',
        duration: '15 minutes',
        price: 500,
        description: 'Gain insights into the themes and opportunities for the current year'
    },
    {
        id: 19,
        type: "numerology",
        name: 'Compatibility',
        duration: '15 minutes',
        price: 500,
        description: 'Analyze relationships and compatibility in love, friendships and business.'
    },
    {
        id: 20,
        type: "numerology",
        name: 'career and finance',
        duration: '15 minutes',
        price: 500,
        description: 'Align your career and financial choices with your numerology blueprint.'
    },
    {
        id: 21,
        type: "numerology",
        name: 'karmic lessons and past life',
        duration: '15 minutes',
        price: 500,
        description: 'Identify past life influences and lessons to learn int this lifetime'
    },
    {
        id: 22,
        type: "numerology",
        name: 'Lucky numbers and name corrections',
        duration: '15 minutes',
        price: 500,
        description: 'discover auspicious numbers and name modifications for better luck'
    },
]