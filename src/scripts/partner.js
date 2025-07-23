let firtPartnerInfos = [
  {
    id: 1,
    partner: "kaka",
    email: "kaka@gmail.com",
    phonenumber: "097 56 45 223",
    commune: "Klanghei",
    district: "Srey Snom",
    province: "Siem Reap",
    country: "Cambodia",
    typeofpartnership: "General Partner",
    comment: "comments.....",
    ownership: "50",
    capitalinvesment: "6,0000",
    profitshare: "20",
    date: "2025-07-14",
    chosefile: "file.pdf",
  },
  {
    id: 2,
    partner: "Jane Smith",
    email: "jane.smith@example.com",
    phonenumber: "077 11 22 333",
    commune: "Battambang",
    district: "Sangke",
    province: "Battambang",
    country: "Cambodia",
    typeofpartnership: "General Partner",
    comment: "Marketing collaboration",
    ownership: "10",
    capitalinvesment: "2,0000",
    profitshare: "50",
    date: "2024-11-20",
    chosefile: "mou.pdf",
  },
  {
    id: 3,
    partner: "Lina Lorm",
    email: "lina.LM@example.com",
    phonenumber: "097 45 67 433",
    commune: "Sla Kram",
    district: " Soutr Nikom",
    province: "Battambang",
    country: "Siem Reap",
    typeofpartnership: "General Partner",
    comment: "Marketing collaboration",
    ownership: "50",
    capitalinvesment: "5,0000",
    profitshare: "15",
    date: "2025-07-20",
    chosefile: "mou.pdf",
  },
  {
    id: 4,
    partner: "Dara Keo",
    email: "dara.ko@example.com",
    phonenumber: "081 65 45 89",
    commune: " Batheay",
    district: "Svay Teab",
    province: "Kompong Cham",
    country: "Cambodia",
    typeofpartnership: "General Partner",
    comment: "Marketing collaboration",
    ownership: "50",
    capitalinvesment: "8,0000",
    profitshare: "20",
    date: "2025-10-26",
    chosefile: "mou.pdf",
  },
];

let invaledError = `<i class="ri-error-warning-line"></i> Invalided!`;
let requiedError = `<i class="ri-error-warning-line"></i> This field is Requied!`;

const dataTable = document.getElementById("dataTable");

function renderTable() {
  dataTable.innerHTML = "";

  if (firtPartnerInfos.length === 0) {
    dataTable.innerHTML =
      '<tr><td colspan="10" class="text-center">No partners added yet.</td></tr>';
    return;
  }

  firtPartnerInfos.forEach((partner, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${partner.id}</td>
            <td>${partner.partner}</td>
            <td> ${partner.country}</td>
            <td>${partner.email}</td>
            <td>${partner.phonenumber}</td>
            <td>${partner.ownership || ""}%</td>
            <td>$ ${partner.capitalinvesment || ""}</td>
            <td>${partner.profitshare || ""}%</td>
            <td>${partner.date || ""}</td>
            <td>
                <button class="btn btn-info btn-sm me-1 view-detials-btn" data-bs-toggle="modal" data-bs-target="#view-check" data-id="${
                  partner.id
                }">View</button>
                <button class="btn btn-warning btn-sm edit-btn me-1" data-id="${
                  partner.id
                }">Edit</button>
                <button class="btn btn-danger btn-sm delete-btn" data-id="${
                  partner.id
                }">Delete</button>
            </td>


            <div class="modal fade" id="view-check" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5 text-success" id="exampleModalLabel">View Detail</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body" id="view-detail"></div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

        `;
    dataTable.appendChild(row);
  });
  
// search data from table
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const query = document.getElementById("searchInput").value.trim().toLowerCase();

  const filteredPartners = firtPartnerInfos.filter((partner) => {
    return (
      partner.partner.toLowerCase().includes(query) ||
      partner.email.toLowerCase().includes(query)
    );
  });

  renderFilteredTable(filteredPartners);
});

function renderFilteredTable(partners) {
  dataTable.innerHTML = "";

  if (partners.length === 0) {
    dataTable.innerHTML =
      '<tr><td colspan="10" class="text-center">No matching partners found.</td></tr>';
    return;
  }

  partners.forEach((partner, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${partner.id}</td>
            <td>${partner.partner}</td>
            <td> ${partner.country}</td>
            <td>${partner.email}</td>
            <td>${partner.phonenumber}</td>
            <td>${partner.ownership || ""}%</td>
            <td>$ ${partner.capitalinvesment || ""}</td>
            <td>${partner.profitshare || ""}%</td>
            <td>${partner.date || ""}</td>
            <td>
                <button class="btn btn-info btn-sm me-1 view-detials-btn" data-bs-toggle="modal" data-bs-target="#view-check" data-id="${
                  partner.id
                }">View</button>
                <button class="btn btn-warning btn-sm edit-btn me-1" data-id="${
                  partner.id
                }">Edit</button>
                <button class="btn btn-danger btn-sm delete-btn" data-id="${
                  partner.id
                }">Delete</button>
            </td>
        `;
    dataTable.appendChild(row);
  });

