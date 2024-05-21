<script setup lang="ts">
import { IonSearchbar, IonToolbar, IonIcon } from '@ionic/vue';
import { qrCode } from 'ionicons/icons';
import { computed } from 'vue';
import MLKitBarcodeScanner from "@/services/MLKitBarcodeScanner";
import {Keyboard} from "@capacitor/keyboard";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue', 'qrScan']);

const localValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

/**
 * Updates the value of the search bar and emits the qrScan event.
 * - Hides the keyboard on mobile devices
 */
const updateValue = () => {
  emit('qrScan', localValue.value);

  try {
    Keyboard.hide();
  } catch (e) {
    console.warn('Could not hide keyboard', e);
  }
};

/**
 * Opens the QR code scanner and updates the value of the search bar
 */
const onQrCodeClick = async () => {
  const hasPermissions = await MLKitBarcodeScanner.requestCameraPermission();

  if (hasPermissions) {
    const barcode = await MLKitBarcodeScanner.scanBarcode();

    if (barcode) {
      localValue.value = barcode;

      updateValue();
    }

  }
};
</script>

<template>
  <ion-toolbar>
    <div class="app-searchbar-container">
      <ion-searchbar :animated="true" v-model="localValue" enterkeyhint="search" v-on:keyup.enter="updateValue" />

      <div class="app-searchbar-container__button">
        <ion-icon :icon="qrCode" @click="onQrCodeClick" />
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

    ion-icon {
      font-size: 24px;
    }
  }
}
</style>
