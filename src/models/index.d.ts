import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UntitledModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UntitledModel {
  readonly id: string;
  readonly nroguia?: string;
  readonly rutcliente?: string;
  readonly estad?: string;
  readonly pesototal?: string;
  readonly cliente?: string;
  readonly fechadespacho?: string;
  readonly horaescaneo?: string;
  readonly nrobultos?: string;
  readonly producto?: string;
  readonly turno?: string;
  readonly chofer?: string;
  readonly patente?: string;
  readonly arrastre?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UntitledModel, UntitledModelMetaData>);
  static copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel, UntitledModelMetaData>) => MutableModel<UntitledModel, UntitledModelMetaData> | void): UntitledModel;
}