import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import {ErrorStateMatcher} from '@angular/material/core';


interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'email-subscribe-form',
  templateUrl: './email-subscribe-form.component.html',
  styleUrls: ['./email-subscribe-form.component.css']
})
export class EmailSubscribeForm {

  submitted = false;
  mailChimpEndpoint = 'https://the-banished.us21.list-manage.com/subscribe/post?u=aa13a26086f34e69f3e1a6c85&amp;id=9c172380ae&amp;f_id=007ef0e6f0';
  error = '';

  constructor(private http: HttpClient) { }

  // reactive form components
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  submit() {
    this.error = '';
    if (this.emailControl.status === 'VALID') {

      const params = new HttpParams()
        // @ts-ignore
        .set('EMAIL', this.emailControl.value)
        .set('b_aa13a26086f34e69f3e1a6c85_9c172380ae', ''); // hidden input name

      const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
      this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
        if (response.result && response.result !== 'error') {
          this.submitted = true;
        }
        else {
          this.error = response.msg;
        }
      }, error => {
        console.error(error);
        this.error = 'Sorry, an error occurred.';
      });
    }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
