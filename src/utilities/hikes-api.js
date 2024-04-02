import sendRequest from "./send-request";
const BASE_URL = "/api/hikes";

export async function createSpot(spotData) {
  console.log(spotData);
  return sendRequest(`${BASE_URL}/spots`, "POST", spotData);
}

// export async function getSpots() {
//     return sendRequest(`${BASE_URL}/spots`);
// }

export async function saveHikePlan(hikeData) {
  console.log(hikeData);
  return sendRequest(`${BASE_URL}/hike/save`, "POST", hikeData);
}

export async function getAllHikePlan() {
  return sendRequest(`${BASE_URL}/hike/index`, "GET");
}

export async function deleteHikePlan(id) {
  return sendRequest(`${BASE_URL}/hike/${id}/delete`, "GET");
}

export async function getHikeDetail(id) {
  return sendRequest(`${BASE_URL}/hike/${id}`, "GET");
}
