import React from 'react';
import moment from 'moment';
import { BreakSessionContainer, BreakSessionLabel, BreakSessionTime, PlusMinusButtonContainer, PlusMinusButton } from '../ui/BreakSession';

const Break = ({
  breakLength,
  decrementBreakLengthByOneMinute,
  incrementBreakLengthByOneMinute
}) => {

  const breakLengthInMinute = moment.duration(breakLength, 's').asMinutes();

  return (
    <BreakSessionContainer>
      <BreakSessionLabel>Break</BreakSessionLabel>
      <BreakSessionTime>{breakLengthInMinute}</BreakSessionTime>
      <PlusMinusButtonContainer>
        <PlusMinusButton onClick={incrementBreakLengthByOneMinute}>+</PlusMinusButton>
        <PlusMinusButton onClick={decrementBreakLengthByOneMinute}>-</PlusMinusButton>
      </PlusMinusButtonContainer>
  
    </BreakSessionContainer>
  );
};



export default Break;
