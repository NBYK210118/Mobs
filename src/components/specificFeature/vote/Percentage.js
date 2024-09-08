const Percentage = ({ percentA = 30, percentB = 70, layout }) => {
  return (
    <div className={`relative ${layout === 'album' ? 'w-full' : 'w-64'} flex bg-gray-700 rounded-full h-6`}>
      <div
        className={`${Number(percentA) === 0 ? 'bg-gray-700 absolute left-0 bottom-0' : 'bg-green-500'} h-6 ${
          percentA > 99.9 ? 'rounded-full' : 'rounded-l-full'
        } transition-all duration-500`}
        style={{ width: `${percentA}%` }}
      >
        <span className="p-2 text-[0.6rem] sm:text-[0.75rem] md:text-xs">{percentA}%</span>
      </div>

      <div
        className={`${Number(percentB) === 0 ? 'bg-gray-700 absolute right-8 bottom-0' : 'bg-blue-500'}  h-6 ${
          percentB > 99.9 ? 'rounded-full' : 'rounded-r-full'
        } transition-all duration-500`}
        style={{ width: `${percentB}%` }}
      >
        <span className="p-2 text-[0.6rem] sm:text-[0.75rem] md:text-xs">{percentB}%</span>
      </div>
    </div>
  );
};

export default Percentage;
