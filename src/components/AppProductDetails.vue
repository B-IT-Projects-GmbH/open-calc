<script setup lang="ts">
import {computed, PropType} from "vue";
import {OpenFoodProduct} from "@/models/OpenFoodFactsResponse";

/**
 * Keys of nurtrition values that should be displayed
 */
const NUTRITION_KEYS = [
  'energy-kcal',
    'carbohydrates',
    'fat',
    'proteins',
    'salt'
];

const props = defineProps({
  openFoodProduct: {
    type: Object as PropType<OpenFoodProduct>,
    required: true,
  },
});

/**
 * Computed list of nutrition values
 */
const nutritionList = computed(() => {
  return NUTRITION_KEYS.map((key) => {
    return `${key}: ${props.openFoodProduct.nutriments[key]}`;
  });
});
</script>

<template>
  <div class="app-product-details">
    <div class="app-product-details__header">
      <h1>{{ openFoodProduct.product_name }}</h1>
      <p>{{ openFoodProduct.product_quantity }}{{ openFoodProduct.product_quantity_unit }}</p>
    </div>
    <!-- Nutritions -->
    <div class="app-product-details__nutritions">
      <ul>
        <li v-for="nutrition in nutritionList" :key="nutrition">
          {{ nutrition }}
        </li>
      </ul>
    </div>

    <!-- Ingredients -->
    <div class="app-product-details__ingredients">
      <h2>Ingredients</h2>
      <p>{{ openFoodProduct.ingredients_text }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-product-details {
  padding-inline: 20px;

  &__header {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>