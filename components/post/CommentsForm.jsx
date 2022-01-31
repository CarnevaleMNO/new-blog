import { useState, useRef, useEffect } from "react";
import { newComment } from "../../services";

export default function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const nComment = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    newComment(nComment).then((res) => {
      setShowSuccessMsg(true);
      setTimeout(() => {
        setShowSuccessMsg(false);
      }, 3000);
    });
  };

  return (
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Any comments or suggestions?
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          placeholder="Comment"
          name="comment"
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
        <input
          ref={nameEl}
          className="pl-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          ref={emailEl}
          className="pl-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700"
          type="text"
          name="email"
          id="name"
          placeholder="Email"
          autoComplete="off"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="">
          <input
            ref={storeDataEl}
            type="checkbox"
            name="storeData"
            id="storeData"
            value={true}
          />
          <label
            className="ml-1 text-gray-500 cursor-pointer"
            htmlFor="storeData"
          >
            Save my email and name
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleSubmission}
          className="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded"
        >
          Submit
        </button>
        {showSuccessMsg && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
}
