import { em } from 'csx';
import { h, VNode } from 'futura-dom';
import { classes, style } from 'typestyle';

import * as color from 'app/lib/view/color';

export const view = (options: Options): VNode =>
  options.rows.length > 0
    ? table(options.columns, options.rows)
    : empty(options.onEmpty);

const empty = (content: VNode) =>
  h(`div`, [ content ]);

const table = (columns: ReadonlyArray<Column>, rows: ReadonlyArray<Row>) =>
  h(`div.${styles.container}`,
    h(`table.${styles.table}`, [
      h(`thead`, [ header(columns) ]),
      h(`tbody`, rows.map(row(columns)))
    ])
  );

const header = (columns: ReadonlyArray<Column>) =>
  h(`tr.${styles.header}`, columns.map(headerTitle));

const headerTitle = (column: Column) =>
  h('th', {
    attrs: {
      class: classes(styles.headerTitle, styles.align(column.align))
    }
  }, [ column.label ]);

const row = (columns: ReadonlyArray<Column>) => (r: Row) =>
  h(`tr.${styles.row}`, { key: r.id }, r.fields.map((value, index) =>
    rowField(columns[index], value)));

const rowField = (column: Column, value: VNode | string) =>
  h('td', {
    attrs: {
      class: classes(styles.rowField, styles.align(column.align))
    }
  }, [ value ]);

// Types

interface Options {
  columns: ReadonlyArray<Column>;
  rows: ReadonlyArray<Row>;
  onEmpty: VNode | string;
}

interface Column {
  label: string;
  align?: Alignment;
}

type Alignment = 'left' | 'center' | 'right';

interface Row {
  id: string;
  fields: ReadonlyArray<VNode | string>;
}

// Styles

namespace styles {
  export const container = style({
    overflowX: 'auto'
  });

  export const table = style({
    borderCollapse: 'collapse',
    width: '100%'
  });

  export const header = style({
    borderBottom: `${em(1 / 16)} solid ${color.metallicSeaweed.fade(0.1)}`
  });

  export const headerTitle = style({
    $nest: {
      '& + &': {
        paddingLeft: em(1)
      },
      '&:first-child': {
        paddingLeft: em(1)
      },
      '&:last-child': {
        paddingRight: em(1)
      }
    },
    fontSize: em(12 / 16),
    fontWeight: 'normal',
    opacity: 0.5,
    padding: `${em(1)} 0`,
    textAlign: 'left',
    textTransform: 'uppercase'
  });

  export const row = style({
    $nest: {
      '&:hover': {
        backgroundColor: color.white.toString()
      }
    },
    verticalAlign: 'middle',
    borderBottom: `${em(1 / 16)} solid ${color.metallicSeaweed.fade(0.05)}`,
    transition: 'background-color 200ms ease-in-out'
  });

  export const rowField = style({
    $nest: {
      '& + &': {
        paddingLeft: em(1)
      },
      '&:first-child': {
        paddingLeft: em(1)
      },
      '&:last-child': {
        paddingRight: em(1)
      }
    },
    padding: `${em(1)} 0`
  });

  export const align = (alignment?: Alignment) =>
    alignment
      ? style({ textAlign: alignment })
      : undefined;
}
