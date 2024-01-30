export const fetchRequest = async ({ url, method, id = "", query = "" }) => {
  try {
    const requestOptions = {
      method: method,
    };

    const resp = await fetch(url + query + id, requestOptions);
    const json = await resp.json();
    // console.log(json);
    return json;
  } catch (error) {
    alert(`error: ${error}`);
  }
};
