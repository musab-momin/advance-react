import React, { useState, useTransition } from "react";

const BookCover = () => <div>BOOK COVER</div>;
const Author = () => <div>BOOK WRITER</div>;

const Reviews = () => {
  return (
    <>
      {Array(300)
        .fill("")
        .map((_item, indx) => {
          const now = performance.now();
          while (now > performance.now() - 12) {}

          return <p key={indx}>Review #: {indx + 1}</p>;
        })}
    </>
  );
};

const UseTransition = () => {
  const [view, setView] = useState("COVER");
  const [pending, startTransition] = useTransition();

  const handleChange = (section) => {
    startTransition(() => {
      setView(section);
    });
    // setView(section);
  };

  return (
    <div className="container p-16">
      <div className="flex justify-center gap3">
        <button
          type="button"
          className="btn"
          onClick={() => handleChange("COVER")}
        >
          Book
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => handleChange("REVIEWS")}
        >
          Reviews
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => handleChange("AUTHOR")}
        >
          Author
        </button>
      </div>
      <div className="py-2rem">
        {view === "COVER" && <BookCover />}
        {view === "REVIEWS" && <Reviews />}
        {view === "AUTHOR" && <Author />}
      </div>
    </div>
  );
};

export default UseTransition;
