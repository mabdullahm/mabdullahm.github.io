import styled, { css } from 'styled-components';
import { Link } from "gatsby"

const Tile = styled(Link)`
  display: flex;
  flex: 1;
  margin: 16px 8px;
  margin-bottom: 20px;
  flex-direction: column;
  color: #444444;
  text-decoration: none;

  .tile-cover {
    svg {
      margin-bottom: -1px;
    }
  }

  :hover {
    .tile-cover {
      svg {
        transform: scale(1.1);
      }
    }
  }
`;

Tile.Cover = styled.div.attrs({
  className: 'tile-cover',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background: linear-gradient(to top right, #F4F9FF, #FFF8FC);
  margin-bottom: 20px;

  #redesign-logo {
    align-self: flex-end;
  }

  svg {
    transition: 0.3s;
  }

  ${props => props.bg && css`
    background: linear-gradient(to top right, ${props.bg[0]}, ${props.bg[1]});
  `}
`
Tile.Heading = styled.h4`
  margin-bottom: 10px;
`

Tile.Desc = styled.p`
  margin-bottom: 10px;
`

Tile.Tiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export default Tile
