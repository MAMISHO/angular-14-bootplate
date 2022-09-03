import { LoadProcessType } from '../entities/load-process-type.enum';
import { ILoadProcess } from '../entities/load-process.iterface';


export class LoadProcessDTO {

  public uuid: String;

  public startDateTime: Date;

  public endDateTime: Date;

  public fileName: String;

  public mimeType: String;

  public status: Boolean;

  public progress: Number;

  public userName: String;

  public loadProcessType: LoadProcessType;

  // public items: LoadProcessItemDTO[];

  constructor(props?: ILoadProcess) {
    Object.assign(this, props);
  }
}
