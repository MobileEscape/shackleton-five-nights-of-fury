import { useEffect, useState } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(
    window.sessionStorage.getItem("paused") == "true" ||
      window.sessionStorage.getItem("paused") == null
  );

  useEffect(() => {
    window.sessionStorage.setItem("paused", paused.toString());
    let sessionTime = Number(window.sessionStorage.getItem("timer"));
    if (sessionTime) setTime(sessionTime);
    if (!paused) {
      const interval = setInterval(() => {
        setTime((prev) => {
          window.sessionStorage.setItem("timer", (prev + 1).toString());
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [paused]);

  return { setPaused, paused, time, setTime };
};