<<<<<<< HEAD:src/asideAndNavbar/partner.js
  // Attach event listeners for dynamically created buttons
=======
  // Re-attach the event listeners to new elements
  document.querySelectorAll(".view-detials-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = parseInt(event.target.dataset.id);
      viewdails(id);
    });
  });

  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = parseInt(event.target.dataset.id);
      editPartner(id);
    });
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = parseInt(event.target.dataset.id);
      deletePartner(id);
    });
  });
}

  //  created buttons
>>>>>>> 6925484d74936b155ede75d3a8db3640b62aa559:src/scripts/partner.js

  document.querySelectorAll(".view-detials-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = parseInt(event.target.dataset.id);
      viewdails(id);
    });
  });

  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = parseInt(event.target.dataset.id);
      editPartner(id);
    });
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = parseInt(event.target.dataset.id);
      deletePartner(id);
    });
  });
}

// view when search data
function viewdails(id) {
  const partner = firtPartnerInfos.find((p) => p.id === id);
  if (!partner) return;

  const detailHtml = `
    <p><strong>Partner:</strong> ${partner.partner}</p>
    <p><strong>Email:</strong> ${partner.email}</p>
    <p><strong>Phone Number:</strong> ${partner.phonenumber}</p>
    <p><strong>Commune:</strong> ${partner.commune}</p>
    <p><strong>District:</strong> ${partner.district}</p>
    <p><strong>Province:</strong> ${partner.province}</p>
    <p><strong>Country:</strong> ${partner.country}</p>
    <p><strong>Type of Partnership:</strong> ${partner.typeofpartnership}</p>
    <p><strong>Comment:</strong> ${partner.comment}</p>
    <p><strong>Ownership:</strong> ${partner.ownership}</p>
    <p><strong>Capital Investment:</strong> ${partner.capitalinvesment}</p>
    <p><strong>Profit Share:</strong> ${partner.profitshare}</p>
    <p><strong>Date:</strong> ${partner.date}</p>
    <p><strong>File:</strong> ${partner.chosefile}</p>
  `;

  document.getElementById("view-detail").innerHTML = detailHtml;
}

