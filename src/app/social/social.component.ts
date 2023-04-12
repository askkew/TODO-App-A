import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  mailMe(){
    var mail = document.createElement("a");
    mail.href = "mailto:lucasaoverbey@gmail.com?subject=files&body=Hi";
    mail.click();
}
}
