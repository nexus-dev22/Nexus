import styled from 'styled-components/macro';
import { Text } from 'components/Typography';
import { NavLink } from 'react-router-dom';
import { colors } from 'components/Styles/Colors';

const Wrapper = styled.div`
  a {
    color: ${colors.primaryBrand};
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const BetaNotification = ({ setDisplay }) => {
  return (
    <Wrapper>
      <Text className="md">
        Nexus is in Beta. Please use at your own risk.{' '}
        <NavLink
          to="/terms-of-use"
          onClick={() => {
            setDisplay(false);
          }}
        >
          Click here
        </NavLink>{' '}
        for full Terms of Use.
      </Text>
    </Wrapper>
  );
};
