import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  HiOutlineArchive,
  HiOutlineEye,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlinePlus,
  HiOutlineX,
  HiOutlineBookOpen,
  HiOutlineCash,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { useAppContext } from "../../../../Hooks/useAppContext";
import Button from "../../../Buttons";

const TableBody = ({
  defaultCellStyle,
  data,
  table_head,
  path,
  actionDetail,
  actionArchive,
  actionUnarchive,
  actionEdit,
  actionDelete,
  linkToMataPelajaran,
  linkToInputSoal,
  linkToTransactionPayment,
  linkToTransactionHistory,
}) => {
  const location = useRouter();
  const pathPage = location.asPath;

  const { user } = useAppContext();
  const { setArchive, setUnarchive } = user;

  const handleArchive = (item) => {
    const baseUrl = location.components[pathPage].props.pageProps.baseUrl;
    const url = `${baseUrl}/archive/${item.id}`;
    setArchive({ show: true, url: url });
  };

  const handleUnarchive = (item) => {
    const baseUrl = location.components[pathPage].props.pageProps.baseUrl;
    const url = `${baseUrl}/unarchive/${item.id}`;
    setUnarchive({ show: true, url: url });
  };

  const [showInput, setShowInput] = useState(false);
  const handleShowInput = (item) => {
    if (showInput === false || showInput !== item.id) {
      setShowInput(item.id);
    } else {
      setShowInput(false);
    }
  };

  return (
    <tbody>
      {data.map((item, index) => {
        return (
          <tr key={"item" + index}>
            <td className={`${defaultCellStyle} border-b text-center`}>
              {index + 1}
            </td>
            {table_head.map((head) => (
              <td
                key={"item" + head + index}
                className={`${defaultCellStyle} border-b`}
              >
                {table_head === "logo" ? (
                  <div className="h-10 w-20 relative">
                    <Image
                      src={item[head]}
                      alt="logo"
                      className="object-contain rounded-full"
                      fill
                    />
                  </div>
                ) : (
                  item[head]
                )}
              </td>
            ))}
            {(actionDetail ||
              actionArchive ||
              actionUnarchive ||
              actionEdit ||
              actionDelete ||
              linkToMataPelajaran ||
              linkToInputSoal ||
              linkToTransactionPayment ||
              linkToTransactionHistory) && (
              <td
                className={`${defaultCellStyle} border-b flex flex-row justify-center items-center`}
              >
                <div className="flex flex-row items-center">
                  {linkToInputSoal && (
                    <div className="relative">
                      <Button
                        type="link"
                        title="Input Soal"
                        handleClick={() => handleShowInput(item)}
                      >
                        {showInput === item.id ? (
                          <HiOutlineX
                            className="hover:text-primary-600"
                            size={18}
                          />
                        ) : (
                          <HiOutlinePlus
                            className="hover:text-primary-600"
                            size={18}
                          />
                        )}
                      </Button>
                      {showInput === item.id && (
                        <div className="absolute z-20 -top-4 -right-[120px] bg-white border border-gray-300 rounded-md shadow-md flex flex-col h-max w-max">
                          <Link
                            href={path + "/upload/" + item.id}
                            className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                          >
                            Kurang 50 PG
                          </Link>
                          <Link
                            href={path + "/upload/" + item.id}
                            className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                          >
                            Kurang 5 Essai
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                  {linkToMataPelajaran && (
                    <Button
                      type="link"
                      title="Mata Pelajaran"
                      link={"/ujian/bank_soal/data_soal/" + item.id}
                    >
                      <HiOutlineBookOpen
                        className="hover:text-primary-600"
                        size={18}
                      />
                    </Button>
                  )}
                  {linkToTransactionPayment && (
                    <Button
                      type="link"
                      title="Bayar"
                      link={path + "/bayar/" + item.id}
                    >
                      <HiOutlineCash
                        className="hover:text-primary-600"
                        size={18}
                      />
                    </Button>
                  )}

                  {linkToTransactionHistory && (
                    <Button
                      type="link"
                      title="History"
                      link={path + "/history/" + item.id}
                    >
                      <HiOutlineDocumentReport
                        className="hover:text-primary-600"
                        size={18}
                      />
                    </Button>
                  )}
                  {actionDetail && (
                    <Button
                      type="link"
                      title="View"
                      link={path + "/detail/" + item.id}
                    >
                      <HiOutlineEye
                        className="hover:text-primary-600"
                        size={18}
                      />
                    </Button>
                  )}
                  {actionArchive && (
                    <Button
                      type="link"
                      title="Archive"
                      handleClick={() => handleArchive(item)}
                    >
                      <HiOutlineArchive
                        size={18}
                        className="hover:text-primary-600"
                      />
                    </Button>
                  )}
                  {actionUnarchive && (
                    <Button
                      type="link"
                      title="Unarchive"
                      handleClick={() => handleUnarchive(item)}
                    >
                      <HiOutlineArchive
                        size={18}
                        className="hover:text-primary-600"
                      />
                    </Button>
                  )}
                  {actionEdit && (
                    <Button
                      type="link"
                      title="Edit"
                      link={path + "/edit/" + item.id}
                    >
                      <HiOutlinePencil
                        className="hover:text-primary-600"
                        size={18}
                      />
                    </Button>
                  )}
                  {actionDelete && (
                    <Button type="link" title="Delete">
                      <HiOutlineTrash
                        className="hover:text-primary-600"
                        size={18}
                      />
                    </Button>
                  )}
                </div>
              </td>
            )}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
