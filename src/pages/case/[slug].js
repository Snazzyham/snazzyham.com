import { getData } from "../../helpers";
import { RichText } from "prismic-reactjs";
import Layout from "../../layouts";

export const getStaticPaths = async () => {
  const res = await getData("document.type", "case_study");
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
  const res = await getData("my.case_study.uid", ctx.params.slug);
  let data = res.data.results[0].data;

  return {
    props: { data }
  };
};

const CaseStudy = ({ data }) => {
  return (
    <Layout>
      <div className="blogpost">
        <article className="post">
          <h1>{RichText.asText(data.title)}</h1>
          <img src={data.hero_image.url} alt={data.hero_image.alt} />
          <RichText render={data.body_content} />
        </article>
      </div>
    </Layout>
  );
};

export default CaseStudy;
