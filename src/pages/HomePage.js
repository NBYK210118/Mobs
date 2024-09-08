import React, { useCallback, useEffect, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import FeedDisplay from "../components/layout/FeedDisplay";
import FeedDisplayItem from "../components/specificFeature/displayItem/FeedDisplayItem";
import { feed_item } from "../sample_data/sample_data";
import ScrollMoveButton from "../components/common/scrollMoveTop";
import { Images } from "../components/common/icons";
import FeedAdComponent from "../components/specificFeature/ads/feedAdComponent";

const HomePage = () => {
  const [animateValue, setAnimatedValue] = useState(0);
  const [ads, setAds] = useState([
    { src: Images.juice1, position: "left", topValue: 40 },
    { src: Images.juice2, position: "right", topValue: 40 },
  ]);
  const [removedAds, setRemovedAds] = useState([]);
  const adImages = [Images.juice1, Images.juice2];
  const scrollbarRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setRemovedAds((prevRemovedAds) => {
        const now = Date.now();
        const newAds = prevRemovedAds.filter((ad) => now - ad.time >= 15000);
        if (newAds.length > 0) {
          setAds((prevAds) => [
            ...prevAds,
            ...newAds.map((ad) => ({
              src: ad.src,
              topValue: ad.topValue,
              position: ad.position,
            })),
          ]);
          return prevRemovedAds.filter((ad) => now - ad.time < 15000);
        }
        return prevRemovedAds;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = useCallback((values) => {
    setAnimatedValue(values.scrollTop);
  }, []);

  const moveScrollTop = () => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollTop(0);
    }
  };

  const renderFeedItemsWithAds = () => {
    const feed_ads = [...Array(20).fill(feed_item)];
    const adFrequency = 4;
    const feedItemHeight = 1122;
    const feedItems = [];
    let adCount = 0;

    for (let i = 0; i < feed_ads.length; i++) {
      feedItems.push(<FeedDisplayItem key={`item-${i}`} item={feed_ads[i]} />);

      if ((i + 1) % adFrequency === 0) {
        const adIndex = Math.floor(adCount / 2) % adImages.length;
        const isFirstTwoAds = adCount < 2;
        const topValue = isFirstTwoAds
          ? 40
          : Math.floor(adCount / 2) * feedItemHeight * adFrequency + 250;

        const adCondition = isFirstTwoAds
          ? animateValue > 250
          : animateValue > topValue - 500 && animateValue < topValue + 400;
        const leftAdExists = !removedAds.some(
          (ad) => ad.topValue === topValue && ad.position === "left"
        );
        const rightAdExists = !removedAds.some(
          (ad) => ad.topValue === topValue && ad.position === "right"
        );

        if (leftAdExists) {
          feedItems.push(
            <React.Fragment key={`ad-left-${adCount}`}>
              <FeedAdComponent
                ads={ads}
                src={adImages[adIndex]}
                index={adIndex}
                className={"feed-ad-left"}
                condition={adCondition}
                isFirstTwoAds={isFirstTwoAds}
                widthHeight={
                  "w-[100px] h-[250px] xl:w-[140px] xl:h-[350px] 2xl:w-[200px] 2xl:h-[500px]"
                }
                topValue={topValue}
                position={"left"}
                setRemovedAds={setRemovedAds}
                setAds={setAds}
              />
            </React.Fragment>
          );
        }
        if (rightAdExists) {
          feedItems.push(
            <React.Fragment key={`ad-right-${adCount}`}>
              <FeedAdComponent
                ads={ads}
                src={adImages[adIndex]}
                className={"feed-ad-right"}
                condition={adCondition}
                isFirstTwoAds={isFirstTwoAds}
                widthHeight={
                  "w-[100px] h-[250px] xl:w-[140px] xl:h-[350px] 2xl:w-[200px] 2xl:h-[500px]"
                }
                topValue={topValue}
                position={"right"}
                setRemovedAds={setRemovedAds}
                setAds={setAds}
              />
            </React.Fragment>
          );
        }

        adCount += 1;
      }
    }

    return feedItems;
  };

  return (
    <div className="relative w-full">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        thumbSize={90}
        universal={true}
        ref={scrollbarRef}
        onScrollFrame={handleScroll}
      >
        {/* <AutoSlide images={[Images.juice1, Images.juice2, Images.juice1, Images.juice2]} intervalTime={3000} /> */}

        <FeedDisplay>{renderFeedItemsWithAds()}</FeedDisplay>
      </Scrollbars>

      <ScrollMoveButton
        value={animateValue}
        onClick={moveScrollTop}
        className={
          "p-4 absolute right-7 bottom-6 text-center cursor-pointer rounded-full bg-white"
        }
        iconClassName={"md:text-4xl text-blue-500"}
      />
    </div>
  );
};

export default HomePage;
