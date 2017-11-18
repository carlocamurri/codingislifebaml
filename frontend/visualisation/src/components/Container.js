import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  box-shadow: ${props =>
    props.boxShadow ? '0 2px 8px 0 rgba(55, 52, 65, 0.16)' : 'none'};
  margin: 0;
  background: none;
`;

export default Container;
