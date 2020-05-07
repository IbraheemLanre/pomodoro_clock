import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({ handleResetButtonClick, handleStartStopClick, timeLeft, starStopButtonLabel, timerLabel}) => {
    
    
   
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});
    
    return (
        <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-red-600 rounded-full">
            
            <p className="text-red-900 text-2xl" id="timer-label">{timerLabel}</p>
            <p className="font-clock text-4xl font-bold"id="time-left">{formattedTimeLeft}</p>
            <button className="text-red-400 font-semibold bg-gray-900 px-4 py-2 rounded-lg" onClick={handleStartStopClick}>{starStopButtonLabel}</button>
            <button className="border-2 text-white-900 rounded border-green-900 border-solid px-3 py-2" id="reset" onClick= {handleResetButtonClick}>Reset</button>
        </div>
    );
}

export default TimeLeft;
