import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(targetDate: string): TimeLeft {
  const calculateTimeLeft = (): TimeLeft => {
    let targetTime = new Date(targetDate).getTime();
    const match = targetDate.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([+-]\d{2}):(\d{2})$/);
    if (match) {
      const [, year, month, day, hours, minutes, seconds, offsetHours, offsetMinutes] = match;
      const offsetMs = (parseInt(offsetHours, 10) * 60 + (offsetHours.startsWith('-') ? -1 : 1) * parseInt(offsetMinutes, 10)) * 60 * 1000;
      targetTime = Date.UTC(+year, +month - 1, +day, +hours, +minutes, +seconds) - offsetMs;
    }
    const difference = targetTime - Date.now();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    // IMMEDIATE recalculation when targetDate changes
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
