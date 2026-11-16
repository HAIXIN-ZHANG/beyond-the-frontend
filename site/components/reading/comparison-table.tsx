import type { ReactNode } from 'react';
import { comparison } from '../../styled-system/recipes/comparison.js';

type ComparisonTableProps = {
  caption: string; columns: readonly { id: string; title: string }[];
  rows: readonly { id: string; cells: readonly ReactNode[] }[];
};

export function ComparisonTable({ caption, columns, rows }: ComparisonTableProps) {
  const c = comparison();
  return <div className={c.region} tabIndex={0} role="region" aria-label={caption}>
    <table className={c.table}>
      <caption className={c.caption}>{caption}</caption>
      <thead><tr>{columns.map(column => <th key={column.id} className={c.header} scope="col">{column.title}</th>)}</tr></thead>
      <tbody>{rows.map(row => <tr key={row.id}>{row.cells.map((cell, index) => <td key={columns[index]?.id ?? index} className={c.cell}>{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}
