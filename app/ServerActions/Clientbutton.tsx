"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { ImSpinner2 } from "react-icons/im";
const Clientbutton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button
          disabled
          className="border rounded bg-black hover:bg-white dark:bg-white hover:dark:bg-black ease-linear duration-150
            px-4 py-1 text-white hover:text-black dark:text-black hover:dark:text-white mt-8"
        >
          <ImSpinner2 className="animate-spin text-xl" />
        </button>
      ) : (
        <button
          className="border rounded bg-black hover:bg-white dark:bg-white hover:dark:bg-black ease-linear duration-150
        px-4 py-1 text-white hover:text-black dark:text-black hover:dark:text-white mt-8"
        >
          Add (Server Action)
        </button>
      )}
    </>
  );
};

export default Clientbutton;
