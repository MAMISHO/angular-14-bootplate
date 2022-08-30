import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadFile } from '../../models/entities/product-file.interface';
import { LoaderFileService } from '../../services/loader-file.service';

@Component({
  selector: 'products-uploader-page',
  templateUrl: './product-uploader.page.html'
})
export class ProductUploaderPage implements OnInit {
  public uploadFile: UploadFile;
  uploadForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private loaderFileService: LoaderFileService) {}

  async ngOnInit() {
    this.uploadFile = new UploadFile();
    this.uploadForm = this.formBuilder.group({
      fileInput: [''],
      fileName: [''],
      uploadType: ['', [Validators.required]]
    });
  }

  setFileData(event, field, isImage) {
    // this.structureBlob = new StructureBlob();
    if (event && event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadForm.get('fileInput').setValue(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
      const file = event.target.files[0];
      // this.uploadForm.get('fileInput').setValue(file);
      // this.uploadFile.fileName = file.name;
      this.uploadForm.get('fileName').setValue(file.name);

      /*this.dataUtils.toBase64(file, (base64Data) => {
            this.structureBlob[field] = base64Data;
            this.structureBlob[`${field}ContentType`] = file.type;
            this.structureBlob.id = undefined;
            this.structureBlob.status = true;
            this.importProcess.fileName = file.name;
        });*/
      /*
      this.loadFile(file).subscribe((res) => {
        const srt: any = res;
        this.structureBlob[field] = srt.split('base64,')[1];
        this.structureBlob[`${field}ContentType`] = file.type;
        this.structureBlob.id = undefined;
        this.structureBlob.status = true;
        this.importProcess.fileName = file.name;
      });
      */
    }
  }

  /* public loadFile(file: any): Observable<string | ArrayBuffer> {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        observer.next(reader.result);
        return observer.complete();
      };
    });
  }*/

  public canUpload(): boolean {
    let canUpload = true;
    return this.uploadForm.get('fileName').valid;
    /* if (!Util.hasValidValue(this.uploadFile.fileName)) {
        canUpload = false;
    }
    if (!Util.hasValidValue(this.importProcess.importDataType)) {
        canUpload = false;
    }*/
    // return canUpload;
  }

  public confirmUploadFile(): void {
    this.loaderFileService.loadProductsFile(this.uploadForm).subscribe((data) => {
      console.log(data);
    });
  }
}
