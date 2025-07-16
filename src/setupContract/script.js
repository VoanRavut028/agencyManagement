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
  getInputIssued,
} from "./features.js";
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
let regex = regexPattern();
let contractExistObj = getInputExist();
let contractIssuedObj = getInputIssued();
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

  let previewData = document.querySelectorAll("#preview-data");

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
          new bootstrap.Modal(
            document.getElementById("previewFormContract")
          ).show();
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
                  <p><strong>Current (%):</strong> ${getPExCurrentPercent}%</p>
                  <p><strong>Transfer (%):</strong> ${getPExTransferPercent}%</p>
                  <p><strong>Paid (USA):</strong> $${getPExPaidAmount}</p>
                  <p><strong>Notes :</strong> $${getPExNote}</p>
                  </div>
                </li>
              </ul>
            </div>
             <div>
                  <button class="btn btn-primary">Edit</button>
                  <button
                    class="btn btn-success"
                    data-bs-dismiss="modal"
                    id="save-contract-toTable"
                    
                  >
                    Save
                  </button>
                </div>
            `;
          document.getElementById("show-preView-contract").innerHTML = summary;
        } else {
          new bootstrap.Modal(
            document.getElementById("modalContractExist")
          ).show();
        }
      } else if (getPurchaseVal === "New Issued Shares") {
        let getIAmountContract = contractIssuedObj.IAmountContract.value;
        let getITotalContract = contractIssuedObj.ITotalContract.value;
        let getIInvestmentContract =
          contractIssuedObj.IInvestmentContract.value;
        let getINoteContract = contractIssuedObj.Inotes.value;

        if (
          !regex.patternPercentage.test(getIAmountContract) &&
          getIAmountContract !== ""
        ) {
          document.querySelector(".issued-amount-contract-error").innerHTML =
            inValidError;
          contractIssuedObj.IAmountContract.classList.add("error-form");
          contractIssuedObj.IAmountContract.classList.remove("valid-form");
          isValid = false;
        } else if (getIAmountContract === "") {
          document.querySelector(".issued-amount-contract-error").innerHTML =
            emptyRequired;
          contractIssuedObj.IAmountContract.classList.add("error-form");
          contractIssuedObj.IAmountContract.classList.remove("valid-form");
          isValid = false;
        } else {
          document.querySelector(".issued-amount-contract-error").innerHTML =
            "";
          contractIssuedObj.IAmountContract.classList.add("valid-form");
          contractIssuedObj.IAmountContract.classList.remove("error-form");
        }

        if (
          !regex.patternPercentage.test(getITotalContract) &&
          getITotalContract !== ""
        ) {
          document.querySelector(".totalIssued-contract-error").innerHTML =
            inValidError;
          contractIssuedObj.ITotalContract.classList.add("error-form");
          contractIssuedObj.ITotalContract.classList.remove("valid-form");
          isValid = false;
        } else if (getITotalContract === "") {
          document.querySelector(".totalIssued-contract-error").innerHTML =
            emptyRequired;
          contractIssuedObj.ITotalContract.classList.add("error-form");
          contractIssuedObj.ITotalContract.classList.remove("valid-form");
          isValid = false;
        } else {
          document.querySelector(".totalIssued-contract-error").innerHTML = "";
          contractIssuedObj.ITotalContract.classList.add("valid-form");
          contractIssuedObj.ITotalContract.classList.remove("error-form");
        }

        if (
          !regex.patternMoney.test(getIInvestmentContract) &&
          getIInvestmentContract !== ""
        ) {
          document.querySelector(
            ".issued-investment-contract-error"
          ).innerHTML = inValidError;
          contractIssuedObj.IInvestmentContract.classList.add("error-form");
          contractIssuedObj.IInvestmentContract.classList.remove("valid-form");
          isValid = false;
        } else if (getIInvestmentContract === "") {
          document.querySelector(
            ".issued-investment-contract-error"
          ).innerHTML = emptyRequired;
          contractIssuedObj.IInvestmentContract.classList.add("error-form");
          contractIssuedObj.IInvestmentContract.classList.remove("valid-form");
          isValid = false;
        } else {
          document.querySelector(
            ".issued-investment-contract-error"
          ).innerHTML = "";
          contractIssuedObj.IInvestmentContract.classList.add("valid-form");
          contractIssuedObj.IInvestmentContract.classList.remove("error-form");
        }

        if (isValid) {
          new bootstrap.Modal(
            document.getElementById("previewFormContract")
          ).show();
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
                 
                   <div class ="d-flex flex-column">
                   <p><strong>Issued Amount (%):</strong> ${getIAmountContract} </p>
                  <p><strong>Total After Issue (%):</strong> ${getITotalContract}</p>
                  <p><strong>Investment (USA):</strong> ${getIInvestmentContract}</p>
                  <p><strong>Notes:</strong> ${getINoteContract}</p>
                  </div>
                </li>
              </ul>
            </div>
             <div>
                  <button class="btn btn-primary">Edit</button>
                  <button
                    class="btn btn-success"
                    data-bs-dismiss="modal"
                    id="save-contract-toTable"
                    
                    
                  >
                    Save
                  </button>
                </div>
            `;
          document.getElementById("show-preView-contract").innerHTML = summary;
        } else {
          new bootstrap.Modal(
            document.getElementById("modalContractIssued")
          ).show();
        }
      }
      const saveButton = document.getElementById("save-contract-toTable");
      if (saveButton) {
        // Always good to check if the element exists
        saveButton.addEventListener("click", () => {
          // Call your saveData function here
          saveData();
        });
      }
    });
  });
  // EndpreView
}
// let purchaseMethod = document.getElementById("purchase-Method");
function saveData() {
  // let saveToArray = document.querySelectorAll("#save-contract-toTable");
  // saveToArray.forEach((saveData) => {
  //   saveData.addEventListener("click", () => {
  //     debugger;
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
      partnerName: contractExistObj.pExname.value,
      pExIdPassport: contractExistObj.pExIdPassport.value,
      pExCurrentPercent: contractExistObj.pExCurrentPercent.value,
      pExTransferPercent: contractExistObj.pExTransferPercent.value,
      pExPaidAmount: contractExistObj.pExPaidAmount.value,
      pExNoteContract: contractExistObj.pExNoteContract.value,
    });
    console.log(existPartnerDatas);
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
      issuedAmount: contractIssuedObj.IAmountContract.value,
      ITotalContract: contractIssuedObj.ITotalContract.value,
      IInvestmentContract: contractIssuedObj.IInvestmentContract.value,
      Inotes: contractIssuedObj.Inotes.value,
    });
    console.log(issuedContractDatas);
  }
  // });

  loadDataContract();
  // });
}
function clearFieldFirtform() {
  firstName.value = "";
  contractNumber.value = "";
  uploadPhoto.value = "";
  lastName.value = "";
  idPassport.value = "";
  signature.value = "";
}
