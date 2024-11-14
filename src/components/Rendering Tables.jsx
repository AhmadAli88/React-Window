/*eslint-disable*/
import { VariableSizeList as List } from 'react-window';

const columnCount = 10;
const rowCount = 1000;
const getColumnWidth = index => 100;

const RenderTable = () => {
  const data = Array.from({ length: rowCount }, (_, rowIndex) =>
    Array.from({ length: columnCount }, (_, columnIndex) => `${rowIndex}-${columnIndex}`)
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <List
        height={500}
        itemCount={rowCount}
        itemSize={index => 50}
        width={1000}
      >
        {({ index, style }) => (
          <div style={style}>
            <div style={{ display: 'flex' }}>
              {data[index].map((cell, columnIndex) => (
                <div key={columnIndex} style={{ width: getColumnWidth(columnIndex), padding: '5px' }}>
                  {cell}
                </div>
              ))}
            </div>
          </div>
        )}
      </List>
    </div>
  );
};

export default RenderTable;
