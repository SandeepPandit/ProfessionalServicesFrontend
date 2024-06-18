import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/Authorization/useAuth";
import { toast } from "react-toastify";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS, API, isLoading } = useAuth();

  const URL = `${API}/api/auth/register`;

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("res from server", res_data.extraDetails);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Registration successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("register ", error);
    }
  };

  return (
    <>
      <div className="flex sm:flex-row justify-between flex-col-reverse gap-10">
        <div className="sm:size-1/2 size-full">
          <img src="/images/register.png" />
        </div>

        <div className="sm:size-1/2 bg-gray-200 flex p-10 flex-col rounded-lg size-full">
          <h1 className="text-6xl font-bold"> Registration Form</h1>
          <br />

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
                placeholder="Your username...."
                id="username"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
                className="border-2 p-2 text-black bg-white w-80 rounded-lg"
              />
            </div>

            <div className="flex flex-row gap-4">
              <label
                htmlFor="email"
                className="bg-purple-600 border-2 rounded-lg p-2 text-white w-44"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
                className="border-2 p-2 text-black bg-white w-80 rounded-lg"
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
                type="number"
                name="phone"
                placeholder="Mobile No....."
                id="phone"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
                className="border-2 p-2 text-black bg-white w-80 rounded-lg"
              />
            </div>

            <div className="flex flex-row gap-4">
              <label
                htmlFor="password"
                className="bg-purple-600 border-2 rounded-lg p-2 text-white w-44"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
                className="border-2 p-2 text-black bg-white w-80 rounded-lg"
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
                  Register Now
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
