import {
  loadDataContract,
  contractFirstDetail,
  contractSecondDetail,
  issuedContractDatas,
  existPartnerDatas,
  endDate,
  getInputFirstContract,
  getInputContractSecond,
  getInputExist,
  getInputIssued,
  currentIndex,
} from "./features.js";
import { regexPattern } from "../utils/pattern.js";
import { checkValidation } from "../utils/checkValidate.js";
const regex = new regexPattern();
const {
  country,
  province,
  district,
  commune,
  email,
  startAgreementDate,
  endAgreementDate,
  purchaseMethod,
} = getInputContractSecond;
const {
  contractNumber,
  profilePicture,
  uploadPhoto,
  firstName,
  lastName,
  idPassport,
  signature,
} = getInputFirstContract;

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
        let getPExname = getInputExist.pExname.value;
        let getPExIdPassport = getInputExist.pExIdPassport.value;
        let getPExCurrentPercent = getInputExist.pExCurrentPercent.value;
        let getPExTransferPercent = getInputExist.pExTransferPercent.value;
        let getPExPaidAmount = getInputExist.pExPaidAmount.value;
        let getPExNote = getInputExist.pExNoteContract.value;
        const pIdErr = document.querySelector(".idPassport-contract-error");
        const pNameErr = document.querySelector(".partner-name-contract-error");
        const pPercentageErr = document.querySelector(
          ".current-percent-contract-error"
        );
        const pTransferErr = document.querySelector(
          ".transfer-percent-contract-error"
        );
        const pPaidErr = document.querySelector(".paid-amount-contract-error");
        const activePartnerID = checkValidation(
          regex.patternID,
          getPExIdPassport,
          pIdErr,
          getInputExist.pExIdPassport,
          isValid
        );
        const activePartnerName = checkValidation(
          regex.patternPartnerName,
          getPExname,
          pNameErr,
          getInputExist.pExname,
          isValid
        );
        const activePartnerPercentage = checkValidation(
          regex.patternPercentage,
          getPExCurrentPercent,
          pPercentageErr,
          getInputExist.pExCurrentPercent,
          isValid
        );
        const activePartnerTransfer = checkValidation(
          regex.patternPercentage,
          getPExTransferPercent,
          pTransferErr,
          getInputExist.pExTransferPercent,
          isValid
        );
        const activePartnerPaid = checkValidation(
          regex.patternMoney,
          getPExPaidAmount,
          pPaidErr,
          getInputExist.pExPaidAmount,
          isValid
        );

        if (
          activePartnerName &&
          activePartnerID &&
          activePartnerPaid &&
          activePartnerPercentage &&
          activePartnerTransfer
        ) {
          new bootstrap.Modal(
            document.getElementById("previewFormContract")
          ).show();
          let summary = `
    <div class="row g-4">
     <div class="col-6 col-md-5 text-center">
     <img
      src="${uploadPhoto}"
      id="summaryImage"
      alt="Profile"
      class="img-fluid rounded-circle mb-3 shadow-sm"
      style="width: 80px; height: 80px"
    />
    <p class="h5 fw-semibold text-dark">
      ${firstName.value} ${lastName.value}
    </p>
    <p class="text-muted small">ID / Passport: ${idPassport.value}</p>
    <p class="text-muted small">Signature: ${signature.value || "—"}</p>
  </div>
  <div class="col-6 text-nowrap d-flex flex-column align-items-end">
    <h3 class="fw-bold">Contract Details</h3>
    <p>Contract Number: ${contractNumber.value}</p>
    <p>${startAgreementDate.value}</p>
  </div>

  <div class="col-12 d-flex flex-column align-items-stretch justify-content-between">
    <div class="d-flex justify-content-between flex-column">
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Email:</div>
        <div>${email.value}</div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Address:</div>
        <div>
          ${commune.value}, ${district.value},<br />${province.value}, ${
            country.value
          }
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Agreement:</div>
        <div>${startAgreementDate.value} → ${endAgreementDate.value}</div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Purchase Method:</div>
        <div>${getPurchaseVal}</div>
      </div>
      <hr />
    </div>

  <div class="mt-4">
    <h3 class="section-title">Partner Information</h3>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">Partner Name:</div>
      <div>${getPExname}</div>
    </div>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">ID/Passport:</div>
      <div>${getPExIdPassport}</div>
    </div>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">Current (%):</div>
      <div>${getPExCurrentPercent}%</div>
    </div>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">Transfer (%):</div>
      <div>${getPExTransferPercent}%</div>
    </div>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">Paid (USA):</div>
      <div>$${getPExPaidAmount}</div>
    </div>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">Notes:</div>
      <div>$${getPExNote}</div>
    </div>
    <hr />
  </div>

  <div class="d-flex justify-content-end gap-2">
    <button class="btn btn-primary">Edit</button>
    <button class="btn btn-success save-contract-toTable" data-bs-dismiss="modal">
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
        let getIAmountContract = getInputIssued.IAmountContract.value;
        let getITotalContract = getInputIssued.ITotalContract.value;
        let getIInvestmentContract = getInputIssued.IInvestmentContract.value;
        let getINoteContract = getInputIssued.Inotes.value;

        const IssuedAmountErr = document.querySelector(
          ".issued-amount-contract-error"
        );
        const issuedTotalErr = document.querySelector(
          ".totalIssued-contract-error"
        );
        const issuedInvesment = document.querySelector(
          ".issued-investment-contract-error"
        );
        const activeIssuedAmount = checkValidation(
          regex.patternPercentage,
          getIAmountContract,
          IssuedAmountErr,
          getInputIssued.IAmountContract,
          isValid
        );
        const activeIssuedTotal = checkValidation(
          regex.patternPercentage,
          getITotalContract,
          issuedTotalErr,
          getInputIssued.ITotalContract,
          isValid
        );
        const activeIssuedInvestment = checkValidation(
          regex.patternMoney,
          getIInvestmentContract,
          issuedInvesment,
          getInputIssued.IInvestmentContract,
          isValid
        );

        if (activeIssuedAmount && activeIssuedInvestment && activeIssuedTotal) {
          new bootstrap.Modal(
            document.getElementById("previewFormContract")
          ).show();
          let summary = `
          <div class="row g-4">
               <div class="col-6 col-md-5 text-center">
     <img
      src="${uploadPhoto}"
      id="summaryImage"
      alt="Profile"
      class="img-fluid rounded-circle mb-3 shadow-sm"
      style="width: 80px; height: 80px"
    />
    <p class="h5 fw-semibold text-dark">
      ${firstName.value} ${lastName.value}
    </p>
    <p class="text-muted small">ID / Passport: ${idPassport.value}</p>
    <p class="text-muted small">Signature: ${signature.value || "—"}</p>
  </div>
  <div class="col-6 text-nowrap d-flex flex-column align-items-end">
      <h3 class="fw-bold">Contract Summary</h3>
    <p>Contract Number: ${contractNumber.value}</p>
    <p>${startAgreementDate.value}</p>
  </div>

  <div class="col-12 d-flex flex-column align-items-stretch justify-content-between">
    <div class="d-flex justify-content-between flex-column">
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Email:</div>
        <div>${email.value}</div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Address:</div>
        <div>
          ${commune.value}, ${district.value},<br />${province.value}, ${
            country.value
          }
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Agreement:</div>
        <div>${startAgreementDate.value} → ${endAgreementDate.value}</div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Purchase Method:</div>
        <div>${getPurchaseVal}</div>
      </div>
      <hr />
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
    let getPurchaseMethod = document.getElementById("purchaseMethod").value;
    let getFistName = document.getElementById("firstName").value;
    let getFirstNameErr = document.getElementById("edit-first-name-err");
    let valideEdit = true;
    const editContractNumber = checkValidation(
      regex.patternContractNum,
      document.getElementById("contract-number").value,
      document.getElementById("edit-contract-number-err"),
      document.getElementById("contract-number"),
      valideEdit
    );
    // const photoEdit = checkValidation(
    //   regex.
    //   document.getElementById("uploadPhoto").value,

    // );
    const editFirstName = checkValidation(
      regex.patternName,
      getFistName,
      getFirstNameErr,
      document.getElementById("firstName"),
      valideEdit
    );
    const editLastName = checkValidation(
      regex.patternName,
      document.getElementById("lastName").value,
      document.getElementById("edit-last-name-err").value,
      document.getElementById("lastName"),
      valideEdit
    );
    const editEmail = checkValidation(
      regex.patternEmail,
      document.getElementById("email").value,
      document.getElementById("edit-email-err"),
      document.getElementById("email"),
      valideEdit
    );
    const editID = checkValidation(
      regex.patternID,
      document.getElementById("idPassport").value,
      document.getElementById("edit-id-err"),
      document.getElementById("idPassport"),
      valideEdit
    );
    const editCommune = checkValidation(
      regex.patternAddress,
      document.getElementById("commune").value,
      document.getElementById("edit-commune-err"),
      document.getElementById("commune"),
      valideEdit
    );
    const editDistrict = checkValidation(
      regex.patternAddress,
      document.getElementById("district").value,
      document.getElementById("edit-district-err"),
      document.getElementById("edit-district-err"),
      valideEdit
    );
    const editProvice = checkValidation(
      regex.patternAddress,
      document.getElementById("province").value,
      document.getElementById("edit-provice-err"),
      document.getElementById("province"),
      valideEdit
    );
    const editCountry = checkValidation(
      regex.patternAddress,
      document.getElementById("country").value,
      document.getElementById("edit-country-err"),
      document.getElementById("country"),
      valideEdit
    );
    // const editStartDate = document.getElementById("start-agreement-date");
    // const editStartErr = document.getElementById("start-agreement-date");
    // if (editStartDate.value === isNaN && editStartDate.value !== "") {
    //   editStartErr.innerHTML = inValidError;
    //   valideEdit = false;
    //   startAgreementDate.classList.add("error-form");
    //   startAgreementDate.classList.remove("valid-form");
    // } else if (getStartAgreement === "") {
    //   editStartErr.innerHTML = emptyRequired;
    //   valideEdit = false;
    //   startAgreementDate.classList.add("error-form");
    // } else {
    //   editStartErr.innerHTML = "";
    //   startAgreementDate.classList.remove("error-form");
    //   startAgreementDate.classList.add("valid-form");
    // }

    // if (getEndAgreement === isNaN ) {
    //   endAgreementErr.innerHTML = inValidError;
    //   valideEdit = false;
    //   endAgreementDate.classList.add("error-form");
    //   endAgreementDate.classList.remove("valid-form");
    // } else if (getEndAgreement === "") {
    //   endAgreementErr.innerHTML = emptyRequired;
    //   valideEdit = false;
    // } else {
    //   endAgreementErr.innerHTML = "";
    //   endAgreementDate.classList.remove("error-form");
    //   endAgreementDate.classList.add("valid-form");
    // }
    if (getPurchaseMethod === "Buy from Existing Partner") {
      if (editFirstName) {
        saveData();
      } else {
        new bootstrap.Modal(
          document.getElementById("modal-edit-issued-share")
        ).show();
      }
    } else {
      new bootstrap.Modal(
        document.getElementById("modal-edit-issued-share")
      ).show();
    }
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
        endAgreementDate: document.getElementById("end-agreement-date").value,
        photo: uploadPhoto.value,
        partnerName: document.getElementById("pExname").value,
        pExIdPassport: document.getElementById("pExIdPassport").value,
        pExCurrentPercent: document.getElementById("pExCurrentPercent").value,
        pExTransferPercent: document.getElementById("pExTransferPercent").value,
        pExPaidAmount: document.getElementById("pExPaidAmount").value,
        pExNoteContract: document.getElementById("edit-note-exist").value,
      };
      currentIndex.value = "";
      loadDataContract(existPartnerDatas, issuedContractDatas);
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
        partnerName: getInputExist.pExname.value,
        pExIdPassport: getInputExist.pExIdPassport.value,
        pExCurrentPercent: getInputExist.pExCurrentPercent.value,
        pExTransferPercent: getInputExist.pExTransferPercent.value,
        pExPaidAmount: getInputExist.pExPaidAmount.value,
        pExNoteContract: getInputExist.pExNoteContract.value,
      });
      loadDataContract(existPartnerDatas, issuedContractDatas);
      console.log(existPartnerDatas);
    }
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
        startAgreementDate: document.getElementById("start-agreement-date")
          .value,
        endAgreementDate: document.getElementById("endAgreementDate").value,
        photo: uploadPhoto.value,
        issuedAmount: document.getElementById("IAmountContract").value,
        ITotalContract: document.getElementById("ITotalContract").value,
        IInvestmentContract: document.getElementById("IInvestmentContract")
          .value,
        Inotes: document.getElementById("edit-note-issued").value,
      };
      currentIndex.value = "";
      loadDataContract(existPartnerDatas, issuedContractDatas);
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
        issuedAmount: getInputIssued.IAmountContract.value,
        ITotalContract: getInputIssued.ITotalContract.value,
        IInvestmentContract: getInputIssued.IInvestmentContract.value,
        Inotes: getInputIssued.Inotes.value,
      });
      loadDataContract(existPartnerDatas, issuedContractDatas);
    }
  }

  loadDataContract(existPartnerDatas, issuedContractDatas);
}
function clearFieldFirtform() {
  firstName.value = "";
  contractNumber.value = "";
  uploadPhoto.value = "";
  lastName.value = "";
  idPassport.value = "";
  signature.value = "";
}
