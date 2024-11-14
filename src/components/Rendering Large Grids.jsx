/*eslint-disable*/
import { VariableSizeGrid as Grid } from 'react-window';

const numColumns = 5;
const numRows = 1000;
const data = Array.from({ length: numRows }, (_, rowIndex) =>
  Array.from({ length: numColumns }, (_, columnIndex) => `Item ${rowIndex}-${columnIndex}`)
);

const GridLayout = () => {
  // Function to get the column width for each column
  const getColumnWidth = (index) => 100;  // Fixed column width

  // Function to get the row height for each row
  const getRowHeight = (index) => 35;  

  return (
    <Grid
      columnCount={numColumns}
      columnWidth={getColumnWidth}  // Function for column width
      height={500}
      rowCount={numRows}
      rowHeight={getRowHeight}  // Function for row height
      width={500}
    >
      {({ columnIndex, rowIndex, style }) => (
        <div style={style}>{data[rowIndex][columnIndex]}</div>
      )}
    </Grid>
  );
};

export default GridLayout;
