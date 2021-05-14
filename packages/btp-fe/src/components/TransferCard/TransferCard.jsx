import { Card as AntCard, Row, Col } from 'antd';
import styled from 'styled-components';
import { SelectNetwork } from 'components/Select';
import { PrimaryButton } from 'components/Button';
import VectorIconSrc from 'assets/images/vector-icon.svg';

const CardStyled = styled(AntCard)`
  font-family: Poppins;
  font-style: normal;
  letter-spacing: 1px;
  h1 {
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
    color: #eff1ed;
    text-align: center;
  }
  .content {
    font-size: 16px;
    color: #eff1ed;
  }
  .desc-txt {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #878491;
    margin-bottom: 37px;
    padding: 0 22px;
  }
  .ant-card-body {
    background-color: #1d1b22;
    padding: 32px;
  }
  .right-side {
    display: flex;
    justify-content: flex-end;
  }
  hr {
    margin-top: 26px;
    border-top: 1px solid #353242;
    text-align: center;
    margin-bottom: 26px;
  }
  hr:after {
    content: '';
    background-image: url(${VectorIconSrc});
    padding-top: 22px;
    padding-right: 40px;
  }
  .button-section {
    margin-top: 42px;
  }
`;
export const TransferCard = () => {
  window.localStorage.setItem('wallet-status', 'connectedd');
  const isConnected = window.localStorage.getItem('wallet-status') === 'connected';
  return (
    <CardStyled bordered={false} style={{ width: 480 }}>
      <h1>Transfer</h1>
      <div className="content">
        <p className="desc-txt">
          Select an asset and destination chain, to begin or resume a mint.
        </p>
        <Row>
          <Col span={12}>Send</Col>
          <Col span={12} className="right-side">
            <select></select>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col span={12}>To</Col>
          <Col span={12} className="right-side">
            <SelectNetwork />
          </Col>
        </Row>
        <Row className="button-section">
          {isConnected ? (
            <PrimaryButton width={416} height={64}>
              Next
            </PrimaryButton>
          ) : (
            <PrimaryButton width={416} height={64} disabled>
              Connect wallet
            </PrimaryButton>
          )}
        </Row>
      </div>
    </CardStyled>
  );
};
