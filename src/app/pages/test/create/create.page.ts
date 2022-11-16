import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Equipment } from 'src/app/dtos/equipment.dto';
import { Test } from 'src/app/dtos/test.dto';
import { EquipmentService } from 'src/app/services/equipment.service';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  testForm: FormGroup;
  deviceOptions: Equipment[] = [];
  selectedDevice: Equipment;
  testResult: Test;
  defaultAttempts = 5;
  testRunning = false;
  testDone = false;
  testFailed = false;

  constructor(
    private equipmentService: EquipmentService,
    private formBuilder: FormBuilder,
    private testService: TestsService,
    private toastController: ToastController,
  ) {
    this.testForm = this.formBuilder.group({
      device: [
        null,
        [
          Validators.required,
        ],
      ],
      ip: [
        '',
        [
          Validators.required
        ]
      ],
      attempts: [
        this.defaultAttempts,
        [
          Validators.required,
          Validators.pattern(/[0-9]/),
        ],
      ]
    });
  }

  ngOnInit() {
    this.getEquipmentOptions();
  }

  setSelectedDevice(event) {
    this.selectedDevice = event.target.value;
    this.testForm.controls.device.setValue(this.selectedDevice);
    this.testForm.controls.ip.setValue(this.selectedDevice.ip);
  }

  async getEquipmentOptions(): Promise<void> {
    this.deviceOptions = await this.equipmentService.getEquipmentList();
  }

  async runTest() {
    this.testForm.markAllAsTouched();
    const errorToast = await this.toastController.create({
      message: 'Something went wrong while testing',
      duration: 3000,
      position: 'top'
    });

    if (this.testForm.valid) {
      try {
        this.testRunning = true;
        const testResult = await this.testService.createTest({
          equipment: {
            id: this.selectedDevice.id,
            ip: this.selectedDevice.ip,
          },
          attempts: this.testForm.get('attempts').value,
        });
        this.testResult = testResult.data;
        this.testFailed = !this.testResult.successful;
        this.testRunning = false;
        this.testDone = true;
      }
      catch(ex) {
        this.testRunning = false;
        this.testFailed = true;
        errorToast.present();
      }
    }
  }

}
