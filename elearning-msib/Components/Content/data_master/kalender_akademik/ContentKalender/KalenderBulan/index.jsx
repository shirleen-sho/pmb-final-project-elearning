import React from "react";

const KalenderBulan = ({ bulan, tahun }) => {
  return (
    <table className="table table-fixed border border-collapse w-[270px] text-2xs font-light">
      <thead>
        <tr>
          <th className="px-2 py-1.5 border text-xs font-normal" colSpan={9}>
            {bulan + " - " + tahun}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-2 py-1.5 border text-xs font-normal" colSpan={3}>
            Sunday
          </td>
          <td className="px-2 py-1.5 border">1</td>
          <td className="px-2 py-1.5 border">2</td>
          <td className="px-2 py-1.5 border">3</td>
          <td className="px-2 py-1.5 border">4</td>
          <td className="px-2 py-1.5 border">5</td>
          <td className="px-2 py-1.5 border">6</td>
        </tr>
        <tr>
          <td className="px-2 py-1.5 border text-xs font-normal" colSpan={3}>
            Monday
          </td>
          <td className="px-2 py-1.5 border">1</td>
          <td className="px-2 py-1.5 border">2</td>
          <td className="px-2 py-1.5 border">3</td>
          <td className="px-2 py-1.5 border">4</td>
          <td className="px-2 py-1.5 border">5</td>
          <td className="px-2 py-1.5 border">6</td>
        </tr>
        <tr>
          <td className="px-2 py-1.5 border text-xs font-normal" colSpan={3}>
            Tuesday
          </td>
          <td className="px-2 py-1.5 border">1</td>
          <td className="px-2 py-1.5 border">2</td>
          <td className="px-2 py-1.5 border">3</td>
          <td className="px-2 py-1.5 border">4</td>
          <td className="px-2 py-1.5 border">5</td>
          <td className="px-2 py-1.5 border">6</td>
        </tr>
        <tr>
          <td className="px-2 py-1.5 border text-xs font-normal" colSpan={3}>
            Wednesday
          </td>
          <td className="px-2 py-1.5 border">1</td>
          <td className="px-2 py-1.5 border">2</td>
          <td className="px-2 py-1.5 border">3</td>
          <td className="px-2 py-1.5 border">4</td>
          <td className="px-2 py-1.5 border">5</td>
          <td className="px-2 py-1.5 border">6</td>
        </tr>
        <tr>
          <td className="px-2 py-1.5 border text-xs font-normal" colSpan={3}>
            Thursday
          </td>
          <td className="px-2 py-1.5 border">1</td>
          <td className="px-2 py-1.5 border">2</td>
          <td className="px-2 py-1.5 border">3</td>
          <td className="px-2 py-1.5 border">4</td>
          <td className="px-2 py-1.5 border">5</td>
          <td className="px-2 py-1.5 border">6</td>
        </tr>
        <tr>
          <td className="px-2 py-1.5 border text-xs font-normal" colSpan={3}>
            Friday
          </td>
          <td className="px-2 py-1.5 border">1</td>
          <td className="px-2 py-1.5 border">2</td>
          <td className="px-2 py-1.5 border">3</td>
          <td className="px-2 py-1.5 border">4</td>
          <td className="px-2 py-1.5 border">5</td>
          <td className="px-2 py-1.5 border">6</td>
        </tr>
        <tr>
          <td className="px-2 py-1.5 border text-xs font-normal" colSpan={3}>
            Saturday
          </td>
          <td className="px-2 py-1.5 border">1</td>
          <td className="px-2 py-1.5 border">2</td>
          <td className="px-2 py-1.5 border">3</td>
          <td className="px-2 py-1.5 border">4</td>
          <td className="px-2 py-1.5 border">5</td>
          <td className="px-2 py-1.5 border">6</td>
        </tr>
      </tbody>
    </table>
  );
};

export default KalenderBulan;
