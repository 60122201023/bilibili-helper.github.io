/**
 * Author: DrowsyFlesh
 * Create: 2019/3/3
 * Description:
 */
import React from 'react';
import {connect} from 'dva';
import styled from 'styled-components';
import WEBSITE_CONFIG from 'JSON/config.json';

const HeaderWrapper = styled.div.attrs({className: 'header-box'})`
  position: relative;
  flex-shrink: 0;
  min-width: 800px;
  background-color: var(--bilibili-pink);
  color: var(--background-color);
  padding: 50px 0px 20px;
  overflow: hidden;
  & > * {
    display: block;
    max-width: 800px;
    margin: 0px auto;
    padding: 0px 10px;
  }
  .header-box {
    display: flex;
    justify-content: space-between;
    height: 80px;
    .title-box {
      header {
        font-size: 30px;
      }
      .version-box {
        height: 12px;
        line-height: 12px;
        text-indent: 2px;
        span {
          margin-right: 20px;
          line-height: 12px;
          font-size: 12px;
          font-weight: normal;
        }
      }
    }
    .action-box {
      display: flex;
      justify-content: flex-end;
      //align-items: center;
      .login-box {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        & > * {
          flex-grow: 0;
          width: max-content;
        }
        span {
          font-size: 12px;
          margin-top: 3px;
          text-align: right;
        }
        .login-btn {
          
        }
      }
    }
  }
`;
const LoginButton = styled.button`
  padding: 10px 40px;
  border-radius: 3px;
  font-size: 14px;
  letter-spacing: 2px;
  border: 1px solid var(--background-color);
  background-color: var(--bilibili-blue);
  color: var(--background-color);
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(35, 173, 229, 0.9);
  }
  &:active {
    background-color: var(--bilibili-blue);
  }
  &[disabled] {
    background-color: rgba(35, 173, 229, 0.5);
    cursor: not-allowed;
  }
`;


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnClickLogin = (connected, tryConnect) => {
        if (!connected && !tryConnect) this.props.dispatch({type: 'global/connectHelper'});
        else location.href = location.href;
    };

    render() {
        const {global} = this.props;
        const {connected, tryConnect, initializing} = global.status;
        const {lastVersion} = WEBSITE_CONFIG;
        return (
            <React.Fragment>
                <HeaderWrapper>
                    <div className="header-box">
                        <div className="title-box">
                            <header>BILIBILI HELPER</header>
                            <div className="version-box">
                                <span>Last: {lastVersion}</span>
                                {global.version && <span>You: {global.version}</span>}
                            </div>
                        </div>
                        <div className="action-box">
                            {!connected && tryConnect ? (
                                <div className="login-box">
                                    <LoginButton
                                        className="login-btn"
                                        onClick={() => this.handleOnClickLogin(connected, tryConnect)}
                                    >
                                        {initializing && '连接中'}
                                        {!initializing && !connected && !tryConnect && '连接助手'}
                                        {!initializing && !connected && tryConnect && '连接助手失败，点击刷新重试'}
                                    </LoginButton>
                                    {(!connected && tryConnect) && <span>如果您的浏览器未安装助手或助手版本小于 1.2.0，连接将会失败<br/>请安装助手或者更新至新版本</span>}
                                </div>
                            ) : (null)}
                        </div>
                    </div>
                </HeaderWrapper>
            </React.Fragment>
        );
    }
}

export default connect(({global, user}) => ({global, user}))(Header);