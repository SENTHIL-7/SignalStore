import { getState, patchState, signalStoreFeature, withHooks } from "@ngrx/signals";

export function withSessionStorageSync(keyName:string) {
  return signalStoreFeature(
    withHooks({
        onInit(store) {
          //this frequently update the session storage when store state changed
          // if (typeof sessionStorage !== 'undefined') {
          //   patchState(store, JSON.parse(sessionStorage.getItem(keyName) || '{}'))
          //   // effect(()=>{
          //   //     sessionStorage.setItem(keyName, JSON.stringify(getState(store)));
          //   // })
          // }
          //this only update the sessionStorage when user refresh the page
          if(typeof sessionStorage !== 'undefined' && typeof window !== 'undefined'){
            patchState(store, JSON.parse(sessionStorage.getItem(keyName) || '{}'))
            window.addEventListener('beforeunload',()=>{
              sessionStorage.setItem(keyName, JSON.stringify(getState(store)));
            })
          }
        }
    })
  );
}
