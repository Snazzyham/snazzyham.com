import { getData } from "../helpers";
import { RichText } from "prismic-reactjs";
import Layout from "../layouts";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await getData("document.type", "case_study");
  const data = await getData("document.type", "portfolio_page");

  let items = res.data.results.map(x => {
    return {
      slug: x.uid,
      data: x.data
    };
  });

  items = items.sort((a, b) => (a.data.date > b.data.date ? -1 : 1));

  return {
    props: {
      items,
      data: data.data.results[0].data
    }
  };
};

const Portfolio = ({ items, data }) => {
  console.log(items, data);
  return (
    <Layout>
      <div className="portfolio-page">
        <h1>{RichText.asText(data.title)}</h1>
        <div className="case-section">
          <h3>{data.case_study_title}</h3>
          <div className="case-list">
            {items.map(x => (
              <Link key={x.slug} href={`/case/${x.slug}`}>
                <div className="item">
                  <img src={x.data.hero_image.url} />
                  <h4>{x.data.listing_title}</h4>
                  <p>{x.data.listing_blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="other-projects">
          <h3>{data.portfolio_items_title}</h3>
          <div className="portfolio-items">
            {data.portfolio_items.map(x => {
              if (x.internal === false) {
                return (
                  <div className="item" key={x.key}>
                    <a href={x.value} target="_blank">
                      <h4>{x.key}</h4>
                    </a>
                    <p>{x.desc}</p>
                  </div>
                );
              } else {
                return (
                  <div className="item" key={x.key}>
                    <Link href={x.value}>
                      <h4>{x.key}</h4>
                    </Link>
                    <p>{x.desc}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
