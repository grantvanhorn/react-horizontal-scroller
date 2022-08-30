import { ReactElement } from 'react';

export interface HorizontalScrollContainerProps {
  children: Array<ReactElement>;
  clickIncrement?: number;
}

export interface CarrotContainerProps {
  side: 'left' | 'right';
  isActive: boolean;
}
