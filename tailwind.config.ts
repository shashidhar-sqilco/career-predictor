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
        'bg-img-1': "url('/software_engineering.png')",
        'bg-img-2': "url('/data_analytics.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",

        'primary-color':"linear"
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
