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
                trackingId: "UA-178786829-1",
            },
        },
        `gatsby-plugin-sass`
    ],
    siteMetadata: {
        title: "Vignesh Rajendran | Front End Developer",
        description: "I'm a front-end engineer with 3+ long stretches of experience creating site and user interfase.",
        url: "https://vigneshr.gtsb.io/", // No trailing slash allowed!
        image: "favicon.ico", // Path to your image you placed in the 'static' folder
        twitterUsername: "@Vignesh94567743",
    },
}
