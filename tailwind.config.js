module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
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
  plugins: [],
}
