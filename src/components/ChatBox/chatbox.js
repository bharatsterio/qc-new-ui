import { useRef, useState, useEffect } from "react";
// import { TypeAnimation } from 'react-type-animation';
// import Scrollbar from "react-scrollbars-custom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules';

import chatboxClasses from "./chatbox.module.css";


function Chatbox() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "60px"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to new height
    }
  }, [text]);

  return (
    <section className={chatboxClasses.chatbox_container}>
      <div className={chatboxClasses.view_container}>
        <div style={{ overflowY: "auto", height: "100%" }}>
          <div className={chatboxClasses.inner_container}>
            <div className={chatboxClasses.userinput_container}>
              <div className={chatboxClasses.userinput}>
                Need assistance for your services
              </div>
            </div>

            <div className={chatboxClasses.qcoutput_container}>
              <div className={chatboxClasses.qcoutput}>
                Here are some presets which can help you;

                <div className={chatboxClasses.cardBoxSlider}>                
                  <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode, Mousewheel, Navigation]}
                    className="mySwiper"
                    mousewheel={{  
                      forceToAxis: true,
                    }}
                  >
                    <SwiperSlide className={chatboxClasses.SwiperSlide}>
                      <div className={chatboxClasses.card}>
                        <div className={chatboxClasses.imgBox}>
                          <img src="/assets/images/appliance-repair.png" width="60" alt="icon" />
                        </div>
                        <span>Appliances repair</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={chatboxClasses.SwiperSlide}>
                      <div className={chatboxClasses.card}>
                        <div className={chatboxClasses.imgBox}>
                          <img src="/assets/images/painting.png" width="60" alt="icon" />
                        </div>
                        <span>Painting</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={chatboxClasses.SwiperSlide}>
                      <div className={chatboxClasses.card}>
                        <div className={chatboxClasses.imgBox}>
                          <img src="/assets/images/cleaning.png" width="60" alt="icon" />
                        </div>
                        <span>Cleaning</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={chatboxClasses.SwiperSlide}>
                      <div className={chatboxClasses.card}>
                        <div className={chatboxClasses.imgBox}>
                          <img src="/assets/images/electrician.png" width="60" alt="icon" />
                        </div>
                        <span>Electrician</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={chatboxClasses.SwiperSlide}>
                      <div className={chatboxClasses.card}>
                        <div className={chatboxClasses.imgBox}>
                          <img src="/assets/images/pest-control.png" width="60" alt="icon" />
                        </div>
                        <span>Pest control</span>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            <div className={chatboxClasses.userinput_container}>
              <div className={chatboxClasses.userinput}>
                Appliance repair
              </div>
            </div>

            <div className={chatboxClasses.qcoutput_container}>
              <div className={chatboxClasses.qcoutput}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={chatboxClasses.ask_container}>
        <div className={chatboxClasses.inner_container}>
          <div className={chatboxClasses.input_container}>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="1"
              placeholder="Ask anything here..." 
            />
            <button type="button" className={`${chatboxClasses.sendBtn} ${text.trim() ? chatboxClasses.active : ""}`}>
              <img src="/assets/images/send.svg" alt="send" />
            </button>
          </div>
          <p>
            <a href="/" target="_blank">Privacy Policy</a> &#x2022;  <a href="/" target="_blank">Terms &amp; Conditions</a> &#x2022;  <a href="/" target="_blank">Cookie Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Chatbox;
