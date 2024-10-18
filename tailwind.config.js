/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  important: '#__next',
  theme: {
    extend: {
      keyframes: {
        move: {
          '50%': { paddingLeft: '8px', paddingRight: '0px' },
          '100%': { paddingRight: '4px' },
        },
        slice: {
          '60%': { width: '100%', left: '4px' },
          '100%': { width: '100%', left: '-2px', paddingLeft: '0' },
        },
        check01: {
          '0%': { width: '4px', top: 'auto', transform: 'rotate(0)' },
          '50%': { width: '0px', top: 'auto', transform: 'rotate(0)' },
          '51%': { width: '0px', top: '8px', transform: 'rotate(45deg)' },
          '100%': { width: '5px', top: '8px', transform: 'rotate(45deg)' },
        },
        check02: {
          '0%': { width: '4px', top: 'auto', transform: 'rotate(0)' },
          '50%': { width: '0px', top: 'auto', transform: 'rotate(0)' },
          '51%': { width: '0px', top: '8px', transform: 'rotate(-45deg)' },
          '100%': { width: '10px', top: '8px', transform: 'rotate(-45deg)' },
        },
        firework: {
          '0%': { opacity: '1', boxShadow: '0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0' },
          '30%': { opacity: '1' },
          '100%': { opacity: '0', boxShadow: '0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0' },
        },
      },
      animation: {
        move: 'move 0.3s ease 0.1s forwards',
        slice: 'slice 0.4s ease forwards',
        check01: 'check01 0.4s ease forwards',
        check02: 'check02 0.4s ease forwards',
        firework: 'firework 0.5s ease forwards 0.1s',
      },
    }
  },
  plugins: []
};
