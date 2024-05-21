<template>
  <ion-page>
    <ion-header>
      <!-- Toolbar Title -->
      <ion-toolbar>
        <ion-title>Barcode Scanner</ion-title>
      </ion-toolbar>

      <!-- Search -->
      <app-toolbar-search v-model="currentSearch" @qr-scan="searchForProduct" />
    </ion-header>
    <ion-content>
      <app-product-details :open-food-product="currentProduct" v-if="currentProduct" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import AppToolbarSearch from '@/components/AppToolbarSearch.vue';
import OpenFoodFactsProductFetcher from '@/services/OpenFoodFactsProductFetcher';
import { ref } from 'vue';
import AppProductDetails from "@/components/AppProductDetails.vue";

const currentSearch = ref<string>('4311501690475');
const currentProduct = ref<any>(null);

const searchForProduct = async () => {
  const response = await OpenFoodFactsProductFetcher.fetchProductData(currentSearch.value);

  console.log(response);

  currentProduct.value = response;
};
</script>
