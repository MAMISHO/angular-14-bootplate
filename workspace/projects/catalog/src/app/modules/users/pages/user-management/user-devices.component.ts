import { Component, OnInit } from '@angular/core';
import { Device } from '../../api/models/device.model';
import { DeviceService } from '../../api/services/device.service';

@Component({
  selector: 'user-devices',
  templateUrl: './user-devices.component.html',
  styleUrls: ['./user-devices.component.css'],
})
export class UserDevicesComponent implements OnInit {
  public devices: Device[] = [];

  constructor(private deviceService: DeviceService) {}

  async ngOnInit() {
    this.deviceService.findAll().subscribe((devices: Device[]) => (this.devices = devices));
    // this.devices = await this.deviceService.getByCurrentUser();
  }
}
