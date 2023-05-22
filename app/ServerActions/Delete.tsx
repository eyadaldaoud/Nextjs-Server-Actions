import { deleteDoc, doc } from "firebase/firestore";
import { BiTrash } from "react-icons/bi";
import { db } from "../lib/firebase";
import { revalidatePath } from "next/cache";

const Delete: any = async ({ docID }: any) => {
  async function DeleteTodo(params: FormData) {
    "use server";
    await deleteDoc(doc(db, "todos", docID));
    revalidatePath("/");
  }
  return (
    <form>
      <button
        formAction={DeleteTodo}
        className="border rounded bg-black hover:bg-white dark:bg-white hover:dark:bg-black ease-linear duration-150
                  px-4 py-1.5 mr-2 text-white hover:text-black dark:text-black hover:dark:text-white"
      >
        <BiTrash />
      </button>
    </form>
  );
};

export default Delete;
