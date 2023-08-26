module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Josefin Sans', 'sans-serif'],
        subtitle: ['Questrial', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'lazarus-display-2xl': ['4.5rem', '5.625rem'],
        'lazarus-display-xl': ['3.75rem', '4.5rem'],
        'lazarus-display-lg': ['3rem', '3.75rem'],
        'lazarus-display-md': ['2.25rem', '2.75rem'],
        'lazarus-display-sm': ['1.875rem', '2.375rem'],
        'lazarus-display-xs': ['1.5rem', '2rem'],
        'lazarus-xl': ['1.25rem', '1.875rem'],
        'lazarus-lg': ['1.125rem', '1.75rem'],
        'lazarus-md': ['1rem', '1.5rem'],
        'lazarus-sm': ['0.875rem', '1.25rem'],
        'lazarus-xs': ['0.75rem', '1.125rem'],
      },
      lineHeight: {
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
      },
      letterSpacing: {
        'lazarus-title': '0.40rem',
        'lazarus-subtitle': '0.20rem',
        'lazarus-lg': '-0.06rem',
        'lazarus-md': '-0.045rem',
      },
      backgroundImage: {
        'welcome-image': "url('/images/welcome-gray.png')",
      },
      backgroundColor: {
        'landing-solid': '#3E3E5D',
        'landing-day-overlay': 'rgba(13,26,66,0.8)',
        'landing-night-overlay': 'rgba(1,15,44,0.7)',
      },
      textShadow: {
        landing: '0px 0px 13px rgba(1, 15, 44, 1)',
      },
      colors: {
        'lazarus-grey': '#594D6D',
        'lazarus-teal': '#013640',
        'lazarus-light-teal': '#21434D',
        // Modern Gray from Untitled UI
        'lazarus-gray-25': '#FCFCFD',
        'lazarus-gray-50': '#F8FAFC',
        'lazarus-gray-100': '#EEF2F6',
        'lazarus-gray-200': '#E3E8EF',
        'lazarus-gray-300': '#CDD5DF',
        'lazarus-gray-400': '#9AA4B2',
        'lazarus-gray-500': '#697586',
        'lazarus-gray-600': '#4B5565',
        'lazarus-gray-700': '#364152',
        'lazarus-gray-800': '#202939',
        'lazarus-gray-900': '#121926',
        // Primary from Untitled UI
        // 'lazarus-primary-25': '#FCFAFF',
        // 'lazarus-primary-50': '#F9F5FF',
        // 'lazarus-primary-100': '#F4EBFF',
        // 'lazarus-primary-200': '#E9D7FE',
        // 'lazarus-primary-300': '#D6BBFB',
        // 'lazarus-primary-400': '#B692F6',
        // 'lazarus-primary-500': '#9E77ED',
        // 'lazarus-primary-600': '#7F56D9',
        // 'lazarus-primary-700': '#6941C6',
        // 'lazarus-primary-800': '#53389E',
        // 'lazarus-primary-900': '#42307D',
        // Primary we're currently using
        'lazarus-primary-25': '#F5FAFF',
        'lazarus-primary-50': '#EFF8FF',
        'lazarus-primary-100': '#D1E9FF',
        'lazarus-primary-200': '#B2DDFF',
        'lazarus-primary-300': '#84CAFF',
        'lazarus-primary-400': '#53B1FD',
        'lazarus-primary-500': '#009198',
        'lazarus-primary-600': '#1570EF',
        'lazarus-primary-700': '#175CD3',
        'lazarus-primary-800': '#1849A9',
        'lazarus-primary-900': '#194185',
        // Indigo from Untitled UI
        'lazarus-indigo-25': '#F5F8FF',
        'lazarus-indigo-50': '#EEF4FF',
        'lazarus-indigo-100': '#E0EAFF',
        'lazarus-indigo-200': '#C7D7FE',
        'lazarus-indigo-300': '#A4BCFD',
        'lazarus-indigo-400': '#8098F9',
        'lazarus-indigo-500': '#6172F3',
        'lazarus-indigo-600': '#444CE7',
        'lazarus-indigo-700': '#3538CD',
        'lazarus-indigo-800': '#2D31A6',
        'lazarus-indigo-900': '#2D3282',
        // Error from Untitled UI
        'lazarus-error-25': '#FFFBFA',
        'lazarus-error-50': '#FEF3F2',
        'lazarus-error-100': '#FEE4E2',
        'lazarus-error-200': '#FECDCA',
        'lazarus-error-300': '#FDA29B',
        'lazarus-error-400': '#F97066',
        'lazarus-error-500': '#F04438',
        'lazarus-error-600': '#D92D20',
        'lazarus-error-700': '#B42318',
        'lazarus-error-800': '#912018',
        'lazarus-error-900': '#7A271A',
        // Orange from Untitled UI
        'lazarus-orange-25': '#FEFAF5',
        'lazarus-orange-50': '#FEF6EE',
        'lazarus-orange-100': '#FDEAD7',
        'lazarus-orange-200': '#F9DBAF',
        'lazarus-orange-300': '#F7B27A',
        'lazarus-orange-400': '#F38744',
        'lazarus-orange-500': '#EF6820',
        'lazarus-orange-600': '#E04F16',
        'lazarus-orange-700': '#B93815',
        'lazarus-orange-800': '#932F19',
        'lazarus-orange-900': '#772917',
        // Warning from Untitled UI
        'lazarus-warning-25': '#FFFCF5',
        'lazarus-warning-50': '#FFFAEB',
        'lazarus-warning-100': '#FEF0C7',
        'lazarus-warning-200': '#FEDF89',
        'lazarus-warning-300': '#FEC84B',
        'lazarus-warning-400': '#FDB022',
        'lazarus-warning-500': '#F79009',
        'lazarus-warning-600': '#DC6803',
        'lazarus-warning-700': '#B54708',
        'lazarus-warning-800': '#93370D',
        'lazarus-warning-900': '#7A2E0E',
        // Pink from Untitled UI
        'lazarus-pink-25': '#FEF6FB',
        'lazarus-pink-50': '#FDF2FA',
        'lazarus-pink-100': '#FCE7F6',
        'lazarus-pink-200': '#FCCEEE',
        'lazarus-pink-300': '#FAA7E0',
        'lazarus-pink-400': '#F670C7',
        'lazarus-pink-500': '#EE46BC',
        'lazarus-pink-600': '#DD2590',
        'lazarus-pink-700': '#C11574',
        'lazarus-pink-800': '#9E165F',
        'lazarus-pink-900': '#851651',
        //Success from Untitled UI
        'lazarus-success-25': '#F6FEF9',
        'lazarus-success-50': '#ECFDF3',
        'lazarus-success-100': '#D1FADF',
        'lazarus-success-200': '#A6F4C5',
        'lazarus-success-300': '#6CE9A6',
        'lazarus-success-400': '#32D583',
        'lazarus-success-500': '#12B76A',
        'lazarus-success-600': '#039855',
        'lazarus-success-700': '#027A48',
        'lazarus-success-800': '#05603A',
        'lazarus-success-900': '#054F31',
      },
    },
  },
}