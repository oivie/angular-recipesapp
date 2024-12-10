module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#3d5c47',
        'accent-yellow': '#ffcc66',
        'light-yellow': '#FEFAEF', // Background yellow
        'sage-green': '#778571', // Light green
        'dark-green': '#2F4231', // Dark green
        'gray-green': '#606C5C', // Gray-green
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-50%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
