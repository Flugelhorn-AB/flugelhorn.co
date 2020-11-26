import fetch from "isomorphic-unfetch";

export const fetcher = (urlToFetch) => {
  return fetch(urlToFetch).then((r) => r.json());
};

export const url = "https://afternoon-scrubland-19654.herokuapp.com";

// ("http://localhost   :1337");
