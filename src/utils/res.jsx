import { restaurantFetcher } from "../src/Config";
export async function restaurantFetch(lon, lat) {
  try {
    const res = await fetch(
      restaurantFetcher[0] +
        lat +
        restaurantFetcher[1] +
        lon +
        restaurantFetcher[2]
    );
    const json = await res.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    return json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  } catch {
    console.log("error in restaurantFetch");
  }
}
