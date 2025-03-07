import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = 'assets/BL_logo_square_png.png';
  url = 'https://www.bridgelabz.com';
  userName: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  onClick(): void {
    console.log("Save button is clicked!");
    window.open(this.url, "_blank");
  }
}
