"use client";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(2023, 0, 1); // Set the target date
      const diff = now - targetDate;
      // Calculate the days, hours, minutes, and seconds remaining
      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
      // Update the state
      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    }, 1000);
    // Clear the interval when the countdown is complete
    return () => clearInterval(interval);
  }, []);
  return (
      <div className="countdown flex space-x-1">
        <div className="font-bold">
          <span className="border-2 border-black rounded-lg px-2 py-3">
            {days}
          </span>
        </div>
        <span className="font-extrabold">:</span>
        <div className="font-bold">
          <span className="border-2 border-black rounded-lg px-2 py-3">
            {hours}
          </span>
        </div>
        <span className="font-extrabold">:</span>
        <div className="font-bold">
          <span className="border-2 border-black rounded-lg px-2 py-3">
            {minutes}
          </span>
        </div>
        <span className="font-extrabold">:</span>
        <div className=" font-bold">
          <span className="border-2 border-black rounded-lg px-2 py-3">
            {seconds}
          </span>
        </div>
      </div>
  );
};

export default CountdownTimer;
