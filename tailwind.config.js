/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme :{
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1200px'
      
    },
  },

  daisyui: {
    
    themes: [
      {
       
          light: {
            primary: "#176F6B",
            secondary: "#FFC000",
            accent: "#000000",
            neutral: "#F3F4F6",
            "base-100": "#ffffff",
            info: "#98A8DD",
            success: "#1BBB70",
            warning: "#DF7E07",
            error: "#FA5C5C",
          },
        },
        {
          dark: {
            primary: "#D9F99D",
            secondary: "#FDE68A",
            accent: "#4B5563",
            neutral: "#F3F4F6",
            "base-100": "#1F2937",
            info: "#98A8DD",
            success: "#1BBB70",
            warning: "#F59E0B",
            error: "#FB7185",
          },
        },
      
    ],
   
  },
  plugins: [require("daisyui")],
};
