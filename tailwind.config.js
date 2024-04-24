/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors:{
      'white' : '#FFF',
      brand:{
        DEFAULT:'hsl(180, 66%, 49%)',
        950:"hsl(257, 27%, 26%)"
      },
      secondary:"hsl(0, 87%, 67%)",
      neutral:{
        DEFAULT:"hsl(0, 0%, 75%)",
        100:"hsl(257, 7%, 63%)",
        // 200:"hsl(257, 7%, 63%)",
        // 300:"hsl(257, 7%, 63%)",
        // 400:"hsl(257, 7%, 63%)",
        // 500:"hsl(257, 7%, 63%)",
        // 600:"hsl(257, 7%, 63%)",
        // 700:"hsl(257, 7%, 63%)",
        800:"hsl(255, 11%, 22%)",
        // 900:"hsl(257, 7%, 63%)",
        950:"hsl(260, 8%, 14%)"
      }
    },
    extend: {
      fontFamily:{
        'poppins':['Poppins']
      },
       screens: {
        'pc': {'min': '1024px'}
      },
    },
  },
  plugins: [],
}

