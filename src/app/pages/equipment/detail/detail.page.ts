import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Equipment } from 'src/app/dtos/equipment.dto';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  equipment: Equipment;
  equipmentForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private equipmentService: EquipmentService,
    private navController: NavController,
    private toastController: ToastController,
  ) {
    this.equipmentForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(200),
        ],
      ],
      ip: [
        '',
        [
          Validators.required,
          // eslint-disable-next-line max-len
          Validators.pattern(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        ]
      ]
    });
  }

  get formControl() {
    return this.equipmentForm.controls;
  }

  ngOnInit() {
    if (this.route.snapshot.data.equipment) {
      this.equipment = this.route.snapshot.data.equipment;
      this.equipmentForm.get('name').setValue(this.equipment.name);
      this.equipmentForm.get('ip').setValue(this.equipment.ip);
    }
  }

  async submitEquipment() {
    const loadingIndicator = await this.loadingController.create({
      message: 'Submitting Equipment...'
    });

    try {
      loadingIndicator.present();
      this.equipmentForm.markAsTouched();
      await this.equipmentService.updateEquipment(this.equipment.id, this.equipmentForm.value);
      loadingIndicator.dismiss();
      this.navController.navigateBack('app/equipment');
    }
    catch (e) {
      const errorToast = await this.toastController.create({
        message: 'Equipment creation failed',
        duration: 3000,
        position: 'top',
      });
      loadingIndicator.dismiss();
      errorToast.present();
    }
  }

}
