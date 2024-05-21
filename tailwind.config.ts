/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        black:{
          30: '#151523',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          40: '#D1D5DA',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          10: '#fb8971',
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        pink:{
          10: '#fe8ece',
        },
        sqilcoPink:'#FF8ED0',
        sqilcoOrange:'#FB8971',
        textMuted:"#a3a3a3"
      },
      
      backgroundImage: {
       
        pattern: "url('/pattern.png')",
         'pink-orange': 'linear-gradient(90deg, rgb(255,141.95,207.77) 0%, rgb(251.16,137.52,111.35) 100%)',
        'primary-color': "linear",
        'linear-gradient': 'linear-gradient(62deg, #f6ca45, #ee7983)',
            'gradient-to-r-custom': 'linear-gradient(62deg, #f6ca45, #ee7983)'
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
