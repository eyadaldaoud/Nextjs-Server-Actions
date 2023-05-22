import { doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { revalidatePath } from "next/cache";

const Complete: any = async ({ docID }: any) => {
  async function MarkComplete(params: any) {
    "use server";
    const documentRef = doc(db, "todos", docID);
    await updateDoc(documentRef, { isComplete: true });
    revalidatePath("/");
  }

  return (
    <>
      <form>
        <button
          formAction={MarkComplete}
          className="border rounded bg-black hover:bg-white dark:bg-white hover:dark:bg-black ease-linear duration-150
        px-4 py-0.5 text-white hover:text-black dark:text-black hover:dark:text-white ml-8"
        >
          Mark as complete
        </button>
      </form>
    </>
  );
};

export default Complete;
