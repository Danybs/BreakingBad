// recieve json object
export const valuesParams = (filters) =>
  Object.entries(filters)
    .map((e) => e.join("="))
    .join("&");
