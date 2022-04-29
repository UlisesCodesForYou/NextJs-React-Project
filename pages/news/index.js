import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <Link href="/news/this-is-the-url">
          <li>NextJs is kinda confusing</li>
        </Link>

        <li>This is a link to another page</li>
      </ul>
    </>
  );
};

export default NewsPage;
