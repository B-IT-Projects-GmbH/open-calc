<script setup lang="ts">
import { IonSearchbar, IonToolbar, IonIcon } from '@ionic/vue';
import { qrCode } from 'ionicons/icons';
</script>

<template>
  <ion-toolbar>
    <div class="app-searchbar-container">
      <ion-searchbar :animated="true" />

      <div class="app-searchbar-container__button">
        <ion-icon :icon="qrCode" />
      </div>
    </div>
  </ion-toolbar>
</template>

<style lang="scss" scoped>
ion-searchbar {
  padding-top: 0;
  padding-bottom: 0;
}

.app-searchbar-container {
  display: flex;
  align-items: center;

  &__button {
    padding-right: 12px;
  }
}
</style>