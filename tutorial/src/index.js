import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}
const authore = 'Gregory Lang';

const Book = () => {
  const title = 'Why a Daughter Needs a Dad';
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81Y8iml53ML._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h2>{title}</h2>
      <h3>{authore}</h3>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
