import Button from "@/components/Button";
import { FC, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Spinner from "@/components/Spinner";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const ContactForm: FC = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<boolean | string>(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError(false);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

  const validate = () => {
    let pass = true;
    if (name === "") {
      setNameError(true);
      pass = false;
    }

    if (email === "") {
      setEmailError("Email is required");
      pass = false;
    }

    if (!email.match(EMAIL_REGEX)) {
      setEmailError("Email is not valid");
      pass = false;
    }

    if (message.length < 10) {
      setMessageError(true);
      pass = false;
    }

    return pass;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      // Mocking a submit request with 2 seconds timeout
      setTimeout(() => {
        setLoading(false);
        setIsSubmitted(true);
      }, 3000);
      return;
    }
  };

  return isSubmitted ? (
    <div className="bg-back-gray p-4 rounded-md text-center">
      <p>
        <CheckCircleIcon sx={{ color: "green" }} /> Your message has been sent
        successfully!
      </p>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 w-full lg:w-1/2 bg-back-gray p-10 pt-16 rounded-md"
      style={{ maxWidth: 600 }}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 hidden"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Name*"
          onChange={handleName}
          value={name}
          className="mt-1 p-2 w-full border rounded-md"
        />
        {nameError && <p className="text-red-500 text-xs">Name is required</p>}
      </div>
      <div>
        <label
          htmlFor="email"
          className="hidden block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email*"
          onChange={handleEmail}
          value={email}
          className="mt-1 p-2 w-full border rounded-md"
        />
        {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 hidden"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Message*"
          onChange={handleMessage}
          value={message}
          rows={10}
          className="mt-1 p-2 w-full border rounded-md resize-none overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500"
          style={{
            scrollbarColor: "rgba(96, 165, 250, 1) rgba(229, 231, 235, 1)",
            scrollbarWidth: "thin",
          }}
        />
        {messageError && (
          <p className="text-red-500 text-xs">
            At least 10 characters are required
          </p>
        )}
      </div>
      <div className="flex flex-col items-center">
        <Button variant="submit" disabled={loading}>
          {loading ? <Spinner /> : "Shoot us a message"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
