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
  currentIndex,
} from "./features.js";
console.log(document.querySelectorAll(".modal"));

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
  contractFirstDetail();
  contractSecondDetail();

  let previewData = document.querySelectorAll(".preview-data");

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

        if (!regex.patternPartnerName.test(getPExname) && getPExname !== "") {
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
                    <span class="text-primary">Email:</span>
                    <span>${email.value}</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Address:</span>
                    <span>${commune.value}, ${district.value},<br />${
            province.value
          }, ${country.value}</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Agreement:</span>
                    <span>${startAgreementDate.value} → ${
            endAgreementDate.value
          }</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Purchase Method:</span>
                    <span >${getPurchaseVal}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="section-title">Partner Information</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class ="d-flex flex-column">
                   <p><span>Partner Name:</span> ${getPExname} </p>
                  <p><span class="text-primary">ID/Passport:</span> ${getPExIdPassport}</p>
                  <p><span class="text-primary">Current (%):</span> ${getPExCurrentPercent}%</p>
                  <p><span class="text-primary">Transfer (%):</span> ${getPExTransferPercent}%</p>
                  <p><span class="text-primary">Paid (USA):</span> $${getPExPaidAmount}</p>
                  <p><span class="text-primary">Notes :</span> $${getPExNote}</p>
                  </div>
                </li>
              </ul>
            </div>
             <div class="d-flex justify-content-end gap-2">
                  <button class="btn btn-primary">Edit</button>
                  <button
                    class="btn btn-success save-contract-toTable"
                    data-bs-dismiss="modal"      
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
                    <span class="text-primary">Email:</span>
                    <span>${email.value}</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Address:</span>
                    <span>${commune.value}, ${district.value},<br />${
            province.value
          }, ${country.value}</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Agreement:</span>
                    <span>${startAgreementDate.value} → ${
            endAgreementDate.value
          }</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Purchase Method:</span>
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
                   <p><span class="text-primary">Issued Amount (%):</span> ${getIAmountContract} </p>
                  <p><span class="text-primary">Total After Issue (%):</span> ${getITotalContract}</p>
                  <p><span class="text-primary">Investment (USA):</span> ${getIInvestmentContract}</p>
                  <p><span class="text-primary">Notes:</span> ${getINoteContract}</p>
                  </div> 
                </li>
              </ul>
            </div>
             <div class="d-flex justify-content-end gap-2 ">
                  <button class="btn btn-primary">Edit</button>
                  <button
                    class="btn btn-success save-contract-toTable"
                    data-bs-dismiss="modal"
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
      const saveButton = document.querySelectorAll(".save-contract-toTable");
      saveButton.forEach((saveChange) => {
        saveChange.addEventListener("click", () => {
          saveData();
        });
      });
    });
  });
  // EndpreView
}

document.querySelectorAll(".save-edit-to-table").forEach((edit) => {
  edit.addEventListener("click", () => {
    debugger;
    saveData();
  });
});

export function saveData() {
  debugger;
  let getPurChaseMethod =
    purchaseMethod.value || document.getElementById("purchaseMethod").value;
  if (getPurChaseMethod === "Buy from Existing Partner") {
    let activeIndex = currentIndex.value;

    if (activeIndex !== "") {
      existPartnerDatas[activeIndex] = {
        contactNumber: contractNumber.value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        idPassport: document.getElementById("idPassport").value,
        signature: document.getElementById("signature").value,
        purchase: document.getElementById("purchaseMethod").value,
        email: document.getElementById("email").value,
        adress: {
          country: document.getElementById("country").value,
          province: document.getElementById("province").value,
          district: document.getElementById("district").value,
          commune: document.getElementById("commune").value,
        },
        startAgreementDate: document.getElementById("startAgreementDate").value,
        endAgreementDate: document.getElementById("endAgreementDate").value,
        photo: uploadPhoto.value,
        partnerName: document.getElementById("pExname").value,
        pExIdPassport: document.getElementById("pExIdPassport").value,
        pExCurrentPercent: document.getElementById("pExCurrentPercent").value,
        pExTransferPercent: document.getElementById("pExTransferPercent").value,
        pExPaidAmount: document.getElementById("pExPaidAmount").value,
        pExNoteContract: document.getElementById("edit-note-exist").value,
      };
    } else {
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
    }
    console.log(existPartnerDatas);
  } else {
    let activeIndex = currentIndex.value;
    if (activeIndex !== "") {
      issuedContractDatas[activeIndex] = {
        contactNumber: contractNumber.value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        idPassport: document.getElementById("idPassport").value,
        signature: document.getElementById("signature").value,
        purchase: document.getElementById("purchaseMethod").value,
        email: document.getElementById("email").value,
        adress: {
          country: document.getElementById("country").value,
          province: document.getElementById("province").value,
          district: document.getElementById("district").value,
          commune: document.getElementById("commune").value,
        },
        startAgreementDate: document.getElementById("startAgreementDate").value,
        endAgreementDate: document.getElementById("endAgreementDate").value,
        photo: uploadPhoto.value,
        issuedAmount: document.getElementById("IAmountContract").value,
        ITotalContract: document.getElementById("ITotalContract").value,
        IInvestmentContract: document.getElementById("IInvestmentContract")
          .value,
        Inotes: document.getElementById("edit-note-issued").value,
      };
      currentIndex.value = "";
    } else {
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
    }
    console.log(issuedContractDatas);
  }

  loadDataContract();
}
function clearFieldFirtform() {
  firstName.value = "";
  contractNumber.value = "";
  uploadPhoto.value = "";
  lastName.value = "";
  idPassport.value = "";
  signature.value = "";
}
