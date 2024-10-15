import { useEffect, useRef } from "react";

export const useAnimationFrame = (callback: Function, running: boolean) => {
  const savedCallback = useRef(callback);
  const requestId = useRef(0);

  const tick = () => {
    savedCallback.current();
    if (running) {
      requestId.current = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(requestId.current);
    }
  };

  useEffect(() => {
    if (running) {
      requestId.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(requestId.current);
    }
  }, [running]);
};
