import { useEffect, useState } from 'react';

type Dimensions = {
  width: number;
  height: number;
};

const getDimensions = () => ({
  width: window.screen.width,
  height: window.screen.height,
});

export const useWindowDimensions = (): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>(getDimensions());

  useEffect(() => {
    const resizeHandler = (): void => {
      setDimensions(getDimensions());
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return dimensions;
};
