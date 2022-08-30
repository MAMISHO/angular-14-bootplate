import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../../users/api/models/device.model';

@Component({
  selector: 'devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {
  @Input() devices: Device[] = [];

  constructor() {}

  ngOnInit(): void {}
}
