<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
            <ion-back-button default-href="/Lists"></ion-back-button>
            </ion-buttons>

            <ion-icon :icon="ellipsisVertical" slot="end" class="text-2xl"></ion-icon>
        </ion-toolbar>
    </ion-page>
  
</template>
<script>
import  {defineComponent}  from  'vue';
import { IonPage,IonToolbar,IonButtons,IonBackButton,IonIcon }  from  '@ionic/vue'; 
import {ellipsisVertical} from 'ionicons/icons';
export default defineComponent({
    components:{
        IonPage,IonToolbar,IonButtons,IonBackButton,IonIcon
    },

    setup(){
        return{
        }
    }

})  
</script>
<style>

</style>