export let existPartnerDatas = [
  {
    contactNumber: "SAD-2343454",
    firstName: " Chea",
    lastName: "Sok ",
    idPassport: 12234345,
    email: "sokChea@gmail.com",
    adress: {
      country: "Cambodia",
      province: "Siem Reap",
      district: "kra Lanh",
      commune: "Sen Sok",
    },
    agreementDate: "2025-07-28",
    signature: "S.K.A",
    photo:
      "https://i.pinimg.com/736x/69/0d/1f/690d1fceb13c958e658349519a925a1e.jpg",
    purchase: "Buy from Existing Partner",
    startAgreementDate: "2025-07-13",
    endAgreementDate: "2025-07-13",
    partnerName: "Dara",
    pExIdPassport: 234353434,
    pExCurrentPercent: 10,
    pExTransferPercent: 2,
    pExPaidAmount: 1000,
    pExNoteContract: "The best partner ever.",
  },
];
export let issuedContractDatas = [
  {
    contactNumber: "DSD-2233435",
    firstName: "Oudom",
    lastName: "Manda",
    idPassport: 12234345,
    email: "sokChea@gmail.com",
    adress: {
      country: "Cambodia",
      province: "Siem Reap",
      district: "kra Lanh",
      commune: "Sen Sok",
    },
    startAgreementDate: "2025-07-13",
    endAgreementDate: "2025-07-13",
    signature: "S.K.A",
    photo:
      "https://i.pinimg.com/736x/69/0d/1f/690d1fceb13c958e658349519a925a1e.jpg",
    purchase: "New Issued Shares",
    issuedAmount: 5,
    ITotalContract: 500,
    IInvestmentContract: 40,
    Inotes: "He is a specail partner.",
  },
];
export let inValidError = `<i class="ri-error-warning-line"></i> Invalid!`;
export let emptyRequired = `<i class="ri-error-warning-line"></i> This field is required.`;
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
export let endDate = tomorrow.toISOString().split("T")[0];

document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("end-agreement-contract");
  if (dateInput) {
    dateInput.min = endDate;
  }
});

