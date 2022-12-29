import { Component } from '@angular/core';
import { faLinkedin,faYoutube, faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
myLinkedinIcon=faLinkedin;
myYoutubeIcon=faYoutube;
myFacebookIcon=faFacebook;
myInstagramIcon=faInstagram;
myTwitter=faTwitter;

}
