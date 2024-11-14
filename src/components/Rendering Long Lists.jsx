import { FixedSizeList as List } from 'react-window';

const data = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

const RenderLongList = () => {
  return (
    <List
      height={500}  // Height of the visible area
      itemCount={data.length}  // Total number of items
      itemSize={35}  // Height of each item
      width={300}  // Width of the list
    >
      {({ index, style }) => (
        <div style={style}>{data[index]}</div>
      )}
    </List>
  );
};

export default RenderLongList;
