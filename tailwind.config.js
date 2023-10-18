/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container : {
      center : true, 
      padding : '16px',
    },
    extend: {
      fontFamily : {
        nizar : ['Inter'],
        dmSans : ['DM+Sans']
      },
      screens : {
        '2xl' : '1320px',
      },
      animation : {
        'blob' : 'blob 3s ease-in-out infinite',
      },
      keyframes : {
        blob : {
          '0% , 100% ' : {
              borderRadius : '60% 40% 30% 70% / 60% 30% 70% 40%' 
          },
          '50%' : {
            borderRadius : '30% 60% 70% 40% / 50% 60% 30% 60%' 
          }
        }
      },
    },
  },
  plugins: [],
}

