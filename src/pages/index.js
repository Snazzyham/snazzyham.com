import { getData } from "../helpers";
import { RichText } from "prismic-reactjs";
import Layout from "../layouts";
import Link from "next/link";

export const getStaticProps = async () => {
  const data = await getData("document.type", "homepage");
  const navlinks = await getData("document.type", "navbar");

  return {
    props: {
      data: data.data.results[0].data,
      navLinks: navlinks.data.results[0].data.links,
    },
  };
};

const Index = ({ data, navLinks }) => {
  return (
    <Layout showNav={false}>
      <div className="homepage">
        <Hero title={data.title} desc={data.description} navLinks={navLinks} />
        <div className="body">
          <Body title={data.body_title} content={data.body_content} />
          <div className="sidebar">
            <Clients title={data.client_list_title} clients={data.clients} />
            <Awards title={data.awards_title} awards={data.awards} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Hero = ({ title, desc, navLinks }) => {
  return (
    <div className="hero">
      <h1>{RichText.asText(title)}</h1>
      <h3>{RichText.asText(desc)}</h3>
      <div className="navlinks">
        {navLinks.map((x) => {
          if (x.internal === true) {
            return (
              <Link key={x.name} href={x.path}>
                <a>{x.name}</a>
              </Link>
            );
          } else {
            return (
              <a href={x.path} key={x.name} target="_blank">
                {x.name}
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

const Body = ({ title, content }) => {
  return (
    <div className="body-content">
      <h3>{title}</h3>
      <RichText render={content} />
    </div>
  );
};

const Clients = ({ title, clients }) => {
  return (
    <div className="client-content">
      <h3>{title}</h3>
      <ul>
        {clients.map((x) => {
          if (x.internal === true) {
            return (
              <li key={x.key}>
                <Link href={x.url}>
                  <a>{x.key}</a>
                </Link>
              </li>
            );
          } else {
            return (
              <li key={x.key}>
                <a href={x.url} target="_blank">
                  {x.key}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

const Awards = ({ title, awards }) => {
  return (
    <div className="awards">
      <h3>{title}</h3>
      <div className="awards-list">
        {awards.map((x) => (
          <AwardItem
            key={x.award_title}
            title={x.award_title}
            issuer={x.award_issuer}
            year={x.award_year}
          />
        ))}
      </div>
    </div>
  );
};

const AwardItem = ({ title, issuer, year }) => (
  <div className="award-item">
    <h4>{title}</h4>
    <p className="issuer">{issuer}</p>
    <p className="year">{year}</p>
  </div>
);

export default Index;
