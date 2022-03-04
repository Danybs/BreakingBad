import http from "../http-common";
import config from "../../../config/config.json";
import { handlingError } from "../error/error";

export function getAllCharacters() {
  return http
    .get(`${config.app.version.default}${config.app.controller.characters}`)
    .then((response) => {
      return mapCharacters(response.data);
    })
    .catch((error) => {
      return handlingError(error);
    });
}

export function getDetailsCharacters(id) {
  return (
    http
      .get(
        `${config.app.version.default}${config.app.controller.characters}/${id}`
      )
      .then((response) => {
        return response.data[0];
      })
      .catch((error) => {
        return handlingError(error);
      })
  );
}

function mapCharacters(response) {
  return (response || []).map((character) => {
    return {
      id: character.char_id,
      name: character.name || undefined,
      img: character.img,
    };
  });
}
