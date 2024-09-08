import { useEffect, useState } from "react";

const LoadingBar = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timerId;
    setLoading(true);
    timerId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div
      className={`w-full p-1 bg-blue-500 transition-all duration-500 ${
        loading ? "visible delay-0 opacity-100" : "hidden delay-100 opacity-0"
      }`}
    />
  );
};

export default LoadingBar;
