import Structure from "../structure";

export const generate = async (name:string) => {
  const structure = new Structure();
  structure.generateTemplate(name)
}