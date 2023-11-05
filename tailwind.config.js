/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(1vw)' },
          '100%': { transform: 'translateX(1vw)' }
        },
      },
      animation: {
        'slide-right': 'slide 3s',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "cupcake", "lofi", "dark"],
  },
}

