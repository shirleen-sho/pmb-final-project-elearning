import React, { useState } from "react";
import moment from "moment";

const KalenderBulan = ({ bulan, tahun }) => {
  const styleCell = "w-8 h-8 text-center";
  const calendar_head = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const calendar = [];
  const value = moment(`${tahun}/${bulan}/15`, "YYYY/M/D");
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  return (
    <div className="w-full max-w-[280px] h-[330px] text-xs bg-white border-[1.25px] rounded-2xl shadow-md p-7 flex flex-col items-center gap-3">
      <div className="flex flex-row justify-center w-full border-b border-neutral-2 pb-4 text-sm font-semibold">
        {value.clone().format("MMMM").toString() + " " + tahun}
      </div>
      <table className="table-fixed max-w-[224px] h-fit">
        <thead>
          <tr>
            {calendar_head.map((h) => (
              <th
                className={`${styleCell} text-2xs font-medium text-gray-400`}
                key={bulan + "-" + h}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={bulan + "-" + week}>
              {week.map((date) => (
                <td className={`${styleCell}`} key={date.format("DD/MM/YY")}>
                  {date.format("D").toString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KalenderBulan;
