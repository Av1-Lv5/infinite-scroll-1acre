export type apiPayload = {
  count: number;
  results: Land[];
  next: number;
  previous: number;
};
export type Land = {
  id: number;
  land_media: LandMedia[];
  land_bookmark_data: LandBookmarkData[];
  water_source_data: WaterSourceData[];
  land_zone_data: LandZoneData[];
  state_name: string;
  district_name: string;
  mandal_name: string;
  village_name: string;
  seller: Seller;
  created_by: User;
  is_shortlisted: boolean;
  is_basic_verified: boolean;
  total_land_size_in_acres: LandSize;
  price_per_acre_crore: Price;
  slug: string;
  is_exact: boolean;
  tags: Tag[];
  description: string;
  total_price: number;
  price_per_acre: number;
  total_land_size: number;
  lat: string;
  long: string;
  is_chance: boolean;
  status: string;
  is_physically_verified: boolean;
  approach_road: boolean;
  fencing: boolean;
  crop_type: string | null;
  soil_type: string;
  created_at: string;
  updated_at: string;
  location_link: string;
  approximate_location_link: string;
  survey_number: string;
  electricity: boolean;
  existing_structure: null | string;
  additional_info: null | string;
  approach_road_length: number;
  approach_road_type: string;
  fencing_description: string;
  disclaimer: null | string;
  status_change_reason: null | string;
  distance_from_orr: number;
  state: number;
  district: number;
  mandal: number;
  village: number;
};

export type LandMedia = {
  id: number;
  video: null;
  image: string;
  media_type: string;
  category: string;
  created_at: string;
  updated_at: string;
};

export type LandBookmarkData = {
  id: number;
  one_acre_premium: boolean;
  chance: boolean;
  site_verification: boolean;
  investors: boolean;
};

export type WaterSourceData = {
  id: number;
  well: boolean;
  canal: boolean;
  drip: boolean;
  sprinkler: boolean;
  bore_well: boolean;
  stream: boolean;
};

export type LandZoneData = {
  id: number;
  mumbai_highway: boolean;
  shankarpally_road: boolean;
  chevella_highway: boolean;
  bengaluru_highway: boolean;
  srisailam_highway: boolean;
  nagarjunasagar_highway: boolean;
  vijayawada_highway: boolean;
  warangal_highway: boolean;
  karimnagar_rajiv_rahadari: boolean;
  nagpur_highway: boolean;
  nanded_highway: boolean;
};

export type Seller = {
  name: string;
  id: number;
  is_verified: boolean;
  profile_picture: null | string;
};

export type User = {
  id: number;
  name: string;
};

export type Tag = {
  name: string;
  slug: string;
  tag_type: string;
  creator_type: string;
  created_at: string;
  updated_at: string;
};

export type LandSize = {
  acres: number;
  guntas: number;
};

export type Price = {
  crore: number;
  lakh: number;
};
