import React from "react";

const KalenderBulan = ({ bulan, tahun }) => {
  const styleCell = "h-8 text-center";
  const selected = "bg-primary-100";

  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <div className="w-full max-w-[280px] text-xs bg-white border-[1.25px] rounded-2xl shadow-md p-7 flex flex-col justify-center items-center gap-3">
      <div className="flex flex-row justify-center w-full border-b border-neutral-2 pb-4 text-sm font-semibold">
        {bulan + " " + tahun}
      </div>
      <table className="table-fixed max-w-[224px] h-full">
        <thead>
          <tr>
            {days.map((day) => (
              <th
                className={`${styleCell} w-8 text-2xs font-medium text-[#7E818C]`}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* masih manual */}
          <tr>
            <td className={`${styleCell}`}>1</td>
            <td className={`${styleCell}`}>2</td>
            <td className={`${styleCell}`}>3</td>
            <td className={`${styleCell}`}>4</td>
            <td className={`${styleCell}`}>5</td>
            <td className={`${styleCell}`}>6</td>
            <td className={`${styleCell}`}>7</td>
          </tr>
          <tr>
            <td className={`${styleCell}`}>1</td>
            <td className={`${styleCell} ${selected}`}>2</td>
            <td className={`${styleCell} ${selected}`}>3</td>
            <td className={`${styleCell} ${selected}`}>4</td>
            <td className={`${styleCell} ${selected}`}>5</td>
            <td className={`${styleCell}`}>6</td>
            <td className={`${styleCell}`}>7</td>
          </tr>
          <tr>
            <td className={`${styleCell}`}>1</td>
            <td className={`${styleCell}`}>2</td>
            <td className={`${styleCell}`}>3</td>
            <td className={`${styleCell}`}>4</td>
            <td className={`${styleCell}`}>5</td>
            <td className={`${styleCell}`}>6</td>
            <td className={`${styleCell}`}>7</td>
          </tr>
          <tr>
            <td className={`${styleCell}`}>1</td>
            <td className={`${styleCell}`}>2</td>
            <td className={`${styleCell}`}>3</td>
            <td className={`${styleCell}`}>4</td>
            <td className={`${styleCell}`}>5</td>
            <td className={`${styleCell}`}>6</td>
            <td className={`${styleCell}`}>7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KalenderBulan;
