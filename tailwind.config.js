module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: {
      content: ["./src/**/*.svelte"],
      enabled: false,
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const broadMatchesWithoutTrailingSlash = broadMatches.map((match) =>
          _.trimEnd(match, "\\"),
        );
        const matches = broadMatches.concat(broadMatchesWithoutTrailingSlash);
        return matches;
      },
    },
    darkMode: "class", // or 'media' or 'class'
    theme: {
      maxHeight: {
        "lg": "34rem",
        "md": "24rem",
        "sm": "19rem",
        "screen": "95vh",
      },
      extend: {
        colors: {
          "dark-main": "#18191A",
          "dark-second": "#242526",
          "dark-third": "#3A3B3C",
          "dark-txt": "#B8BBBF",
          primary: "#9C6039",
          primarydark: '#873e23'
        },
        backgroundColor: (theme) => ({
          ...theme('colors'),
        }),
      },
    },
    plugins: [
        require('tailwind-scrollbar'),  
    ],
    variants: {
      extend: {
        display: ["group-hover"],
        transform: ["group-hover"],
        scale: ["group-hover"],
        opacity: ["disabled"],
      },
      scrollbar: ['rounded']
    },
  };
  