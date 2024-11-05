import { useState, useEffect } from 'react';
import { options } from '../utils/constants'; 

const useDate = () => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const date = new Date();
            const formatter = new Intl.DateTimeFormat('en-GB', options);
            const dateStr = formatter.format(date);
            const [datePart, timePart] = dateStr.split(', ');
            setFormattedDate(`${datePart} ${timePart}`);
        };

        updateDate();

        const intervalId = setInterval(updateDate, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return [formattedDate];
};

export default useDate;
