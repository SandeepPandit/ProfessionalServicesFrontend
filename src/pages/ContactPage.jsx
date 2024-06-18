import { useState } from "react";
import { useAuth } from "@/Authorization/useAuth";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user, API, isLoading } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Message send successfully");
      }
    } catch (error) {
      alert("Message not send");
      console.log(error);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col-reverse gap-10">
      <div className="sm:w-2/5 w-full">
        <img src="/images/support.png" alt="we are always ready to help" />
      </div>

      <div className="sm:w-3/5 bg-gray-200 flex p-10 flex-col rounded-lg w-full">
        <h1 className="text-6xl font-bold">Contact Us</h1>
        <br />

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-row gap-4">
            <label
              htmlFor="username"
              className="bg-purple-600 border-2 rounded-lg p-2 text-white w-44"
            >
              username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              value={contact.username}
              onChange={handleInput}
              required
              placeholder="Your username..."
              className="border-2 p-2 text-black bg-white w-80 rounded-lg"
            />
          </div>

          <div className="flex flex-row gap-4">
            <label
              htmlFor="email"
              className="bg-purple-600 border-2 rounded-lg p-2 text-white w-44"
            >
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={contact.email}
              onChange={handleInput}
              required
              placeholder="Your email..."
              className="border-2 p-2 text-black bg-white w-80 rounded-lg"
            />
          </div>

          <div className="flex flex-row gap-4">
            <label
              htmlFor="message"
              className="bg-purple-600 border-2 rounded-lg p-2 text-white w-44 h-11"
            >
              message
            </label>
            <textarea
              name="message"
              id="message"
              autoComplete="off"
              value={contact.message}
              onChange={handleInput}
              required
              cols="30"
              rows="6"
              placeholder="Type your message here..."
              className="border-2 p-2 text-black bg-white w-80 rounded-lg"
            ></textarea>
          </div>

          <div className="flex flex-row justify-center mt-10">
            {isLoading ? (
              <LoadingButton />
            ) : (
              <Button
                type="submit"
                className="bg-green-600 rounded-xl text-2xl  p-6 text-center "
              >
                Send
              </Button>
            )}
          </div>
        </form>
      </div>
      {/* <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5489571014573!2d81.60245417523609!3d21.249727180152497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1716574849078!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section> */}
    </div>
  );
};
