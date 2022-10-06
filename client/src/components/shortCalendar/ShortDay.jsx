import React from "react";
import "./shortDay.scss";
import dayjs from "dayjs";
import ShortContestList from "./ShortContestList";

const ShortDay = ({ day }) => {
  let now = dayjs();
  let today = now.format("DD/MM/YYYY");  
  const list = [
    {
      id: 1,
      contest: "Codechef Cook-Off Rated for Div 3 & 4",
      time: "20:00-23:00",
      dateVal: "18/08/2022",
      rated: true,
      registered: false,
    },
    {
      id: 2,
      platform: "codeforces",
      contest: "Codeforces",
      time: "20:00-23:00",
      dateVal: "18/08/2022",
      rated: true,
      registered: false,
    },
  ];

  const generateClass = (today) => {
    if (today === day.format("DD/MM/YYYY")) {
      return "shortDay todayShortDay";
    } else {
      return "shortDay";
    }
  };

  return (
    <div className={generateClass(today)}>
      
      <div className="listShortDay">
      <div className={"dateHeader"}>{day.format("DD")}</div>
        <div className="contestsdiv">
          {list.map((item) => (
            <ShortContestList
              contest={item.contest}
              rated={item.rated}
              registered={item.registered}
              time={item.time}
              id={item.id}
              dateVal={item.dateVal}
              day={day}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortDay;
