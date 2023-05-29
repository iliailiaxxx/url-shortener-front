import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-template',
  templateUrl: './content-template.component.html',
  styleUrls: ['./content-template.component.scss']
})
export class ContentTemplateComponent implements OnInit{
  ngOnInit(): void {
    
  }

  @Input() urlString = "";

}
