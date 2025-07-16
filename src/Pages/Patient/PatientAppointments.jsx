import React, { useState } from 'react';

// Example appointment dates (YYYY-MM-DD)
const demoAppointments = [
  '2025-06-10', '2025-06-15', '2025-06-20', // previous month
  '2025-07-10', '2025-07-15', '2025-07-20', // current month
];

const daysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
  let day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

const PatientAppointments = ({
  appointments = demoAppointments,
  initialYear,
  initialMonth
}) => {
  const today = new Date();
  const [year, setYear] = useState(initialYear || today.getFullYear());
  const [month, setMonth] = useState(initialMonth || today.getMonth());
  const [showPrev, setShowPrev] = useState(false);

  // Find the most recent previous appointment month/year
  function getMostRecentPrevApptMonth() {
    // Only consider appointments before today
    const prevAppts = appointments
      .map(date => new Date(date))
      .filter(d => d < today)
      .sort((a, b) => b - a); // Descending
    if (prevAppts.length === 0) return { y: year, m: month };
    const mostRecent = prevAppts[0];
    return { y: mostRecent.getFullYear(), m: mostRecent.getMonth() };
  }
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  // Filter appointments for current or previous months
  const filteredAppointments = appointments.filter(date => {
    const d = new Date(date);
    if (showPrev) {
      // Previous appointments: before today
      return d < today;
    } else {
      // Upcoming appointments: today or after
      return d >= new Date(year, month, 1);
    }
  });
  const apptSet = new Set(
    filteredAppointments
      .filter(date => {
        const d = new Date(date);
        return d.getFullYear() === year && d.getMonth() === month;
      })
      .map(date => new Date(date).getDate())
  );

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#e0e7ef] via-[#f8fafc] to-[#C0E6DA] py-8 px-4">
      <div className="flex justify-end w-full max-w-6xl mb-4">
        <button
          className={`px-4 py-2 rounded-lg font-semibold shadow border mr-2 transition-all duration-200 ${!showPrev ? 'bg-[#198172] text-white' : 'bg-white text-[#198172] border-[#198172]'}`}
          onClick={() => {
            if (showPrev) {
              // Navigate to current month/year when switching to upcoming
              const now = new Date();
              setYear(now.getFullYear());
              setMonth(now.getMonth());
            }
            setShowPrev(false);
          }}
        >
          Upcoming Appointments
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold shadow border transition-all duration-200 ${showPrev ? 'bg-[#198172] text-white' : 'bg-white text-[#198172] border-[#198172]'}`}
          onClick={() => {
            // When switching to previous, auto-navigate to most recent previous appt month
            if (!showPrev) {
              const { y, m } = getMostRecentPrevApptMonth();
              setYear(y);
              setMonth(m);
            }
            setShowPrev(true);
          }}
        >
          Previous Appointments
        </button>
      </div>
      <div className="w-full max-w-6xl bg-white/90 rounded-3xl shadow-2xl p-6 md:p-12 border border-[#e0e7ef] backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 px-2 md:px-8 animate-fadeInDown">
          <button
            onClick={handlePrev}
            className="text-3xl text-[#198172] hover:text-white hover:bg-[#198172] bg-[#e0e7ef] rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-all duration-200 border border-[#C0E6DA] focus:outline-none focus:ring-2 focus:ring-[#198172]"
            aria-label="Previous Month"
          >
            &#8592;
          </button>
          <h2
            style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}
            className="text-2xl md:text-2xl font-extrabold text-[#23253A] tracking-wide drop-shadow-sm bg-gradient-to-r from-[#C0E6DA]/60 to-[#e0e7ef]/60 px-6 py-2 rounded-xl shadow-inner border border-[#C0E6DA] animate-fadeIn"
          >
            {months[month]} {year}
          </h2>
          <button
            onClick={handleNext}
            className="text-xl text-[#198172] hover:text-white hover:bg-[#198172] bg-[#e0e7ef] rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-all duration-200 border border-[#C0E6DA] focus:outline-none focus:ring-2 focus:ring-[#198172]"
            aria-label="Next Month"
          >
            &#8594;
          </button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-2 text-center text-[#198172] mb-3 animate-fadeInUp">
          {daysShort.map(d => (
            <div
              key={d}
              className="font-bold text-base md:text-md uppercase tracking-wider py-2 rounded-lg bg-[#e0e7ef] shadow-sm border border-[#C0E6DA]"
              style={{ letterSpacing: '0.08em' }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2 text-center text-[#23253A] text-base md:text-lg animate-fadeInUp">
          {Array(firstDay).fill(null).map((_, i) => (
            <div key={i}></div>
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const isToday =
              year === today.getFullYear() &&
              month === today.getMonth() &&
              day === today.getDate();
            const isAppointment = apptSet.has(day);
            return (
              <div
                key={day}
                className={`h-14 md:h-16 flex items-center justify-center rounded-xl font-medium cursor-pointer
                  transition-all duration-300 ease-in-out
                  group
                  ${isAppointment ? 'bg-[#C0E6DA] text-[#23253A] border-2 border-[#198172] shadow-lg scale-110 animate-pulse' : ''}
                  ${isToday && !isAppointment ? 'bg-yellow-200 border border-yellow-400 text-[#23253A] scale-105 animate-bounce' : ''}
                  ${!isAppointment && !isToday ? 'hover:bg-[#e0e7ef] hover:scale-105 hover:shadow-md' : ''}`}
                style={{ boxShadow: isAppointment ? '0 4px 24px 0 #7BB7A9' : undefined }}
                tabIndex={0}
              >
                <span className="transition-transform duration-200 group-hover:scale-125 group-active:scale-95">
                  {day}
                </span>
                {isAppointment && (
                  <span className="absolute mt-10 text-xs text-[#198172] font-semibold animate-fadeInUp">Appointment</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap gap-8 justify-center text-sm md:text-base text-[#374151] animate-fadeInUp">
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#C0E6DA] border border-[#198172] inline-block"></span>
            Appointment
          </span>
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-yellow-200 border border-yellow-400 inline-block"></span>
            Today
          </span>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
