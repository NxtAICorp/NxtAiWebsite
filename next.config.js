/** @type {import('next').NextConfig}*/

module.exports = {
    i18n: {
        // These are all the locales to support in the website
        locales: ["en", "sp"],
        // This is the default locale when visiting website
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: "en",
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    },
    };

    const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["placehold.co"],
    },
};

module.exports = nextConfig;
