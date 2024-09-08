/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        wiggle_diagonal: {
          '0%': { transform: 'translate(0, 0)' },
          '50%,75%': { transform: 'translate(5px, -5px) scale(1.1)', opacity: '0.66' },
          '100%': { transform: 'translate(0,0) scale(1)', opacity: '1' },
        },
        up: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { transform: 'translateY(-7px)', opacity: '1' },
        },
        down: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { transform: 'translateY(7px)', opacity: '1' },
        },
        right: {
          '0%, 100%': { transfrom: 'translateX(0)', opacity: '0' },
          '50%': { transform: 'translateX(5px)', opacity: '1' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        sam: 'up 1s ease-in-out',
        wiggle_diagonal: 'wiggle_diagonal 1.5s ease-in-out infinite',
        upfinit: 'up 1s ease-in-out infinite',
        down: 'down 1s ease-in-out infinite',
        wiggleRight: 'right 1s ease-in-out infinite',
      },
      fontFamily: {
        title: 'Noticia Text',
        primary: 'Noto Sans Korean',
        eng: 'Inter',
        roboto: 'Roboto',
      },
      backgroundImage: {
        'skyblue-gradient':
          'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,255,231,1) 4%, rgba(255,255,255,1) 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animations')],
};
