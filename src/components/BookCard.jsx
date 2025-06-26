import Button from "./Button.jsx";


import formatNumber from "./FormatNUmber.jsx";
function BookCard({ book }) {
  return (
    <li key={book.id} className="flex flex-col items-center hover:shadow-orange-900 shadow-2xl transition-all">
      <img
        className="rounded-2xl  w-[200px] h-[300px]"
        src={book.image}
        alt={book.title}
      />
      <h3 className="font-bold text-xl  text-orange-900">{book.title}</h3>
      <div className="flex gap-3 text-orange-900 opacity-90">
        <p>{book.author}</p>
        <span>Year: {book.year}</span>
      </div>
      <div className="flex gap-5 mb-3 ">
        <p>{formatNumber(book.price)}</p>
        <p>⭐{book.rating}</p>
      </div>
      <Button />
    </li>
  );
}

export default BookCard;
