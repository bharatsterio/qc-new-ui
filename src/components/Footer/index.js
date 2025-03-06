import { Col, Row } from 'antd';
import styles from "./styles.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Row className='height-100' justify='center' align="middle">
          <Col xxl={{ span: 18 }} xl={{ span: 20 }} md={{ span: 22 }} xs={{ span: 22 }}  style={{ textAlign: 'center' }}>
            <a href="/" target="_blank">Privacy Policy</a> &#x2022;  <a href="/" target="_blank">Terms &amp; Conditions</a> &#x2022;  <a href="/" target="_blank">Cookie Policy</a>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
