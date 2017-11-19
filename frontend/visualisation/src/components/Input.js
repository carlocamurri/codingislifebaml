import styled from 'styled-components';

const Input = styled.input.attrs({
  // we can define static props
  type: 'text',

  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: rgb(55, 52, 65);
  font-size: 1em;
  border: none;
  border-bottom: 4px solid rgb(213, 210, 210);
  background-color: rgba(213, 210, 210, 0.4);
  outline: 0;

  ::placeholder {
    text-align: left;
    color: rgb(55, 52, 65);
  }

  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export default Input;
