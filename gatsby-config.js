/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-178786829-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Defers execution of google analytics script after page load
                defer: true,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "vigneshr.gtsb.io",
            },
        },
    ],
    siteMetadata: {
        title: "Vignesh Rajendran | Front End Developer",
        description: "I'm a front-end engineer with 3+ long stretches of experience creating site and user interfase.",
        url: "https://vigneshr.gtsb.io/", // No trailing slash allowed!
        image: "favicon.ico", // Path to your image you placed in the 'static' folder
        twitterUsername: "@Vignesh94567743",
    },
}
