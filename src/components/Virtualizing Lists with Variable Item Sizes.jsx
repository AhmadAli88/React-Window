import { VariableSizeList as List } from 'react-window';

const data = Array.from({ length: 1000 }, (_, index) => ({
  content: `Item ${index + 1}`,
  height: Math.floor(Math.random() * 100) + 30, // Random height for each item
}));

const VitrualLists = () => {
  const getItemSize = (index) => data[index].height;

  return (
    <List
      height={500}
      itemCount={data.length}
      itemSize={getItemSize}
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>
          {data[index].content}
        </div>
      )}
    </List>
  );
};

export default VitrualLists;
