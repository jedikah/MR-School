import { Matiere } from "../../../../../graphql/types";
import produce from "immer";

export function filterOrderMatieres(
  matieres: Matiere[],
  search: string,
  sort: boolean
): Matiere[] {
  matieres = matieres.filter((m) => m.designation.includes(search));
  return produce(matieres, (draft) => {
    draft.sort(function (a, b) {
      if (sort)
        return a.designation[0].charCodeAt(0) - b.designation[0].charCodeAt(0);
      return b.designation[0].charCodeAt(0) - a.designation[0].charCodeAt(0);
    });
  });
}
