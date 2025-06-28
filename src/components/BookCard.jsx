import { useState } from "react";
import formatNumber from "./FormatNUmber.jsx";
import { BiSolidShoppingBags } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";

function BookCard({ book, deleteBook }) {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);

  return (
    <li
      key={book.id}
      className="flex flex-col items-center hover:shadow-orange-900 shadow-2xl transition-all rounded-2xl hover:scale-110 "
    >
      <div className="relative">
        <img
          className="rounded-2xl  w-[250px] h-[350px]  "
          src={book.image}
          alt={book.title}
        />
        <span onClick={() => setLike(!like)}>
          <IoMdHeart
            className={`text-5xl absolute top-5 right-4 p-3 rounded-[50%] shadow-2xs cursor-pointer transition-all hover:text-red-700      ${
              like ? "text-red-700 bg-black" : "text-white bg-black opacity-65"
            }`}
          />
        </span>
      </div>

      <h3 className="font-bold text-xl  text-orange-900">{book.title}</h3>
      <div className="flex gap-3 text-orange-900 opacity-90">
        <p>{book.author}</p>
        <span>Year: {book.year}</span>
      </div>
      <div className="flex gap-5 mb-3 ">
        <p>{formatNumber(book.price)}</p>
        <p>⭐{book.rating}</p>
      </div>
      <div className="flex gap-22 mb-2">
        <button
          className="btn hover:bg-orange-900 hover:text-white  text-3xl  flex rounded-3xl"
          onClick={() => {
            deleteBook(book.id);
          }}
        >
          <AiFillDelete />
        </button>
        {count == 0 && (
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="btn hover:bg-orange-900 hover:text-white text-3xl rounded-3xl w-20"
          >
            <BiSolidShoppingBags />
          </button>
        )}
        {count > 0 && (
          <div className="flex gap-2 items-center">
            <button
              onClick={() => {
                setCount(count > 0 ? count - 1 : (count = 0));
              }}
            >
              <HiOutlineMinusCircle className="  rounded-[50%] text-3xl  hover:bg-orange-900 hover:text-white transition-all" />
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <HiOutlinePlusCircle className="rounded-[50%] text-3xl hover:bg-orange-900 hover:text-white transition-all " />
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default BookCard;
