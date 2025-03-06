import { Col, Row, Dropdown, Avatar, Divider } from 'antd';
import { LogoutOutlined  } from '@ant-design/icons';

import styles from './style.module.css';

const items = [
  {
    key: '1',
    label: 'Logout',
    icon: <LogoutOutlined tyle={{ fontSize: '32px' }} />,
  },
];

function Header2() {
  return (
    <header className={styles.header}>
      <Row className='height-100' justify='center' align="middle">
        <Col xxl={{ span: 18 }} xl={{ span: 20 }} md={{ span: 22 }} xs={{ span: 22 }}>
          <Row justify='space-between' align="middle">
            <Col className={styles.logo_container}>
              <a href="/" title="quicc.ai">
                QC
              </a>
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
              >
                <div className={styles.profile}>
                  <small>
                    Welcome! <br />
                    Bharat Ambati
                  </small>
                  <Avatar shape='square' size={45} src="/assets/images/user.jpg" />
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
