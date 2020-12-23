const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  grey4: '#B1B7C2',
  blue1: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#E06379',
  yellow: '#EAC02E',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  warning: mainColors.yellow,
  white: 'white',
  disable: mainColors.grey3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark3,
  },
  textInput: {
    disable: {
      text: mainColors.grey4,
      background: mainColors.grey3,
    },
  },
  button: {
    primary: {
      text: 'white',
      background: mainColors.green1,
    },
    secondary: {
      text: mainColors.dark1,
      background: 'white',
    },
    disable: {
      text: mainColors.grey4,
      background: mainColors.grey3,
    },
  },
  border: mainColors.grey2,
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  message: {
    error: mainColors.red1,
  },
};
