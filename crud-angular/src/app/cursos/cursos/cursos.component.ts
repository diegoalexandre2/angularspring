import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialosComponent } from 'src/app/shared/components/error-dialos/error-dialos.component';

import { Course } from '../model/course';
import { CursosService } from './../services/cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos$:Observable<Course[]> ;
  displayedColumns = ['name', 'category'];

  constructor(
    private CursosService:CursosService,
    public dialog: MatDialog
    ) {
   this.cursos$ = this.CursosService.list()
   .pipe(
    catchError(error =>{
      this.deuError('Erro ao carregar. ');
      return of([])
    })
   );
  }
  deuError(errorMsg: string) {
    this.dialog.open(ErrorDialosComponent, {
      data: errorMsg
    });
  }

}
