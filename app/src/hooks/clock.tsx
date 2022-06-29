import React, {createContext, useEffect, useState} from "react";

const ClockContext = createContext<{now: Date}>({
  now: new Date(),
});

export const ClockProvider = ({children}: {children: React.ReactNode}) => {
  const [now, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <ClockContext.Provider value={{now}}>{children}</ClockContext.Provider>;
}

export const useClock = () => React.useContext(ClockContext);
