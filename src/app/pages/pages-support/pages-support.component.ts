import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-support',
  templateUrl: './pages-support.component.html',
  styleUrls: ['./pages-support.component.scss']
})
export class PagesSupportComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  showZenDeskHelpWidget() {
    const btnZendeskWebWidget = document.getElementById('btn-zendesk');
    if (btnZendeskWebWidget) {
      btnZendeskWebWidget.click();
    }
  }

}
