import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ImportService } from '../api/import.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderFileService {
  constructor(private importService: ImportService) {}

  public loadProductsFile(form: FormGroup): Observable<Boolean> {
    const formData = new FormData();
    // formData.append('file', form.get('profile').value);
    for (let i in form.controls) {
      if (form.controls[i].value instanceof Blob || form.controls[i].value instanceof File) {
        //  Check if key value is file
        formData.append(i, form.controls[i].value, form.controls[i].value.name ? form.controls[i].value.name : '');
      } else {
        formData.append(i, form.controls[i].value);
      }
    }
    return this.importService.loadProductsFile(formData);
  }
}
