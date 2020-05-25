async function getData(url = "", data = {}) {
  const response = await fetch(url);
  return response.json();
}

//normally I would put this url to ENV:
const endpoint = "https://opentable.herokuapp.com/api";

export const getRestaurants = (city) => {
  return getData(`${endpoint}/restaurants?city=${city}`).then((data) => {
    return data;
  });
};
