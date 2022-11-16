import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/dtos/equipment.dto';
import { EquipmentService } from 'src/app/services/equipment.service';
import { SelectionType } from '@swimlane/ngx-datatable';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.page.html',
  styleUrls: ['./equipment.page.scss'],
})
export class EquipmentPage implements OnInit {

  equipmentRows: Equipment[] = [];
  readonly selectionType = SelectionType;
  equipmentSelected: Equipment[];

  constructor(
    private equipmentService: EquipmentService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  async getEquipmentList() {
    this.equipmentRows = await this.equipmentService.getEquipmentList();
  }

  async confirmDelete(equipment: Equipment) {
    const confirmationAlert = await this.alertController.create({
      message: `Are you sure you wish to delete ${equipment.name}?`,
      buttons: [
        {
          text: 'No, keep it',
          role: 'cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            this.delete(equipment.id.toString());
            confirmationAlert.dismiss();
          }
        }
      ]
    });

    confirmationAlert.present();
  }

  async delete(id: string) {
    const loading = await this.loadingController.create({
      message: 'Deleting equipment...'
    });
    const errorAlert = await this.alertController.create({
      message: 'error',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    });
    const successToast = await this.toastController.create({
      message: 'Equipment deleted successfully!',
      duration: 3000,
      color: 'success',
      position: 'top'
    });

    try {
      loading.present();
      await this.equipmentService.deleteEquipment(id);
      loading.dismiss();
      successToast.present();
    }
    catch(ex) {
      loading.dismiss();
      errorAlert.message = ex.error.message;
      errorAlert.present();
    }

    await this.getEquipmentList();
  }

  ionViewDidEnter() {
    this.getEquipmentList();
  }

}
