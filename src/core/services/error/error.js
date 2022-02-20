export function handlingError(error) {
  if (error.response) {
    console.error(error.response);
    return { error: true, message: "error.response" };
  }
  if (error.request) {
    console.error(error.request);
    return { error: true, message: "error.request" };
  }
  console.error("Error", error.message);
  return { error: true, message: "error.unkownError" };
}
