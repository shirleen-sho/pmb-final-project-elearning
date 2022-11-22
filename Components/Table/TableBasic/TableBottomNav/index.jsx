import Link from "next/link";
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const TableBottomNav = ({ data }) => {
  return (
    <div className="flex flex-row justify-between items-center mt-6">
      <span className="text-xs text-gray-500">
        Showing data <span className="font-medium text-gray-700">1</span> to{" "}
        <span className="font-medium text-gray-700">{data.length}</span> of{" "}
        {data.length} entries
      </span>
      {/* pagination */}
      <div className="flex flex-row items-center gap-4 text-xs h-8">
        <Link
          href="/"
          className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
        >
          <HiChevronLeft size={14} />
        </Link>
        <Link
          href="/"
          aria-current="page"
          className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-primary-300 border border-primary-300 text-white"
        >
          1
        </Link>
        <Link
          href="/"
          className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
        >
          2
        </Link>
        <Link
          href="/"
          className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
        >
          3
        </Link>
        <Link
          href="/"
          className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
        >
          ...
        </Link>
        <Link
          href="/"
          className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
        >
          100
        </Link>
        <Link
          href="/"
          className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
        >
          <HiChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default TableBottomNav;
