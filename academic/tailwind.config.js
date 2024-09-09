/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00E0FF',
        'purple-glow': '#A64AFB',
        'dark-purple': '#1B003B',
        'dark-background': '#0B0B0B',
        'electric-pink': '#FF00FF',
        'vivid-orange': '#FF5F00',
        'teal-400': '#38bdf8',
        'teal-600': '#0ea5e9',
        'cyan-500': '#22d3ee',
      },
      boxShadow: {
        'neon': '0 4px 30px rgba(0, 224, 255, 0.7)', // Glowing neon shadow
        '3d': '5px 5px 20px rgba(0, 0, 0, 0.5)',      // Depth shadow for 3D effect
        'button-glow': '0px 0px 10px 4px rgba(0, 224, 255, 0.7)', // Button glow shadow
        '3d-square': '6px 6px 15px rgba(0, 0, 0, 0.4), -6px -6px 15px rgba(255, 255, 255, 0.2)',
        'neon': '0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.4)',
        'inner': 'inset 5px 5px 10px rgba(0, 0, 0, 0.25), inset -5px -5px 10px rgba(255, 255, 255, 0.25)',

      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, #A64AFB, #00E0FF)',
        'neon-gradient': 'linear-gradient(135deg, #FF00FF, #00E0FF, #FF5F00)',
      },
      backdropBlur: {
        xs: '2px',   // Light blur effect for glassmorphism
        md: '15px',  // Medium blur for deeper glass effect
      },
    },
  },
  plugins: [],
}
