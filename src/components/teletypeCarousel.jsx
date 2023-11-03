import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useState } from "react";
import tree from "./../images/tree.jpg";
import "swiper/css";
import "swiper/css/navigation";
function TeletypeCarousel() {
  const [teletype, setTeletype] = useState("teletype_block");
  const [swiper, setSwiper] = useState(null);
  const [slides, setSlides] = useState(null);
  const [swiper_mount, setSwiperMount] = useState(null);
  const tg = window.Telegram.WebApp;
  useEffect(() => {
    fetch("https://pop.applepodsblack.ru/api/stories?populate=deep")
      .then((response) => response.json())
      .then(function (commits) {
        let data = commits.data;
        let buffer = [];
        for (let elem of data) {
          buffer.push(
            <SwiperSlide>
              <div
                className={
                  window.innerWidth < 420
                    ? "teletype_block_small"
                    : "teletype_block"
                }
                onClick={() => {
                  tg.openLink(`${elem.attributes.link}`, {
                    try_instant_view: true,
                  });
                }}
              >
                <img
                  src={
                    elem.attributes.photo.data != null
                      ? "https://pop.applepodsblack.ru/" +
                        elem.attributes.photo.data.attributes.url
                      : tree
                  }
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    objectFit: "cover",
                    width: "inherit",
                    height: "inherit",
                    zIndex: "-1",
                    borderRadius: "16px",
                  }}
                ></img>
                <div>
                  <p>{elem.attributes.name}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        }

        setSlides(buffer);
      });
  }, []);

  return (
    <div id="teletype_carousel_div">
      <div></div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        height={255}
        onSwiper={(s) => {
          setSwiper(s);
          setSwiperMount(true);
          console.log(s);
        }}
        allowTouchMove={false}
      >
        {slides}
      </Swiper>
    </div>
  );
}
export default TeletypeCarousel;
