import { getData } from "../helpers";
import { RichText } from "prismic-reactjs";
import Layout from "../layouts";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await getData("document.type", "blog_post");
  let items = res.data.results.map(x => {
    return {
      slug: x.uid,
      data: x.data
    };
  });

  items = items.sort((a, b) => (a.data.date > b.data.date ? -1 : 1));

  return {
    props: {
      items
    }
  };
};

const Writing = ({ items }) => {
  return (
    <Layout>
      <div className="blog-listing">
        <h1>Some Collected Thoughts.</h1>
        <div className="blog-listing-items">
          {items.map(x => (
            <div className="item" key={x.slug}>
              <Link href={`/post/${x.slug}`}>
                <h3>{RichText.asText(x.data.title)}</h3>
              </Link>
              <h5 className="date">{x.data.date}</h5>
              <p>{x.data.body[0].text.slice(0, 120)}...</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Writing;
