import { people01, people02, people03, facebook, instagram, linkedin, twitter,  send, shield, star, check, MedicityLogo} from "@/public/assets";




export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "product",
        title: "Product",
    },
    {
        id: "clients",
        title: "Clients",
    },
];


export const contact =[
    {
        id: "contact",
        title: "Contact US",
    },
];

export const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Wireless RFID technology",
        content:
            "Real-time updating of bulk price tags.",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "Reducing labor costs",
        content:
            "Achieving profit growth in supermarkets.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Online and offline",
        content:
            "Synchronization data across multiple stores.",
    },
];

export const billings = [
    {
        id: "billing-1",
        icon: check,
        title: "Cloud",
        content: "Saas and private cloud deployment.",
    },
    {
        id: "billing-2",
        icon: check,
        title: "Warranty",
        content: "10+ years of wireless software and hardware experience.",
    },
    {
        id: "billing-3",
        icon: check,
        title: "Development",
        content: "A quick and customised solution as per industry needs.",
    },
    {
        id: "billing-4",
        icon: check,
        title: "Quality",
        content: "End-to-end cost control model with a super quality product.",
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit, magna egestas nulla dictum vitae ullamcorper aliquam torquent, quam cum proin sagittis sed mauris.",
        name: "Pedro Palacios",
        title: "Founder & Leader",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit, magna egestas nulla dictum vitae ullamcorper aliquam torquent, quam cum proin sagittis sed mauris.",
        name: "Carolina Merchan",
        title: "Founder & Leader",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit, magna egestas nulla dictum vitae ullamcorper aliquam torquent, quam cum proin sagittis sed mauris.",
        name: "Luis Cordero",
        title: "Founder & Leader",
        img: people03,
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "Real Time Update",
        value: "100%",
    },
    {
        id: "stats-2",
        title: "High Energy Effiency",
        value: "100%",
    },
    {
        id: "stats-3",
        title: "Low Error",
        value: "0,01%",
    },
];

export const footerLinks = [
    {
        id: "footerLinks-1",
        title: "Useful Links",
        links: [
            {
                name: "Terms & Services",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        id: "footerLinks-2",
        title: "Client Service",
        links: [
            {
                name: "Help Center",
                link: "https://www.hoobank.com/help-center/",
            },
        ],
    },
    {
        id: "footerLinks-3",
        title: "Partner",
        links: [
            {
                name: "Our Partner",
                link: "https://www.hoobank.com/our-partner/",
            },
            {
                name: "Become a Partner",
                link: "https://www.hoobank.com/become-a-partner/",
            },
        ],
    },
]

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export const clients = [
    {
        id: "client-1",
        logo: MedicityLogo,
    },
    
];