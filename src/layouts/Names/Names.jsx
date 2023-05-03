import React from "react";
import { UserCard } from "../../components/UserCard/UserCard";

let arrayNombres = [
    {id: 1, nombre: "Mara", apellido: "Scampini"},
    {id: 2, nombre: "Héctor", apellido: "Ginory"},
    {id: 3, nombre: "Jose", apellido: "Ruiz"},
    {id: 4, nombre: "Carlos", apellido: "Sabrido"},
    {id: 5, nombre: "Demian", apellido: "Ortizlanzas"},
  ];

export const Names = () => {
  return (
    <>
      {arrayNombres.map((geek) => {
        return (
          <UserCard
            key={geek.id}
            persona={geek}
          />
        );
      })}{" "}
    </>
  );
};