// add new item in table validation
function addPartnerInfo(
  getPartner,
  getCommune,
  getDistrict,
  getProvince,
  getCountry,
  getEmail,
  getPhoneNumber,
  getTypeOfPartnership,
  getComment
) {
  firtPartnerInfos.push({
    id:
      firtPartnerInfos.length > 0
        ? Math.max(...firtPartnerInfos.map((p) => p.id)) + 1
        : 1,
    partner: getPartner,
    commune: getCommune,
    district: getDistrict,
    province: getProvince,
    country: getCountry,
    email: getEmail,
    phonenumber: getPhoneNumber,
    typeofpartnership: getTypeOfPartnership,
    comment: getComment,
    ownership: "",
    capitalinvesment: "",
    profitshare: "",
    date: "",
    chosefile: "",
  });
  console.table(firtPartnerInfos);
}
// udate old data to new data
function updatePartnerInfo(
  getownership,
  getCapitalinvesment,
  getprofitshare,
  getdate,
  getchosefile
) {
  const lastPartnerIndex = firtPartnerInfos.length - 1;
  if (lastPartnerIndex >= 0) {
    firtPartnerInfos[lastPartnerIndex].ownership = getownership;
    firtPartnerInfos[lastPartnerIndex].capitalinvesment = getCapitalinvesment;
    firtPartnerInfos[lastPartnerIndex].profitshare = getprofitshare;
    firtPartnerInfos[lastPartnerIndex].date = getdate;
    firtPartnerInfos[lastPartnerIndex].chosefile = getchosefile;
  }

  console.table(firtPartnerInfos);
}
//view delail on table
function viewdails(id) {
  const partner = firtPartnerInfos.find((p) => p.id === id);
  const modalview = document.getElementById("view-detail");

  if (partner) {
    modalview.innerHTML = `
                    <div class="row g-4">
                    <div class="col-md-5 text-center">
                      <img src="" alt="Profile" class="profile-img mb-3">
                      <p><strong>Partner Name:</strong> ${partner.partner}</p>
                      <p class="text-muted small">Email: ${partner.email}</p>
                    </div>
                    <div class="col-md-7">
                      <h3 class="section-title">Details</h3>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <strong>Phone Number:</strong>
                          <span>${partner.phonenumber}</span>
                        </li>
                        <li class="list-group-item">
                          <strong>OwnerShip:</strong>
                          <span>${partner.ownership}</span>
                        </li>
                        <li class="list-group-item">
                          <strong>Capitalinvesment:</strong>
                          <span>${partner.capitalinvesment}</span>
                        </li>
                        <li class="list-group-item">
                          <strong>profitshare:</strong>
                          <span>${partner.profitshare}</span>
                        </li>
                        <li class="list-group-item">
                          <strong>Partnership Start Date:</strong>
                          <span>${partner.date}</span>
                        </li>
                      </ul>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <strong>Address:</strong>
                          <span>${partner.commune},${partner.district}, ${partner.province}, ${partner.country}.</span>
                        </li>
                        <li class="list-group-item">
                          <strong>Type Of Partner:</strong>
                          <span>${partner.typeofpartnership}</span>
                        </li>
                        <li class="list-group-item">
                          <strong>Proposal Details:</strong>
                          <span>${partner.comment}</span>
                        </li>
                        <li class="list-group-item">
                          <strong>Chose File:</strong>
                          <span>${partner.chosefile}</span>
                        </li>
                       
                      </ul>
                  </div>        
    `;
  }
  new bootstrap.Modal(document.getElementById("view-detail"));
}
// view button (the button stay at html)
function viewPartner(id) {
  const partner = firtPartnerInfos.find((p) => p.id === id);
  const summaryModalBody = document.getElementById("checksummary");
  if (partner) {
    summaryModalBody.innerHTML = `
            <div class="row g-4">
              <div class="col-md-5 text-center">
                <img src="" alt="Profile" class="profile-img mb-3">
                <p><strong>Partner Name:</strong> ${partner.partner}</p>
                <p class="text-muted small">Email: ${partner.email}</p>
              </div>
              <div class="col-md-7">
                <h3 class="section-title">Details</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <strong>Phone Number:</strong>
                    <span>${partner.phonenumber}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>OwnerShip:</strong>
                    <span>${partner.ownership}%</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Capitalinvesment:</strong>
                    <span>$${partner.capitalinvesment}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>profitshare:</strong>
                    <span>${partner.profitshare}%</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Partnership Start Date:</strong>
                    <span>${partner.date}</span>
                  </li>
                </ul>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <strong>Address:</strong>
                    <span>${partner.commune},${partner.district}, ${partner.province}, ${partner.country}.</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Type Of Partner:</strong>
                    <span>${partner.typeofpartnership}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Proposal Details:</strong>
                    <span>${partner.comment}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Chose File:</strong>
                    <span>${partner.chosefile}</span>
                  </li>
                 
                </ul>
            </div> 
        `;
    new bootstrap.Modal(document.getElementById("summary")).show();
  }
}
// edit button
function editPartner(id) {
  const partnerToEdit = firtPartnerInfos.find((p) => p.id === id);
  const editModalBody = document.getElementById("editpartner-to-save");

  if (partnerToEdit) {
    editModalBody.innerHTML = `
            <form id="editForm">
            <div class= "row">
                <h5>Partner Information:</h5>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputPartner" class="form-label">Partner Name:</label>
                    <input type="text" class="form-control" id="editInputPartner" value="${
                      partnerToEdit.partner
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputCommune" class="form-label">Commune:</label>
                    <input type="text" class="form-control" id="editInputCommune" value="${
                      partnerToEdit.commune
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputDistrict" class="form-label">District:</label>
                    <input type="text" class="form-control" id="editInputDistrict" value="${
                      partnerToEdit.district
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputProvince" class="form-label">Province:</label>
                    <input type="text" class="form-control" id="editInputProvince" value="${
                      partnerToEdit.province
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputCountry" class="form-label">Country:</label>
                    <input type="text" class="form-control" id="editInputCountry" value="${
                      partnerToEdit.country
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputEmail" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="editInputEmail" value="${
                      partnerToEdit.email
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputPhoneNumber" class="form-label">Phone Number:</label>
                    <input type="text" class="form-control" id="editInputPhoneNumber" value="${
                      partnerToEdit.phonenumber
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputTypeOfPartnership" class="form-label">Type of Partnership:</label>
                    <select class="form-select" id="editInputTypeOfPartnership">
                        <option value="General Partnership" ${
                          partnerToEdit.typeofpartnership ===
                          "General Partnership"
                            ? "selected"
                            : ""
                        }>General Partnership</option>
                        <option value="Limited Partnership" ${
                          partnerToEdit.typeofpartnership ===
                          "Limited Partnership"
                            ? "selected"
                            : ""
                        }>Limited Partnership</option>
                        <option value="Limited Liability Partnership" ${
                          partnerToEdit.typeofpartnership ===
                          "Limited Liability Partnership"
                            ? "selected"
                            : ""
                        }>Limited Liability Partnership</option>
                        <option value="Limited Liability Limited Partnership" ${
                          partnerToEdit.typeofpartnership ===
                          "Limited Liability Limited Partnership"
                            ? "selected"
                            : ""
                        }>Limited Liability Limited Partnership</option>
                    </select>
                </div>
                <div class="mb-3 col-lg-12 col-md-12 col-sm-12 col-12">
                    <label for="editInputComment" class="form-label">Proposal Details (Comment):</label>
                    <textarea class="form-control" id="editInputComment">${
                      partnerToEdit.comment
                    }</textarea>
                </div>

                <hr>
                <h5>Share & Ownership Agreement:</h5>
                <div class="mb-3">
                    <label for="editInputOwnership" class="form-label">Ownership Share (%):</label>
                    <input type="text" class="form-control" id="editInputOwnership" value="${
                      partnerToEdit.ownership || ""
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputCapital" class="form-label">Capital Investment ($):</label>
                    <input type="text" class="form-control" id="editInputCapital" value="${
                      partnerToEdit.capitalinvesment || ""
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputProfit" class="form-label">Profit Share (%):</label>
                    <input type="text" class="form-control" id="editInputProfit" value="${
                      partnerToEdit.profitshare || ""
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputDate" class="form-label">Partnership Start Date:</label>
                    <input type="date" class="form-control" id="editInputDate" value="${
                      partnerToEdit.date || ""
                    }">
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="editInputFile" class="form-label">Choose File:</label>
                    <input type="file" class="form-control" id="editInputFile">
                    <small class="text-muted">Current file: ${
                      partnerToEdit.chosefile || "None"
                    }</small>
                </div>
                <button type="submit" class="btn btn-success w-25" id="saveEditBtn" data-id="${
                  partnerToEdit.id
                }">Save Changes</button>
                </div>
            </form>
        `;

    new bootstrap.Modal(document.getElementById("exampleModalToggle3")).show();

    document
      .getElementById("saveEditBtn")
      .addEventListener("click", function (event) {
        event.preventDefault();
        const partnerId = parseInt(this.dataset.id);
        const index = firtPartnerInfos.findIndex((p) => p.id === partnerId);

        if (index !== -1) {
          firtPartnerInfos[index].partner =
            document.getElementById("editInputPartner").value;
          firtPartnerInfos[index].commune =
            document.getElementById("editInputCommune").value;
          firtPartnerInfos[index].district =
            document.getElementById("editInputDistrict").value;
          firtPartnerInfos[index].province =
            document.getElementById("editInputProvince").value;
          firtPartnerInfos[index].country =
            document.getElementById("editInputCountry").value;
          firtPartnerInfos[index].email =
            document.getElementById("editInputEmail").value;
          firtPartnerInfos[index].phonenumber = document.getElementById(
            "editInputPhoneNumber"
          ).value;
          firtPartnerInfos[index].typeofpartnership = document.getElementById(
            "editInputTypeOfPartnership"
          ).value;
          firtPartnerInfos[index].comment =
            document.getElementById("editInputComment").value;
          firtPartnerInfos[index].ownership =
            document.getElementById("editInputOwnership").value;
          firtPartnerInfos[index].capitalinvesment =
            document.getElementById("editInputCapital").value;
          firtPartnerInfos[index].profitshare =
            document.getElementById("editInputProfit").value;
          firtPartnerInfos[index].date =
            document.getElementById("editInputDate").value;

          const newFile = document.getElementById("editInputFile").files[0];
          if (newFile) {
            firtPartnerInfos[index].chosefile = newFile.name;
          }

          renderTable();
          bootstrap.Modal.getInstance(
            document.getElementById("exampleModalToggle3")
          ).hide();
          console.table(firtPartnerInfos);
        }
      });
  }
}
// delete button
function deletePartner(id) {
  if (confirm("Are you sure you want to delete this partner?")) {
    firtPartnerInfos = firtPartnerInfos.filter((partner) => partner.id !== id);
    renderTable();
    console.table(firtPartnerInfos);
  }
}

