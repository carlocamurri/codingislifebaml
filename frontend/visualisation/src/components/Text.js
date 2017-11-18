import styled from 'styled-components';

const Text = styled.p`
  font-size: ${props => {
    switch (props.size) {
      case 'xl':
        return '8rem';
      case 'l':
        return '4.5rem';
      case 'm':
        return '2.5rem';
      case 's':
        return '1.7rem';
      case 'xs':
        return '1.25rem';
      case 'xxs':
        return '1.1rem';
      default:
        return 'normal';
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case 'xl':
        return '8rem';
      case 'l':
        return '5rem';
      case 'm':
        return '3.2rem';
      case 's':
        return '2.7rem';
      case 'xs':
        return '2rem';
      case 'xxs':
        return '1.7rem';
      default:
        return 'normal';
    }
  }};

  color: ${props => props.color || 'rgb(55, 52, 65)'};
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-family: ${props => (props.bold ? 'Lato-Bold' : 'Lato-Regular')};
  text-decoration: ${props => (props.underline ? 'underline' : 'inherit')};
  max-width: ${props => props.maxWidth || 'auto'};
  margin: ${props => props.margin};

  /* tablets */
  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    font-size: ${props => {
      switch (props.size) {
        case 'xl':
          return '5rem';
        case 'l':
          return '3rem';
        case 'm':
          return '1.75rem';
        case 's':
          return '1.5rem';
        case 'xs':
          return '1.25rem';
        case 'xxs':
          return '1.1rem';
        default:
          return 'normal';
      }
    }};
    line-height: ${props => {
      switch (props.size) {
        case 'xl':
          return '5.5rem';
        case 'l':
          return '3.5rem';
        case 'm':
          return '2.25rem';
        case 's':
          return '2.5rem';
        case 'xs':
          return '2rem';
        case 'xxs':
          return '1.7rem';
        default:
          return 'normal';
      }
    }};
  }

  /* phones */
  @media only screen and (min-width: 320px) and (max-width: 640px) {
    font-size: ${props => {
      switch (props.size) {
        case 'xl':
          return '3rem';
        case 'l':
          return '2rem';
        case 'm':
          return '1.5rem';
        case 's':
          return '1.25rem';
        case 'xs':
          return '1.25rem';
        case 'xxs':
          return '1.1rem';
        default:
          return 'normal';
      }
    }};
    line-height: ${props => {
      switch (props.size) {
        case 'xl':
          return '3.5rem';
        case 'l':
          return '2.5rem';
        case 'm':
          return '2rem';
        case 's':
          return '2rem';
        case 'xs':
          return '2rem';
        case 'xxs':
          return '2rem';
        default:
          return 'normal';
      }
    }};
  }
`;

export default Text;
