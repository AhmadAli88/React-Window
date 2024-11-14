/*eslint-disable*/
import { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const data = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

const ResponsiveList = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  return (
    <List
      height={500}
      itemCount={data.length}
      itemSize={50}
      width={width}
    >
      {({ index, style }) => (
        <div style={style}>{data[index]}</div>
      )}
    </List>
  );
};

export default ResponsiveList;
