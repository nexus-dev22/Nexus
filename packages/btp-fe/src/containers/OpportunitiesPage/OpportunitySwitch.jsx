import { Button } from 'components/Button';
import styled from 'styled-components/macro';
import capitalized from 'utils/capitalized';
import { opportunityType } from './data';

const StyledSwitch = styled.div`
  display: flex;
  background: #353242;
  width: fit-content;
  border-radius: 30px;
  margin-top: 24px;

  & > span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
  & .buttonStyle {
    padding: 9px 23px;
    width: 97px;
    border-radius: 30px;
    transition: all 0.4s ease-out;
  }
  & .right-btn {
    margin-left: -20px;
  }
  & .active-tab {
    background: #566afb;
    z-index: 10;
  }
  & .not-active {
    z-index: 1;
    background: #353242;
  }
`;

export const OpportunitySwitch = ({ handleChangeOpportunityType, selectedOpportunityType }) => {
  return (
    <StyledSwitch onClick={handleChangeOpportunityType}>
      <Button
        onClick={handleChangeOpportunityType}
        className={`buttonStyle  left-btn ${
          selectedOpportunityType === opportunityType.asset ? 'active-tab' : 'not-active'
        }`}
      >
        {capitalized(opportunityType.asset)}
      </Button>
      <Button
        onClick={handleChangeOpportunityType}
        className={`buttonStyle right-btn ${
          selectedOpportunityType === opportunityType.pool ? 'active-tab' : 'not-active'
        }`}
      >
        {capitalized(opportunityType.pool)}
      </Button>
    </StyledSwitch>
  );
};
