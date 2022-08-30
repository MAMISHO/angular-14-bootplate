import { ResponseData } from './response-data.interface';

export enum UploadType {
  'PRODUCTS',
  'LABORATORIES',
  'CATEGORIES'
}

export class UploadFile {
  constructor(
    public endDate?: any, // Fecha de fin de la importación
    public error?: boolean, // Indica si hay algún error
    public errorDescription?: string, // Descripción del error (max 4000)
    public fileName?: string, // Nombre del fichero de importación
    public id?: number, // identificador del proceso de la carga
    // public items?: ImportProcessItem[],      // Items de la carga
    public running?: boolean, // Indica si está en curso.
    public startDate?: any, // Fecha de inicio de la importación
    public stopByClient?: boolean, // Indica si ha sido detenido por el cliente.
    public totalItems?: number, // Número total de items procesados
    public totalItemsError?: number, // Número de items con error
    public uploadType?: UploadType // Tipo del proceso de carga // public importDataType?: ImportDataType,    // tipo de datos de carga // public importProcessFile?: ImportProcessFile, // Objeto que contiene el fichero y la autorización // public customCollegeId?: number          // Id del colegio al que pertenece la carga
  ) {
    this.error = false;
    this.stopByClient = false;
  }
}

export interface ProducFileResponse extends ResponseData<Boolean> {}
