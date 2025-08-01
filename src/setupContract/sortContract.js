// import { loadDataContract } from "./features";

export function sortContractByPaid(exist, issued) {
  let existSort = exist.sort(
    (low, hight) => low.pExPaidAmount - hight.pExPaidAmount
  );
  let issuedSort = issued.sort(
    (low, hight) => low.IInvestmentContract - hight.IInvestmentContract
  );

  return { existSort, issuedSort };
}
export function sortContracByName(exist, issued) {
  let existSort = exist.sort((a, b) => a.firstName > b.firstName);
  let issuedSort = issued.sort((a, b) => a.firstName > b.firstName);

  return { existSort, issuedSort };
}
export function sortByID(exist, issued) {
  let existSort = exist.sort((a, b) => a.idPassport > b.idPassport);
  let issuedSort = issued.sort((a, b) => a.idPassport > b.idPassport);

  return { existSort, issuedSort };
}
