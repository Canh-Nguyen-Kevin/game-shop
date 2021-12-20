import { Carousel } from "antd";
import CSS from "csstype";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./slider.css";
import { SliderImages, BannerImages } from "../components/images";

const contentStyle: CSS.Properties = {
  width: "70%",
  height: "50vh",
  color: "#fff",
  fontSize: "1.5rem",
};
const renderBanner = () => {
  return BannerImages.map((item) => {
    return <img src={item.image} alt="image" key={item.id} />;
  });
};

const Slider = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={contentStyle}>
        <Carousel
          autoplay
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          {SliderImages &&
            SliderImages.map((item) => {
              return (
                <div key={item.id}>
                  <img
                    className="sliderImages"
                    src={item.image}
                    alt="image"
                    style={{ width: "100%", height: "50vh" }}
                  />
                </div>
              );
            })}
        </Carousel>
      </div>
      <div
        className="banner"
        style={{ width: "30%", display: "flex", flexDirection: "column" }}
      >
        {renderBanner()}
        {/* {BannerImages &&
          BannerImages.map((item) => {
            return (
              <img src={item.image} alt="image" style={{ width: "100%" }} />
            );
          })} */}
      </div>
    </div>
  );
};
export default Slider;
