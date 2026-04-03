/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bg-deep': '#0a0f0d',
        'bg-section': '#0d1310',
        'bg-card': '#111916',
        'border-subtle': '#1a2820',
        'text-heading': '#e8ede9',
        'text-primary': '#c5d0c8',
        'text-secondary': '#8a9b8f',
        'text-muted': '#5a6b5f',
        'accent-green': '#5b8a72',
        'accent-green-light': '#7ab89a',
        'accent-teal': '#4a8a8a',
      },
    },
  },
  plugins: [],
}
