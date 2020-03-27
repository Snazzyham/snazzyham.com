import { getData } from "../helpers";
import { RichText } from "prismic-reactjs";

export const getStaticProps = async () => {
  const data = await getData("document.type", "homepage");

  return {
    props: {
      data: data.data
    }
  };
};

const Index = ({ data }) => {
  console.log(data);
  return (
    <div>
      <p>{RichText.asText(data.title)}</p>
      <RichText render={data.body_content} />
    </div>
  );
};

export default Index;
