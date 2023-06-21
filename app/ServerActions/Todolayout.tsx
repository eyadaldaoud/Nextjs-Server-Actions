import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import Delete from "./Delete";
import Complete from "./Complete";

const Todolayout: any = async () => {
  const querySnapshot = await getDocs(collection(db, "todos")).catch((err) =>
    console.log(err)
  );
  const docs: any = querySnapshot?.docs;

  return (
    <div className="flex flex-wrap gap-3 m-4 p-4 justify-center">
      {docs?.map((doc: any) => (
        <div
          key={doc.id}
          className="max-w-xs overflow-hidden bg-slate-200 rounded-lg shadow-lg dark:bg-gray-900"
        >
          <div className="px-4 py-2">
            <h1
              className={
                doc.data().isComplete
                  ? "text-xl font-bold text-green-800 uppercase dark:text-green-600 line-through"
                  : "text-xl font-bold text-gray-800 uppercase dark:text-white"
              }
            >
              {doc.data()?.title}
            </h1>
            <p
              className={
                doc.data().isComplete
                  ? "mt-1 text-sm text-green-600 dark:text-green-400 line-through"
                  : "mt-1 text-sm text-gray-600 dark:text-gray-400"
              }
            >
              {doc.data()?.body}
            </p>
          </div>

          <img
            className="object-cover w-full h-48 mt-2"
            src={doc.data()?.imageURL}
            alt="TODO IMAGE"
          />

          <div className="flex items-center justify-between px-4 py-2 dark:bg-gray-900 bg-slate-200">
            <h1 className="text-lg font-bold text-white">
              <Delete docID={doc?.id} />
            </h1>
            {doc.data().isComplete ? (
              <button
                disabled
                className="px-4 py-2 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                Completed
              </button>
            ) : (
              <Complete docID={doc?.id} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todolayout;
