import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private store: Storage | null = null;

  constructor(
    private storage: Storage,
  ) { }

  async init() {
    this.store = await this.storage.create();
  }

  async setData(key: string, value: string): Promise<void> {
    if (!this.store) {
      await this.init();
    }
    return this.store?.set(key, value);
  }

  async getData(key: string): Promise<string> {
    if (!this.store) {
      await this.init();
    }
    return this.store?.get(key);
  }
}
