import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ErrorStateMatcher} from '@angular/material/core';
import {catchError} from "rxjs";


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
  mailChimpEndpoint = 'https://the-banished.us21.list-manage.com/subscribe/post-json?u=aa13a26086f34e69f3e1a6c85&amp;id=9c172380ae&amp;f_id=007ef0e6f0';
  error = '';

  constructor(private http: HttpClient) { }

  // reactive form components
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  async submit() {
    this.error = '';
    if (this.emailControl.status === 'VALID') {
      console.info("Subscription started for " + this.emailControl.value);

      let url = "https://us21.api.mailchimp.com/3.0/lists/9c172380ae/members";

      let body = {
        "email_address": this.emailControl.value,
        "status": "subscribed",
      };

      let httpOptions = await this.getHttpHeader();

      this.http.post<MailChimpResponse>(url, body, httpOptions)
        .subscribe(data => console.info(data));

    }
  }

  private async getHttpHeader() {
    const rheaders = new HttpHeaders({
      'Content-Type': 'application/json' ,
      'Authorization': 'Basic a2V5OjllYzg0MDk4NDI4YzQ5MmNmMzM0MGRiYmQxNzk2NTc2LXVzMjE=',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers':'X-Requested-With',
    });
    return { headers: rheaders };
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
