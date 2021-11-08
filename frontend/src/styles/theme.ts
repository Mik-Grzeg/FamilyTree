const theme = {
  fonts: {
    families: {
      normal: "'Montserrat', sans-serif",
      fancy: "'Pacifico', cursive",
    },
    sizes: {
      s: "14px",
      base: "18px",
      m: "20px",
      l: "22px",
      xl: "24px",
      xxl: "36px",
    },
  },
  colors: {
    bg: "var(--dark-purple)",
    errorRed: "var(--dark-red)",
    text: {
      error: "var(--black)",
      dark: "var(--dark-blue)",
      light: "var(--white)",
      placeholder: "var(--med-blue)",
      highlited: "var(--dark-turqoise)",
    },
    bgbar: {
      dark: "var(--med-blue)",
      light: "var(--yellow)",
    },
    loginForm: {
      bg: "var(--orange)",
      inactiveButtonBg: "var(--red)",
      hoveredButtonBg: "var(--dark-red)",
      mainColor: "var(--dark-blue)",
      scrollbarThumb: "var(--med-blue)",
      scrollbarThumbActive: "var(--light-blue)",
    },
    input: {
      bg: "#FFFFFF",
      underlineColor: "var(--med-blue)",
      underlineActiveColor: "var(--red)",
      placeholderColor: "var(--med-blue)",
      textColor: "var(--almost-black)",
    },
    button: {
      textColor: "#FFFFFF",
      bg: "var(--red)",
      hoveredBg: "var(--dark-red)",
    },
  },
  heights: {
    header: "var(--header-height)",
  },
  borders: { thick: "8px", thin: "4px" },
};

export default theme;

export type ThemeType = typeof theme;
