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
  console.log(data, navLinks);
  return (
    <Layout>
      <div className="homepage">
        <div className="hero">
          <h1>{RichText.asText(data.title)}</h1>
          <h3>{RichText.asText(data.description)}</h3>
          <div className="navlinks">
            {navLinks.map(x => (
              <Link key={x.name} href={x.path}>
                <a>{x.name}</a>
              </Link>
            ))}
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
              {data.clients.map(x => (
                <li key={x.key}>
                  <Link href={x.url}>
                    <a target="_blank">{x.key}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
