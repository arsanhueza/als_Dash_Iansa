import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Todo {
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
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}