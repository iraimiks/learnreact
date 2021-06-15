import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const firstBook = {
  title: "Why a Daughter Needs a Dad",
  authore: "Gregory Lang",
  img: "https://images-na.ssl-images-amazon.com/images/I/81Y8iml53ML._AC_UL200_SR200,200_.jpg"
}
const secondBook = {
  title: "The Last Thing He Told Me: A Novel",
  authore: "Laura Dave",
  img: "https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS._SX329_BO1,204,203,200_.jpg"
}
function BookList() {
  return (
    <section className="booklist">
      <Book img={firstBook.img} authore={firstBook.authore} title={firstBook.title}/>
      <Book img={secondBook.img} authore={secondBook.authore} title={secondBook.title}/>
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <h3>{props.authore}</h3>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
