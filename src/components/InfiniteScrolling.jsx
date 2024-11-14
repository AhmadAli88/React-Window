import { useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

const InfiniteScroll = () => {
  const [items, setItems] = useState(data);
  const loadMoreItems = () => {
    setItems((prevItems) => [...prevItems, ...data]);
  };

  return (
    <List
      height={500}
      itemCount={items.length}
      itemSize={50}
      onScroll={({ scrollOffset, scrollUpdateWasRequested }) => {
        if (!scrollUpdateWasRequested && scrollOffset + 500 >= items.length * 50) {
          loadMoreItems();
        }
      }}
      width={300}
    >
      {({ index, style }) => <div style={style}>{items[index]}</div>}
    </List>
  );
};

export default InfiniteScroll;
