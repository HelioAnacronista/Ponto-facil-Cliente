module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "fun-blue": {
        50: "#eef8ff",
        100: "#d9eeff",
        200: "#bbe1ff",
        300: "#8dd0ff",
        400: "#57b4ff",
        500: "#3092ff",
        600: "#1974f7",
        700: "#125ce3",
        800: "#164bb7",
        900: "#184392",
      },
      "fun-orange": {
        50: "#fff6ec",
        100: "#ffebd4",
        200: "#ffd4a7",
        300: "#ffb56f",
        400: "#ff8935",
        500: "#ff690e",
        600: "#ea4a04",
        700: "#c83706",
        800: "#9f2c0d",
        900: "#80270e",
      },
      gray: {
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#808080",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#313131",
      },
      white: {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
    },    
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
