const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
    },
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Merriweather', 'ui-sans-serif', 'system-ui'],
      serif: ['Lato', 'ui-serif', 'Georgia'],
      mono: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    // container-fluid component
    plugin(({addComponents, theme}) => {
      const paddings = {
        sm: theme('spacing.5'),
        lg: theme('spacing.6'),
        xl: theme('spacing.8'),
      };
      const mediaQueries = Object.entries(theme('screens', {}))
        .filter(([size]) => ['sm', 'lg', 'xl'].includes(size))
        .map(([breakpoint, width]) => ({
          [`@media (min-width: ${width})`]: {
            '.container-fluid': {
              paddingLeft: paddings[breakpoint],
              paddingRight: paddings[breakpoint],
            }
          }
        }));

      addComponents([
        {
          '.container-fluid': {
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: theme("spacing.4"),
            paddingRight: theme("spacing.4"),
            ...mediaQueries
          },
        },
        ...mediaQueries
      ]);
    })
  ],
}
