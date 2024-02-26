import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNu3n3yXwM8Y7kbTuTCPS6g8mf4eAlniV6g&usqp=CAU'
  contentTitle:string= '>Minha fofoquinha'
  contentText:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusamus dolores dolorem obcaecati quibusdam voluptates error et temporibus iure cum eos nam corrupti illum vel ex earum iusto soluta animi.'
  constructor() { }

  ngOnInit(): void {
  }

}