// Function to clear the first form inputs
function clearFirstForm() {
  document.getElementById("inputPartner").value = "";
  document.getElementById("inputCommune").value = "";
  document.getElementById("inputDistrict").value = "";
  document.getElementById("inputProvince").value = "";
  document.getElementById("inputCountry").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputPhoneNumber").value = "";
  document.getElementById("inputTypeOfPartnership").value = "";
  document.getElementById("inputComment").value = "";

  document.getElementById("partnernamevalidation").innerHTML = "";
  document
    .getElementById("inputPartner")
    .classList.remove("error-form", "valid-form");
  document.getElementById("commuevalidation").innerHTML = "";
  document
    .getElementById("inputCommune")
    .classList.remove("error-form", "valid-form");
  document.getElementById("districtvalidation").innerHTML = "";
  document
    .getElementById("inputDistrict")
    .classList.remove("error-form", "valid-form");
  document.getElementById("provincevalidation").innerHTML = "";
  document
    .getElementById("inputProvince")
    .classList.remove("error-form", "valid-form");
  document.getElementById("countryvalidation").innerHTML = "";
  document
    .getElementById("inputCountry")
    .classList.remove("error-form", "valid-form");
  document.getElementById("emailvalidation").innerHTML = "";
  document
    .getElementById("inputEmail")
    .classList.remove("error-form", "valid-form");
  document.getElementById("phonenumbervalidation").innerHTML = "";
  document
    .getElementById("inputPhoneNumber")
    .classList.remove("error-form", "valid-form");
}

