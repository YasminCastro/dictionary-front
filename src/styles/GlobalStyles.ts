import { createGlobalStyle } from 'styled-components';

export const colors = {
  // apps
  primary: '#dc081e',
  secondary: '#DD3636',
  tertiary: '#41464f',
  primaryHover: '#AB0617',
  mainTextColor: '#8D0A0A',
  focusColor: '#EEBEB8',
  secondaryTextColor: '#333333',
  accent: '#DD3636',
  secondaryHover: '#CC3925',
  secondaryAccent: '#dba0a0',
  backgroundColor: '#ffffff',
  disabled: '#ee1e2444',

  yellow: '#FAC507',

  white: '#FFFFFF',
  white50: '#F5F5F5',
  white100: '#F7F7F7',
  white125: '#FAFAFA',
  white150: '#F2F2F2',
  white200: '#FBFDFE',
  white350: '#F6F9FF',
  white400: '#E6E6EE',
  white500: '#EBEBEB',
  white600: '#DADCE0',
  white800: '#666666',
  white850: '#999999',
  white900: '#333333',

  beige: '#FAF2E7',

  black: '#000000',
  black500: '#121D24',
  black700: '#050d1c',

  inputOutline: '#4CB3F9',
  redError: '#F94C4C',

  blueMetal: '#5A6C7F',
  blueMetal40: '#CBD6EB',
  blueMetal100: '#A2B1CC',
  blueMetal200: '#597584',
  blueMetal800: '#6B82A0',

  blue50: '#F5F7FC',
  blue75: '#F0F3FA',
  blue100: '#e5f2ff',
  blue150: '#cbe6ff',
  blue225: '#8ECDFF',
  blue230: '#7CCAFF',
  blue240: '#4CB3F9',
  blue250: '#2398DD',
  blue275: '#367AD1',
  blue300: '#007EBC',
  blue350: '#005785',
  blue400: '#004B73',
  blue600: '#003F62',
  blue700: '#003351',
  blue800: '#001D31',
  blue900: '#150D21',

  blueBurguer: '#141142',

  purple100: '#E7DEFF',
  purple200: '#B0A9C4',
  purple300: '#796BC1',
  purple400: '#544599',
  purple500: '#3F3B7B',
  purple600: '#565676',
  purple900: '#1d1346',

  grayBorder: '#e0e0e0',

  gray400: '#CCCCCC',
  gray500: '#606060',
  gray700: '#7A7F91',
  gray800: '#6F7683',
};

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration:none;
  }

  li, ul {
    list-style: none;
  }

`;
