import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";

const TodoList = ({ shareName = "", owerUserId = "" }) => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = () => {
    const shareLink = `${"todolist공유할 링크"}/share/${owerUserId}`;
    copy(shareLink)
      .then(() => {
        window.alert(shareLink);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <section className="min-h-[70vh] bg-gray-100">
      <div className="w-full max-w-[800px] bg-white p-[20px] mx-auto">
        <article className="flex justify-between items-center">
          <div className="font-bold text-[32px]">
            {shareName && <div>{shareName}</div>}
            todo contents
          </div>
          {owerUserId && (
            <div
              className="flex items-center font-bold text-[20px]"
              onClick={() => handleCopy()}
            >
              Share
              <IoShareSocialOutline />
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default TodoList;
