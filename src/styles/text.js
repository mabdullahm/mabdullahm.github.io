import styled, { css } from 'styled-components';

const Text = styled.div`
  font-size: 16px;
  color: #650D60;
  text-align: center;
  margin-bottom: 20px;
`;

Text.Hero = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #650D60;
  margin-bottom: 10px;
  padding-bottom: 5px;
  font-weight: 300;

  strong {
    background: linear-gradient(to right, #650D60, #C86FC4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${props => props.left && css`
    text-align: left;
  `}

  ${props => props.dark && css`
    strong {
      background: linear-gradient(to right, #b941b2, #ea9ee7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`;

Text.Heading = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 5px;
  font-weight: bold;
  background: linear-gradient(to right, #650D60, #C86FC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${props => props.dark && css`
    background: linear-gradient(to right, #C86FC4, #C86FC4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}

  ${props => props.left && css`
    text-align: left;
  `}
`

export default Text
