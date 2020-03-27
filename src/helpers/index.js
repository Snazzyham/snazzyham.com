import Prismic from "prismic-javascript";

export const getData = async (page, key) => {
  const API_ENDPOINT = process.env.apiEndpoint;
  const api = await Prismic.api(API_ENDPOINT, {
    accessToken: process.env.apiKey
  });
  const res = await api.query(Prismic.Predicates.at(page, key));
  return { data: res };
};
