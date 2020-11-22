import fetch from "isomorphic-unfetch";

export const fetcher = (urlToFetch) => {
  return fetch(urlToFetch).then((r) => r.json());
};

export const url = "http://localhost:1337";
