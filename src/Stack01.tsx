import React from 'react';
import { Stack } from './data-structures';

const Stack01 = () => {
  const stack = new Stack<string>();
  stack.push('1');
  stack.push('1');
  stack.pop();
  stack.clear();
  return <div>stack</div>;
};

export default Stack01;
