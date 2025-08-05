import { regexPattern } from "../utils/pattern.js";
import { checkValidation } from "../utils/checkValidate.js";
import { searchContractByName } from "./searchContract.js";
import { veiwDetailExistPartner, veiwDetailIssued } from "./viewContract.js";
import {
  sortContractByPaid,
  sortContracByName,
  sortByID,
} from "./sortContract.js";
export let existPartnerDatas = [
  {
    contactNumber: "SAD-1243454",
    firstName: "Mongkol",
    lastName: "Bamama",
    idPassport: 3456768,
    email: "mongkolsok@gmail.com",
    adress: {
      country: "Cambodia",
      province: "Siem Reap",
      district: "kra Lanh",
      commune: "Sen Sok",
    },
    agreementDate: "2025-07-28",
    signature: "",
    photo:
      "https://i.pinimg.com/736x/69/0d/1f/690d1fceb13c958e658349519a925a1e.jpg",
    purchase: "Buy from Existing Partner",
    startAgreementDate: "2025-07-13",
    endAgreementDate: "2025-07-13",
    partnerName: "Jan Dara",
    pExIdPassport: 23678674,
    pExCurrentPercent: 1.3,
    pExTransferPercent: 0.3,
    pExPaidAmount: 1340,
    pExNoteContract: "The best partner ever.",
  },
  {
    contactNumber: "SAD-2343454",
    firstName: "Chea",
    lastName: "Sok",
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
  {
    contactNumber: "SAD-1243454",
    firstName: "Sok",
    lastName: "Rithy",
    idPassport: 23424678,
    email: "rithysok@gmail.com",
    adress: {
      country: "Cambodia",
      province: "Siem Reap",
      district: "kra Lanh",
      commune: "Sen Sok",
    },
    agreementDate: "2025-07-28",
    signature: "",
    photo:
      "https://i.pinimg.com/736x/69/0d/1f/690d1fceb13c958e658349519a925a1e.jpg",
    purchase: "Buy from Existing Partner",
    startAgreementDate: "2025-07-13",
    endAgreementDate: "2025-07-13",
    partnerName: "Jan Dara",
    pExIdPassport: 23678674,
    pExCurrentPercent: 2,
    pExTransferPercent: 0.7,
    pExPaidAmount: 2000,
    pExNoteContract: "The best partner ever.",
  },

  {
    contactNumber: "SAD-1243454",
    firstName: "Voan",
    lastName: "Ravut",
    idPassport: 98875437,
    email: "ravutvoan@gmail.com",
    adress: {
      country: "Cambodia",
      province: "Siem Reap",
      district: "kra Lanh",
      commune: "Sen Sok",
    },
    agreementDate: "2025-07-28",
    signature: "",
    photo:
      "https://i.pinimg.com/736x/69/0d/1f/690d1fceb13c958e658349519a925a1e.jpg",
    purchase: "Buy from Existing Partner",
    startAgreementDate: "2025-07-13",
    endAgreementDate: "2025-07-13",
    partnerName: "Jan Dara",
    pExIdPassport: 23678674,
    pExCurrentPercent: 1,
    pExTransferPercent: 0.5,
    pExPaidAmount: 4340,
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
    IInvestmentContract: 4087,
    Inotes: "He is a specail partner.",
  },
  {
    contactNumber: "DSD-2233435",
    firstName: "Run",
    lastName: "Bunno",
    idPassport: 87565438,
    email: "bunno@gmail.com",
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
    IInvestmentContract: 0,
    Inotes: "He is a specail partner.",
  },
  {
    contactNumber: "DSD-2273435",
    firstName: "Ven",
    lastName: "Panna",
    idPassport: 77525438,
    email: "panna@gmail.com",
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
const regex = new regexPattern();

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
export let endDate = tomorrow.toISOString().split("T")[0];

// document.addEventListener("DOMContentLoaded", function () {
//   const dateInput = document.getElementById("end-agreement-contract");
//   if (dateInput) {
//     dateInput.min = endDate;
//   }
// });

loadDataContract(existPartnerDatas, issuedContractDatas);
export function loadDataContract(existPartnerDatas, issuedContractDatas) {
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
                <td>${element.purchase}</td>
                <td>${element.pExCurrentPercent}%</td>
                <td>$${element.pExPaidAmount}</td>
                <td>${element.startAgreementDate}</td>
                <td class="d-flex gap-4">
               <button data-Id="${element.idPassport}" class="btn btn-success view-exist-partner selector-view-btn">View</button>
               <button data-index="${index}" data-purchase="${element.purchase}" class="btn btn-primary edit-exist-partner selector-update-btn">Update</button>
               <button data-id="${element.idPassport}"  class="btn btn-danger delete-exist-partner selector-delete-btn">Delete</button>
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
                <td>${element.purchase}</td>
              <td>${element.issuedAmount}%</td>
              <td>$${element.IInvestmentContract}</td>
                <td>${element.startAgreementDate}</td>               
                <td class="d-flex gap-4">
               <button  data-Id="${element.idPassport}" class="btn btn-success view-issued">View</button>
               <button data-index="${indexElement}" data-purchase="${element.purchase}" class="btn btn-primary edit-issued">Update</button>
               <button data-id="${element.idPassport}"  class="btn btn-danger delete-issued">Delete</button>
                </td>
              </tr>
      `;
  });
  document.getElementById("contact-table-loaddata").innerHTML = card;
  document.querySelectorAll(".view-issued").forEach((view) => {
    view.addEventListener("click", () => {
      let index = view.dataset.id;
      veiwDetailIssued(index);
    });
  });

  document.querySelectorAll(".view-exist-partner").forEach((view) => {
    view.addEventListener("click", () => {
      let index = view.dataset.id;
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
document
  .getElementById("searching-contract-info-by-name")
  .addEventListener("input", function () {
    let inputSearchValue = this.value;
    console.log(inputSearchValue);
    const { filteredExistPartners, filteredIssuedContracts } =
      searchContractByName(
        inputSearchValue,
        existPartnerDatas,
        issuedContractDatas
      );
    loadDataContract(filteredExistPartners, filteredIssuedContracts);
  });
document
  .getElementById("sort-contract")
  .addEventListener("change", function () {
    let selectedOption = this.value;
    console.log(selectedOption);

    if (selectedOption === "sort-by-paid-invesment") {
      let { existSort, issuedSort } = sortContractByPaid(
        existPartnerDatas,
        issuedContractDatas
      );
      loadDataContract(existSort, issuedSort);
    } else if (selectedOption === "sort-by-name") {
      let { existSort, issuedSort } = sortContracByName(
        existPartnerDatas,
        issuedContractDatas
      );
      loadDataContract(existSort, issuedSort);
    } else {
      let { existSort, issuedSort } = sortByID(
        existPartnerDatas,
        issuedContractDatas
      );
      loadDataContract(existSort, issuedSort);
    }
  });

export const getInputFirstContract = {
  contractNumber: document.getElementById("contact-number"),
  profilePicture: document.getElementById("photoAddress"),
  uploadPhoto: document.getElementById("upload-photo"),
  firstName: document.getElementById("first-name-contract"),
  lastName: document.getElementById("last-name-contract"),
  idPassport: document.getElementById("id-passport-contract"),
  signature: document.getElementById("signature-contract"),
};
export function contractFirstDetail() {
  const {
    contractNumber,
    profilePicture,
    uploadPhoto,
    firstName,
    lastName,
    idPassport,
    signature,
  } = getInputFirstContract;
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

    const activeFirstName = checkValidation(
      regex.patternName,
      getFirstName,
      firstNameErr,
      firstName,
      isValidFirstForm
    );

    const activeContractNumber = checkValidation(
      regex.patternContractNum,
      getContractNumber,
      contactErr,
      contractNumber,
      isValidFirstForm
    );
    if (!getPhotoAddress) {
      uploadPhototErr.innerHTML = `<i class="ri-error-warning-line"></i> Requirement!`;
      isValidFirstForm = false;
    } else {
      uploadPhototErr.innerHTML = "";
    }
    const activeLastName = checkValidation(
      regex.patternName,
      getLastName,
      lastNameErr,
      lastName,
      isValidFirstForm
    );
    const activePassId = checkValidation(
      regex.patternID,
      getIdPassport,
      idErr,
      idPassport,
      isValidFirstForm
    );

    if (
      activeFirstName &&
      activeContractNumber &&
      activeLastName &&
      activePassId
    ) {
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
export const getInputContractSecond = {
  purchaseMethod: document.getElementById("purchase-Method"),
  country: document.getElementById("country-contract"),
  province: document.getElementById("province-contract"),
  district: document.getElementById("district-contract"),
  commune: document.getElementById("commune-contract"),
  email: document.getElementById("email-contact"),
  startAgreementDate: document.getElementById("start-agreement-contract"),
  endAgreementDate: document.getElementById("end-agreement-contract"),
};
export function contractSecondDetail() {
  let purchaseNextBtn = document.getElementById("purchaseNextBtn");

  let isValidSecondForms = true;
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

    const activeCountry = checkValidation(
      regex.patternAddress,
      getCountry,
      countryErr,
      country,
      isValidSecondForms
    );
    const activeProvine = checkValidation(
      regex.patternAddress,
      getProvince,
      provinceErr,
      province,
      isValidSecondForms
    );
    const activeDistrict = checkValidation(
      regex.patternAddress,
      getDistrict,
      districtErr,
      district,
      isValidSecondForms
    );
    const activeCommune = checkValidation(
      regex.patternAddress,
      getCommune,
      communeErr,
      commune,
      isValidSecondForms
    );
    const activeEmail = checkValidation(
      regex.patternEmail,
      getEmail,
      emailErr,
      email,
      isValidSecondForms
    );
    const activeDate = "";
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
    if (
      modalElement &&
      isValidSecondForms &&
      activeCommune &&
      activeDistrict &&
      activeProvine &&
      activeCountry &&
      activeEmail
    ) {
      new bootstrap.Modal(modalElement).show();
    } else {
      new bootstrap.Modal(
        document.getElementById("modalContractSecond")
      ).show();
    }
  });
}

export const getInputExist = {
  pExname: document.getElementById("partner-p_Ename-contract"),
  pExIdPassport: document.getElementById("idPassport-p_exist-contract"),
  pExCurrentPercent: document.getElementById("currentPercent-p_exist-contract"),
  pExTransferPercent: document.getElementById(
    "transferPercent-p_exist-contract"
  ),
  pExPaidAmount: document.getElementById("paidAmount-p_exist-contract"),
  pExNoteContract: document.getElementById("noteContract-p_exist"),
};

export const getInputIssued = {
  IAmountContract: document.getElementById("issued-N_amount-contract"),
  ITotalContract: document.getElementById("total-N_issued-contract"),
  IInvestmentContract: document.getElementById("Investment-N_amount-contract"),
  Inotes: document.getElementById("noteContract-p_exist"),
};

function deleteDataOnIssued(id) {
  let index = issuedContractDatas.findIndex(
    (param) => parseInt(param.idPassport) === parseInt(id)
  );
  if (index != -1) {
    issuedContractDatas.splice(index, 1);
    loadDataContract(existPartnerDatas, issuedContractDatas);
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
    loadDataContract(existPartnerDatas, issuedContractDatas);
  } else {
    console.error(`Can't find ID ${id}`);
  }
}

export let currentIndex = document.getElementById("edit-index");
currentIndex.value = "";
function updateDataOnEachMethod(index, purchaseUpdate) {
  debugger;
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
               type="text"
               class="form-control"
               id="IAmountContract"
             />
           </div>
           <div class="mb-3">
             <label for="ITotalContract" class="form-label"
               >Total After Issue</label
             >
             <input
               type="text"
               class="form-control"
               id="ITotalContract"
             />
           </div>
           <div class="mb-3">
             <label for="IInvestmentContract" class="form-label"
               >Investment Amount ($)</label
             >
             <input
               type="text"
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
         <h5 class="text-primary mb-3">
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
           <span id="edit-partner-err" class="error-field"></span>
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
               type="text"
               class="form-control"
               id="pExCurrentPercent"
             />
           </div>
           <div class="col-md-4 mb-3">
             <label for="pExTransferPercent" class="form-label"
               >Transfer %</label
             >
             <input
               type="text"
               class="form-control"
               id="pExTransferPercent"
             />
           </div>
           <div class="col-md-4 mb-3">
             <label for="pExPaidAmount" class="form-label"
               >Paid Amount ($)</label
             >
             <input
               type="text"
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
