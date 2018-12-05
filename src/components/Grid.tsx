import styled from 'styled-components';

import { GRID_PADDING } from '../constants';

const COLUMN_COUNT = 12;
const COLUMN_SPANS = new Array(COLUMN_COUNT + 1)
  .fill(0)
  .map((_, i) => `${((i / COLUMN_COUNT) * 100).toFixed(5)}%`);

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 -${GRID_PADDING}px ${GRID_PADDING}px 0;
`;

interface IColumnProps {
  width?: number;
  right?: boolean;
  offset?: number;
}

export const Column = styled.div<IColumnProps>`
  flex-shrink: 1;
  flex-grow: ${props => (props.width ? 0 : 1)};
  flex-basis: calc(
    ${props => (props.width ? COLUMN_SPANS[props.width] : `${GRID_PADDING}px`)} -
      ${GRID_PADDING}px
  );
  margin-right: ${GRID_PADDING}px;
  margin-left: ${props =>
    props.right ? 'auto' : props.offset ? COLUMN_SPANS[props.offset] : 0};
  // enable item shrinking when resizing parent container
  // (such as when toggling the sidebar)
  min-width: 0;
`;
