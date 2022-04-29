import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { Select, SelectAsset } from 'components/Select';
import { PrimaryButton } from 'components/Button';
import { Header, Text } from 'components/Typography';
import { media } from 'components/Styles/Media';

import { chainList, chainConfigs } from 'connectors/chainConfigs';

import transferIcon from 'assets/images/vector-icon.svg';

const StyledCard = styled.div`
  width: 480px;
  background-color: #1d1b22;
  padding: 32px;

  .desc-txt {
    text-align: center;
    color: #878491;
    margin: 11px 0 37px;
  }

  .right-side {
    display: flex;
    justify-content: flex-end;
  }

  .devider {
    margin: 45px 0;
    border-top: 1px solid #353242;
    position: relative;

    :after {
      content: '';
      background: transparent center / contain no-repeat url(${transferIcon});
      width: 40px;
      height: 40px;
      display: block;

      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .button-section {
    margin-top: 42px;
  }

  .to,
  .send {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${media.md`
    width: 100% !important;
  `}
`;

export const TransferCard = ({ setStep, setSendingInfo, isConnected, nativeCoin }) => {
  const onChange = (values) => {
    const {
      target: { value, name },
    } = values;
    if (name) {
      setSendingInfo({ [name]: value });
    }
  };

  const onNext = () => {
    setStep(1);
  };

  const getTartgetChains = () => {
    const targetChains = chainList.map(({ CHAIN_NAME, id }) => ({
      value: id,
      label: CHAIN_NAME,
    }));

    if (!nativeCoin) return targetChains;
    return targetChains.filter(({ value }) =>
      nativeCoin === chainConfigs.ICON.COIN_SYMBOL
        ? value !== chainConfigs.ICON.id
        : value === chainConfigs.ICON.id,
    );
  };

  return (
    <StyledCard>
      <Header className="sm bold center">Transfer</Header>

      <div className="content">
        <Text className="sm desc-txt">
          Select an asset and destination chain, to begin or resume a mint.
        </Text>

        <div className="send">
          <Text className="md">Send</Text>
          <SelectAsset onChange={onChange} />
        </div>

        <div className="devider" />

        <div className="to">
          <Text className="md">To</Text>
          <Select options={getTartgetChains()} onChange={onChange} name="network" />
        </div>

        <div className="button-section">
          {isConnected ? (
            <PrimaryButton width={416} height={64} onClick={onNext} type="button">
              Next
            </PrimaryButton>
          ) : (
            <PrimaryButton width={416} height={64} disabled>
              Connect wallet
            </PrimaryButton>
          )}
        </div>
      </div>
    </StyledCard>
  );
};

TransferCard.propTypes = {
  /** Set step for transfer box */
  setStep: PropTypes.func,
  setSendingInfo: PropTypes.func,
  isConnected: PropTypes.bool,
  isSendingNativeCoin: PropTypes.bool,
  currentNetwork: PropTypes.string,
};
