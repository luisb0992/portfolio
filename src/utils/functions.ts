/**
 * Herramientas o funciones adicionales de complemento
 *
 * @author Luis Barrios
 */

import { Ref, ref } from "vue";

/**
 * calcula los años de experiencia y los agrega al array
 *
 * @returns array
 */
export const yearsExperience: Function = (init: string) => {
  const dataYearsExperience = [];
  const initDate = new Date(init);
  const initYear = initDate.getFullYear() + 1;

  const date = new Date();
  const [year] = [date.getFullYear() + 1];

  // años de experiencia
  const years = year - initYear;

  let initY = initYear;
  for (let index = 0; index < years; index++) {
    dataYearsExperience.push(initY++);
  }

  return dataYearsExperience;
};

/**
 * Tecnologías usadas a lo largo de mis proyectos
 *
 * @returns Object
 */
export const technologies: Object = {
  laravel: "laravel",
  express: "express",
  wordpress: "wordpress",
  vue: "vue",
  angular: "angular",
  react: "react",
  pwa: "pwa",
};
