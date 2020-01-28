import styled, { css } from 'styled-components';

const Page = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${props => props.bg && css`
    background: linear-gradient(to top right, ${props.bg[0]}, ${props.bg[1]});
  `}

  ${props => props.dark && css`
    background: #1a181a;
    color: white;
  `}
`;

Page.Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  align-items: center;
  justify-content: center;
  padding: 0 60px;
  padding-top: 140px;
  flex-direction: column;

  svg {
    margin-top: 40px;
  }
`;

Page.Content2 = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Page