// Function to clear the second form inputs
function clearSecondForm() {
  document.getElementById("inputOwnership").value = "";
  document.getElementById("inputCapital").value = "";
  document.getElementById("inputProfit").value = "";
  document.getElementById("inputDate").value = "";
  document.getElementById("inputFile").value = "";

  document.getElementById("ownershipValidetion").innerHTML = "";
  document
    .getElementById("inputOwnership")
    .classList.remove("error-form", "valid-form");
  document.getElementById("capitalinvestmentvalidation").innerHTML = "";
  document
    .getElementById("inputCapital")
    .classList.remove("error-form", "valid-form");
  document.getElementById("profitsharevalidation").innerHTML = "";
  document
    .getElementById("inputProfit")
    .classList.remove("error-form", "valid-form");
  document.getElementById("datevalidation").innerHTML = "";
  document
    .getElementById("inputDate")
    .classList.remove("error-form", "valid-form");
  document.getElementById("filevalidation").innerHTML = "";
  document
    .getElementById("inputFile")
    .classList.remove("error-form", "valid-form");
}

document
  .getElementById("next-button-first-form")
  .addEventListener("click", () => {
    let partner = document.getElementById("inputPartner");
    let getPartner = partner.value;
    let commune = document.getElementById("inputCommune");
    let getCommune = commune.value;
    let district = document.getElementById("inputDistrict");
    let getDistrict = district.value;
    let province = document.getElementById("inputProvince");
    let getProvince = province.value;
    let country = document.getElementById("inputCountry");
    let getCountry = country.value;
    let email = document.getElementById("inputEmail");
    let getEmail = email.value;
    let phonenumber = document.getElementById("inputPhoneNumber");
    let getPhoneNumber = phonenumber.value;
    let typeofpartnership = document.getElementById("inputTypeOfPartnership");
    let getTypeOfPartnership = typeofpartnership.value;
    let comment = document.getElementById("inputComment");
    let getComment = comment.value;

    let validation = true;

    const partnerNamePattern = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;

    if (!partnerNamePattern.test(getPartner) && getPartner !== "") {
      document.getElementById("partnernamevalidation").innerHTML = invaledError;
      document.getElementById("partnernamevalidation").style.color = "red";
      partner.classList.add("error-form");
      validation = false;
    } else if (getPartner === "") {
      document.getElementById("partnernamevalidation").innerHTML = requiedError;
      document.getElementById("partnernamevalidation").style.color = "red";
      partner.classList.add("error-form");
      validation = false;
    } else {
      document.getElementById("partnernamevalidation").innerHTML = "";
      partner.classList.add("valid-form");
      partner.classList.remove("error-form");
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(getEmail) && getEmail !== "") {
      document.getElementById("emailvalidation").innerHTML = invaledError;
      document.getElementById("emailvalidation").style.color = "red";
      email.classList.add("error-form");
      validation = false;
    } else if (getEmail === "") {
      document.getElementById("emailvalidation").innerHTML = requiedError;
      document.getElementById("emailvalidation").style.color = "red";
      email.classList.add("error-form");
      validation = false;
    } else {
      document.getElementById("emailvalidation").innerHTML = "";
      email.classList.add("valid-form");
      email.classList.remove("error-form");
    }

    const phoneNumberPattern = /^(?:\d\s?){9,10}$/;
    if (!phoneNumberPattern.test(getPhoneNumber) && getPhoneNumber !== "") {
      document.getElementById("phonenumbervalidation").innerHTML = invaledError;
      document.getElementById("phonenumbervalidation").style.color = "red";
      phonenumber.classList.add("error-form");
      validation = false;
    } else if (getPhoneNumber === "") {
      document.getElementById("phonenumbervalidation").innerHTML = requiedError;
      document.getElementById("phonenumbervalidation").style.color = "red";
      phonenumber.classList.add("error-form");
      validation = false;
    } else {
      document.getElementById("phonenumbervalidation").innerHTML = "";
      phonenumber.classList.add("valid-form");
      phonenumber.classList.remove("error-form");
    }

    const communePattern = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;

    if (!communePattern.test(getCommune) && getCommune !== "") {
      document.getElementById("commuevalidation").innerHTML = invaledError;
      document.getElementById("commuevalidation").style.color = "red";
      commune.classList.add("error-form");
      validation = false;
    } else if (getCommune === "") {
      document.getElementById("commuevalidation").innerHTML = requiedError;
      document.getElementById("commuevalidation").style.color = "red";
      commune.classList.add("error-form");
      validation = false;
    } else {
      document.getElementById("commuevalidation").innerHTML = "";
      commune.classList.add("valid-form");
      commune.classList.remove("error-form");
    }

    const districtPattern = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;

    if (!districtPattern.test(getDistrict) && getDistrict !== "") {
      document.getElementById("districtvalidation").innerHTML = invaledError;
      document.getElementById("districtvalidation").style.color = "red";
      district.classList.add("error-form");
      validation = false;
    } else if (getDistrict === "") {
      document.getElementById("districtvalidation").innerHTML = requiedError;
      document.getElementById("districtvalidation").style.color = "red";
      district.classList.add("error-form");
      validation = false;
    } else {
      document.getElementById("districtvalidation").innerHTML = "";
      district.classList.add("valid-form");
      district.classList.remove("error-form");
    }

    const provincePattern = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;

    if (!provincePattern.test(getProvince) && getProvince !== "") {
      document.getElementById("provincevalidation").innerHTML = invaledError;
      document.getElementById("provincevalidation").style.color = "red";
      province.classList.add("error-form");
      validation = false;
    } else if (getProvince === "") {
      document.getElementById("provincevalidation").innerHTML = requiedError;
      document.getElementById("provincevalidation").style.color = "red";
      province.classList.add("error-form");
      validation = false;
    } else {
      document.getElementById("provincevalidation").innerHTML = "";
      province.classList.add("valid-form");
      province.classList.remove("error-form");
    }

    const countryPattern = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;

    if (!countryPattern.test(getCountry) && getCountry !== "") {
      document.getElementById("countryvalidation").innerHTML = invaledError;
      document.getElementById("countryvalidation").style.color = "red";
      country.classList.add("error-form");
      validation = false;
    } else if (getCountry === "") {
      document.getElementById("countryvalidation").innerHTML = requiedError;
      document.getElementById("countryvalidation").style.color = "red";
      country.classList.add("error-form");
      validation = false;
    } else {
      document.getElementById("countryvalidation").innerHTML = "";
      country.classList.add("valid-form");
      country.classList.remove("error-form");
    }

    if (validation) {
      addPartnerInfo(
        getPartner,
        getCommune,
        getDistrict,
        getProvince,
        getCountry,
        getEmail,
        getPhoneNumber,
        getTypeOfPartnership,
        getComment
      );
      new bootstrap.Modal(
        document.getElementById("exampleModalToggleTwo")
      ).show();
    } else {
      new bootstrap.Modal(document.getElementById("mainPopup")).show();
    }
  });

