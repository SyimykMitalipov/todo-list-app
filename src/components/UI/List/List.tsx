import React, { ReactNode } from 'react';

// interface for props of List;
interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode
}
// This List for alternative component for List from antd;

export default function List<T>(props: ListProps<T>) {
  return (
    <>
      {props.items.map(props.renderItem)}
    </>
  );
}
