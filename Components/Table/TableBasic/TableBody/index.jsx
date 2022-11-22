import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  HiOutlineArchive,
  HiOutlineEye,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";
import { useAppContext } from "../../../../Hooks/useAppContext";
import Button from "../../../Buttons";
import CardNotif from "../../../Card/CardNotif";

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

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={"item" + index}>
          <td className={`${defaultCellStyle} border-b text-center`}>
            {index + 1}
          </td>
          {table_head.map((head) => (
            <td
              key={"item" + head + index}
              className={`${defaultCellStyle} border-b`}
            >
              {item[head]}
            </td>
          ))}
          {(actionDetail ||
            actionArchive ||
            actionUnarchive ||
            actionEdit ||
            actionDelete) && (
            <td
              className={`${defaultCellStyle} border-b flex flex-row justify-center items-center`}
            >
              <div className="flex flex-row items-center">
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
      ))}
    </tbody>
  );
};

export default TableBody;
