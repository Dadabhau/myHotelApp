import { Component } from '@angular/core';
import { DataStoragesService } from '../shared/data.storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStoragesService: DataStoragesService) {}

  onSaveData() {
    this.dataStoragesService.storeRecipes();
  }
  onFetchData() {
    this.dataStoragesService.fetchRecipes();
  }
}
