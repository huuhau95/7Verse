import React, { useState } from "react";
import styled from "@emotion/styled";

import { SafeAny } from "../../core/models/common";
import Carousel from "antd/lib/carousel";

const TopHomeCarousel = ({}) => {
  return (
    <TopHomeCarouselWrap>
      <CarouselContent>
        {/* atoplay */}
        <Carousel dotPosition={`right`}>
          <CarouselContentItem>
            <CarouselContentItemWrap>
              <CarouselContentItemImg>
                <img src="/images/common/main-ronaldo.png" />
                <ImgWc>
                  <img src="/images/common/world-cup.png" />
                </ImgWc>
              </CarouselContentItemImg>
              <CarouselContentItemDes>
                <h2>
                  Let's collect your first cards &amp; live the game with
                  passion
                </h2>
                <CarouselContentItemBtn>
                  <img src="/images/common/explore-btn.svg" />
                </CarouselContentItemBtn>

                <CarouselContentItemData>
                  <DataItem>
                    <h4>700+</h4>
                    <p>Player's NFT</p>
                  </DataItem>

                  <DataItem>
                    <h4>160K+</h4>
                    <p>Auction</p>
                  </DataItem>

                  <DataItem>
                    <h4>12K+</h4>
                    <p>Licensed Players</p>
                  </DataItem>
                </CarouselContentItemData>
              </CarouselContentItemDes>
            </CarouselContentItemWrap>
          </CarouselContentItem>

          <CarouselContentItem>
            <CarouselContentItemWrap>
              <CarouselContentItemImg>
                <img src="/images/common/main-ronaldo.png" />
                <ImgWc>
                  <img src="/images/common/world-cup.png" />
                </ImgWc>
              </CarouselContentItemImg>
              <CarouselContentItemDes>
                <h2>
                  Let's collect your first cards &amp; live the game with
                  passion
                </h2>
                <CarouselContentItemBtn>
                  <img src="/images/common/explore-btn.svg" />
                </CarouselContentItemBtn>

                <CarouselContentItemData>
                  <DataItem>
                    <h4>700+</h4>
                    <p>Player's NFT</p>
                  </DataItem>

                  <DataItem>
                    <h4>160K+</h4>
                    <p>Auction</p>
                  </DataItem>

                  <DataItem>
                    <h4>12K+</h4>
                    <p>Licensed Players</p>
                  </DataItem>
                </CarouselContentItemData>
              </CarouselContentItemDes>
            </CarouselContentItemWrap>
          </CarouselContentItem>
        </Carousel>
      </CarouselContent>
    </TopHomeCarouselWrap>
  );
};

export default React.memo(TopHomeCarousel);

const TopHomeCarouselWrap = styled.div`
  .slick-dots-right {
    li {
      width: 10px !important;
      height: 10px !important;
      margin: 15px 2px !important;

      button {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50%;
      }
    }
    .slick-active {
      width: 10px !important;
      height: 10px !important;

      button {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50%;
        background: #f94a4a !important;
      }
    }
  }
`;

const CarouselContent = styled.div``;

const CarouselContentItem = styled.div`
  height: 600px;
`;

const CarouselContentItemWrap = styled.div`
  display: flex;
  height: 100%;
`;

const CarouselContentItemImg = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    max-height: 100%;
  }
`;

const ImgWc = styled.div`
  position: absolute;
  bottom: 20px;
  img {
    width: 300px;
  }
`;

const CarouselContentItemDes = styled.div`
  width: 50%;
  padding: 100px 0 100px 20px;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 65px;
    color: ${(props: SafeAny) => props.theme.colors.white};
  }
`;

const CarouselContentItemBtn = styled.div`
  margin: 30px 0;
`;

const CarouselContentItemData = styled.div`
  display: flex;
`;

const DataItem = styled.div`
  margin-left: 30px;

  &:first-child {
    margin-left: none;
  }

  h4 {
    opacity: 0.7;
    font-size: 45px;
    font-family: "Alegreya Sans";
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    background: linear-gradient(180deg, #be1313 57.6%, rgba(0, 0, 0, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: ${(props: SafeAny) => props.theme.colors.white};
    opacity: 0.7;
  }
`;
