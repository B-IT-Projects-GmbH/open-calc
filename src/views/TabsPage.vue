<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="homeSharp" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="diary" href="/tabs/diary">
          <ion-icon aria-hidden="true" :icon="book" />
          <ion-label>Diary</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon aria-hidden="true" :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="statistics" href="/tabs/statistics">
          <ion-icon aria-hidden="true" :icon="statsChart" />
          <ion-label>Statistics</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeSharp, book, search, statsChart, person } from 'ionicons/icons';
</script>
