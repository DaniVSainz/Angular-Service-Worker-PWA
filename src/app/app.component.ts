import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private snackBar: MatSnackBar){

  }

  updateNetworkStatusUi(){
    if (navigator.onLine){
      (document.querySelector("body") as any).style = "";
    } else{
      (document.querySelector("body") as any).style = "filter: grayscale(1)";
    }
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.updateNetworkStatusUi();
    window.addEventListener("online", this.updateNetworkStatusUi);
    window.addEventListener("offline", this.updateNetworkStatusUi);

    if ((navigator as any ).standalone==false){
      //This is a ios device and im in the browser
      this.snackBar.open('You can add this PWA to the Home Screen', null,{duration:3000});
    }
    if ((navigator as any ).standalone==undefined){
      //its not ios
      if (window.matchMedia("(display-mode: browser").matches){
        //we are in the broswer
        window.addEventListener("beforeinstallprompt", event => {
          event.preventDefault();
          const sb = this.snackBar.open('Do you want to install this App?', "Install", {duration: 5000});
          sb.onAction().subscribe( () => {
            (event as any).prompt();
            (event as any).uiserChoice.then(result => {
              if (result.outcome =="dismissed"){
                //TODO track no install
              } else {
                //Was installed
              }
            })
          });
          return false;
        })
      }
    }
  }
}
