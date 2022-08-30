import { FC } from 'react';
import styled from 'styled-components';

interface CarrotSVGProps {
  fill?: string;
  width?: string;
  height?: string;
  rotate?: string;
}

const CarrotSVG: FC<CarrotSVGProps> = ({
  fill = "black",
  width = "181",
  height = "314",
  rotate = "0",
}) => (
  <SVG
    width={width}
    height={height}
    viewBox="0 0 181 314"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    transform={`rotate(${rotate})`}
  >
    <path
      d={path1}
    />
    <path
      d={path2}
    />
  </SVG>
);

export default CarrotSVG;

const SVG = styled.svg`
  transition: 1000ms;
`;

const path1 = "M11.242 143.974L0.63543 154.58L21.8486 175.794L32.4552 165.187L11.242 143.974ZM171.687 25.9552C177.545 20.0974 177.545 10.5999 171.687 4.74203C165.829 -1.11583 156.332 -1.11583 150.474 4.74203L171.687 25.9552ZM32.4552 165.187L171.687 25.9552L150.474 4.74203L11.242 143.974L32.4552 165.187Z";
const path2 = "M36.6776 148.393L26.071 137.787L4.85784 159L15.4644 169.607L36.6776 148.393ZM154.696 308.838C160.554 314.696 170.051 314.696 175.909 308.838C181.767 302.98 181.767 293.483 175.909 287.625L154.696 308.838ZM15.4644 169.607L154.696 308.838L175.909 287.625L36.6776 148.393L15.4644 169.607Z";
