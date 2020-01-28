import styled from 'styled-components';

const Folio = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  strong {
    margin-bottom: 0px;
    margin-top: 15px;

    :first-child {
      margin-top: 0px;
    }
  }
`;

Folio.Overview = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 60px 20px 30px 0px;
  padding: 10px;
`;

Folio.Role = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  margin: 60px 0px;
  padding: 10px;
  border: 1px solid #F4F4F4;
  border-radius: 5px;
  max-height: 280px;
`;

Folio.Description = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

export default Folio
