export function searchContractByName(
  inputSearchValue,
  allExistPartner,
  allIssuedContract
) {
  const convertValueToLowerCase = inputSearchValue.toLowerCase();
  const filteredExistPartners = allExistPartner.filter(
    (e) =>
      e.firstName.toLowerCase().includes(convertValueToLowerCase) ||
      e.lastName.toLowerCase().includes(convertValueToLowerCase) ||
      (e.firstName + " " + e.lastName)
        .toLowerCase()
        .includes(convertValueToLowerCase)
  );
  const filteredIssuedContracts = allIssuedContract.filter(
    (e) =>
      e.firstName.toLowerCase().includes(convertValueToLowerCase) ||
      e.lastName.toLowerCase().includes(convertValueToLowerCase) ||
      (e.firstName + " " + e.lastName)
        .toLowerCase()
        .includes(convertValueToLowerCase)
  );
  return { filteredExistPartners, filteredIssuedContracts };
}
