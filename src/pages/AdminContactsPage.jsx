import { useEffect, useState } from "react";
import { useAuth } from "@/Authorization/useAuth";
import { toast } from "react-toastify";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API, isLoading } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data: ", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getContactsData();
        toast.success("deleted successfully");
      } else {
        toast.error("Not Deleted ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <div className="grid grid-col gap-5">
        <div className="text-4xl font-bold">
          <h1>Admin Contact Data </h1>
        </div>
        <div className="grid grid-cols-1 justify-between gap-4 rounded-lg sm:grid-cols-2">
          {contactData.map((curContactData, index) => {
            const { username, email, message, _id } = curContactData;

            return (
              <div
                key={index}
                className="text-xl p-4 grid grid-col gap-4 bg-gray-300 rounded-lg"
              >
                <div className="flex flex-row gap-3">
                  <span className="bg-purple-600 border-2 rounded-lg p-2 text-white w-32 sm:w-44">
                    Username
                  </span>
                  <span className="bg-white border-2 rounded-lg p-2 text-black sm:w-96 w-80">
                    {username}
                  </span>
                </div>
                <div className="flex flex-row gap-3">
                  <span className="bg-purple-600 border-2 rounded-lg p-2 text-white w-28 sm:w-44">
                    Email
                  </span>
                  <span className="bg-white border-2 rounded-lg p-2 text-black w-84 sm:w-96">
                    {email}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="bg-purple-600 border-2 rounded-lg p-2 text-white w-48">
                    Message Received
                  </span>
                  <span className="bg-white border-2 rounded-lg p-2 text-black w-full">
                    {message}
                  </span>
                </div>
                <div className="flex flex-row">
                  {isLoading ? (
                    <LoadingButton />
                  ) : (
                    <Button
                      className="bg-green-600 rounded-xl text-2xl  p-6"
                      onClick={() => deleteContactById(_id)}
                    >
                      Delete
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
