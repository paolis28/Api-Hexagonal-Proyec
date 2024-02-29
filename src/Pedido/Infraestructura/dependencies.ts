import { SqlPedidoRepositorio } from "./sqlPedido.repositorio";

import { EncriptServiHelpers } from "./helpers/EncryptHelper";
import { NotificationHelpers } from "./helpers/NotificationHelper";

import { AddPedidoCasoUso } from "../Aplicacion/addPedido.CasoUso";
import { AddPedidoController } from "./controller/addPedido.controller";

export const encriptServi = new EncriptServiHelpers();
export const notificationHelpers = new NotificationHelpers();

notificationHelpers.inicializar();

export const sqlPedidoRepositorio = new SqlPedidoRepositorio();
export const addPedidoCasoUso = new AddPedidoCasoUso(sqlPedidoRepositorio,encriptServi,notificationHelpers);
export const addPedidoController = new AddPedidoController(addPedidoCasoUso);


