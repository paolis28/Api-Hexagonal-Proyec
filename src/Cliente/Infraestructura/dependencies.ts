import { SqlClienteRepositorio } from "./sqlCliente.repositorio";
import { AddClienteCasoUso } from "../Aplicacion/addCliente.CasoUso";
import { AddClienteController } from "./controller/addCliente.controller";

import { DeleteClienteCasoUso } from "../Aplicacion/deleteCliente.CasoUso";
import { DeleteClienteController } from "./controller/deleteCliente.controller";

export const sqlClienteRepositorio = new SqlClienteRepositorio();
export const addClienteCasoUso = new AddClienteCasoUso(sqlClienteRepositorio);
export const addClienteController = new AddClienteController(addClienteCasoUso);

export const deleteClienteCasoUso = new DeleteClienteCasoUso(sqlClienteRepositorio);
export const deleteClienteController = new DeleteClienteController(deleteClienteCasoUso);