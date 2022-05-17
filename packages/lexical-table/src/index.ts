import type {LexicalCommand} from 'lexical';
import {createCommand} from 'lexical';
import {
  $createTableCellNode,
  $isTableCellNode,
  TableCellHeaderStates,
  TableCellNode,
} from './LexicalTableCellNode';
import {
  $createTableNode,
  $getElementGridForTableNode,
  $isTableNode,
  TableNode,
} from './LexicalTableNode';
import {
  $createTableRowNode,
  $isTableRowNode,
  TableRowNode,
} from './LexicalTableRowNode';
import {TableSelection} from './LexicalTableSelection';
import {
  applyTableHandlers,
  getCellFromTarget,
  getTableSelectionFromTableElement,
} from './LexicalTableSelectionHelpers';
import {
  $createTableNodeWithDimensions,
  $deleteTableColumn,
  $getTableCellNodeFromLexicalNode,
  $getTableColumnIndexFromTableCellNode,
  $getTableNodeFromLexicalNodeOrThrow,
  $getTableRowIndexFromTableCellNode,
  $getTableRowNodeFromTableCellNodeOrThrow,
  $insertTableColumn,
  $insertTableRow,
  $removeTableRowAtIndex,
} from './LexicalTableUtils';
export {
  $createTableCellNode,
  $createTableNode,
  $createTableNodeWithDimensions,
  $createTableRowNode,
  $deleteTableColumn,
  $getElementGridForTableNode,
  $getTableCellNodeFromLexicalNode,
  $getTableColumnIndexFromTableCellNode,
  $getTableNodeFromLexicalNodeOrThrow,
  $getTableRowIndexFromTableCellNode,
  $getTableRowNodeFromTableCellNodeOrThrow,
  $insertTableColumn,
  $insertTableRow,
  $isTableCellNode,
  $isTableNode,
  $isTableRowNode,
  $removeTableRowAtIndex,
  applyTableHandlers,
  getCellFromTarget,
  getTableSelectionFromTableElement,
  TableCellHeaderStates,
  TableCellNode,
  TableNode,
  TableRowNode,
  TableSelection,
};
export const INSERT_TABLE_COMMAND: LexicalCommand<{
  columns: string;
  rows: string;
}> = createCommand();
