import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit, OnDestroy {

  equipmentForm: FormGroup;
  formsub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private navController: NavController,
  ) {
    this.equipmentForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(200),
        ]
      ],
      ip: [
        '',
        [
          Validators.required,
          Validators
            // eslint-disable-next-line max-len
            .pattern(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        ]
      ],
    });
  }

  get formControl() {
    return this.equipmentForm.controls;
  }

  ngOnInit() {
    this.formsub = this.equipmentForm.valueChanges.subscribe((values) => {
      console.log(values);
    });
  }

  async submitEquipment() {
    const loadingIndicator = await this.loadingController.create({
      message: 'Submitting Equipment...'
    });

    try {
      loadingIndicator.present();
      this.equipmentForm.markAsTouched();
      await this.equipmentService.createEquipment(this.equipmentForm.value);
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

  ngOnDestroy() {
    this.formsub.unsubscribe();
  }

}
