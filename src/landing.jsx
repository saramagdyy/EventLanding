import { useState, useEffect } from 'react';

const Landing = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Timer finished
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img 
        src="/suhaila4323_young_beautful_woman_in_a_long_red_dress_in_motion__9f5a0497-d1f9-403d-8914-7ee9f91b257f.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Last Hours Offer - Top */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-white font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold tracking-wider uppercase">
            LAST HOURS OFFER
          </h1>
        </div>

        {/* Counting Down Text */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-sans tracking-wide">
            COUNTING DOWN...
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="text-white font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-[12rem] 4xl:text-[16rem] tracking-wider">
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
          {/* Radix Logo - Bottom Left */}
          <div className="text-white">
            <img 
              src="/Radix 2023-01w.png"
              alt="Radix Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 3xl:h-24 4xl:h-28 w-auto"
            />
          </div>

          {/* Call Center - Bottom Right */}
          <div className="text-white text-right">
            <div className="font-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl tracking-wide mb-1">
              CALL CENTER
            </div>
            <div className="font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold tracking-wider">
              19238
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
