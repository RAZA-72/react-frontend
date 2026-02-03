// import React from "react";
// import {
//   WEEKDAYS,
//   getDayDisplay,
//   getEventColor,
// } from "./utils/calendarHelpers";

// const MonthView = ({ currentDate, meetings, handleDateClick }) => {
//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();

//   const firstDay = new Date(year, month, 1);
//   const startDate = new Date(firstDay);
//   startDate.setDate(startDate.getDate() - firstDay.getDay());

//   const weekdayHeaders = WEEKDAYS.map((day, index) => (
//     <div key={index} className="weekday">
//       {day}
//     </div>
//   ));

//   const days = [];
//   for (let i = 0; i < 35; i++) {
//     const date = new Date(startDate);
//     date.setDate(startDate.getDate() + i);

//     const formatDateLocal = (date) => {
//   const y = date.getFullYear();
//   const m = String(date.getMonth() + 1).padStart(2, "0");
//   const d = String(date.getDate()).padStart(2, "0");
//   return `${y}-${m}-${d}`;
// };


 

//     const dayEvents = meetings.filter(
//   (meeting) => meeting.start === dateStr
// );


//     const isToday = date.toDateString() === new Date().toDateString();
//     const isCurrentMonth = date.getMonth() === month;

//     days.push(
//       <div
//         key={i}
//         className={`calendar-day ${!isCurrentMonth ? "other-month" : ""} ${
//           isToday ? "today" : ""
//         }`}
//         onClick={() => handleDateClick(dateStr)}
//       >
//         <div className="day-number">{getDayDisplay(date, month)}</div>
//         <div className="day-events">
//           {dayEvents.map((event, idx) => (
//             <div
//               key={idx}
//               className={`event-dot ${event.className}`}
//               style={{
//                 backgroundColor: getEventColor(event.title),
//                 color: "#000000",
//               }}
//               title={`${event.title} - ${event.extendedProps.state}`}
//             >
//               {event.title} - {event.extendedProps.state}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="calendar-view month-view active">
//       <div className="calendar-weekdays">{weekdayHeaders}</div>
//       <div className="calendar-grid">{days}</div>
//     </div>
//   );
// };

// export default MonthView;
import React from "react";
import {
  WEEKDAYS,
  getDayDisplay,
  getEventColor,
} from "./utils/calendarHelpers";

// 🔑 LOCAL DATE FORMATTER (NO toISOString)
const formatDateLocal = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const MonthView = ({ currentDate, meetings, handleDateClick }) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const weekdayHeaders = WEEKDAYS.map((day, index) => (
    <div key={index} className="weekday">
      {day}
    </div>
  ));

  const days = [];

  for (let i = 0; i < 35; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    // ✅ SAFE DATE STRING (YYYY-MM-DD)
    const dateStr = formatDateLocal(date);

    // ✅ SAFE EVENT MATCH (STRING VS STRING)
    const dayEvents = meetings.filter(
      (meeting) => meeting.start === dateStr
    );

    const isToday =
      formatDateLocal(new Date()) === dateStr;

    const isCurrentMonth = date.getMonth() === month;

    days.push(
      <div
        key={i}
        className={`calendar-day ${!isCurrentMonth ? "other-month" : ""} ${
          isToday ? "today" : ""
        }`}
        onClick={() => handleDateClick(dateStr)}
      >
        <div className="day-number">
          {getDayDisplay(date, month)}
        </div>

        <div className="day-events">
          {dayEvents.map((event, idx) => (
            <div
              key={idx}
              className={`event-dot ${event.className}`}
              style={{
                backgroundColor: getEventColor(event.title),
                color: "#000000",
              }}
              title={`${event.title} - ${event.extendedProps.state}`}
            >
              {event.title} - {event.extendedProps.state}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="calendar-view month-view active">
      <div className="calendar-weekdays">{weekdayHeaders}</div>
      <div className="calendar-grid">{days}</div>
    </div>
  );
};

export default MonthView;
