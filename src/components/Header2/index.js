import React, { useState } from 'react';
import { Col, Row, Dropdown, Avatar, Divider, AutoComplete } from 'antd';
import { LogoutOutlined, EnvironmentOutlined, UserAddOutlined, LoginOutlined  } from '@ant-design/icons';

import styles from './style.module.css';

const items = [
  {

    label: 'Log in',
    icon: <LoginOutlined style={{ fontSize: '16px' }} />,
  },
  {

    label: 'Sign up',
    icon: <UserAddOutlined style={{ fontSize: '16px' }} />
  },
  {

    label: 'Logout',
    icon: <LogoutOutlined style={{ fontSize: '16px' }} />,
  },
];

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

function Header2() {
  const [options, setOptions] = useState([]);
  const getPanelValue = (searchText) => !searchText ? [] : [mockVal(searchText)];

  return (
    <header className={styles.header}>
      <Row className='height-100' justify='center' align="middle">
        <Col xxl={{ span: 18 }} xl={{ span: 20 }} md={{ span: 22 }} xs={{ span: 22 }}>
          <Row justify='space-between' align="middle">
            <Col className={styles.logo_container}>
              <a href="/" title="quicc.ai">
                QC
              </a>
              <Divider type='vertical' className={styles.logo_divider} />
              <div className={styles.autocomplete_container}>
                <EnvironmentOutlined style={{ fontSize: '16px' }} />
                <AutoComplete
                  options={options}
                  placeholder="Location"
                  onSearch={(text) => setOptions(getPanelValue(text))}
                  variant="borderless"
                  className={styles.autocomplete}
                />
              </div>
            </Col>
            <Col className={styles.profile_container}>
              <Dropdown
                menu={{
                  items,
                  color: 'pink'
                }}
                trigger={['click']}
                placement="bottomRight"
                arrow
                rootClassName={styles.profile_dropdown}
              >
                <div className={styles.profile}>
                  {/* <small>
                    Welcome! <br />
                    Bharat Ambati
                  </small> */}
                  {/* <Avatar shape='square' size={45} src="/assets/images/user.jpg" /> */}
                  <Avatar shape='square' size={45} src="/assets/images/default_user.jpg" />
                </div>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider className={styles.divider}/>
    </header>
  );
}

export default Header2;
