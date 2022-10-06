import React from "react";
import "./day.scss";
import dayjs from "dayjs";
import ContestList from "./ContestList";
// import {useEffect} from "react";

const Day = ({ day }) => {
  let now = dayjs();
  let today = now.format("DD/MM/YYYY");
  let month = now.format("MM");
  // console.log(month === day.format("MM"));
  const list = [
    {
      id: 1,
      contest: "Codechef Cook-Off Rated for Div 3 & 4",
      time: "20:00-23:00",
      dateVal: "15/08/2022",
      rated: true,
      registered: false,
    },
    {
      id: 2,
      platform: "codeforces",
      contest: "Codeforces",
      time: "20:00-23:00",
      dateVal: "15/08/2022",
      rated: true,
      registered: false,
    },
  ];
  return (
    <div
      className={
        month === day.format("MM") ? "dateCell" : "dateCell lessOpacity"
      }
    >
      <div
        className={
          (today === day.format("DD/MM/YYYY")) ? "dateHeader today" : "dateHeader"
        }
      >
        {day.format("DD")}
      </div>
      <div className="list">
        <ul className="contestsul">
          {list.map((item) => (
            <ContestList
              contest={item.contest}
              rated={item.rated}
              registered={item.registered}
              time={item.time}
              id={item.id}
              dateVal={item.dateVal}
              day={day}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Day;
