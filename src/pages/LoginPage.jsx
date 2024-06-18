import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/Authorization/useAuth";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS, API, isLoading } = useAuth();

  const URL = `${API}/api/auth/login`;

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("login form", response);

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);

        setUser({ email: "", password: "" });
        toast.success("Login successful");
        navigate("/");
        window.location.reload();
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        console.log("invalid credential");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex sm:flex-row flex-col-reverse gap-10">
        <div className="sm:w-1/2 w-full">
          <img
            src="/images/login.png"
            alt=" let's fill the login form "
            width="500"
            height="500"
          />
        </div>

        <div className="sm:w-1/2 bg-gray-200 flex p-10 flex-col rounded-lg w-full">
          <h1 className="text-6xl font-bold">Login Form</h1>
          <br />

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
                placeholder="Enter your registered email..."
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
                htmlFor="password"
                className="bg-purple-600 border-2 rounded-lg p-2 text-white w-44"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder=" Your password"
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
                  Login
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
