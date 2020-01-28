import styled, { css } from 'styled-components';
import Text from '../styles/text'

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background: transparent;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-top: 1px solid #F4F4F4;
  margin: 20px 0px;
  padding: 30px 100px;

  ${props => props.dark && css`
    border-top: 1px solid #555;   
    color: white; 
  `}
`;

Footer.Title = styled(Text.Heading)``;

Footer.Desc = styled.div`
  font-size: 16px;
  text-align: center;
  max-width: 450px;
  margin-bottom: 30px;
`;

Footer.Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;

  svg {
    stroke-width: 1px;
    stroke: gray;
    margin-right: 30px;

    :last-child{
      margin-right: 0px;
    }

    ${props => props.dark && css`
      stroke: white;
    `}
  }
`;

export default Footer
