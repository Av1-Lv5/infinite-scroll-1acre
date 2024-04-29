import { API_URL } from "@/constants";
import { apiPayload } from "@/types";

export async function getLandsData(page: number): Promise<apiPayload> {
  const res = await fetch(`${API_URL}&page=${1}&page_size=10`);
  const data = await res.json();
  return data;
}
