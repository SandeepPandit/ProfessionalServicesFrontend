import { useEffect, useState } from "react";
import { useAuth } from "@/Authorization/useAuth";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
export const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users after delete:  ${data}`);

      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="sm:text-4xl sm:font-bold text-2xl font-bold">
          <h1>Admin Users Data </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="sm:text-2xl text-lg bg-purple-600 text-white flex flex-row rounded-lg font-bold">
            <span className="sm:p-4 sm:w-3/12 p-2 text-center w-4/12">
              Name
            </span>
            <span className="sm:p-4 sm:w-4/12 p-2 text-center w-4/12">
              Email
            </span>
            <span className="sm:p-4 sm:w-3/12 p-2 text-center w-3/12">
              Mobile
            </span>
            <span className="sm:p-4  sm:w-1/12 p-2 text-center w-1/12  hidden sm:block">
              Update
            </span>
            <span className="sm:p-4 sm:w-1/12 p-2 text-center w-1/12 hidden sm:block">
              Delete
            </span>
          </div>
          <div className="sm:text-xl text-base text-black bg-gray-300 flex flex-col rounded-lg font-semibold">
            {users.map((curUser, index) => {
              return (
                <div key={index} className="flex flex-row rounded-lg">
                  <span className="p-4  sm:w-3/12 text-center w-4/12">
                    {curUser.username}
                  </span>
                  <span className="p-4  sm:w-4/12 text-center text-clip overflow-hidden w-4/12 break-words">
                    {curUser.email}
                  </span>
                  <span className="p-4  sm:w-3/12 text-center w-3/12">
                    {curUser.phone}
                  </span>
                  <span className="p-2 sm:w-1/12 text-center w-1/12 hidden sm:block">
                    <Button className="bg-blue-600 w-full rounded-full flex flex-row gap-1">
                      <FaRegEdit />
                      <Link to={`/admin/users/${curUser._id}/edit`}> Edit</Link>
                    </Button>
                  </span>
                  <span className="p-2 sm:w-1/12 text-center w-1/12 hidden sm:block">
                    <Button
                      onClick={() => deleteUser(curUser._id)}
                      className="bg-red-600 w-full rounded-full flex flex-row gap-1"
                    >
                      <MdDelete />
                      Delete
                    </Button>
                  </span>
                  <span className="p-1  w-1/12 sm:hidden flex flex-row">
                    <button className="text-blue-600">
                      <Link to={`/admin/users/${curUser._id}/edit`}>
                        <FaRegEdit />
                      </Link>
                    </button>
                    <button
                      onClick={() => deleteUser(curUser._id)}
                      className="text-red-600"
                    >
                      <MdDelete />
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
