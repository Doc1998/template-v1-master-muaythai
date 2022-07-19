import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

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

}
