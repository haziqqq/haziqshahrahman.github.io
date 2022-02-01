module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Poppins'],
      },
      width: {
        'big': '40rem',
        'profile': '24rem',
        'about': '11.25rem',
        'about-lg': '21.25rem',
        'skill': '2.813rem',
        'skill-lg': '5.625rem',
      },
      fontSize: {
        'header': ['3rem', {
          lineHeight: '4rem',
        }],
        'headerSmall': '1.5rem',
        'title': '2.25rem',
        'titleSmall': '1.125rem',
        'subtitle': '1.5rem',
        'subtitleSmall': '0.75rem',
        'paragraph': '1.125rem',
        'paragraphSmall': '0.625rem',
      },
      colors: {
        'primary': '#6B4F4F',
        'primaryDark': '#483434',
        'secondary': '#ECC5A8',
        'light': '#FFF3E4',
      },
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
