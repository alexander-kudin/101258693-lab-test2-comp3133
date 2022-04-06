import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Mission } from 'src/app/models/mission';
import { HttpService } from 'src/app/services/http.service';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {
  public missions?: Mission[];
  public missionSelected: Mission | undefined;

  constructor(private httpService: HttpService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.httpService
    .getMissionList()
    .subscribe((missionList: Mission[]) => {
      this.missions = missionList;
    });
  }

  onMissionClick(mission: Mission) {
    this.missionSelected = mission;
    this.openDetailsDialog();
  }

  openDetailsDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      missionSelected: this.missionSelected,
  };

    this.dialog.open(MissiondetailsComponent, dialogConfig);


    // const dialogRef = this.dialog.open(MissiondetailsComponent, {
    //   data: { missionSelected: this.missionSelected },
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
