import { OpenFoodProduct } from '@/models/OpenFoodFactsResponse';

export interface ProductFetcher {
  /**
   * Fetches product data from an external API.
   * @param barcode - The barcode of the product to fetch.
   */
  fetchProductData(barcode: string): Promise<OpenFoodProduct | null>;
}
