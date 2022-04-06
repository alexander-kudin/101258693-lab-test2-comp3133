import { Component, Inject } from '@angular/core';
import { Mission } from 'src/app/models/mission';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent {
  public missionSelected: Mission;

  constructor(private dialogRef: MatDialogRef<MissiondetailsComponent>, @Inject(MAT_DIALOG_DATA) data: {missionSelected: Mission}) {
    this.missionSelected = data.missionSelected;
    console.log(this.missionSelected)
  }

}