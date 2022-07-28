module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in-from-bottom': {
          '0%': {
            opacity: '0',
            transform: 'translate(0, 10px) scale(1)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0, 0) scale(1)',
          }
        }
      },
      animation: {
        'fade-in-from-bottom': 'fade-in-from-bottom 800ms cubic-bezier(0.4, 0, 0.25, 1)',
      }
    },
  },
  plugins: [],
}
