import { memo, useImperativeHandle } from "react";
import { useState, useEffect } from "react";
import "./index.scss";
import paner from "../../../assets/users/paner.png";
import Carousel from "react-bootstrap/Carousel";
import Slick from "slick-carousel";
import h1 from "../../../assets/users/1.png";
import h2 from "../../../assets/users/2.png";
import h3 from "../../../assets/users/3.png";
import img1 from "../../../assets/users/img1.png";
import { HOST } from "../../../constant/Constant";
import Product from "../../../component/item-product";
import { useParams, useSearchParams } from "react-router-dom";
const CarouselExample = () => {
  const imagesC = [h1, h2, h3];

  return (
    <Carousel className="carousel img">
      {imagesC.map((image, index) => (
        <Carousel.Item key={index} interval={4000} controls className="item">
          <Carousel.Caption className="caption">
            <img src={image} alt="Ưu đãi lớn" />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const ProductSlider = () => {
  const products = [
    {
      image: h1,
      title: "Sản phẩm 1",
      price: 1000000,
    },
    {
      image: h2,
      title: "Sản phẩm 2",
      price: 2000000,
    },
  ];
  console.log(products);

  return (
    <div>
      <Slick slidesToShow={3} slidesToScroll={1} arrows={true} dots={true}>
        {products.map((product, index) => (
          <div key={index} className="slide">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Giá: {product.price}</p>
          </div>
        ))}
      </Slick>
    </div>
  );
};

const HomePage = () => {
  const [product, setProduct] = useState(null);
  const [productFilter, setProductFilter] = useState(null);
  const [searchParam] = useSearchParams();

  const callAPI = () => {
    let url = HOST + "/product";

    fetch(url)
      .then((response) => response.json())
      .then((json) => setProduct(json.productList))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setProductFilter(product?.rows?.slice(0, 10));
  }, [product]);

  useEffect(() => callAPI(), []);

  useEffect(() => {
    const keyWord = searchParam.get("keyWord");
    if (keyWord) {
      setProductFilter(
        product?.rows?.filter((item) =>
          item.name.toLowerCase().includes(keyWord.toLowerCase())
        )
      );
    } else {
      setProductFilter(product?.rows?.slice(0, 10));
      console.log("key word null");
    }
  }, [searchParam]);

  return (
    <>
      <div className="bg">
        <div className="fix-bg ">
          <div className="r-rl container">
            <div className="  top2  ">
              <div className="r radius-bg">
                <div>
                  <CarouselExample />
                </div>
              </div>
              <div className="r radius-bg">
                <img src={img1} width={346} alt="hi"></img>
              </div>
            </div>
          </div>
        </div>
        {/* 3########################################*/}
        <div className="container">
          <div className="r-rl">
            <div className="radius-bg r-rl">
              <div className="r dis-flex" style={{ flexDirection: "column" }}>
                <div>
                  <h1>Các sản phẩm</h1>
                </div>

                <div className="product-container">
                  {productFilter
                    ? productFilter.map((item, index) => (
                        <div className="item-body ">
                          <Product item={item} key={index} />
                        </div>
                      ))
                    : "Loading"}
                </div>
                {productFilter && (
                  <button style={{ justifyContent: "center" }}>
                    xem thêm {product.count - productFilter.length}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="r-rl">
            <div className="radius-bg r-rl">
              <div className="r">
                <div>
                  <h1>Laptop văn phòng bán chạy</h1>
                </div>

                <div className=" dis-flex">
                  <div className="item-body ">helo</div>
                  <div className="item-body">helo</div>
                  <div className="item-body ">helo</div>
                  <div className="item-body">helo</div>
                  <div className="item-body ">helo</div>
                </div>
              </div>
            </div>
          </div>
          <div className="r-rl">
            <div className="radius-bg r-rl">
              <div className="r">
                <div>
                  <h1>Chuột bán chạy</h1>
                </div>

                <div className=" dis-flex">
                  <div className="item-body ">helo</div>
                  <div className="item-body">helo</div>
                  <div className="item-body ">helo</div>
                  <div className="item-body">helo</div>
                  <div className="item-body ">helo</div>
                </div>
              </div>
            </div>
          </div>
          <div className="r-rl">
            <div className="radius-bg r-rl"></div>
          </div>
        </div>
      </div>

      <div className="right1">
        <img src={paner} width={100}></img>
      </div>
      <div className="left1">
        <img src={paner} width={100}></img>
      </div>
    </>
  );
};

export default memo(HomePage);
