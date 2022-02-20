import http from "../http-common";
import config from "../../../config/config.json";
import { handlingError } from "../error/error";
import { valuesParams } from "../../../helpers/Utils";

export function getRandomQuote(name) {
  return http
    .get(
      `${config.app.version.default}${
        config.app.controller.quote
      }?${valuesParams(name)}`
    )
    .then((response) => {
      return mapQuote(response.data);
    })
    .catch((error) => {
      return handlingError(error);
    });
}

function mapQuote(response) {
  return (response || []).map((res) => {
    return {
      quote: res.quote,
    };
  });
}
