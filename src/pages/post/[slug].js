import { getData } from "../../helpers";
import { RichText } from "prismic-reactjs";
import Layout from "../../layouts";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await getData("document.type", "blog_post");
  let paths = res.data.results.map(x => {
    return {
      params: {
        slug: x.uid
      }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ctx => {
  const res = await getData("my.blog_post.uid", ctx.params.slug);
  let data = res.data.results[0].data;

  return {
    props: { data }
  };
};

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>{RichText.asText(data.title)} - Soham Adwani's Blog</title>
      </Head>
      <div className="blogpost">
        <article className="post">
          <h1>{RichText.asText(data.title)}</h1>
          <p className="date">{data.date}</p>
          <RichText render={data.body} />
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
