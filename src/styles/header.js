import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  background: transparent;
  margin-bottom: 1.45rem;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  position: absolute;
  align-items: center;
`;

Header.LinksContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export default Header
