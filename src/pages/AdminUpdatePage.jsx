import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "@/Authorization/useAuth";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  console.log("params single user: ", params);
  const { authorizationToken, API, isLoading } = useAuth();

  //   get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users single data:  ${data}`);
      setData(data);

      //   if (response.ok) {
      //     getAllUsersData();
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // to udpate the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Updated successfully");
      } else {
        toast.error("Not Updated ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col">
      <div className="text-4xl font-bold">
        <h1>Update User Data</h1>
      </div>
      <div className="bg-gray-300  gap-2 rounded-lg p-3 sm:w-1/2 w-full mt-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-row gap-4">
            <label
              htmlFor="username"
              className="bg-purple-600 border-2 rounded-lg p-2 text-white w-44"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              value={data.username}
              onChange={handleInput}
              required
              className="border-2 p-2 text-black bg-white w-2/3 rounded-lg"
            />
          </div>

          <div className="flex flex-row gap-4">
            <label
              htmlFor="email"
              className="bg-purple-600 border-2 rounded-lg p-2 text-white w-44"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={data.email}
              onChange={handleInput}
              required
              className="border-2 p-2 text-black bg-white w-2/3 rounded-lg"
            />
          </div>

          <div className="flex flex-row gap-4">
            <label
              htmlFor="phone"
              className="bg-purple-600 border-2 rounded-lg p-2 text-white w-44"
            >
              Mobile No.
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              autoComplete="off"
              value={data.phone}
              onChange={handleInput}
              required
              className="border-2 p-2 text-black bg-white w-2/3 rounded-lg"
            />
          </div>

          <div className="flex flex-row">
            {isLoading ? (
              <LoadingButton />
            ) : (
              <Button
                type="submit"
                className="bg-green-600 rounded-xl text-2xl  p-6"
              >
                Update
              </Button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
