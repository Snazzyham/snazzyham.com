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
      navLinks: navlinks.data.results[0].data.links
    }
  };
};

const Index = ({ data, navLinks }) => {
  return (
    <Layout showNav={false}>
      <div className="homepage">
        <div className="hero">
          <h1>{RichText.asText(data.title)}</h1>
          <h3>{RichText.asText(data.description)}</h3>
          <div className="navlinks">
            {navLinks.map(x => {
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
        <div className="body">
          <div className="body-content">
            <h3>{data.body_title}</h3>
            <RichText render={data.body_content} />
          </div>
          <div className="client-content">
            <h3>{data.client_list_title}</h3>
            <ul>
              {data.clients.map(x => {
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
        </div>
      </div>
    </Layout>
  );
};

export default Index;
