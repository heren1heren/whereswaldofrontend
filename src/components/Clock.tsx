import { FC, useEffect, useState } from 'react';
export type ClockProps = {
  isStop: boolean;
};

export const Clock: FC<ClockProps> = ({ isStop }) => {
  // trigger count up from back end and at the same time run this Clock

  const [miliSeconds, setMiliSeconds] = useState(0);

  useEffect(() => {
    if (isStop === true) {
      return;
    }
    const key = setInterval(() => {
      setMiliSeconds((miliSeconds) => miliSeconds + 1);
    }, 1000 / 60);

    return () => {
      clearInterval(key);
    };
  }, [isStop]);

  return (
    <div className=" fs-3">
      {' '}
      {Math.round((miliSeconds / 3600) % 60)}:
      {Math.round((miliSeconds / 60) % 60)}:{miliSeconds % 60}
    </div>
  );
};
