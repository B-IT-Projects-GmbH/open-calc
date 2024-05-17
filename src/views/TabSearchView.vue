<template>
  <ion-page>
    <ion-header>
      <!-- Toolbar Title -->
      <ion-toolbar>
        <ion-title>Barcode Scanner</ion-title>
      </ion-toolbar>

      <!-- Search -->
      <app-toolbar-search />
    </ion-header>
    <ion-content>
      <h1>Barcode Scanner</h1>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import AppToolbarSearch from '@/components/AppToolbarSearch.vue';
</script>
