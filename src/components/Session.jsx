import React from 'react';
import moment from 'moment';
import { BreakSessionContainer, BreakSessionLabel, BreakSessionTime, PlusMinusButtonContainer, PlusMinusButton } from '../ui/BreakSession';

const Session = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute
}) => {
  
  const sessionLengthInMinute = moment.duration(sessionLength, 's').asMinutes();
  return (
    <BreakSessionContainer>
      <BreakSessionLabel>Session</BreakSessionLabel>
      <BreakSessionTime>{sessionLengthInMinute}</BreakSessionTime>
      <PlusMinusButtonContainer>
        <PlusMinusButton onClick={incrementSessionLengthByOneMinute}>+</PlusMinusButton>
        <PlusMinusButton onClick={decrementSessionLengthByOneMinute}>-</PlusMinusButton>
      </PlusMinusButtonContainer>
  
    </BreakSessionContainer>
  );
};



export default Session;
