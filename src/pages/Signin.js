import React, { useState } from 'react';
import { ConfigProvider, Row, Col, Checkbox, Form, Input, Flex, Button, Divider } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import styles from '../css/login.module.css';

export default function Signin() {
  const [activeTab, setActiveTab] = useState('customer');

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Header2 />
      <main className='main_section'>
        <Row justify='center' align="middle">
          <Col xxl={{ span: 18 }} xl={{ span: 20 }} md={{ span: 22 }} xs={{ span: 22 }}>
            <div className={styles.login_container}>
              <div className={styles.title}>
                <h2>Welcome back!</h2>
                <p>It’s wonderful to have you back with us.</p>
              </div>
              <div className={styles.tab_container}>
                <button 
                  type='button' 
                  className={activeTab === 'customer' ? styles.active : ''} 
                  onClick={() => setActiveTab('customer')}
                >
                  Customer login
                </button>
                <button 
                  type='button' 
                  className={activeTab === 'provider' ? styles.active : ''} 
                  onClick={() => setActiveTab('provider')}
                >
                  Service provider login
                </button>
              </div>
              <div className={styles.tabview_container}>
                {activeTab === 'customer' ?
                  <>
                    <Form
                      name="login"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                    >
                      <ConfigProvider
                        theme={{
                          components: {
                            Input: {
                              colorPrimary: '#000',
                              algorithm: true,
                              activeShadow: 'noStyle',
                              colorBorder: '#9d9d9d',
                              controlHeight: '40'
                            }
                          },
                        }}
                      >
                        <Form.Item
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                          style={{
                            marginBottom: '20px'
                          }}
                        >
                          <Input prefix={<UserOutlined />} placeholder="Email" size='large' />
                        </Form.Item>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                          style={{
                            marginBottom: '0'
                          }}
                        >
                          <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" size='large' />
                        </Form.Item>
                      </ConfigProvider>
                      <Form.Item style={{ marginBottom: '16px' }}>
                        <Flex justify="space-between" align="center">
                          <ConfigProvider
                            theme={{
                              components: {
                                Checkbox: {
                                  colorPrimary: '#000',
                                  algorithm: true,
                                  activeShadow: 'noStyle',
                                  colorBorder: '#9d9d9d',
                                }
                              },
                            }}
                          >
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                              <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                          </ConfigProvider>
                          <a href="/">Forgot password</a>
                        </Flex>
                      </Form.Item>
                      
                      <ConfigProvider
                        theme={{
                          components: {
                            Button: {
                              algorithm: true,
                              controlHeight: '50px',
                              fontSize: '18px',
                              fontWeight: '500',
                              defaultBorderColor: '#000',
                              defaultActiveBorderColor: '#000',       
                              defaultActiveBg: '#000',
                              defaultActiveColor: '#fff',                              
                              defaultHoverBorderColor: '#000',       
                              defaultHoverBg: '#fff',
                              defaultHoverColor: '#000',
                            }
                          },
                        }}
                      >
                        <Form.Item>
                          <Button block type="default" htmlType="submit">
                            Login
                          </Button>
                        </Form.Item>
                      </ConfigProvider>
                    </Form>
                    <Divider style={{ borderColor: '#7cb305', margin: '24px 0', color: '#9d9d9d' }}>OR</Divider>
                    <div className={styles.social_container}>
                      <div className={styles.btnBox}>
                        <button type='button'>
                          <img src='/assets/images/google.png' alt='Google'/>
                        </button>
                        <button type='button'>
                          <img src='/assets/images/facebook.png' alt='Facebook'/>
                        </button>
                        <button type='button'>
                          <img src='/assets/images/twitter_x.png' alt='Twitter X'/>
                        </button>
                      </div>
                    </div>

                    <Flex justify="center" className={styles.signUp}>
                      Don't have an account?&nbsp;<a href="/">Sign up</a>
                    </Flex>
                  </>
                  :
                  <>
                    Service provider login
                  </>
                }
              </div>
            </div>
          </Col>
        </Row>
      </main>
      <Footer />
    </>
  );
}
