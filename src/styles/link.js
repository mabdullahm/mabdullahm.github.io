import { Link } from "gatsby"
import styled, { css } from 'styled-components';

const LinkStyled = styled(Link)`
  font-size: 16px;
  color: #650D60;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
    font-weight: 900;
  }

  ${props => props.active && css`
    font-weight: 900;
  `}

  ${props => props.dark && css`
    color: white;
  `}

  ${props => props.blue && css`
    color: #009ad0;
  `}

  ${props => (props.dark && props.blue) && css`
    color: #29c7ff;
  `}
`;

export default LinkStyled
