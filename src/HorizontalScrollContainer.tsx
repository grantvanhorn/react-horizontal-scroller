import { FC, useRef, useState, UIEvent } from 'react';
import styled from 'styled-components';
import type {
  HorizontalScrollContainerProps,
  CarrotContainerProps,
} from './interfaces';
import CarrotSVG from './CarrotSVG';

const HorizontalScrollContainer: FC<HorizontalScrollContainerProps> = ({
  children,
  clickIncrement = 300,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);

  const scrollAction = (event: UIEvent<HTMLDivElement>) => {
    if (wrapperRef.current) {
      const {
        current: {
          scrollLeft,
          scrollWidth,
          clientWidth,
        },
      } = wrapperRef;

      if (scrollLeft > 0) {
        setShowLeftArrow(true);
      }
      if (scrollLeft === 0) {
        setShowLeftArrow(false);
      }
      if (scrollWidth - scrollLeft === clientWidth) {
        setShowRightArrow(false);
      }
      if (scrollWidth - scrollLeft > clientWidth) {
        setShowRightArrow(true);
      }
    }
  };

  const leftClick = () => {
    if (wrapperRef.current) {
      let {
        current: {
          scrollLeft,
        },
      } = wrapperRef;

      if (scrollLeft === 0 || scrollLeft < 0) {
        return;
      }

      wrapperRef.current.scrollLeft -= clickIncrement;
    }
  };

  const rightClick = () => {
    if (wrapperRef.current) {
      let {
        current: {
          clientWidth,
          scrollWidth,
          scrollLeft,
        },
      } = wrapperRef;

      if (scrollLeft > scrollWidth - clientWidth) {
        return;
      }

      wrapperRef.current.scrollLeft += clickIncrement;
    }
  };

  return (
    <Wrapper
      ref={wrapperRef}
      onScroll={scrollAction}
    >
      <FixedWrapper>
        <CarrotContainer
          side="left"
          onClick={leftClick}
          isActive={showLeftArrow}
        >
          <CarrotSVG
            height='30px'
            width='30px'
          />
        </CarrotContainer>
        <CarrotContainer
          side="right"
          onClick={rightClick}
          isActive={showRightArrow}
        >
          <CarrotSVG
            height='30px'
            width='30px'
            rotate='180'
          />
        </CarrotContainer>
      </FixedWrapper>
      {children}
    </Wrapper>
  )
};

export default HorizontalScrollContainer;

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  position: relative;
  scroll-behavior: smooth;
`;

const FixedWrapper = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
`;

const carrotContainerHelper = ({
  side,
  isActive,
}: CarrotContainerProps): string => {
  let styles = '';
  styles += isActive ? 'display: flex;' : 'display: none;';

  if (side === 'left') {
    styles += `left: 10px`;
    return styles;
  }

  styles += `right: 10px`;

  return styles;
};

const CarrotContainer = styled.div<CarrotContainerProps>`
  justify-content: center;
  align-items: center;
  border: 1px solid #00000050;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: fixed;
  background-color: #FFFFFF50;
  cursor: pointer;
  ${carrotContainerHelper}
`;
