import { getData } from "../helpers";
import { RichText } from "prismic-reactjs";
import Layout from "../layouts";
import Link from "next/link";
import { motion } from "framer-motion";

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

const listingVariant = {
  enter: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const itemVariant = {
  enter: {
    x: 0,
    opacity: 1
  },
  init: {
    x: -200,
    opacity: 0
  }
};

const Writing = ({ items }) => {
  return (
    <Layout>
      <div className="blog-listing">
        <h1>Some Collected Thoughts.</h1>
        <motion.div
          className="blog-listing-items"
          variants={listingVariant}
          animate={"enter"}
        >
          {items.map(x => (
            <motion.div
              className="item"
              key={x.slug}
              variants={itemVariant}
              initial={"init"}
            >
              <Link href={`/post/${x.slug}`}>
                <motion.h3 whileHover={{ scale: 1.2, opacity: 0.8, x: 50 }}>
                  {RichText.asText(x.data.title)}
                </motion.h3>
              </Link>
              <h5 className="date">{x.data.date}</h5>
              <p>{x.data.body[0].text.slice(0, 120)}...</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Writing;
