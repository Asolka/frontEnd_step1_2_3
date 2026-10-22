//Variables contenant les listes json
//Liste priorités
let priorityList = [
  { idPriorite: 1, priorite: "Urgente" },
  { idPriorite: 2, priorite: "Importante" },
  { idPriorite: 3, priorite: "Normale" },
  { idPriorite: 4, priorite: "Faible" },
  { idPriorite: 5, priorite: "Optionnelle" },
];

//Liste catégories
let categoryList = [
  { idCategorie: 1, categorie: "Etudes" },
  { idCategorie: 2, categorie: "Maison" },
  { idCategorie: 3, categorie: "Courses" },
  { idCategorie: 4, categorie: "Santé" },
  { idCategorie: 5, categorie: "Perso" },
];

//Liste statuts
let statusList = [
  { idStatut: 1, statut: "Terminé" },
  { idStatut: 2, statut: "En cours" },
  { idStatut: 3, statut: "En pause" },
  { idStatut: 4, statut: "Annulée" },
  { idStatut: 5, statut: "Pas commencée" },
];

//Liste récurrence
let recurrenceList = [
  { idRecurrence: 1, recurrence: "Aucune" },
  { idRecurrence: 2, recurrence: "Quotidienne" },
  { idRecurrence: 3, recurrence: "Hebdomadaire" },
  { idRecurrence: 4, recurrence: "Mensuelle" },
  { idRecurrence: 5, recurrence: "Annuelle" },
];

//Complétion liste priorité
priorityList.forEach(function (item) {
  //On créer la variable option dans laquelle on attribue l'élement html option  en y intégrant dynamiquement les items
  let option = `<option value = "${item.idPriorite}">${item.priorite}</option>`;
  //On récupère l'élément liste pour y insérer dynamiquement chaque option
  document.getElementById("idPriorite").insertAdjacentHTML("beforeend", option);
});

//Complétion liste catégorie
categoryList.forEach(function (item) {
  //On créer la variable option dans laquelle on attribue l'élement html option  en y intégrant dynamiquement les items
  let option = `<option value = "${item.idCategorie}">${item.categorie}</option>`;
  //On récupère l'élément liste pour y insérer dynamiquement chaque option
  document
    .getElementById("idCategorie")
    .insertAdjacentHTML("beforeend", option);
});

//Complétion liste statut
statusList.forEach(function (item) {
  //On créer la variable option dans laquelle on attribue l'élement html option  en y intégrant dynamiquement les items
  let option = `<option value = "${item.idStatut}">${item.statut}</option>`;
  //On récupère l'élément liste pour y insérer dynamiquement chaque option
  document.getElementById("idStatut").insertAdjacentHTML("beforeend", option);
});

//Complétion liste recurrence
recurrenceList.forEach(function (item) {
  //On créer la variable option dans laquelle on attribue l'élement html option  en y intégrant dynamiquement les items
  let option = `<option value = "${item.idRecurrence}">${item.recurrence}</option>`;
  //On récupère l'élément liste pour y insérer dynamiquement chaque option
  document.getElementById("idRecurrence").insertAdjacentHTML("beforeend", option);
});
