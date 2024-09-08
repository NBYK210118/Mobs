import AdComponent from './AdComponent';

const FeedAdComponent = ({
  ads,
  src,
  index,
  className,
  condition,
  isFirstTwoAds,
  topValue,
  position,
  widthHeight,
  setRemovedAds,
  setAds,
}) => {
  const removeAd = (adIndex, topValue, position) => {
    setRemovedAds((prevRemovedAds) => [...prevRemovedAds, { src: ads[adIndex], topValue, position, time: Date.now() }]);
    setAds((prevAds) => prevAds.filter((_, i) => i !== adIndex));
  };

  if (isFirstTwoAds) {
    return (
      <AdComponent
        src={src}
        widthHeight={widthHeight}
        className={`${className} ${
          isFirstTwoAds ? (condition ? '-translate-y-20 opacity-0' : 'translate-y-0 opacity-100') : ''
        }`}
        topValue={topValue}
        onClose={() => removeAd(index, topValue, position)}
      />
    );
  } else {
    return (
      <AdComponent
        src={src}
        widthHeight={widthHeight}
        className={`${className} ${condition ? 'translate-y-32 opacity-100' : '-translate-y-20 opacity-0'}`}
        topValue={topValue}
        onClose={() => removeAd(index, topValue, position)}
      />
    );
  }
};
export default FeedAdComponent;
