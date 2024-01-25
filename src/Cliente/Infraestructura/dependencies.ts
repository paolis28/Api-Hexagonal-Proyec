import { SqlClienteRepositorio } from "./sqlCliente.repositorio";
import { AddClienteCasoUso } from "../Aplicacion/addCliente.CasoUso";
import { AddClienteController } from "./controller/addCliente.controller";

export const sqlClienteRepositorio = new SqlClienteRepositorio();
export const addClienteCasoUso = new AddClienteCasoUso(sqlClienteRepositorio);
export const addClienteController = new AddClienteController(addClienteCasoUso);