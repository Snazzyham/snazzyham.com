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
    <Layout isPost={true}>
      <Head>
        <title>{RichText.asText(data.title)} - Soham Adwani's Blog</title>
        <meta
          property="og:title"
          content={RichText.asText(data.title) + "- Soham Adwani"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`https://og-image-5aj4qrfey.now.sh/${RichText.asText(
            data.title
          )}.png`}
        />

        <meta
          property="og:url"
          content={"https://snazzyham.com/post/" + data.slug}
        />
        <meta
          property="og:description"
          content="A blog post from Soham Adwani"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://snazzyham.com/post/" + data.slug}
        />
        <meta
          property="twitter:title"
          content={RichText.asText(data.title) + "- Soham Adwani"}
        />
        <meta
          property="twitter:description"
          content="Soham Adwani is a full stack web application developer based in Indonesia."
        />
        <meta
          property="twitter:image"
          content={`https://og-image-5aj4qrfey.now.sh/${RichText.asText(
            data.title
          )}.png`}
        />
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
