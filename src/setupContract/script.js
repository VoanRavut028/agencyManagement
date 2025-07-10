const existPartnerDatas = [
  {
    id: 1,
    contactNumber: "12233435",
    firstName: " Chea",
    lastName: "Sok ",
    idPassport: 12234345,
    contactInfo: 93438747,
    adress: {
      country: "Cambodia",
      province: "Siem Reap",
      district: "kra Lanh",
      commune: "Sen Sok",
    },
    agreementDate: "2025-07-28",
    signature: "S.K.A",
    photo: "C:Users\\voan ravut\\OneDrive\\Pictures",
    purchase: "Buy from Existing Partner",
  },
];
let issuedDatas = [
  {
    id: 1,
    contactNumber: "12233435",
    firstName: "Oudom",
    lastName: "Manda",
    idPassport: 12234345,
    contactInfo: 93438747,
    adress: {
      country: "Cambodia",
      province: "Siem Reap",
      district: "kra Lanh",
      commune: "Sen Sok",
    },
    agreementDate: "2025-07-28",
    signature: "S.K.A",
    photo: "C:Users\\voan ravut\\OneDrive\\Pictures",
    purchase: "New Issued Shares",
  },
];

let saveToArray = document.getElementById("save-contract-toTable");
//  modalContractFirst
let contractNumber = document.getElementById("contact-number");
let profilePicture = document.getElementById("photoAddress");
let uploadPhoto = document.getElementById("upload-photo");
let firstName = document.getElementById("first-name-contract");
let lastName = document.getElementById("last-name-contract");
let idPassport = document.getElementById("id-passport-contract");
let signature = document.getElementById("signature-contract");

// modalContractSecond
let country = document.getElementById("country-contract");
let province = document.getElementById("province-contract");
let district = document.getElementById("district-contract");
let commune = document.getElementById("commune-contract");
let email = document.getElementById("email-contact");
let startAgreementDate = document.getElementById("start-agreement-contract");
let endAgreementDate = document.getElementById("end-agreement-contract");
let purchaseMethod = document.getElementById("Purchase Method");
// modalContractExist
let contractInfoOBJ;

let pExname = document.getElementById("partner-p_Ename-contract");
let pExIdPassport = document.getElementById("idPassport-p_exist-contract");
let pExCurrentPercent = document.getElementById(
  "currentPercent-p_exist-contract"
);
let pExTransferPercent = document.getElementById(
  "transferPercent-p_exist-contract"
);
let pExPaidAmount = document.getElementById("paidAmount-p_exist-contract");
let pExNoteContract = document.getElementById("noteContract-p_exist");
let pExCheckContract = document.getElementById("check-to-confirm-all-contract");

//modalContractIssued
let IAmountContract = document.getElementById("issued-N_amount-contract");
let ITotalContract = document.getElementById("total-N_issued-contract");
let IInvestmentContract = document.getElementById(
  "Investment-N_amount-contract"
);
let Inotes = document.getElementById("noteContract-p_exist");
let ICheckContract = document.getElementById("check-to-confirm-all-contract");

