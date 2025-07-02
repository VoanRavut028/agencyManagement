const contactDatas = [
  {
    id: 1,
    contactNumber: "12233435",
    firstName: "Sok Chea",
    lastName: "Sok Chea",
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
    purchase: "Buy from Existing Partner.",
  },
  {
    id: 2,
    contactNumber: "12233435",
    name: "Sok Chea",
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
    purchase: "Buy from Existing Partner.",
  },
];

function loadDataContract() {
  handleDataContract();
  let card = ``;
  contactDatas.forEach((element) => {
    card += `
   <tr>
                <td>${element.id}</td>
                <td>${element.contactNumber}</td>
                <td>${element.name}</td>
                <td>${element.contactInfo}</td>
                <td>${element.adress.province}</td>
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
loadDataContract();
handleDataContract();
function handleDataContract() {
  let previewToContract = document.querySelector("#save-contract-toTable");

  let contractNumber = document.getElementById("contact-number");
  let photoAddress = document.getElementById("photoAddress");
  let firstName = document.getElementById("first-name-contract");
  let lastName = document.getElementById("last-name-contract");
  let idPassport = document.getElementById("id-passport-contract");
  let signature = document.getElementById("signature-contract");
  let country = document.getElementById("country-contract");
  let province = document.getElementById("province-contract");
  let district = document.getElementById("district-contract");
  let commune = document.getElementById("commune-contract");
  let contact = document.getElementById("contact-contract");
  let agreement = document.getElementById("agreement-contract");
  // Radio pleace
  let p_Ename = document.getElementById("partner-p_Ename-contract");
  let p_EidPassport = document.getElementById("idPassport-p_exist-contract");
  let p_EcurrentPercent = document.getElementById(
    "currentPercent-p_exist-contract"
  );
  let p_EtransferPercent = document.getElementById(
    "transferPercent-p_exist-contract"
  );
  let p_EpaidAmount = document.getElementById("paidAmount-p_exist-contract");
  let p_EnoteContract = document.getElementById("noteContract-p_exist");
  // let photoAddre = document.getElementById("");

  // catch values

  let getContractNumber = contractNumber.value;
  let getPhotoAddress = photoAddress.value;
  let getFirstName = firstName.value;
  let getLastName = lastName.value;
  let getIdPassport = idPassport.value;
  let getSignature = signature.value;
  let getCountry = country.value;
  let getProvince = province.value;
  let getDistrict = district.value;
  let getCommune = commune.value;
  let getContact = contact.value;
  let getAgreement = agreement.value;
  let getp_Ename = p_Ename.value;
  let isValid = false;
  previewToContract.addEventListener("click", (event) => {
    event.preventDefault();
    if (!isValid) {
      contactDatas.push({
        contactNumber: getContractNumber,
        name: getFirstName,
        idPassport: getIdPassport,
        contactInfo: getContact,
        adress: {
          country: getCountry,
          province: getProvince,
          district: getDistrict,
          commune: getCommune,
        },
        agreementDate: getAgreement,
        signature: getSignature,
        photo: getPhotoAddress,
      });
    }
    alert(contactDatas[2].fi);
  });
}
