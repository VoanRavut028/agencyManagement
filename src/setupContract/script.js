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
  previewData.forEach((checkPreview) => {
    let contractExistObj = getInputExist();
    let modal = "";
    if (purchaseMethod.value === "Buy from Existing Partner") {
      checkPreview.addEventListener("click", () => {
        let getPExname = contractExistObj.pExname.value;
        let getPExIdPassport = contractExistObj.pExIdPassport.value;
        let getPExCurrentPercent = contractExistObj.pExCurrentPercent.value;
        let getPExTransferPercent = contractExistObj.pExTransferPercent.value;
        let getPExPaidAmount = contractExistObj.pExPaidAmount.value;
        let getPExNoteContract = contractExistObj.pExNoteContract.value;
        let getPnameErr = document.querySelector(
          ".partner-name-contract-error"
        );
        // let getIAmountContract = contractExistObj.IAmountContract.value;
        // let getITotalContract = contractExistObj.ITotalContract.value;
        // let getIInvestmentContract = contractExistObj.IInvestmentContract.value;
        // let getInotes = contractExistObj.Inotes.value;

        var isValid = true;
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
          contractExistObj.pExIdPassport.classList.remove("valid-form");
          contractExistObj.pExIdPassport.classList.add("error-form");
          isValid = false;
        } else {
          contractExistObj.pExIdPassport.classList.remove("error-form");
          contractExistObj.pExIdPassport.classList.add("valid-form");
          document.querySelector(".idPassport-contract-error").innerHTML = "";
        }
        if (!regex.patternName.test(getPExname) && getPExname !== "") {
          getPnameErr.innerHTML = inValidError;
          contractExistObj.pExname.classList.add("error-form");
          contractExistObj.pExname.classList.remove("valid-form");
          isValid = false;
        } else if (getPExname === "") {
          getPnameErr.innerHTML = emptyRequired;
          contractExistObj.pExname.classList.remove("valid-form");
          contractExistObj.pExname.classList.add("error-form");
          isValid = false;
        } else {
          contractExistObj.pExname.classList.remove("error-form");
          contractExistObj.pExname.classList.add("valid-form");
          document.querySelector(".partner-name-contract-error").innerHTML = "";
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
          contractExistObj.pExCurrentPercent.classList.remove("valid-form");
          contractExistObj.pExCurrentPercent.classList.add("error-form");
          isValid = false;
        } else {
          contractExistObj.pExCurrentPercent.classList.remove("error-form");
          contractExistObj.pExCurrentPercent.classList.add("valid-form");
          document.querySelector(".current-percent-contract-error").innerHTML =
            "";
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
          contractExistObj.pExTransferPercent.classList.remove("valid-form");
          contractExistObj.pExTransferPercent.classList.add("error-form");
          isValid = false;
        } else {
          contractExistObj.pExTransferPercent.classList.remove("error-form");
          contractExistObj.pExTransferPercent.classList.add("valid-form");
          document.querySelector(".transfer-percent-contract-error").innerHTML =
            "";
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
          contractExistObj.pExPaidAmount.classList.remove("valid-form");
          contractExistObj.pExPaidAmount.classList.add("error-form");
          isValid = false;
        } else {
          contractExistObj.pExPaidAmount.classList.remove("error-form");
          contractExistObj.pExPaidAmount.classList.add("valid-form");
          document.querySelector(".paid-amount-contract-error").innerHTML = "";
        }

        // if (isValid) {
        //   modal = "previewFormContract";
        // } else {
        //   modal = "modalContractExist";
        // }
      });
    } else if (purchaseMethod.value === "New Issued Shares") {
      // I wild have another form input here
      var isValid = true;
    }
    if (isValid) {
      let summary = `
       <div class="row g-4">
            <div class="col-md-5 text-center">
             <img id="summaryImage" alt="Profile" class="img-fluid rounded-3 mb-3 shadow-sm profile-img">
              <p class="h5 fw-semibold text-dark">
                ${firstName.value} ${lastName.value}
              </p>
              <p class="text-muted small">ID / Passport: ${idPassport.value}</p>
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
                  <span
                    >${commune.value}, ${district.value},<br />${
        province.value
      },
                    ${country.value}</span
                  >
                </li>
                <li class="list-group-item">
                  <strong>Agreement:</strong>
                  <span
                    >${startAgreementDate.value} →
                    ${endAgreementDate.value}</span
                  >
                </li>
                <li class="list-group-item">
                  <strong>Purchase Method:</strong>
                  <span>${getPurchaseVal}</span>
                </li>
              </ul>
            </div>
          </div>
    `;

      if (getPurchaseVal === "Buy from Existing Partner") {
        summary += `
      <div class="mt-4">
            <h3 class="section-title">Partner Information</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div>
                  <strong>Partner Name:</strong> ${pExname.value}<br />
                  <strong>ID/Passport:</strong> ${pExIdPassport.value}<br />
                  <strong>Current %:</strong> ${pExCurrentPercent.value}%<br />
                  <strong>Transfer %:</strong>
                  ${pExTransferPercent.value}%<br />
                  <strong>Paid:</strong> $${pExPaidAmount.value}
                </div>
              </li>
            </ul>
          </div>`;
      } else if (getPurchaseVal === "New Issued Shares") {
        summary += `
        <div class="mt-4">
            <h3 class="section-title">Share Issuance</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div>
                  <strong>Issued Amount:</strong> ${IAmountContract.value}<br />
                  <strong>Total After Issue:</strong>
                  ${ITotalContract.value}<br />
                  <strong>Investment:</strong> $${IInvestmentContract.value}
                </div>
              </li>
            </ul>
          </div>`;
      }

      document.getElementById("show-preView-contract").innerHTML = summary;
    } else {
    }
    new bootstrap.Modal(document.getElementById(modal)).show();
  });
  previewData.forEach((preview) => {
    preview.addEventListener("click", () => {
      let getPurchaseVal = purchaseMethod.value;
    });
  });

  /*
  contractInfoOBJ = {
    contactNumber: getContractNumber,
    firstName: getFirstName,
    lastName: getLastName,
    idPassport: getIdPassport,
    signature: getSignature,
    email: getEmail,
    adress: {
      country: getCountry,
      province: getProvince,
      district: getDistrict,
      commune: getCommune,
    },
    startAgreementDate: getStartAgreement,
    LastAgreementDate: getEndAgreement,
    photo: getPhotoAddress,
  };
  let existOBJ = {
    partnerName: getPExname,
    pExIdPassport: getPExIdPassport,
    pExCurrentPercent: getPExCurrentPercent,
    pExTransferPercent: getPExTransferPercent,
    pExPaidAmount: getPExPaidAmount,
    pExNoteContract: getPExNoteContract,
  };
  let issuedOBJ = {
    IAmountContract: getIAmountContract,
    ITotalContract: getITotalContract,
    IInvestmentContract: getIInvestmentContract,
    Inotes: getInotes,
  };
  */
  // preView

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
