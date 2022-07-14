import React, { useState } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";

import { SafeAny } from "../../core/models/common";

const LiveAuctionSlider = ({}) => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: (
      <NextSlideArrow>
        <img src="/images/common/icon-right-border.svg" />
      </NextSlideArrow>
    ),
    prevArrow: (
      <PreviousSlideArrow>
        <img src="/images/common/icon-left-border.svg" />
      </PreviousSlideArrow>
    ),
  };

  return (
    <LiveAuctionSliderWrap>
      <h4>Live Auction</h4>
      <Slider {...settings}>
        <LiveAuctionItem>
          <LiveAuctionItemWrap className="slick-wrapper">
            <img src="/images/common/haaland.png" />
            <ItemInfo>
              <CurrentBid>
                <span>Current Bid</span>
                <p>0.34 BNB</p>
              </CurrentBid>
              <DateTime>
                <span>Ends In</span>
                <p>12:35:40</p>
              </DateTime>
            </ItemInfo>
            <button>Bid Now</button>
          </LiveAuctionItemWrap>
        </LiveAuctionItem>
        <LiveAuctionItem>
          <LiveAuctionItemWrap className="slick-wrapper">
            <img src="/images/common/griezmann.png" />
            <ItemInfo>
              <CurrentBid>
                <span>Current Bid</span>
                <p>0.34 BNB</p>
              </CurrentBid>
              <DateTime>
                <span>Ends In</span>
                <p>12:35:40</p>
              </DateTime>
            </ItemInfo>
            <button>Bid Now</button>
          </LiveAuctionItemWrap>
        </LiveAuctionItem>
        <LiveAuctionItem className="slick-wrapper">
          <LiveAuctionItemWrap>
            <img src="/images/common/griezmann.png" />
            <ItemInfo>
              <CurrentBid>
                <span>Current Bid</span>
                <p>0.34 BNB</p>
              </CurrentBid>
              <DateTime>
                <span>Ends In</span>
                <p>12:35:40</p>
              </DateTime>
            </ItemInfo>
            <button>Bid Now</button>
          </LiveAuctionItemWrap>
        </LiveAuctionItem>
        <LiveAuctionItem className="slick-wrapper">
          <LiveAuctionItemWrap>
            <img src="/images/common/griezmann.png" />
            <ItemInfo>
              <CurrentBid>
                <span>Current Bid</span>
                <p>0.34 BNB</p>
              </CurrentBid>
              <DateTime>
                <span>Ends In</span>
                <p>12:35:40</p>
              </DateTime>
            </ItemInfo>
            <button>Bid Now</button>
          </LiveAuctionItemWrap>
        </LiveAuctionItem>
      </Slider>
    </LiveAuctionSliderWrap>
  );
};

export default React.memo(LiveAuctionSlider);

const LiveAuctionSliderWrap = styled.div`
  margin-bottom: 50px;
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
  }

  .slick-arrow {
    width: 50px !important;
    &:before {
      display: none;
    }
  }
`;

const LiveAuctionItem = styled.div`
  display: flex !important;
  justify-content: center;
`;

const LiveAuctionItemWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 245px;
  img {
    width: 245px;
    height: 350px;
  }

  button {
    background: rgba(217, 217, 217, 0.21);
    color: #ffffff;
    backdrop-filter: blur(9px);
    border-radius: 15px;
    flex: none;
    order: 1;
    flex-grow: 0;
    outline: none;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    height: 35px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  padding: 10px 20px;
`;

const CurrentBid = styled.div`
  flex-grow: 1;
  span {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
    opacity: 0.5;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 13.4592px;
    line-height: 20px;
    color: #ffffff;
    margin: 0;
  }
`;

const DateTime = styled(CurrentBid)`
  flex: none;
`;

const NextSlideArrow = styled.div``;

const PreviousSlideArrow = styled.div``;
