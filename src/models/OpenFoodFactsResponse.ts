export interface OpenFoodNutriments {
  calcium: number;
  calcium_100g: number;
  calcium_serving: number;
  calcium_unit: string;
  calcium_value: number;
  carbohydrates: number;
  carbohydrates_100g: number;
  carbohydrates_serving: number;
  carbohydrates_unit: string;
  carbohydrates_value: number;
  cholesterol: number;
  cholesterol_100g: number;
  cholesterol_serving: number;
  cholesterol_unit: string;
  cholesterol_value: number;
  energy: number;
  'energy-kcal': number;
  'energy-kcal_100g': number;
  'energy-kcal_serving': number;
  'energy-kcal_unit': string;
  'energy-kcal_value': number;
  energy_100g: number;
  energy_serving: number;
  energy_unit: string;
  energy_value: number;
  fat: number;
  fat_100g: number;
  fat_serving: number;
  fat_unit: string;
  fat_value: number;
  fiber: number;
  fiber_100g: number;
  fiber_serving: number;
  fiber_unit: string;
  fiber_value: number;
  iron: number;
  iron_100g: number;
  iron_serving: number;
  iron_unit: string;
  iron_value: number;
  proteins: number;
  proteins_100g: number;
  proteins_serving: number;
  proteins_unit: string;
  proteins_value: number;
  salt: number;
  salt_100g: number;
  salt_serving: number;
  salt_unit: string;
  salt_value: number;
  'saturated-fat': number;
  'saturated-fat_100g': number;
  'saturated-fat_serving': number;
  'saturated-fat_unit': string;
  'saturated-fat_value': number;
  sodium: number;
  sodium_100g: number;
  sodium_serving: number;
  sodium_unit: string;
  sodium_value: number;
  sugars: number;
  sugars_100g: number;
  sugars_serving: number;
  sugars_unit: string;
  sugars_value: number;
  'trans-fat': number;
  'trans-fat_100g': number;
  'trans-fat_serving': number;
  'trans-fat_unit': string;
  'trans-fat_value': number;
  'vitamin-a': number;
  'vitamin-a_100g': number;
  'vitamin-a_serving': number;
  'vitamin-a_unit': string;
  'vitamin-a_value': number;
  'vitamin-c': number;
  'vitamin-c_100g': number;
  'vitamin-c_serving': number;
  'vitamin-c_unit': string;
  'vitamin-c_value': number;
}

export interface OpenFoodProduct {
  _id: string;
  _keywords: string[];
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy: string[];
  allergens_lc: string;
  allergens_tags: string[];
  brand_owner: string;
  brands: string;
  brands_tags: string[];
  categories: string;
  categories_hierarchy: string[];
  categories_tags: string[];
  code: string;
  countries: string;
  countries_tags: string[];
  created_t: number;
  data_sources: string;
  ingredients_text: string;
  ingredients_text_with_allergens: string;
  labels: string;
  labels_tags: string[];
  lang: string;
  last_modified_t: number;
  product_name: string;
  product_quantity: string;
  product_quantity_unit: string;
  serving_size: string;
  traces: string;
  traces_tags: string[];
  nutriments: OpenFoodNutriments;
  [key: string]: any; // Additional properties if needed
}

export interface OpenFoodWarning {
  field: {
    id: string;
    value: string;
  };
  impact: {
    id: string;
    lc_name: string;
    name: string;
  };
  message: {
    id: string;
    lc_name: string;
    name: string;
  };
}

export interface OpenFoodFactsResponse {
  code: string;
  errors: any[];
  product: OpenFoodProduct;
  result: {
    id: string;
    lc_name: string;
    name: string;
  };
  status: string;
  warnings: OpenFoodWarning[];
}
