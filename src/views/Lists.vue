<template>
    <ion-page>
            <div class="flex w-full flex-col overflow-auto">
                <div class="mt-2"> 
                     <h1 class="text-4xl pl-5 font-semibold">Lists</h1>
                </div>
 
            <div class="flex w-full flex-row flex-wrap justify-around mt-2">
                <ion-card class="w-2/5">
                    <router-link :to="{name:'All'}">
                            <ion-card-header>
                                <ion-icon :icon="clipboard" color="primary" size="large"></ion-icon>
                            </ion-card-header>             

                            <ion-card-header>
                                <ion-card-content>
                                    <ion-card-title class="text-2xl">All</ion-card-title>
                                    <ion-card-subtitle>Tasks</ion-card-subtitle>
                                </ion-card-content>
                            </ion-card-header>                        
                    </router-link>
                </ion-card>         
            
                <ion-card class="w-2/5">
                    <router-link :to="{name:'Work'}">
                            <ion-card-header>
                                <ion-icon :icon="briefcase" size="large" class="text-yellow-800"></ion-icon>
                            </ion-card-header>             

                            <ion-card-header>
                                <ion-card-content>
                                    <ion-card-title class="text-2xl">Work</ion-card-title>
                                    <ion-card-subtitle>Tasks</ion-card-subtitle>
                                </ion-card-content>
                            </ion-card-header>                        
                    </router-link>
                </ion-card>
                
                <ion-card class="w-2/5">
                    <router-link :to="{name:'Music'}">
                            <ion-card-header>
                                <ion-icon :icon="headset" size="large" class="text-red-400"></ion-icon>
                            </ion-card-header>             

                            <ion-card-header>
                                <ion-card-content>
                                    <ion-card-title class="text-2xl">Music</ion-card-title>
                                    <ion-card-subtitle>Tasks</ion-card-subtitle>
                                </ion-card-content>
                            </ion-card-header>                        
                    </router-link>
                </ion-card>
                         
                <ion-card class="w-2/5">
                    <router-link :to="{name:'Travel'}">
                            <ion-card-header>
                                <ion-icon :icon="airplane" size="large" class="text-green-400"></ion-icon>
                            </ion-card-header>             

                            <ion-card-header>
                                <ion-card-content>
                                    <ion-card-title class="text-2xl">Travel</ion-card-title>
                                    <ion-card-subtitle>Tasks</ion-card-subtitle>
                                </ion-card-content>
                            </ion-card-header>                        
                    </router-link>
                </ion-card>

                <ion-card class="w-2/5">
                    <router-link :to="{name:'Study'}">
                            <ion-card-header>
                                <ion-icon :icon="book" size="large" class="text-indigo-400"></ion-icon>
                            </ion-card-header>             

                            <ion-card-header>
                                <ion-card-content>
                                    <ion-card-title class="text-2xl">Study</ion-card-title>
                                    <ion-card-subtitle>Tasks</ion-card-subtitle>
                                </ion-card-content>
                            </ion-card-header>                        
                    </router-link>
                </ion-card>
            
                <ion-card class="w-2/5">
                    <router-link :to="{name:'Home'}">
                            <ion-card-header>
                                <ion-icon :icon="home" size="large"  style="color:#2DD4BF"></ion-icon>
                            </ion-card-header>             

                            <ion-card-header>
                                <ion-card-content>
                                    <ion-card-title class="text-2xl">Home</ion-card-title>
                                    <ion-card-subtitle>Tasks</ion-card-subtitle>
                                </ion-card-content>
                            </ion-card-header>                        
                    </router-link>
                </ion-card>
            
                <ion-card class="w-2/5">
                    <router-link :to="{name:'Sport'}">
                            <ion-card-header>
                                <ion-icon :icon="football" size="large"  class="text-gray-900"></ion-icon>
                            </ion-card-header>             

                            <ion-card-header>
                                <ion-card-content>
                                    <ion-card-title class="text-2xl">Sport</ion-card-title>
                                    <ion-card-subtitle>Tasks</ion-card-subtitle>
                                </ion-card-content>
                            </ion-card-header>                        
                    </router-link>
                </ion-card>
            
                <ion-card class="w-2/5">
                    <router-link :to="{name:'Shopping'}">
                            <ion-card-header>
                                <ion-icon :icon="cart" size="large"  style="color:#115E59"></ion-icon>
                            </ion-card-header>             

                            <ion-card-header>
                                <ion-card-content>
                                    <ion-card-title class="text-2xl">Shopping</ion-card-title>
                                    <ion-card-subtitle>Tasks</ion-card-subtitle>
                                </ion-card-content>
                            </ion-card-header>                        
                    </router-link>
                </ion-card>

             </div>
            </div>
    </ion-page>
</template>

<script>
import  {defineComponent}  from  'vue';
import { IonPage,IonCard,IonCardHeader,IonIcon,IonCardContent,IonCardTitle,IonCardsubTitle}  from  '@ionic/vue'; 
import { clipboard, briefcase, headset,airplane, book,home,football,cart } from 'ionicons/icons';
export default defineComponent({
    components:{
        IonPage,IonCard,IonCardHeader,IonIcon,IonIcon,IonCardContent,IonCardTitle,IonCardsubTitle
    },

    setup(){
        return{
            clipboard,  briefcase ,headset, airplane, book,  home,  football,  cart
        }
    }

})  
</script>

<style>

</style>