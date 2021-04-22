import { css } from 'styled-components'
 
export default css`
 html {
  font-size: 62.5%; //10px;
 }
 body {
  font: 1.6rem "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #000;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  position: relative;
}
 main {
  padding: 6rem 0 40rem;

 }
 img {
   width: 100%;
 }
 @media (min-width: 768px) {
  main {
    padding-top: 8rem;
  }
 }
`