import { useState } from "react";
import "./index.css";
import BookCard from "./components/BookCard";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Footer from "./components/Footer";

import Image1 from "./assets/1984.jpg";
import Image2 from "./assets/great-gatsby.jpg";
import Image3 from "./assets/mockingbird.jpg";
import Image4 from "./assets/harry-potter.jpg";
import Image5 from "./assets/pride-and-prejudice.jpg";
import Image6 from "./assets/jane-eyre.jpg";
import Image7 from "./assets/the-Hobbit.jpg";
import Image8 from "./assets/fahrenheit-451.jpg";
import Image9 from "./assets/brave-new-world.jpg";
import Image10 from "./assets/animal-farm.jpg";
import Image11 from "./assets/catcher.jpg";
import Image12 from "./assets/lord.jpg";
import Image13 from "./assets/alchemist.jpg";
import Image14 from "./assets/wuthering.jpg";
import Image15 from "./assets/crime.jpg";
import Image16 from "./assets/odyssey.jpg";
import Image17 from "./assets/cities.jpg";
import Image18 from "./assets/misérables.jpg";
import Image19 from "./assets/donquixote.jpg";
import Image20 from "./assets/gray.jpg";
import Logo from "./assets/logo.png";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "H.Lee",
      year: 1960,
      image: Image3,
      rating: 4.8,
      price: 12.99,
    },
    {
      id: 2,
      title: "1984",
      author: "G.Orwell",
      year: 1949,
      image: Image1,
      rating: 4.7,
      price: 10.5,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F.S.Fitzgerald",
      year: 1925,
      image: Image2,
      rating: 4.2,
      price: 8.75,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "J.Austen",
      year: 1813,
      image: Image5,
      rating: 4.6,
      price: 9.99,
    },
    {
      id: 5,
      title: "Harry Potter",
      author: "J.K. Rowling",
      year: 1997,
      image: Image4,
      rating: 4.9,
      price: 14.99,
    },
    {
      id: 6,
      title: "Jane Eyre",
      author: "Ch.Brontë",
      year: 1847,
      image: Image6,
      rating: 4.4,
      price: 11.0,
    },
    {
      id: 7,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      image: Image7,
      rating: 4.8,
      price: 13.5,
    },
    {
      id: 8,
      title: "Fahrenheit 451",
      author: "R.Bradbury",
      year: 1953,
      image: Image8,
      rating: 4.1,
      price: 10.25,
    },
    {
      id: 9,
      title: "Brave New World",
      author: "A.Huxley",
      year: 1932,
      image: Image9,
      rating: 4.0,
      price: 9.8,
    },
    {
      id: 10,
      title: "Animal Farm",
      author: "G.Orwell",
      year: 1945,
      image: Image10,
      rating: 4.5,
      price: 7.99,
    },
    {
      id: 11,
      title: "Catcher ",
      author: "J.D. Salinger",
      year: 1951,
      image: Image11,
      rating: 3.9,
      price: 8.2,
    },
    {
      id: 12,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
      image: Image12,
      rating: 4.9,
      price: 15.99,
    },
    {
      id: 13,
      title: "The Alchemist",
      author: "P.Coelho",
      year: 1988,
      image: Image13,
      rating: 4.3,
      price: 11.75,
    },
    {
      id: 14,
      title: "Wuthering Heights",
      author: "E.Brontë",
      year: 1847,
      image: Image14,
      rating: 4.2,
      price: 9.5,
    },
    {
      id: 15,
      title: "Crime",
      author: "F.Dostoevsky",
      year: 1866,
      image: Image15,
      rating: 4.6,
      price: 12.25,
    },
    {
      id: 16,
      title: "The Odyssey",
      author: "Homer",
      year: -800,
      image: Image16,
      rating: 4.1,
      price: 10.0,
    },
    {
      id: 17,
      title: "A Tale of Two Cities",
      author: "C.Dickens",
      year: 1859,
      image: Image17,
      rating: 4.3,
      price: 8.9,
    },
    {
      id: 18,
      title: "Les Misérables",
      author: "V.Hugo",
      year: 1862,
      image: Image18,
      rating: 4.7,
      price: 13.4,
    },
    {
      id: 19,
      title: "Don Quixote",
      author: "M.Cervantes",
      year: 1605,
      image: Image19,
      rating: 4.0,
      price: 9.25,
    },
    {
      id: 20,
      title: "Dorian Gray",
      author: "O.Wilde",
      year: 1890,
      image: Image20,
      rating: 4.4,
      price: 8.25,
    },
  ]);
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-orange-900 mb-10">
        <div className="align-elements mb-7 flex items-center ">
          <div className="navbar-start">
            <img src={Logo} alt="" width={100} />
          </div>
          <div className="navbar-center">
            <Search query={query} setQuery={setQuery} />
          </div>
          <div className="navbar-end">
            <NavBar />
          </div>
        </div>
      </header>
      <main className="mb-12 grow">
        <h2 className="align-elements text-4xl font-bold text-yellow-600 mb-8">
          Historical Books
        </h2>
        {filteredBooks.length > 0 ? (
          <ul className="align-elements grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </ul>
        ) : (
          <p className="align-elements text-orange-900  text-center text-2xl opacity-70">
            No books found matching your search:(
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
