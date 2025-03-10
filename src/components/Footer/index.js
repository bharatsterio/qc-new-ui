import { Col, Divider, Row } from 'antd';
import styles from "./styles.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Row className='height-100' justify='center' align="middle">
          <Col xxl={{ span: 18 }} xl={{ span: 20 }} md={{ span: 22 }} xs={{ span: 22 }}  style={{ textAlign: 'center' }}>
            <Row 
              justify={{
                xs: 'center',
                sm: 'space-between'
              }} 
              align="middle"
            >
              <Col 
                className={styles.logo_container} 
                xs={24} 
                sm={12}
              >
                <img src='/assets/images/quicc_logo.png' alt='Quicc.ai' />
              </Col>
              <Col className={styles.social_container} xs={24} sm={12}>
                <ul>
                  <li>
                    <a href="/" target='_blank'>
                      <img src='/assets/images/facebook.svg' alt='facebook' />
                    </a>
                  </li>
                  <li>
                    <a href="/" target='_blank'>
                      <img src='/assets/images/instagram.svg' alt='instagram' />
                    </a>
                  </li>
                  <li>
                    <a href="/" target='_blank'>
                      <img src='/assets/images/linkedin.svg' alt='linkedin' />
                    </a>
                  </li>
                  <li>
                    <a href="/" target='_blank'>
                      <img src='/assets/images/twitter.svg' alt='twitter' />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Divider style={{ borderColor: '#4e4e4e' }} />
            <Row justify='center' align="middle">
              <div className={styles.other_links}>
                <a href='/' target='_blank'>Privacy Policy</a>
                <a href='/' target='_blank'>Terms &amp; Conditions</a>
                <a href='/' target='_blank'>Cookie Policy</a>
              </div>
            </Row>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
