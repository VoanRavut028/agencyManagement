import {
  loadDataContract,
  contractFirstDetail,
  contractSecondDetail,
  issuedContractDatas,
  existPartnerDatas,
  endDate,
  getInputFirstContract,
  getInputContractSecond,
  regexPattern,
  getInputExist,
  emptyRequired,
  inValidError,
} from "./features.js";

loadDataContract();
handleDataContract();
function handleDataContract() {
  //modalContractIssued
  let IAmountContract = document.getElementById("issued-N_amount-contract");
  let ITotalContract = document.getElementById("total-N_issued-contract");
  let IInvestmentContract = document.getElementById(
    "Investment-N_amount-contract"
  );
  let Inotes = document.getElementById("noteContract-p_exist");
  let ICheckContract = document.getElementById("check-to-confirm-all-contract");

  let contractInfoFirstNextBtn = document.getElementById(
    "contractInfoFirstNextBtn"
  );

  contractFirstDetail();
  contractSecondDetail();
  let contractSecondObj = getInputContractSecond();
  const {
    country,
    province,
    district,
    commune,
    email,
    startAgreementDate,
    endAgreementDate,
    purchaseMethod,
  } = contractSecondObj;
  let contractFirstObj = getInputFirstContract();
  const {
    contractNumber,
    profilePicture,
    uploadPhoto,
    firstName,
    lastName,
    idPassport,
    signature,
  } = contractFirstObj;
  let previewData = document.querySelectorAll("#preview-data");
  let regex = regexPattern();
  let contractExistObj = getInputExist();

  previewData.forEach((checkPreview) => {
    checkPreview.addEventListener("click", () => {
      let getPurchaseVal = purchaseMethod.value;

      let isValid = true;

      if (getPurchaseVal === "Buy from Existing Partner") {
        let getPExname = contractExistObj.pExname.value;
        let getPExIdPassport = contractExistObj.pExIdPassport.value;
        let getPExCurrentPercent = contractExistObj.pExCurrentPercent.value;
        let getPExTransferPercent = contractExistObj.pExTransferPercent.value;
        let getPExPaidAmount = contractExistObj.pExPaidAmount.value;
        let getPExNote = contractExistObj.pExNoteContract.value;

        if (
          !regex.patternID.test(getPExIdPassport) &&
          getPExIdPassport !== ""
        ) {
          document.querySelector(".idPassport-contract-error").innerHTML =
            inValidError;
          contractExistObj.pExIdPassport.classList.add("error-form");
          contractExistObj.pExIdPassport.classList.remove("valid-form");

          isValid = false;
        } else if (getPExIdPassport === "") {
          document.querySelector(".idPassport-contract-error").innerHTML =
            emptyRequired;
          contractExistObj.pExIdPassport.classList.add("error-form");
          contractExistObj.pExIdPassport.classList.remove("valid-form");
          isValid = false;
        } else {
          document.querySelector(".idPassport-contract-error").innerHTML = "";
          contractExistObj.pExIdPassport.classList.add("valid-form");
          contractExistObj.pExIdPassport.classList.remove("error-form");
        }

        if (!regex.patternName.test(getPExname) && getPExname !== "") {
          document.querySelector(".partner-name-contract-error").innerHTML =
            inValidError;
          contractExistObj.pExname.classList.add("error-form");
          contractExistObj.pExname.classList.remove("valid-form");
          isValid = false;
        } else if (getPExname === "") {
          document.querySelector(".partner-name-contract-error").innerHTML =
            emptyRequired;
          contractExistObj.pExname.classList.add("error-form");
          contractExistObj.pExname.classList.remove("valid-form");
          isValid = false;
        } else {
          document.querySelector(".partner-name-contract-error").innerHTML = "";
          contractExistObj.pExname.classList.add("valid-form");
          contractExistObj.pExname.classList.remove("error-form");
        }

        if (
          !regex.patternPercentage.test(getPExCurrentPercent) &&
          getPExCurrentPercent !== ""
        ) {
          document.querySelector(".current-percent-contract-error").innerHTML =
            inValidError;
          contractExistObj.pExCurrentPercent.classList.add("error-form");
          contractExistObj.pExCurrentPercent.classList.remove("valid-form");
          isValid = false;
        } else if (getPExCurrentPercent === "") {
          document.querySelector(".current-percent-contract-error").innerHTML =
            emptyRequired;
          contractExistObj.pExCurrentPercent.classList.add("error-form");
          contractExistObj.pExCurrentPercent.classList.remove("valid-form");
          isValid = false;
        } else {
          document.querySelector(".current-percent-contract-error").innerHTML =
            "";
          contractExistObj.pExCurrentPercent.classList.add("valid-form");
          contractExistObj.pExCurrentPercent.classList.remove("error-form");
        }

        if (
          !regex.patternPercentage.test(getPExTransferPercent) &&
          getPExTransferPercent !== ""
        ) {
          document.querySelector(".transfer-percent-contract-error").innerHTML =
            inValidError;
          contractExistObj.pExTransferPercent.classList.add("error-form");
          contractExistObj.pExTransferPercent.classList.remove("valid-form");
          isValid = false;
        } else if (getPExTransferPercent === "") {
          document.querySelector(".transfer-percent-contract-error").innerHTML =
            emptyRequired;
          contractExistObj.pExTransferPercent.classList.add("error-form");
          contractExistObj.pExTransferPercent.classList.remove("valid-form");
          isValid = false;
        } else {
          document.querySelector(".transfer-percent-contract-error").innerHTML =
            "";
          contractExistObj.pExTransferPercent.classList.add("valid-form");
          contractExistObj.pExTransferPercent.classList.remove("error-form");
        }

        if (
          !regex.patternMoney.test(getPExPaidAmount) &&
          getPExPaidAmount !== ""
        ) {
          document.querySelector(".paid-amount-contract-error").innerHTML =
            inValidError;
          contractExistObj.pExPaidAmount.classList.add("error-form");
          contractExistObj.pExPaidAmount.classList.remove("valid-form");
          isValid = false;
        } else if (getPExPaidAmount === "") {
          document.querySelector(".paid-amount-contract-error").innerHTML =
            emptyRequired;
          contractExistObj.pExPaidAmount.classList.add("error-form");
          contractExistObj.pExPaidAmount.classList.remove("valid-form");
          isValid = false;
        } else {
          document.querySelector(".paid-amount-contract-error").innerHTML = "";
          contractExistObj.pExPaidAmount.classList.add("valid-form");
          contractExistObj.pExPaidAmount.classList.remove("error-form");
        }

        if (isValid) {
          let summary = `
          <div class="row g-4">
              <div class="col-md-5 text-center">
                 <img id="summaryImage" alt="Profile" class="img-fluid rounded-3 mb-3 shadow-sm profile-img">
                 <p class="h5 fw-semibold text-dark">
                   ${firstName.value} ${lastName.value}
                 </p>
                 <p class="text-muted small">ID / Passport: ${
                   idPassport.value
                 }</p>
                 <p class="text-muted small">
                   Signature: ${signature.value || "—"}
                 </p>
              </div>
              <div class="col-md-7">
                <h3 class="section-title">Details</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <strong>Email:</strong>
                    <span>${email.value}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Address:</strong>
                    <span>${commune.value}, ${district.value},<br />${
            province.value
          }, ${country.value}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Agreement:</strong>
                    <span>${startAgreementDate.value} → ${
            endAgreementDate.value
          }</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Purchase Method:</strong>
                    <span>${getPurchaseVal}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="section-title">Partner Information</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class ="d-flex flex-column">
                   <p><strong>Partner Name:</strong> ${getPExname} </p>
                  <p><strong>ID/Passport:</strong> ${getPExIdPassport}</p>
                  <p><strong>Current %:</strong> ${getPExCurrentPercent}%</p>
                  <p><strong>Transfer %:</strong> ${getPExTransferPercent}%</p>
                  <p><strong>Paid:</strong> $${getPExPaidAmount}</p>
                  <p><strong>Notes:</strong> $${getPExNote}</p>
                  </div>
                </li>
              </ul>
            </div>`;
          document.getElementById("show-preView-contract").innerHTML = summary;
          new bootstrap.Modal(
            document.getElementById("previewFormContract")
          ).show();
        } else {
          new bootstrap.Modal(
            document.getElementById("modalContractExist")
          ).show();
        }
      } else if (getPurchaseVal === "New Issued Shares") {
        let getIAmountContract = contractExistObj.IAmountContract.value;
        let getITotalContract = contractExistObj.ITotalContract.value;
        let getIInvestmentContract = contractExistObj.IInvestmentContract.value;

        if (
          !regex.patternMoney.test(getIAmountContract) &&
          getIAmountContract !== ""
        ) {
          document.querySelector(".issued-amount-contract-error").innerHTML =
            inValidError;
          contractExistObj.IAmountContract.classList.add("error-form");
          isValid = false;
        } else if (getIAmountContract === "") {
          document.querySelector(".issued-amount-contract-error").innerHTML =
            emptyRequired;
          contractExistObj.IAmountContract.classList.add("error-form");
          isValid = false;
        } else {
          contractExistObj.IAmountContract.classList.add("valid-form");
        }

        if (
          !regex.patternMoney.test(getITotalContract) &&
          getITotalContract !== ""
        ) {
          document.querySelector(".total-contract-error").innerHTML =
            inValidError;
          contractExistObj.ITotalContract.classList.add("error-form");
          isValid = false;
        } else if (getITotalContract === "") {
          document.querySelector(".total-contract-error").innerHTML =
            emptyRequired;
          contractExistObj.ITotalContract.classList.add("error-form");
          isValid = false;
        } else {
          contractExistObj.ITotalContract.classList.add("valid-form");
        }

        if (
          !regex.patternMoney.test(getIInvestmentContract) &&
          getIInvestmentContract !== ""
        ) {
          document.querySelector(".investment-contract-error").innerHTML =
            inValidError;
          contractExistObj.IInvestmentContract.classList.add("error-form");
          isValid = false;
        } else if (getIInvestmentContract === "") {
          document.querySelector(".investment-contract-error").innerHTML =
            emptyRequired;
          contractExistObj.IInvestmentContract.classList.add("error-form");
          isValid = false;
        } else {
          contractExistObj.IInvestmentContract.classList.add("valid-form");
        }

        // --- End of validation for New Issued Shares ---

        if (isValid) {
          // All validations passed for "New Issued Shares"
          let summary = `
          <div class="row g-4">
              <div class="col-md-5 text-center">
                 <img id="summaryImage" alt="Profile" class="img-fluid rounded-3 mb-3 shadow-sm profile-img">
                 <p class="h5 fw-semibold text-dark">
                   ${firstName.value} ${lastName.value}
                 </p>
                 <p class="text-muted small">ID / Passport: ${
                   idPassport.value
                 }</p>
                 <p class="text-muted small">
                   Signature: ${signature.value || "—"}
                 </p>
              </div>
              <div class="col-md-7">
                <h3 class="section-title">Details</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <strong>Email:</strong>
                    <span>${email.value}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Address:</strong>
                    <span>${commune.value}, ${district.value},<br />${
            province.value
          }, ${country.value}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Agreement:</strong>
                    <span>${startAgreementDate.value} → ${
            endAgreementDate.value
          }</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Purchase Method:</strong>
                    <span>${getPurchaseVal}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="section-title">Share Issuance</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div>
                    <strong>Issued Amount:</strong> ${getIAmountContract}<br />
                    <strong>Total After Issue:</strong> ${getITotalContract}<br />
                    <strong>Investment:</strong> $${getIInvestmentContract}
                  </div>
                </li>
              </ul>
            </div>`;
          document.getElementById("show-preView-contract").innerHTML = summary;
          new bootstrap.Modal(
            document.getElementById("previewFormContract")
          ).show(); // Show preview modal
        } else {
          // Validation failed, show the input modal for New Issued Shares
          // Assuming you have a separate modal for "New Issued Shares" inputs, e.g., "modalNewIssuedShares"
          new bootstrap.Modal(
            document.getElementById("modalNewIssuedShares")
          ).show();
        }
      }
    });
  });
  // EndpreView
  let saveToArray = document.getElementById("save-contract-toTable");
  saveToArray.addEventListener("click", (event) => {
    let getPurChaseMethod = purchaseMethod.value;
    if (getPurChaseMethod === "Buy from Existing Partner") {
      existPartnerDatas.push({
        contactNumber: contractNumber.value,
        firstName: firstName.value,
        lastName: lastName.value,
        idPassport: idPassport.value,
        signature: signature.value,
        purchase: getPurChaseMethod,
        email: email.value,
        adress: {
          country: country.value,
          province: province.value,
          district: district.value,
          commune: commune.value,
        },
        startAgreementDate: startAgreementDate.value,
        endAgreementDate: endAgreementDate.value,
        photo: uploadPhoto.value,
        partnerName: pExname.value,
        pExIdPassport: pExIdPassport.value,
        pExCurrentPercent: pExCurrentPercent.value,
        pExTransferPercent: pExTransferPercent.value,
        pExPaidAmount: pExPaidAmount.value,
        pExNoteContract: pExNoteContract.value,
      });
    } else if (getPurChaseMethod === "New Issued Shares") {
      issuedContractDatas.push({
        contactNumber: contractNumber.value,
        firstName: firstName.value,
        lastName: lastName.value,
        idPassport: idPassport.value,
        signature: signature.value,
        purchase: getPurChaseMethod,
        email: email.value,
        adress: {
          country: country.value,
          province: province.value,
          district: district.value,
          commune: commune.value,
        },
        startAgreementDate: startAgreementDate.value,
        endAgreementDate: endAgreementDate.value,
        photo: uploadPhoto.value,
        issuedAmount: IAmountContract.value,
        ITotalContract: ITotalContract.value,
        IInvestmentContract: IInvestmentContract.value,
        Inotes: Inotes.value,
      });
    }

    loadDataContract();
  });
}

function clearFieldFirtform() {
  firstName.value = "";
  contractNumber.value = "";
  uploadPhoto.value = "";
  lastName.value = "";
  idPassport.value = "";
  signature.value = "";
}
