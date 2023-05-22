import { ImGithub, ImLinkedin } from "react-icons/im";
import Todolayout from "./ServerActions/Todolayout";
import Todos from "./ServerActions/Todos";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-24">
      <h1 className="text-5xl font-extrabold dark:text-white mb-4">
        Eyad's App
      </h1>
      <div className="flex justify-center mb-2">
        <Link
          href={"https://github.com/UGoingNoWhereBoy"}
          target={"_blank"}
          className="border rounded bg-black hover:bg-white dark:bg-white hover:dark:bg-black ease-linear duration-150
            px-4 py-1.5 mr-2 text-white hover:text-black dark:text-black hover:dark:text-white"
        >
          <ImGithub />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/eyad-zoubi-93327b244/"}
          target={"_blank"}
          className="border rounded bg-black hover:bg-white dark:bg-white hover:dark:bg-black ease-linear duration-150
            px-4 py-1.5 mr-2 text-white hover:text-black dark:text-black hover:dark:text-white"
        >
          <ImLinkedin />
        </Link>
      </div>
      <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400 text-xl">
        Using NextJS 13.4 Server-Actions
      </small>
      <Todos />
      <Todolayout />
    </div>
  );
}
