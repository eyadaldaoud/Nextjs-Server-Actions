import { revalidatePath } from "next/cache";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import Clientbutton from "./Clientbutton";

const Todos: any = async () => {
  async function Add(data: FormData) {
    "use server";
    const title = data.get("title");
    const body = data.get("body");
    const imageURL = data.get("imgurl");

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        title,
        body,
        imageURL,
        isComplete: false,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    revalidatePath("/");
  }

  return (
    <div className="mt-8 flex justify-center ">
      <form action={Add}>
        <div>
          <input
            required
            type="text"
            placeholder="Reading a book."
            name="title"
            className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />

          <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
            Your todo title.
          </p>
        </div>
        <div>
          <textarea
            required
            name="body"
            placeholder="Reading the first 25 pages of .. book."
            className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />

          <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
            Your todo body.
          </p>
        </div>
        <div>
          <input
            required
            type="url"
            name="imgurl"
            placeholder="@ImageURL"
            defaultValue={
              "https://th.bing.com/th/id/OIG.lodndXX4dr6CqN0hXlx0?pid=ImgGn"
            }
            className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />

          <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
            Your todo image.
          </p>
        </div>
        <Clientbutton />
      </form>
    </div>
  );
};

export default Todos;
