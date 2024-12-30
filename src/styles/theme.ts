export const theme = {
  colors: {
    // Primary color palette
    primary: '#396AFF', // Main brand blue
    primaryDark: '#343C6A', // Darker blue for headings
    primaryLight: '#EDF1F7', // Light blue for backgrounds
    secondary: '#FFBB38', // Accent yellow
    tertiary: '#41D4A8', // Success green
    danger: '#FF4B4A', // Error red
    grayLight: '#E6EFF5', // Light gray for borders and dividers
    grayMedium: '#B1B1B1', // Medium gray for text
    grayDark: '#718EBF', // Dark gray for labels
    background: '#FFFFFF', // Main background color
    white: '#FFFFFF', // Pure white
    black: '#232323', // Pure black for strong text
  },
  fonts: {
    // Font families
    inter: "'Inter', sans-serif",
    lato: "'Lato', sans-serif",
  },
  typography: {
    // Font sizes and line heights
    h1: {
      size: '28px',
      lineHeight: '34px',
      weight: 600,
    },
    h2: {
      size: '22px',
      lineHeight: '27px',
      weight: 600,
    },
    h3: {
      size: '18px',
      lineHeight: '22px',
      weight: 500,
    },
    b1: {
      size: '16px',
      lineHeight: '19px',
      weight: 400,
    },
    b2: {
      size: '15px',
      lineHeight: '18px',
      weight: 400,
    },
    smallText: {
      size: '13px',
      lineHeight: '16px',
      weight: 400,
    },
  },
  spacing: {
    // Spacing utilities
    xs: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xl: '32px',
    xxl: '40px',
  },
  borderRadius: {
    // Border radius utilities
    small: '4px',
    medium: '8px',
    large: '10px',
    extraLarge: '25px',
  },
  shadows: {
    // Shadow utilities
    small: '4px 4px 18px -2px rgba(231, 228, 232, 0.8)',
    medium: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0px 10px 15px rgba(0, 0, 0, 0.15)',
  },
  breakpoints: {
    // Responsive breakpoints
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    largeDesktop: '1200px',
  },
};
