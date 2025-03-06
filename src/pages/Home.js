import React from 'react';
import { Col, Row, Divider } from 'antd';
import Header2 from '../components/Header2';
import chatboxClasses from '../components/ChatBox/chatbox.module.css';
import styles from '../css/home.module.css';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header2 />
      <main className='main_section'>
        <Row justify='center' align="middle">
          <Col xxl={{ span: 18 }} xl={{ span: 20 }} md={{ span: 22 }} xs={{ span: 22 }}>
            <section className={styles.hero_section}>
              <div className={styles.hero_animation_container}>
                <h1>
                  <span>Find.<br /></span>
                  <span>Compare.<br /></span>
                  <span>Book.<br /></span>
                  <span>Share.<br /></span>
                  <span>Explore.<br /></span>
                  <span>Find.<br /></span>
                </h1>
              </div>
              <Col style={{ margin: '0 auto' }} xl={{ span: 18 }} md={{ span: 20 }} xs={{ span: 24 }}>
                <div className={chatboxClasses.input_container}>
                  <input
                    className={chatboxClasses.input}
                    placeholder="Ask anything here..."
                  />
                  <button type="button" className={`${chatboxClasses.sendBtn} ${chatboxClasses.active}`}>
                    <img src="/assets/images/send.svg" alt="send" />
                  </button>
                </div>
              </Col>
            </section>

            <section className={styles.about_section}>
              <Divider className='sub_title'>
                <h2 className='sub_title'>About us</h2>
              </Divider>

              <Row 
                justify='space-between' 
                align="middle" 
                gutter={{
                  xxl: 80,
                  xl: 40,
                }}
              >
                <Col xxl={{ span: 8 }} xl={{ span: 10 }} xs={{ span: 24 }} >
                  <img src='/assets/images/home_about.jpg' alt='About us' className={styles.about_image} />
                </Col>
                <Col xxl={{ span: 16 }} xl={{ span: 14 }} xs={{ span: 24 }}>
                  <h3>Your top choices of home services</h3>
                  <p>Customers use our platform to book services such as beauty treatments, haircuts, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting etc. These services are delivered in the comfort of their home and at a time of their choosing. We promise our customers a high quality, standardised and reliable service experience. To fulfill this promise, we work closely with our hand-picked service partners, enabling them with technology, training, products, tools, financing, insurance and brand, helping them succeed and deliver on this promise.</p>
                  <p>Our Vision: Deliver home services and solutions like never experienced before</p>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </main>
      <Footer />
    </>
  );
};

export default Home;
