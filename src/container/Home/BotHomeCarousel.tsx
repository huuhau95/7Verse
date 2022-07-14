import React, { useState } from "react";
import styled from "@emotion/styled";

import { SafeAny } from "../../core/models/common";
import Carousel from "antd/lib/carousel";

const BotHomeCarousel = ({}) => {
  return (
    <BotHomeCarouselWrap>
      <CarouselContent>
        {/* atoplay */}
        <Carousel dotPosition={`bottom`}>
          <CarouselContentItem>
            <CarouselContentItemWrap>
              <CarouselContentItemImg>
                <img src="/images/common/main-messi.png" />
              </CarouselContentItemImg>
              <CarouselContentItemDes>
                <h2>Lionel messi’s NFT Card bundles</h2>
                <p>
                  The Hall Of Fame are the first players a Manager sees when
                  they see your profile. The Hall of Fame is kept for true club
                  legends. Players that wear the badge with pride and have
                  inspired your teams to 7Verse victories.
                </p>
                <CarouselContentItemBtn>
                  <img src="/images/common/count-down.png" />
                </CarouselContentItemBtn>
                <CarouselContentItemData>
                  <DataItem>
                    <p>
                      2 <span>Days</span> 12 <span>Hours</span> 30{" "}
                      <span>Minutes</span> 54 <span>Seconds</span>
                    </p>
                  </DataItem>
                </CarouselContentItemData>
                <CarouselContentItemBid>
                  <img
                    style={{ marginRight: "25px" }}
                    src="/images/common/btn-place-bid.png"
                  />
                  <img src="/images/common/ico-bid.svg" />
                </CarouselContentItemBid>
              </CarouselContentItemDes>
            </CarouselContentItemWrap>
          </CarouselContentItem>

          <CarouselContentItem>
            <CarouselContentItemWrap>
              <CarouselContentItemImg>
                <img src="/images/common/main-messi.png" />
              </CarouselContentItemImg>
              <CarouselContentItemDes>
                <h2>Lionel messi’s NFT Card bundles</h2>
                <p>
                  The Hall Of Fame are the first players a Manager sees when
                  they see your profile. The Hall of Fame is kept for true club
                  legends. Players that wear the badge with pride and have
                  inspired your teams to 7Verse victories.
                </p>
                <CarouselContentItemBtn>
                  <img src="/images/common/count-down.png" />
                </CarouselContentItemBtn>
                <CarouselContentItemData>
                  <DataItem>
                    <p>
                      2 <span>Days</span> 12 <span>Hours</span> 30{" "}
                      <span>Minutes</span> 54 <span>Seconds</span>
                    </p>
                  </DataItem>
                </CarouselContentItemData>
                <CarouselContentItemBid>
                  <img
                    style={{ marginRight: "25px" }}
                    src="/images/common/btn-place-bid.png"
                  />
                  <img src="/images/common/ico-bid.svg" />
                </CarouselContentItemBid>
              </CarouselContentItemDes>
            </CarouselContentItemWrap>
          </CarouselContentItem>
        </Carousel>
      </CarouselContent>
    </BotHomeCarouselWrap>
  );
};

export default React.memo(BotHomeCarousel);

const BotHomeCarouselWrap = styled.div`
  border-top: 1px solid #c149f738;
  padding-top: 20px;
  margin: 80px 0;
  .slick-dots-bottom {
    li {
      width: 10px !important;
      height: 10px !important;
      margin: 2px 15px !important;

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
  height: 500px;
`;

const CarouselContentItemWrap = styled.div`
  display: flex;
  height: 100%;
`;

const CarouselContentItemImg = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  background: url(/images/common/bg-main-messi.png) no-repeat;
  background-size: cover;
  background-position: center;
  img {
    width: auto;
    max-height: 100%;
  }
`;

const CarouselContentItemDes = styled.div`
  width: 60%;
  padding: 100px 0 100px 20px;
  h2 {
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 48px;
    text-transform: uppercase;
    opacity: 0.8;
    color: ${(props: SafeAny) => props.theme.colors.white};
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    opacity: 0.6;
    color: ${(props: SafeAny) => props.theme.colors.white};
  }
`;

const CarouselContentItemBtn = styled.div`
  margin: 25px 0;
  font-size: 39.3333px;
  line-height: 59px;
  text-transform: uppercase;
  opacity: 0.8;
`;

const CarouselContentItemData = styled.div`
  display: flex;
`;

const DataItem = styled.div`
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    text-transform: uppercase;
    color: #d9d9d9;
    opacity: 0.5;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      color: #d9d9d9;
      margin-right: 25px;
      opacity: 0.2;
    }
  }
`;

const CarouselContentItemBid = styled.div`
  display: flex;
  img {
    cursor: pointer;
  }
`;