// Event listener for the second form's "Preview" button
document.getElementById("preview-button").addEventListener("click", () => {
  let ownership = document.getElementById("inputOwnership");
  let getownership = ownership.value;
  let capitalinvesment = document.getElementById("inputCapital");
  let getCapitalinvesment = capitalinvesment.value;
  let profitshare = document.getElementById("inputProfit");
  let getprofitshare = profitshare.value;
  let date = document.getElementById("inputDate");
  let getdate = date.value;
  let chosefile = document.getElementById("inputFile");
  let getchosefile = chosefile.value;

  let validation = true;

  const ownershipPattern = /^(100|[1-9]?[0-9])$/;
  if (!ownershipPattern.test(getownership) && getownership !== "") {
    document.getElementById("ownershipValidetion").innerHTML = invaledError;
    document.getElementById("ownershipValidetion").style.color = "red";
    ownership.classList.add("error-form");
    validation = false;
  } else if (getownership === "") {
    document.getElementById("ownershipValidetion").innerHTML = requiedError;
    document.getElementById("ownershipValidetion").style.color = "red";
    ownership.classList.add("error-form");
    validation = false;
  } else {
    document.getElementById("ownershipValidetion").innerHTML = "";
    ownership.classList.add("valid-form");
    ownership.classList.remove("error-form");
  }

  const capitalInvestmentPattern = /^\$?\s*\d{1,3}(?:[,.]\d{3})*(?:[.,]\d+)?$/;
  if (
    !capitalInvestmentPattern.test(getCapitalinvesment) &&
    getCapitalinvesment !== ""
  ) {
    document.getElementById("capitalinvestmentvalidation").innerHTML =
      invaledError;
    document.getElementById("capitalinvestmentvalidation").style.color = "red";
    capitalinvesment.classList.add("error-form");
    validation = false;
  } else if (getCapitalinvesment === "") {
    document.getElementById("capitalinvestmentvalidation").innerHTML =
      requiedError;
    document.getElementById("capitalinvestmentvalidation").style.color = "red";
    capitalinvesment.classList.add("error-form");
    validation = false;
  } else {
    document.getElementById("capitalinvestmentvalidation").innerHTML = "";
    capitalinvesment.classList.add("valid-form");
    capitalinvesment.classList.remove("error-form");
  }

  const profitSharePattern = /^(100|[1-9]?[0-9])$/;
  if (!profitSharePattern.test(getprofitshare) && getprofitshare !== "") {
    document.getElementById("profitsharevalidation").innerHTML = invaledError;
    document.getElementById("profitsharevalidation").style.color = "red";
    profitshare.classList.add("error-form");
    validation = false;
  } else if (getprofitshare === "") {
    document.getElementById("profitsharevalidation").innerHTML = requiedError;
    document.getElementById("profitsharevalidation").style.color = "red";
    profitshare.classList.add("error-form");
    validation = false;
  } else {
    document.getElementById("profitsharevalidation").innerHTML = "";
    profitshare.classList.add("valid-form");
    profitshare.classList.remove("error-form");
  }

  if (getdate === "") {
    document.getElementById("datevalidation").innerHTML = requiedError;
    document.getElementById("datevalidation").style.color = "red";
    date.classList.add("error-form");
    validation = false;
  } else {
    document.getElementById("datevalidation").innerHTML = "";
    date.classList.add("valid-form");
    date.classList.remove("error-form");
  }

  if (getchosefile === "") {
    document.getElementById("filevalidation").innerHTML = requiedError;
    document.getElementById("filevalidation").style.color = "red";
    chosefile.classList.add("error-form");
    validation = false;
  } else {
    document.getElementById("filevalidation").innerHTML = "";
    chosefile.classList.add("valid-form");
    chosefile.classList.remove("error-form");
  }

  if (validation) {
    const tempPartner = {
      partner: document.getElementById("inputPartner").value,
      commune: document.getElementById("inputCommune").value,
      district: document.getElementById("inputDistrict").value,
      province: document.getElementById("inputProvince").value,
      country: document.getElementById("inputCountry").value,
      email: document.getElementById("inputEmail").value,
      phonenumber: document.getElementById("inputPhoneNumber").value,
      typeofpartnership: document.getElementById("inputTypeOfPartnership")
        .value,
      comment: document.getElementById("inputComment").value,
      ownership: getownership,
      capitalinvesment: getCapitalinvesment,
      profitshare: getprofitshare,
      date: getdate,
      chosefile: getchosefile ? getchosefile.split("\\").pop() : "N/A",
    };

    const summaryModalBody = document.getElementById("checksummary");
    summaryModalBody.innerHTML = `
            <h5>Partner Information:</h5>
            <p><strong>Partner Name:</strong> ${tempPartner.partner}</p>
            <p><strong>Address:</strong> ${tempPartner.commune}, ${
      tempPartner.district
    }, ${tempPartner.province}, ${tempPartner.country}</p>
            <p><strong>Email:</strong> ${tempPartner.email}</p>
            <p><strong>Phone Number:</strong> ${tempPartner.phonenumber}</p>
            <p><strong>Type of Partnership:</strong> ${
              tempPartner.typeofpartnership
            }</p>
            <p><strong>Comment:</strong> ${tempPartner.comment}</p>
            <hr>
            <h5>Share & Ownership Agreement:</h5>
            <p><strong>Ownership Share (%):</strong> ${
              tempPartner.ownership || "N/A"
            }</p>
            <p><strong>Capital Investment ($):</strong> ${
              tempPartner.capitalinvesment || "N/A"
            }</p>
            <p><strong>Profit Share (%):</strong> ${
              tempPartner.profitshare || "N/A"
            }</p>
            <p><strong>Partnership Start Date:</strong> ${
              tempPartner.date || "N/A"
            }</p>
            <p><strong>Chosen File:</strong> ${
              tempPartner.chosefile || "N/A"
            }</p>
        `;
    new bootstrap.Modal(document.getElementById("summary")).show();
  } else {
    new bootstrap.Modal(
      document.getElementById("exampleModalToggleTwo")
    ).show();
  }
});

