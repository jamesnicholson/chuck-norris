import { css, keyframes } from 'styled-components'

const style = {
  primaryColor: 'black',
  secondaryColor: 'white',
  borderColor: '#5d5d5d60',
  backgroundColor: 'aliceblue',
  smallFontSize: '0.8em',
  normalFontSize: '1em',
  largeFontSize: '1.5em',
  extraLargeFontSize: '2em',
  massiveLargeFontSize: '6em',
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const appPage = css`
  transition: opacity 2s;
  background-color:${style.primaryColor};
  display: flex;
  flex-direction: column;
`;
export const loaderRotate = css`
  display: inline-block;
  animation: ${rotate} 8s linear infinite;
  padding: 20px;
  font-size: ${style.normalFontSize};
`;
export const loadingPage = css`
  text-align: center;
  transition: opacity 2s;
  position: absolute;
  width: 100%;
  z-index: 9;
  background: burlywood;
  height: 100%;
  top: 0px;
`;
export const categoryContainer = css`
  min-height:100px;
`;
export const categoryList = css`
  display:flex;
  overflow-x: auto;
`;
export const categoryCard = css`
  font-size: ${style.largeFontSize};
  background-color: palevioletred;
  color: white;
  text-shadow: 1px 1px #00000060;
  margin: 1em;
  padding: 1em;
  border: 2px solid #da648a;
  border-radius: 3px;
  max-width: 150px;
  text-align: center;
  flex: 0 0 150px;
`;
export const jokeCard = css`
  background-color: #EA661E;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ff5722;
  border-radius: 3px;
`;
export const jokeContent = css`
  color: white;
  text-shadow: 1px 1px #0000008c;
  font-size: ${style.extraLargeFontSize};
  margin: 1em;
  padding: 0.25em 1em;
`;
export const saveButton = css`
  font-size: ${style.normalFontSize};
  background-color: #00bcd4;
  color: white;
  text-shadow: 1px 1px #00000094;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #03aec3;
  border-radius: 3px;
`;

export default style