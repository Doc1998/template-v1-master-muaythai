import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.less']
})
export class HomeheaderComponent implements OnInit {
  colorHeader:boolean = false;
  showDropDown:boolean = false;
  scrWidth = window.innerWidth;
  phoneView:boolean = true
  constructor() { }

  ngOnInit(): void {
    console.log(this.scrWidth)
    if(this.scrWidth > 1024){
      this.phoneView = false;
    }
  }

  @HostListener('window:scroll',['$event']) onScroll(){
    if(!this.phoneView){
      if(window.scrollY > 100){
        this.colorHeader = true;
      }else{
        this.colorHeader = false;
      }
    }
 }
 @HostListener('window:resize')
 getScreenSize() {
       this.scrWidth = window.innerWidth;
       if(this.scrWidth > 1024){
        this.phoneView = false;
      }else{
        this.phoneView = true;
      }
       console.log(this.scrWidth);
 }
 dropDownMenu(target: HTMLElement){
    this.showDropDown = !this.showDropDown;
    if(target.classList.contains('clicked')){
      console.log('yes')
      target.classList.remove('clicked');
    } else{
      console.log('no')
      target.classList.add('clicked');
    }
 }
 scroll(el: HTMLElement){
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

}