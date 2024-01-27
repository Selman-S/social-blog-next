import { Location } from "@/types/types";

export const writeLocation = (location: Location) => {
 const { street, city, state, country, timezone } = location;

  const formattedAddress = `${street}, ${city}, ${state}, ${country}`;
  return formattedAddress;
}