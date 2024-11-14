import { FixedSizeList as List } from 'react-window';

const data = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

const HorizontalList = () => {
  return (
    <List
      height={100}  // Height of the visible area
      itemCount={data.length}  // Total number of items
      itemSize={100}  // Width of each item
      layout="horizontal"  // Horizontal layout
      width={500}  // Width of the list
    >
      {({ index, style }) => (
        <div style={style}>{data[index]}</div>
      )}
    </List>
  );
};

export default HorizontalList;
