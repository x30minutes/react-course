import React from 'react';

const Book = (props) => {
  const { image, title, author } = props.book;
  const clickHandler = (e) => {
    alert('hello world');
    console.log(e);
    console.log(e.target);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <Image img={image}></Image>
      <Title title={title}></Title>
      <Author author={author}></Author>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

const Image = (props) => <img src={props.img} alt="" />;
const Title = (props) => {
  return <h1 onClick={() => console.log(props.title)}>{props.title}</h1>;
};
const Author = (props) => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    {props.author.toUpperCase()}
    {/* {let int = 6 + 1}  has to return something */}
    {6 + 6}
  </h4>
);

export default Book;
