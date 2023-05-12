/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html'],
  darkMode: 'media',
  mode: 'jit',
  theme:{
    extend:{
      colors:{
        green:{
          DEFAULT: '#2FBD6A'
        },
        gray:{
          20: '#F3F3F3',
          100: '#F9FAFA',
          300: '#D9D9D9',
          500: '',
          700: '',
          900:'#ACACAC'
        }
      }
    }
  }
};
