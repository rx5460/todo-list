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
                        <ion-icon :icon="cart" size="large" style="color:#115E59"></ion-icon>
                    </div>
                     
                     <div class="text-center">
                         <ion-card-title class="text-2xl">Shopping</ion-card-title>
                         <ion-card-subtitle>Tasks</ion-card-subtitle>
                     </div>
                
                </div>

            <div>
                <ion-list>
                    <ion-list-header>
                        <ion-label>Late <span class="text-gray-600 text-base"></span></ion-label>
                    </ion-list-header>
                    <ion-item-sliding>
                        <ion-item-options side="start">
                            <ion-item-option color="danger" expandable>
                                <ion-icon :icon="trash" size="large"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>
                        <ion-item detail="true">
                            <ion-label>
                                <h2></h2>
                                <p style="color:red"></p>
                            </ion-label>
                        </ion-item>
                        <ion-item-options side="end">
                            <ion-item-option color="primary" expandable>
                                <ion-checkbox></ion-checkbox>
                            </ion-item-option>
                        </ion-item-options>

                    </ion-item-sliding>
                </ion-list>
                    

                 <ion-list>
                    <ion-list-header>
                        <ion-label>Today <span class="text-gray-600 text-base"></span></ion-label>
                    </ion-list-header>
                    <ion-item-sliding>
                        <ion-item-options side="start">
                            <ion-item-option color="danger" expandable>
                                <ion-icon :icon="trash" size="large"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>
                        <ion-item detail="true">
                            <ion-label>
                                <h2></h2>
                                <p style="color:red"></p>
                            </ion-label>
                        </ion-item>
                        <ion-item-options side="end">
                            <ion-item-option color="primary" expandable>
                                <ion-checkbox></ion-checkbox>
                            </ion-item-option>
                        </ion-item-options>

                    </ion-item-sliding>
                </ion-list>
                    

                 <ion-list>
                    <ion-list-header>
                        <ion-label>Later <span class="text-gray-600 text-base"></span></ion-label>
                    </ion-list-header>
                    <ion-item-sliding>
                        <ion-item-options side="start">
                            <ion-item-option color="danger" expandable>
                                <ion-icon :icon="trash" size="large"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>
                        <ion-item detail="true">
                            <ion-label>
                                <h2></h2>
                                <p style="color:red"></p>
                            </ion-label>
                        </ion-item>
                        <ion-item-options side="end">
                            <ion-item-option color="primary" expandable>
                                <ion-checkbox></ion-checkbox>
                            </ion-item-option>
                        </ion-item-options>

                    </ion-item-sliding>
                </ion-list>
                    
                 <ion-list>
                    <ion-list-header>
                        <ion-label>Done <span class="text-gray-600 text-base"></span></ion-label>
                    </ion-list-header>
                    <ion-item-sliding>
                        <ion-item-options side="start">
                            <ion-item-option color="danger" expandable>
                                <ion-icon :icon="trash" size="large"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>
                        <ion-item detail="true">
                            <ion-label>
                                <h2></h2>
                                <p style="color:red"></p>
                            </ion-label>
                        </ion-item>
                        <ion-item-options side="end">
                            <ion-item-option color="primary" expandable>
                                <ion-checkbox></ion-checkbox>
                            </ion-item-option>
                        </ion-item-options>

                    </ion-item-sliding>
                </ion-list>
                    
                </div>
        
            </ion-content>

                <div>
                    <ion-fab @click="isOpenNewTask = true" vertical="bottom" horizontal="end" slot="fixed">
                        <ion-fab-button>
                            <ion-icon :icon="add">
                            </ion-icon>
                        </ion-fab-button>
                    </ion-fab>

                    <ion-modal
                    :is-open="isOpenNewTask"
                    :backdrop-dismiss="false">

                    <new-task @closeModal="isOpenNewTask= false"></new-task>
                    <h1 class="text-2xl"> Modal  </h1>
                    </ion-modal>

                </div>
    
    </ion-page>  
</template>
<script>

import  {defineComponent, ref}  from  'vue';
import { IonPage, IonToolbar,IonButtons,IonBackButton,IonIcon, IonContent,
IonCardTitle,IonCardSubtitle,IonListHeader,IonItemSliding,IonItemOptions,IonItemOption,
IonLabel,IonList,IonItem,IonFab,IonFabButton,IonModal}  from  '@ionic/vue'; 
import {ellipsisVertical,cart,trash,add  } from 'ionicons/icons';
import NewTask from '@/components/NewTask.vue';
export default defineComponent({
    components:{IonPage,IonToolbar,IonButtons,IonBackButton,IonIcon,IonContent,
       IonCardTitle,IonCardSubtitle,IonListHeader,IonItemSliding,
       IonItemOptions,IonItemOption,IonLabel,IonList,IonItem,
       IonFab,IonFabButton,IonModal,
       NewTask 
    },


    setup(){
        const isOpenNewTask= ref(false);
        return{
            isOpenNewTask,
            ellipsisVertical,cart,trash,add
        }
    }

})  
</script>
<style>

</style>