export function loadDataContract() {
  let deleteIssuedBtn = document.querySelector(".delete-issued-btn");
  let inputDeleteIssued = document.getElementById("delete-input-issued");
  let inputDeleteExist = document.getElementById("delete-input-exist");
  let deletExistBtn = document.querySelector(".delete-exist-btn");
  let card = ``;
  existPartnerDatas.forEach((element, index) => {
    card += `
             <tr>
                <td>${element.idPassport}</td>
                <td>${element.firstName} ${element.lastName}</td>
                <td>${element.email}</td>
                <td>${element.adress.province}</td>
                <td>${element.purchase}</td>
                <td>${element.pExCurrentPercent}%</td>
                <td>${element.startAgreementDate}</td>
                <td class="d-flex gap-4">
               <button data-index="${index}" class="btn btn-success view-exist-partner">View</button>
               <button data-index="${index}" data-purchase="${element.purchase}" class="btn btn-primary edit-exist-partner">Update</button>
               <button data-id="${element.idPassport}"  class="btn btn-danger delete-exist-partner">Delete</button>
                </td>
              </tr>
      `;
  });

  issuedContractDatas.forEach((element, indexElement) => {
    card += `
   <tr>
                <td>${element.idPassport}</td>
                 <td>${element.firstName} ${element.lastName}</td>
                <td>${element.email}</td>
                <td>${element.adress.province}</td>
                <td>${element.purchase}</td>
              <td>${element.issuedAmount}%</td>
                <td>${element.startAgreementDate}</td>               
                <td class="d-flex gap-4">
               <button  data-index="${indexElement}" class="btn btn-success view-issued">View</button>
               <button data-index="${indexElement}" data-purchase="${element.purchase}" class="btn btn-primary edit-issued">Update</button>
               <button data-id="${element.idPassport}"  class="btn btn-danger delete-issued">Delete</button>
                </td>
              </tr>
      `;
  });
  document.getElementById("contact-table-loaddata").innerHTML = card;
  document.querySelectorAll(".view-issued").forEach((view) => {
    view.addEventListener("click", () => {
      let index = view.dataset.index;
      veiwDetailIssued(index);
    });
  });

  document.querySelectorAll(".view-exist-partner").forEach((view) => {
    view.addEventListener("click", () => {
      let index = view.dataset.index;
      veiwDetailExistPartner(index);
    });
  });

  document.querySelectorAll(".delete-issued").forEach((deleteElement) => {
    deleteElement.addEventListener("click", () => {
      const modal = new bootstrap.Modal(
        document.getElementById("delete-issued-modal")
      );
      modal.show();
      let idIssued = parseInt(deleteElement.dataset.id);
      document.querySelector(".delete-issued-show-id").innerHTML = `<p>
          To confirm, type ID <span class="text-danger">"${idIssued}"</span> in the box
          below
      </p>`;
      deleteIssuedBtn.addEventListener("click", () => {
        if (inputDeleteIssued.value !== "") {
          let getInputDeleteIssued = parseInt(inputDeleteIssued.value);
          if (getInputDeleteIssued === idIssued) {
            deleteDataOnIssued(idIssued);
            inputDeleteIssued.value = "";
          }
        } else {
          console.error("Not correct");
        }
      });
    });
  });
  document
    .querySelectorAll(".delete-exist-partner")
    .forEach((deleteElement) => {
      deleteElement.addEventListener("click", () => {
        const modal = new bootstrap.Modal(
          document.getElementById("delete-exist-modal")
        );
        modal.show();
        console.log(deletExistBtn);

        let idExist = parseInt(deleteElement.dataset.id);
        document.querySelector(".delete-exist-show-id").innerHTML = `<p>
          To confirm, type ID "<span class="text-danger">${idExist}</span>" in the box
          below
      </p>`;
        deletExistBtn.addEventListener("click", () => {
          if (inputDeleteExist.value !== "") {
            let getInputDeleteExist = parseInt(inputDeleteExist.value);
            if (getInputDeleteExist === idExist) {
              deleteDataOnExistPartner(idExist);
              inputDeleteExist.value = "";
            }
          } else {
            console.error("Not correct");
          }
        });
      });
    });

  document.querySelectorAll(".edit-issued").forEach((editButton) => {
    editButton.addEventListener("click", () => {
      new bootstrap.Modal(
        document.getElementById("modal-edit-issued-share")
      ).show();
      let index = editButton.dataset.index;
      let purchaseUpdate = editButton.dataset.purchase;
      updateDataOnEachMethod(index, purchaseUpdate);
    });
  });

  document.querySelectorAll(".edit-exist-partner").forEach((editButton) => {
    editButton.addEventListener("click", () => {
      new bootstrap.Modal(
        document.getElementById("modal-edit-issued-share")
      ).show();
      let index = editButton.dataset.index;
      let purchaseUpdate = editButton.dataset.purchase;
      // editDataOnExistPartner(index);
      updateDataOnEachMethod(index, purchaseUpdate);
    });
  });
}
export function regexPattern() {
  return {
    patternContractNum: /^[A-Z]{2,}-\d{2,}$/,
    patternName: /^[A-Z]+[a-z]{1,20}$/,
    patternPartnerName: /^[A-Z]+[a-zA-Z\s]{1,40}$/,
    patternID: /^[A-Z0-9]{6,12}$/,
    patternSignature: /^[A-Za-z._-]{1,}$/,
    patternAddress: /^[A-Z]+[a-zA-Z0-9\s]{1,40}$/,
    patternEmail: /^[A-Za-z0-9.-_%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/,
    patternPercentage: /^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/,
    patternMoney: /^[0-9]{1,}$/,
  };
}

export function getInputFirstContract() {
  return {
    contractNumber: document.getElementById("contact-number"),
    profilePicture: document.getElementById("photoAddress"),
    uploadPhoto: document.getElementById("upload-photo"),
    firstName: document.getElementById("first-name-contract"),
    lastName: document.getElementById("last-name-contract"),
    idPassport: document.getElementById("id-passport-contract"),
    signature: document.getElementById("signature-contract"),
  };
}
export function contractFirstDetail() {
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
  uploadPhoto.onchange = () => {
    profilePicture.src = URL.createObjectURL(uploadPhoto.files[0]);
  };
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

    if (!regex.patternName.test(getFirstName) && getFirstName !== "") {
      firstNameErr.innerHTML = inValidError;
      isValidFirstForm = false;
      firstName.classList.add("error-form");
      firstName.classList.remove("valid-form");
    } else if (getFirstName === "") {
      isValidFirstForm = false;
      firstNameErr.innerHTML = emptyRequired;
      firstName.classList.add("error-form");
      firstName.classList.remove("valid-form");
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
      !regex.patternContractNum.test(getContractNumber) &&
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

    if (!regex.patternName.test(getLastName) && getLastName !== "") {
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

    if (!regex.patternID.test(getIdPassport) && getIdPassport !== "") {
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

    if (isValidFirstForm) {
      modal = "modalContractSecond";

      // uploadPhoto.value = "";
    } else {
      modal = "modalContractFirst";
    }

    const modalElement = document.getElementById(modal);
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  });
}
export function getInputContractSecond() {
  return {
    purchaseMethod: document.getElementById("purchase-Method"),
    country: document.getElementById("country-contract"),
    province: document.getElementById("province-contract"),
    district: document.getElementById("district-contract"),
    commune: document.getElementById("commune-contract"),
    email: document.getElementById("email-contact"),
    startAgreementDate: document.getElementById("start-agreement-contract"),
    endAgreementDate: document.getElementById("end-agreement-contract"),
  };
}
export function contractSecondDetail() {
  let purchaseNextBtn = document.getElementById("purchaseNextBtn");

  let isValidSecondForms = true;
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
  let regex = regexPattern();
  let modal = "";
  purchaseNextBtn.addEventListener("click", () => {
    let getCountry = country.value;
    let getProvince = province.value;
    let getDistrict = district.value;
    let getCommune = commune.value;
    let getEmail = email.value;
    let getStartAgreement = startAgreementDate.value;
    let getEndAgreement = endAgreementDate.value;

    let countryErr = document.querySelector(".country-error");
    let provinceErr = document.querySelector(".province-error");
    let districtErr = document.querySelector(".district-error");
    let communeErr = document.querySelector(".commune-error");
    let emailErr = document.querySelector(".email-error");
    let startAgreementErr = document.querySelector(".start-agreement-error");
    let endAgreementErr = document.querySelector(".end-agreement-error");

    let getPurchaseVal = purchaseMethod.value;
    let purchaseErr = document.querySelector(".purchase-error");
    purchaseErr.innerHTML = "";

    if (!regex.patternAddress.test(getCountry) && getCountry !== "") {
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
    if (!regex.patternAddress.test(getProvince) && getProvince !== "") {
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
      province.classList.remove("error-form");
      province.classList.add("valid-form");
    }
    if (!regex.patternAddress.test(getDistrict) && getDistrict !== "") {
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

    if (!regex.patternAddress.test(getCommune) && getCommune !== "") {
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

    if (!regex.patternEmail.test(getEmail) && email !== "") {
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
      email.classList.remove("error-form");
      email.classList.add("valid-form");
    }

    if (getStartAgreement === isNaN && getStartAgreement !== "") {
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
      startAgreementDate.classList.remove("error-form");
      startAgreementDate.classList.add("valid-form");
    }

    if (getEndAgreement === isNaN) {
      endAgreementErr.innerHTML = inValidError;
      isValidSecondForms = false;
      endAgreementDate.classList.add("error-form");
      endAgreementDate.classList.remove("valid-form");
    } else if (getEndAgreement === "") {
      endAgreementErr.innerHTML = emptyRequired;
      isValidSecondForms = false;
    } else {
      endAgreementErr.innerHTML = "";
      endAgreementDate.classList.remove("error-form");
      endAgreementDate.classList.add("valid-form");
    }

    if (getPurchaseVal === "Buy from Existing Partner") {
      modal = "modalContractExist";
    } else if (getPurchaseVal === "New Issued Shares") {
      modal = "modalContractIssued";
    } else {
      modal = "modalContractSecond";
      purchaseErr.innerHTML = "Please select an option!";
      isValidSecondForms = false;
    }
    const modalElement = document.getElementById(modal);
    if (modalElement && isValidSecondForms) {
      new bootstrap.Modal(modalElement).show();
    } else {
      new bootstrap.Modal(
        document.getElementById("modalContractSecond")
      ).show();
    }
  });
}

export function getInputExist() {
  return {
    pExname: document.getElementById("partner-p_Ename-contract"),
    pExIdPassport: document.getElementById("idPassport-p_exist-contract"),
    pExCurrentPercent: document.getElementById(
      "currentPercent-p_exist-contract"
    ),
    pExTransferPercent: document.getElementById(
      "transferPercent-p_exist-contract"
    ),
    pExPaidAmount: document.getElementById("paidAmount-p_exist-contract"),
    pExNoteContract: document.getElementById("noteContract-p_exist"),
  };
}

export function getInputIssued() {
  return {
    IAmountContract: document.getElementById("issued-N_amount-contract"),
    ITotalContract: document.getElementById("total-N_issued-contract"),
    IInvestmentContract: document.getElementById(
      "Investment-N_amount-contract"
    ),
    Inotes: document.getElementById("noteContract-p_exist"),
  };
}

function veiwDetailIssued(index) {
  let viewObj = issuedContractDatas[index];
  new bootstrap.Modal(document.getElementById("viewDdetail-issued")).show();
  let summary = `
          <div class="row g-4">
              <div class="col-md-5 text-center">
                 <img  src=${
                   viewObj.photo
                 } id="summaryImage" alt="Profile" class="img-fluid rounded-3 mb-3 shadow-sm profile-img">
                 <p class="h5 fw-semibold text-dark">
                   ${viewObj.firstName} ${viewObj.lastName}
                 </p>  
                 <p class="text-muted small">ID / Passport: ${
                   viewObj.idPassport
                 }</p>
                 <p class="text-muted small">
                   Signature: ${viewObj.signature || "—"}
                 </p>
              </div>
              <div class="col-md-7">
                <h3 class="section-title">Details</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <span class="text-primary">Email:</span>
                    <span>${viewObj.email}</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Address:</span>
                    <span>${viewObj.adress.commune}, ${
    viewObj.adress.district
  },<br />${viewObj.adress.province}, ${viewObj.adress.country}</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Agreement:</span>
                    <span>${viewObj.startAgreementDate} → ${
    viewObj.endAgreementDate
  }</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Purchase Method:</span>
                    <span>${viewObj.purchase}</span>
                  </li>
                </ul>
              </div>
            </div>
             <div class="mt-4">
              <h3 class="section-title">Share Issuance</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                 
                   <div class ="d-flex flex-column">
                   <p><span class="text-primary">Issued Amount (%):</span> ${
                     viewObj.issuedAmount
                   } </p>
                  <p><span class="text-primary">Total After Issue (%):</span> ${
                    viewObj.ITotalContract
                  }</p>
                  <p><span class="text-primary">Investment (USA):</span> ${
                    viewObj.IInvestmentContract
                  }</p>
                  <p><span>Notes:</span> ${viewObj.Inotes}</p>
                  </div>
                </li>
              </ul>
            </div>
             <div class ="d-flex justify-content-end">
                  <button data-bs-dismiss="modal" class="btn btn-danger">Close</button>
                </div>
            `;
  document.getElementById("show-view-contract-issued").innerHTML = summary;

  loadDataContract();
}
function veiwDetailExistPartner(index) {
  let viewObj = existPartnerDatas[index];

  new bootstrap.Modal(
    document.getElementById("viewDdetail-exist-partner")
  ).show();
  let summary = `
          <div class="row g-4">
              <div class="col-md-5 text-center">
                 <img  src=${
                   viewObj.photo
                 } id="summaryImage" alt="Profile" class="img-fluid rounded-3 mb-3 shadow-sm profile-img">
                 <p class="h5 fw-semibold text-dark">
                   ${viewObj.firstName} ${viewObj.lastName}
                 </p>  
                 <p class="text-muted small">ID / Passport: ${
                   viewObj.idPassport
                 }</p>
                 <p class="text-muted small">
                   Signature: ${viewObj.signature || "—"}
                 </p>
              </div>
              <div class="col-md-7">
                <h3 class="section-title text-primary">Details</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <span class="text-primary">Email:</span>
                    <span>${viewObj.email}</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Address:</span>
                    <span>${viewObj.adress.commune}, ${
    viewObj.adress.district
  },<br />${viewObj.adress.province}, ${viewObj.adress.country}</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Agreement:</span>
                    <span>${viewObj.startAgreementDate} → ${
    viewObj.endAgreementDate
  }</span>
                  </li>
                  <li class="list-group-item">
                    <span class="text-primary">Purchase Method:</span>
                    <span>${viewObj.purchase}</span>
                  </li>
                </ul>
              </div>
            </div>
             <div class="mt-4">
              <h3 class="section-title">Partner Information</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class ="d-flex flex-column">
                   <p><span class="text-primary">Partner Name:</span> ${
                     viewObj.partnerName
                   } </p>
                  <p><span class="text-primary">ID/Passport:</span> ${
                    viewObj.pExIdPassport
                  }</p>
                  <p><span class="text-primary">Current (%):</span> ${
                    viewObj.pExCurrentPercent
                  }%</p>
                  <p><span class="text-primary">Transfer (%):</span> ${
                    viewObj.pExTransferPercent
                  }%</p>
                  <p><span class="text-primary">Paid (USA):</span> $${
                    viewObj.pExPaidAmount
                  }</p>
                  <p><span class="text-primary">Notes :</span> ${
                    viewObj.pExNoteContract
                  }</p>
                  </div>
                </li>
              </ul>
            </div>
             <div class ="d-flex justify-content-end">
                  <button data-bs-dismiss="modal" class="btn btn-danger">Close</button>
                </div>
            `;
  document.getElementById("show-view-contract-exist-partner").innerHTML =
    summary;
  loadDataContract();
}

function deleteDataOnIssued(id) {
  let index = issuedContractDatas.findIndex(
    (param) => parseInt(param.idPassport) === parseInt(id)
  );
  if (index != -1) {
    issuedContractDatas.splice(index, 1);
    loadDataContract();
  } else {
    console.error(`Can't find ID ${id}`);
  }
}
function deleteDataOnExistPartner(id) {
  let index = existPartnerDatas.findIndex(
    (param) => parseInt(param.idPassport) === parseInt(id)
  );
  if (index != -1) {
    existPartnerDatas.splice(index, 1);
    loadDataContract();
  } else {
    console.error(`Can't find ID ${id}`);
  }
}

export let currentIndex = document.getElementById("edit-index");
function updateDataOnEachMethod(index, purchaseUpdate) {
  let currentIssuedObj = issuedContractDatas[index];
  let currentExistObj = existPartnerDatas[index];
  let html = ``;
  if (purchaseUpdate === "New Issued Shares") {
    html = `
        <div id="newSharesOptions" class="purchase-options mb-4" >
           <h5 class="text-info mb-3">
             New Issued Shares Details
           </h5>
           <div class="mb-3">
             <label for="IAmountContract" class="form-label"
               >Issued Amount</label
             >
             <input
               type="number"
               class="form-control"
               id="IAmountContract"
             />
           </div>
           <div class="mb-3">
             <label for="ITotalContract" class="form-label"
               >Total After Issue</label
             >
             <input
               type="number"
               class="form-control"
               id="ITotalContract"
             />
           </div>
           <div class="mb-3">
             <label for="IInvestmentContract" class="form-label"
               >Investment Amount ($)</label
             >
             <input
               type="number"
               class="form-control"
               id="IInvestmentContract"
             />
           </div>
            <div class="col-md-12 mb-3">
              <label>Additional Notes/Terms</label>
                <textarea class="form-control shadow-sm"
                  placeholder="Optional :Enter terms or remark here "
                    id="edit-note-issued">
                    
                    </textarea>
             <span class="date-error error-field"></span>
          </div>
         </div>
  `;
    document.querySelector(".display-purchase-edit-form").innerHTML = html;
    document.getElementById("firstName").value = currentIssuedObj.firstName;
    document.getElementById("lastName").value = currentIssuedObj.lastName;
    document.getElementById("email").value = currentIssuedObj.email;
    document.getElementById("idPassport").value = currentIssuedObj.idPassport;
    document.getElementById("signature").value = currentIssuedObj.signature;
    // document.getElementById("uploadPhoto").value = currentIssuedObj.photo;
    document.getElementById("commune").value = currentIssuedObj.adress.commune;
    document.getElementById("district").value =
      currentIssuedObj.adress.district;
    document.getElementById("province").value =
      currentIssuedObj.adress.province;
    document.getElementById("country").value = currentIssuedObj.adress.country;
    document.getElementById("startAgreementDate").value =
      currentIssuedObj.startAgreementDate;
    document.getElementById("endAgreementDate").value =
      currentIssuedObj.endAgreementDate;
    document.getElementById("purchaseMethod").value = currentIssuedObj.purchase;
    document.getElementById("IAmountContract").value =
      currentIssuedObj.issuedAmount;
    document.getElementById("ITotalContract").value =
      currentIssuedObj.ITotalContract;
    document.getElementById("IInvestmentContract").value =
      currentIssuedObj.IInvestmentContract;
    document.getElementById("edit-note-issued").value = currentIssuedObj.Inotes;
    currentIndex.value = index;
  } else {
    html = `
     <div id="existingPartnerOptions" class="purchase-options mb-4">
         <h5 class="text-success mb-3">
           Existing Partner Details
         </h5>
         <div class="mb-3">
           <label for="pExname" class="form-label"
             >Partner Name</label
           >
           <input
             type="text"
             class="form-control"
             id="pExname"
           />
         </div>
         <div class="mb-3">
           <label for="pExIdPassport" class="form-label"
             >Partner ID/Passport</label
           >
           <input
             type="text"
             class="form-control"
             id="pExIdPassport"
           />
         </div>
         <div class="row">
           <div class="col-md-4 mb-3">
             <label for="pExCurrentPercent" class="form-label"
               >Current %</label
             >
             <input
               type="number"
               class="form-control"
               id="pExCurrentPercent"
             />
           </div>
           <div class="col-md-4 mb-3">
             <label for="pExTransferPercent" class="form-label"
               >Transfer %</label
             >
             <input
               type="number"
               class="form-control"
               id="pExTransferPercent"
             />
           </div>
           <div class="col-md-4 mb-3">
             <label for="pExPaidAmount" class="form-label"
               >Paid Amount ($)</label
             >
             <input
               type="number"
               class="form-control"
               id="pExPaidAmount"
             />
           </div>
           <div class="col-md-12 mb-3">
              <label>Additional Notes/Terms</label>
                <textarea class="form-control shadow-sm"
                  placeholder="Optional :Enter terms or remark here "
                    id="edit-note-exist">
                    
                    </textarea>
             <span class="date-error error-field"></span>
          </div>
         </div>
       </div>
    `;
    document.querySelector(".display-purchase-edit-form").innerHTML = html;
    document.getElementById("contract-number").value =
      currentExistObj.contactNumber;
    document.getElementById("firstName").value = currentExistObj.firstName;
    document.getElementById("lastName").value = currentExistObj.lastName;
    document.getElementById("email").value = currentExistObj.email;
    document.getElementById("idPassport").value = currentExistObj.idPassport;
    document.getElementById("signature").value = currentExistObj.signature;
    // document.getElementById("uploadPhoto").value = currentExistObj.photo;
    document.getElementById("commune").value = currentExistObj.adress.commune;
    document.getElementById("district").value = currentExistObj.adress.district;
    document.getElementById("province").value = currentExistObj.adress.province;
    document.getElementById("country").value = currentExistObj.adress.country;
    document.getElementById("startAgreementDate").value =
      currentExistObj.startAgreementDate;
    document.getElementById("endAgreementDate").value =
      currentExistObj.endAgreementDate;
    document.getElementById("purchaseMethod").value = currentExistObj.purchase;
    document.getElementById("pExname").value = currentExistObj.partnerName;
    document.getElementById("pExIdPassport").value =
      currentExistObj.pExIdPassport;
    document.getElementById("pExCurrentPercent").value =
      currentExistObj.pExCurrentPercent;
    document.getElementById("pExTransferPercent").value =
      currentExistObj.pExTransferPercent;
    document.getElementById("pExPaidAmount").value =
      currentExistObj.pExPaidAmount;
    document.getElementById("edit-note-exist").value =
      currentExistObj.pExNoteContract;

    currentIndex.value = index;
  }
}
