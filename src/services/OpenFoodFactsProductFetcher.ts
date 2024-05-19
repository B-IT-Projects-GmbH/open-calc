import { ProductFetcher } from '@/interfaces/ProductFetcher';
import { OpenFoodFactsResponse, OpenFoodProduct } from '@/models/OpenFoodFactsResponse';

class OpenFoodFactsProductFetcher implements ProductFetcher {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://world.openfoodfacts.org/api/v2/product/';
  }

  async fetchProductData(barcode: string): Promise<OpenFoodProduct | null> {
    try {
      const response = await fetch(`${this.apiUrl}${barcode}.json`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: OpenFoodFactsResponse = await response.json();

      return data.product;
    } catch (error) {
      console.error('Failed to fetch product data:', error);
      return null;
    }
  }
}

export default new OpenFoodFactsProductFetcher() as ProductFetcher;
