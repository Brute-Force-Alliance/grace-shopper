import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fb%2F5%2Fe%2F6068.jpg&f=1&nofb=1"
          alt=""
        />
        <div className="home_row">
          <Product
            title="Sony X800H 75-inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
            price={1648.0}
            image="https://m.media-amazon.com/images/I/7198DOeKMBL._AC_SL1077_.jpg"
            rating={5}
          />
          <Product
            title="Where the Red Fern Grows"
            price={12.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GsRYzXFPM-haqsdx_VEl8wAAAA%26pid%3DApi&f=1"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="CyberpowerPC Gamer Master Gaming PC, AMD Ryzen 9 3900X 3.8GHz, AMD Radeon RX 5700 XT 8GB, 16GB DDR4, 1TB PCI-E NVMe SSD, WiFi Ready & Win 10 Home (GMA1398A, Black)"
            price={1799.0}
            image="https://m.media-amazon.com/images/I/71CiQtX1oTL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            title="Lenovo Legion 5 15 Gaming Laptop, 15.6 FHD (1920 x 1080) Display, AMD Ryzen 7 5800H Processor, 16GB DDR4 RAM, 512GB NVMe SSD, NVIDIA GeForce RTX 3050Ti, Windows 10H, 82JW0012US, Phantom Blue"
            price={1049.99}
            image="https://m.media-amazon.com/images/I/71fzx0pGY5L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            title="Where the Red Fern Grows"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GsRYzXFPM-haqsdx_VEl8wAAAA%26pid%3DApi&f=1"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            title="Where the Red Fern Grows"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GsRYzXFPM-haqsdx_VEl8wAAAA%26pid%3DApi&f=1"
            rating={4}
          />
          <Product
            title="Where the Red Fern Grows"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GsRYzXFPM-haqsdx_VEl8wAAAA%26pid%3DApi&f=1"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
