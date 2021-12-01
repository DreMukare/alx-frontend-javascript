import { RowID, RowElement } from './interface.ts';

export type insertRow = (row: RowElement) => number;

export type deleteRow = (rowId: RowID) => void;

export type updateRow = (rowId: RowID, row: RowElement) => RowID;
