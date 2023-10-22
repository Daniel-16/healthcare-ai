import React from "react";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <nav>
          <ul className="space-y-2">
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>Agenda</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
              <ul className="desplegable ml-4 hidden">
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Gestion de citas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Polizas
                  </Link>
                </li>
              </ul>
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-money-bill-wave mr-2"></i>
                  <span>Contabilidad</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
              <ul className="desplegable ml-4 hidden">
                <li>
                  <a
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Tratamientos
                  </a>
                </li>
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Gastos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Facturas
                  </Link>
                </li>
              </ul>
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-chart-bar mr-2"></i>
                  <span>Informes</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
              <ul className="desplegable ml-4 hidden">
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Presupuestos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Informe médico
                  </Link>
                </li>
              </ul>
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-file-alt mr-2"></i>
                  <span>Documentación</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
              <ul className="desplegable ml-4 hidden">
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Firmas pendientes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Documentos
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
