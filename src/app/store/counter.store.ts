import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { withSessionStorageSync,  } from "../customSignalFeature/withSyc";


type CounterState = {
    count : number
  };
  
  const initialState: CounterState = {
    count : 0
  };
  
export const CounterStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withSessionStorageSync('CounterStore'),
    withMethods((store)=>({
        increment (){
            patchState(store,{count:store.count()+1})
        },
        decrement (){
            patchState(store,{count:store.count()-1})
        }
    })),
);