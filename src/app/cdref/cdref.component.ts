import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, PLATFORM_ID, inject, signal } from '@angular/core';
import { CounterStore } from '../store/counter.store';

@Component({
  selector: 'app-cdref',
  standalone: true,
  imports: [],
  templateUrl: './cdref.component.html',
  styleUrl: './cdref.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdrefComponent implements AfterViewInit{
  readonly counterStore = inject(CounterStore)
  count = 0;
  c =0
  sgCount =signal(0)
  constructor(private cdRef: ChangeDetectorRef,@Inject(PLATFORM_ID) private platformId: Object) {
      if(isPlatformBrowser(this.platformId)){
        // setInterval(()=>{
        //   // this.cdRef.markForCheck();
        //   this.sgCount.update(v=>v+1)
        // },1000)
      }
   
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // this.count=10;
    // this.cdRef.markForCheck();
    // this.sgCount.set(100)
  }
  decrement(){
    this.counterStore.decrement();
  }

  increment() {
    this.counterStore.increment();
    // this.count++;
    // this.c++
    // Without markForCheck(), the view wouldn't update because count is not an input property
    // this.cdRef.markForCheck();
  }

  getC(){
    return ++this.c
  }
}
