import Navbar from "../../components/navbar/Navbar";
import CalendarHeader from "../../components/calendar/CalendaHeader";
import Month from "../../components/calendar/Month";
import Sidebar from "../../components/calendar/Sidebar";
import { getMonth } from "./util";
import "./calendar.scss";
import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "./context/GlobalContext";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="calendar">
      {/* <div className="calendarSidebar">
        <Sidebar />
      </div> */}
      <div className="calendarMonth">
        <CalendarHeader />
        <Month month={currentMonth} />
      </div>
    </div>
  );
};

export default Calendar;