// regex validation
const patternContractNum = /^[A-Z]{2,}-\d{2,}$/;
const patternName = /^[A-Z]+[a-z]{1,}$/;
const patternID = /[0-9]{1,}/;
const patternSignature = /^[A-Za-z._-]{1,}$/;
const patternAddress = /^[A-Z]+[a-z0-9]{1,}$/;
const patternEmail = /^[A-Za-z0-9.-_%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/;
const patternPercentage = /[0-9]/;

// let photoAddre = document.getElementById("");
let purchaseNextBtn = document.getElementById("purchaseNextBtn");
let contractInfoFirstNextBtn = document.getElementById(
  "contractInfoFirstNextBtn"
);

let purChaseMethod = document.getElementById("purchaseMethod");

let purchaseErr = document.querySelector(".purchase-error");

function loadDataContract() {
  let card = ``;
  existPartnerDatas.forEach((element) => {
    card += `
   <tr>
                <td>${element.id}</td>
                <td>${element.contactNumber}</td>
                <td>${element.firstName} ${element.lastName}</td>
                <td>${element.contactInfo}</td>
                <td>${element.adress.province}</td>
                <td>${element.purchase}</td>
                <td>${element.agreementDate}</td>
               
                <td class="d-flex gap-4">
               <button class="btn btn-success">View</button>
               <button class="btn btn-danger">Delete</button>
               <button class="btn btn-primary">Edit</button>
                </td>
              </tr>
      `;
  });

  issuedDatas.forEach((element) => {
    card += `
   <tr>
                <td>${element.id}</td>
                <td>${element.contactNumber}</td>
                 <td>${element.firstName} ${element.lastName}</td>
                <td>${element.contactInfo}</td>
                <td>${element.adress.province}</td>
                <td>${element.purchase}</td>
                <td>${element.agreementDate}</td>
               
                <td class="d-flex gap-4">
               <button class="btn btn-success">View</button>
               <button class="btn btn-danger">Delete</button>
               <button class="btn btn-primary">Edit</button>
                </td>
              </tr>
      `;
  });

  document.querySelector("#contact-table-loaddata").innerHTML = card;
}
let contractFirstForm = [];
let contractSecondForm = [];
loadDataContract();
handleDataContract();
function handleDataContract() {
  // uploadPhoto

  uploadPhoto.onchange = () => {
    profilePicture.src = URL.createObjectURL(uploadPhoto.files[0]);
  };
  // uploadPhoto
  // catch values

  let getContractNumber = contractNumber.value;
  let getPhotoAddress = profilePicture.value;
  let getFirstName = firstName.value;
  let getLastName = lastName.value;
  let getIdPassport = idPassport.value;
  let getSignature = signature.value;
  let getCountry = country.value;
  let getProvince = province.value;
  let getDistrict = district.value;
  let getCommune = commune.value;
  let getEmail = email.value;
  let getStartAgreement = startAgreementDate.value;
  let getEndAgreement = endAgreementDate.value;
  let getPExname = pExname.value;
  let getPExIdPassport = pExIdPassport.value;
  let getPExCurrentPercent = pExCurrentPercent.value;
  let getPExTransferPercent = pExTransferPercent.value;
  let getPExPaidAmount = pExPaidAmount.value;
  let getPExNoteContract = pExNoteContract.value;
  let getIAmountContract = IAmountContract.value;
  let getITotalContract = ITotalContract.value;
  let getIInvestmentContract = IInvestmentContract.value;
  let getInotes = Inotes.value;
  let getPurChaseMethod = purChaseMethod.value;
  let inValidError = `<i class="ri-error-warning-line"></i> Invalid!`;
  let emptyRequired = `<i class="ri-error-warning-line"></i> This field is required.`;

  // check contract info first form
  contractInfoFirstNextBtn.addEventListener("click", () => {
    let isValidFirstForm = true;
    let modal = "";

    let getFirstName = firstName.value;
    let getContractNumber = contractNumber.value;
    let getPhotoAddress = uploadPhoto.value;
    let getLastName = lastName.value;
    let getIdPassport = idPassport.value;
    let getSignature = signature.value;

    let firstNameErr = document.querySelector(".first-name-contract-error");
    let lastNameErr = document.querySelector(".last-name-contract-error");
    let contactErr = document.querySelector(".contact-error");
    let uploadPhototErr = document.querySelector(".upload-img-error");
    let idErr = document.querySelector(".id-passport-error");
    let signatureErr = document.querySelector(".signature-error");

    if (!patternName.test(getFirstName) && getFirstName !== "") {
      firstNameErr.innerHTML = inValidError;
      isValidFirstForm = false;
      firstName.classList.add("error-form");
      firstName.classList.remove("valid-form");
    } else if (getFirstName === "") {
      isValidFirstForm = false;
      firstNameErr.innerHTML = emptyRequired;
      firstName.classList.add("error-form");
    } else {
      firstNameErr.innerHTML = "";
      firstName.classList.remove("error-form");
      firstName.classList.add("valid-form");
    }
    if (!getPhotoAddress) {
      uploadPhototErr.innerHTML = `<i class="ri-error-warning-line"></i> Requirement!`;
      isValidFirstForm = false;
    } else {
      uploadPhototErr.innerHTML = "";
    }

    if (
      !patternContractNum.test(getContractNumber) &&
      getContractNumber !== ""
    ) {
      contactErr.innerHTML = inValidError;
      isValidFirstForm = false;
      contractNumber.classList.add("error-form");
      contractNumber.classList.remove("valid-form");
    } else if (getContractNumber === "") {
      isValidFirstForm = false;
      contactErr.innerHTML = emptyRequired;
      contractNumber.classList.add("error-form");
    } else {
      contactErr.innerHTML = "";
      contractNumber.classList.remove("error-form");
      contractNumber.classList.add("valid-form");
    }

    if (!patternName.test(getLastName) && getLastName !== "") {
      lastNameErr.innerHTML = inValidError;
      isValidFirstForm = false;
      lastName.classList.add("error-form");
      lastName.classList.remove("valid-form");
    } else if (getLastName === "") {
      isValidFirstForm = false;
      lastNameErr.innerHTML = emptyRequired;
      lastName.classList.add("error-form");
    } else {
      lastNameErr.innerHTML = "";
      lastName.classList.remove("error-form");
      lastName.classList.add("valid-form");
    }

    if (!patternID.test(getIdPassport) && getIdPassport !== "") {
      idErr.innerHTML = inValidError;
      isValidFirstForm = false;
      idPassport.classList.add("error-form");
      idPassport.classList.remove("valid-form");
    } else if (getIdPassport === "") {
      isValidFirstForm = false;
      idErr.innerHTML = emptyRequired;
      idPassport.classList.add("error-form");
    } else {
      idErr.innerHTML = "";
      idPassport.classList.remove("error-form");
      idPassport.classList.add("valid-form");
    }

    if (!patternSignature.test(getSignature) && getSignature !== "") {
      signatureErr.innerHTML = inValidError;
      isValidFirstForm = false;
      signature.classList.add("error-form");
      signature.classList.remove("valid-form");
    } else if (getSignature === "") {
      isValidFirstForm = false;
      signatureErr.innerHTML = emptyRequired;
      signature.classList.add("error-form");
    } else {
      signatureErr.innerHTML = "";
      signature.classList.remove("error-form");
      signature.classList.add("valid-form");
    }

    if (isValidFirstForm) {
      modal = "modalContractSecond";

      // uploadPhoto.value = "";
    } else {
      modal = "modalContractFirst";
    }

    const modalElement = document.getElementById(modal);
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
    console.table(contractFirstForm);
  });

  purchaseNextBtn.addEventListener("click", () => {
    debugger;
    let isValidSecondForms = true;
    let checkPurchase = false;

    let countryErr = document.querySelector(".country-error");
    let provinceErr = document.querySelector(".province-error");
    let districtErr = document.querySelector(".district-error");
    let communeErr = document.querySelector(".commune-error");
    let emailErr = document.querySelector(".email-error");
    let startAgreementErr = document.querySelector(".start-agreement-error");
    let endAgreementErr = document.querySelector(".end-agreement-error");

    let getPurchaseVal = purChaseMethod.value;
    purchaseErr.innerHTML = "";

    let modal = "";

    if (!patternAddress.test(getCountry) && getCountry !== "") {
      countryErr.innerHTML = inValidError;
      isValidSecondForms = false;
      country.classList.add("error-form");
      country.classList.remove("valid-form");
    } else if (getCountry === "") {
      isValidSecondForms = false;
      countryErr.innerHTML = emptyRequired;
      country.classList.add("error-form");
    } else {
      countryErr.innerHTML = "";
      country.classList.remove("error-form");
      country.classList.add("valid-form");
    }
    if (!patternAddress.test(getProvince) && getProvince !== "") {
      provinceErr.innerHTML = inValidError;
      isValidSecondForms = false;
      province.classList.add("error-form");
      province.classList.remove("valid-form");
    } else if (getProvince === "") {
      isValidSecondForms = false;
      provinceErr.innerHTML = emptyRequired;
      province.classList.add("error-form");
    } else {
      provinceErr.innerHTML = "";
      province.classList.add("error-form");
      province.classList.remove("valid-form");
    }
    if (!patternAddress.test(getDistrict) && getDistrict !== "") {
      districtErr.innerHTML = inValidError;
      isValidSecondForms = false;
      district.classList.add("error-form");
      district.classList.remove("valid-form");
    } else if (getDistrict === "") {
      isValidSecondForms = false;
      districtErr.innerHTML = emptyRequired;
      district.classList.add("error-form");
    } else {
      districtErr.innerHTML = "";
      district.classList.remove("error-form");
      district.classList.add("valid-form");
    }

    if (!patternAddress.test(getCommune) && getCommune !== "") {
      communeErr.innerHTML = inValidError;
      isValidSecondForms = false;
      commune.classList.add("error-form");
      commune.classList.remove("valid-form");
    } else if (getCommune === "") {
      communeErr.innerHTML = emptyRequired;
      isValidSecondForms = false;
      commune.classList.add("error-form");
    } else {
      communeErr.innerHTML = "";
      commune.classList.remove("error-form");
      commune.classList.add("valid-form");
    }

    if (!patternEmail.test(getEmail) && email !== "") {
      emailErr.innerHTML = `<i class="ri-error-warning-line"></i> Hmm...that doesn't look like an email address.`;
      isValidSecondForms = false;
      email.classList.add("error-form");
      email.classList.remove("valid-form");
    } else if (getEmail === "") {
      emailErr.innerHTML = emptyRequired;
      isValidSecondForms = false;
      email.classList.add("error-form");
    } else {
      emailErr.innerHTML = "";
      email.classList.add("error-form");
      email.classList.remove("valid-form");
    }

    if (!patternEmail.test(getStartAgreement) && getStartAgreement !== "") {
      startAgreementErr.innerHTML = inValidError;
      isValidSecondForms = false;
      startAgreementDate.classList.add("error-form");
      startAgreementDate.classList.remove("valid-form");
    } else if (getStartAgreement === "") {
      startAgreementErr.innerHTML = emptyRequired;
      isValidSecondForms = false;
      startAgreementDate.classList.add("error-form");
    } else {
      startAgreementErr.innerHTML = "";
      startAgreementDate.classList.add("error-form");
      startAgreementDate.classList.remove("valid-form");
    }
    if (!patternEmail.test(getStartAgreement) && getEndAgreement !== "") {
      startAgreementErr.innerHTML = inValidError;
      isValidSecondForms = false;
      startAgreementDate.classList.add("error-form");
      startAgreementDate.classList.remove("valid-form");
    } else if (getStartAgreement === "") {
      startAgreementErr.innerHTML = emptyRequired;
      isValidSecondForms = false;
    } else {
      startAgreementErr.innerHTML = "";
      startAgreementDate.classList.add("error-form");
      startAgreementDate.classList.remove("valid-form");
    }

    if (getPurchaseVal === "Buy from Existing Partner") {
      checkPurchase = true;
    } else if (getPurchaseVal === "New Issued Shares") {
      modal = "modalContractIssued";
    } else {
      purchaseErr.innerHTML = "Please select an option!";
      modal = "modalContractSecond";
      isValidSecondForms = false;
    }
    if (isValidSecondForms) {
      alert(2);
    } else {
      console.error("Modal element not found for:", modal);
    }
    const modalElement = document.getElementById(modal);
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  });

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
  // preView
  let previewData = document.querySelectorAll("#preview-data");
  previewData.forEach((preview) => {
    preview.addEventListener("click", () => {
      let getPurchaseVal = purChaseMethod.value;
      let summary = `
      <div class="col-md-5 text-center">
        <img src="${getPhotoAddress}" alt="Profile" class="img-fluid rounded-3 mb-3 shadow-sm">
        <p class="mb-1 fs-6 fw-medium">${getFirstName} ${getLastName}</p>
        <p class="text-muted small mb-0">ID / Passport: ${getIdPassport}</p>
        <p class="text-muted small">Signature: ${getSignature || "—"}</p>
      </div>

      <div class="col-md-7">
        <ul class="list-group list-group-flush small">

          <li class="list-group-item">
            <strong>Contract #:</strong> ${getContractNumber}
          </li>

          <li class="list-group-item">
            <strong>Email:</strong> ${getEmail}
          </li>

          <li class="list-group-item">
            <strong>Address:</strong><br>
            ${getCommune}, ${getDistrict},<br>
            ${getProvince}, ${getCountry}
          </li>

          <li class="list-group-item">
            <strong>Agreement:</strong>
            ${getStartAgreement} → ${getEndAgreement}
          </li>

          <li class="list-group-item">
            <strong>Purchase Method:</strong> ${purChaseMethod}
          </li>
       </ul>
       </div>
          `;
      if (getPurchaseVal === "Buy from Existing Partner") {
        summary = `
          <ul>
          <li class="list-group-item">
          <strong>Partner Name:</strong> ${getPExname}<br>
          <strong>ID/Passport:</strong> ${getPExIdPassport}<br>
          <strong>Current %:</strong> ${getPExCurrentPercent}%<br>
          <strong>Transfer %:</strong> ${getPExTransferPercent}%<br>
          <strong>Paid:</strong> $${getPExPaidAmount}
          </li>
          </ul>    
          `;
      } else if (getPurchaseVal === "New Issued Shares") {
        summary = ` 
         <ul>
         <li class="list-group-item">
         <strong>Issued Amount:</strong> ${get}<br>
         <strong>Total After Issue:</strong> ${d.purchase.newIssue.total}<br>
         <strong>Investment:</strong> $${d.purchase.newIssue.investment}
         </li>
         </ul>
         `;
      }
      document.getElementById("show-preView-contract").innerHTML = summary;
    });
  });

  // EndpreView
  saveToArray.addEventListener("click", (event) => {
    if (isValid) {
      if (getPurChaseMethod === "Buy from Existing Partner") {
        existPartnerDatas.push({
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
          partnerName: getPExname,
          pExIdPassport: getPExIdPassport,
          pExCurrentPercent: getPExCurrentPercent,
          pExTransferPercent: getPExTransferPercent,
          pExPaidAmount: getPExPaidAmount,
          pExNoteContract: getPExNoteContract,
        });
      } else if (getPurChaseMethod === "New Issued Shares") {
        issuedDatas.push({
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
          IAmountContract: getIAmountContract,
          ITotalContract: getITotalContract,
          IInvestmentContract: getIInvestmentContract,
          Inotes: getInotes,
        });
      }
    }
    loadDataContract();
  });
}
function handlePurchaseMethod(purChaseMethod, purchaseErr, purchaseNextBtn) {}

function clearFieldFirtform() {
  firstName.value = "";
  contractNumber.value = "";
  uploadPhoto.value = "";
  lastName.value = "";
  idPassport.value = "";
  signature.value = "";
}

let endDate = document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("end-agreement-contract");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];
  dateInput.min = minDate;
});
