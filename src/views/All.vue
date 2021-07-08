<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
            <ion-back-button default-href="/Lists"></ion-back-button>
            </ion-buttons>

            <ion-icon :icon="ellipsisVertical" slot="end" class="text-2xl"></ion-icon>
        </ion-toolbar>
            <ion-content class="overflow-auto">
                <div class="flex flex-col justify-center items-center mt-2">
                    <div class="text-center">
                        <ion-icon :icon="clipboard" size="large" color="primary"></ion-icon>
                    </div>
                     
                     <div class="text-center">
                         <ion-card-title class="text-2xl">All</ion-card-title>
                         <ion-card-subtitle>Tasks</ion-card-subtitle>
                     </div>
                
                </div>

                <div>
                    <ion-list>
                        <ion-list-header>
                            <ion-label>Late <span class="text-gray-600 text-base">0</span></ion-label>
                        </ion-list-header>

                    </ion-list>
                    
                </div>
        
            </ion-content>
        </ion-page>  
    </template>
<script>
import  {defineComponent}  from  'vue';
import { IonPage,IonToolbar,IonButtons,IonBackButton,IonIcon, IonContent, IonCardTitle, IonCardSubtitle }  from  '@ionic/vue'; 
import {ellipsisVertical, clipboard } from 'ionicons/icons';
export default defineComponent({
    components:{
        IonPage,IonToolbar,IonButtons,IonBackButton,IonIcon, IonContent, IonCardTitle, IonCardSubtitle
    },

    setup(){
        return{
            ellipsisVertical, clipboard
        }
    }

})  
</script>
<style>

</style>