document.getElementById("add-data-on-table").addEventListener("click", () => {
  let ownership = document.getElementById("inputOwnership");
  let getownership = ownership.value;
  let capitalinvesment = document.getElementById("inputCapital");
  let getCapitalinvesment = capitalinvesment.value;
  let profitshare = document.getElementById("inputProfit");
  let getprofitshare = profitshare.value;
  let date = document.getElementById("inputDate");
  let getdate = date.value;
  let chosefile = document.getElementById("inputFile");
  let getchosefile = chosefile.value;

  let validation = true;

  const ownershipPattern = /^(100|[1-9]?[0-9])$/;
  if (!ownershipPattern.test(getownership) && getownership !== "") {
    document.getElementById("ownershipValidetion").innerHTML = invaledError;
    document.getElementById("ownershipValidetion").style.color = "red";
    ownership.classList.add("error-form");
    validation = false;
  } else if (getownership === "") {
    document.getElementById("ownershipValidetion").innerHTML = requiedError;
    document.getElementById("ownershipValidetion").style.color = "red";
    ownership.classList.add("error-form");
    validation = false;
  } else {
    document.getElementById("ownershipValidetion").innerHTML = "";
    ownership.classList.add("valid-form");
    ownership.classList.remove("error-form");
  }

  const capitalInvestmentPattern = /^\$?\s*\d{1,3}(?:[,.]\d{3})*(?:[.,]\d+)?$/;
  if (
    !capitalInvestmentPattern.test(getCapitalinvesment) &&
    getCapitalinvesment !== ""
  ) {
    document.getElementById("capitalinvestmentvalidation").innerHTML =
      invaledError;
    document.getElementById("capitalinvestmentvalidation").style.color = "red";
    capitalinvesment.classList.add("error-form");
    validation = false;
  } else if (getCapitalinvesment === "") {
    document.getElementById("capitalinvestmentvalidation").innerHTML =
      requiedError;
    document.getElementById("capitalinvestmentvalidation").style.color = "red";
    capitalinvesment.classList.add("error-form");
    validation = false;
  } else {
    document.getElementById("capitalinvestmentvalidation").innerHTML = "";
    capitalinvesment.classList.add("valid-form");
    capitalinvesment.classList.remove("error-form");
  }

  const profitSharePattern = /^(100|[1-9]?[0-9])$/;
  if (!profitSharePattern.test(getprofitshare) && getprofitshare !== "") {
    document.getElementById("profitsharevalidation").innerHTML = invaledError;
    document.getElementById("profitsharevalidation").style.color = "red";
    profitshare.classList.add("error-form");
    validation = false;
  } else if (getprofitshare === "") {
    document.getElementById("profitsharevalidation").innerHTML = requiedError;
    document.getElementById("profitsharevalidation").style.color = "red";
    profitshare.classList.add("error-form");
    validation = false;
  } else {
    document.getElementById("profitsharevalidation").innerHTML = "";
    profitshare.classList.add("valid-form");
    profitshare.classList.remove("error-form");
  }

  if (getdate === "") {
    document.getElementById("datevalidation").innerHTML = requiedError;
    document.getElementById("datevalidation").style.color = "red";
    date.classList.add("error-form");
    validation = false;
  } else {
    document.getElementById("datevalidation").innerHTML = "";
    date.classList.add("valid-form");
    date.classList.remove("error-form");
  }

  if (getchosefile === "") {
    document.getElementById("filevalidation").innerHTML = requiedError;
    document.getElementById("filevalidation").style.color = "red";
    chosefile.classList.add("error-form");
    validation = false;
  } else {
    document.getElementById("filevalidation").innerHTML = "";
    chosefile.classList.add("valid-form");
    chosefile.classList.remove("error-form");
  }

  if (validation) {
    updatePartnerInfo(
      getownership,
      getCapitalinvesment,
      getprofitshare,
      getdate,
      getchosefile.split("\\").pop()
    );
    renderTable();

    bootstrap.Modal.getInstance(
      document.getElementById("exampleModalToggleTwo")
    ).hide();
    const mainPopupModal = bootstrap.Modal.getInstance(
      document.getElementById("mainPopup")
    );
    if (mainPopupModal) {
      mainPopupModal.hide();

      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }
    }

    clearFirstForm();
    clearSecondForm();
  } else {
    new bootstrap.Modal(
      document.getElementById("exampleModalToggleTwo")
    ).show();
  }
});

document.addEventListener("DOMContentLoaded", renderTable);

<<<<<<< HEAD:src/asideAndNavbar/partner.js
//  search data from table
=======

>>>>>>> 6925484d74936b155ede75d3a8db3640b62aa559:src/scripts/partner.js
