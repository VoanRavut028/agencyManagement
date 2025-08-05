import { issuedContractDatas, existPartnerDatas } from "./features.js";

export function veiwDetailIssued(index) {
  let indexFounded = issuedContractDatas.findIndex(
    (e) => parseInt(e.idPassport) === parseInt(index)
  );
  let viewObj = issuedContractDatas[indexFounded];
  new bootstrap.Modal(document.getElementById("viewDdetail-issued")).show();
  let summary = `
<div class="row g-4">
  <div class="col-6 col-md-5 text-center">
    <img
      src="${viewObj.photo}"
      id="summaryImage"
      alt="Profile"
      class="img-fluid rounded-circle mb-3 shadow-sm"
      style="width: 80px; height: 80px"
    />
    <p class="h5 fw-semibold text-dark">
      ${viewObj.firstName} ${viewObj.lastName}
    </p>
    <p class="text-muted small">ID / Passport: ${viewObj.idPassport}</p>
    <p class="text-muted small">Signature: ${viewObj.signature || "—"}</p>
  </div>
  <div class="col-6 text-nowrap d-flex flex-column align-items-end">
    <h3 class="fw-bold">Contract Details</h3>
    <p>Contract Number: ${viewObj.contactNumber}</p>
    <p>${viewObj.startAgreementDate}</p>
  </div>

  <div class="col-12 d-flex flex-column align-items-stretch justify-content-between">
    <div class="d-flex justify-content-between flex-column">
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Email:</div>
        <div>${viewObj.email}</div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Address:</div>
        <div>
          ${viewObj.adress.commune}, ${viewObj.adress.district},<br />${
    viewObj.adress.province
  }, ${viewObj.adress.country}
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Agreement:</div>
        <div>${viewObj.startAgreementDate} → ${viewObj.endAgreementDate}</div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Purchase Method:</div>
        <div>${viewObj.purchase}</div>
      </div>
      <hr />
    </div>

    <div class="mt-4">
      <h3 class="section-title">Share Issuance</h3>
      <div class="d-flex justify-content-between flex-column">
        <hr />
        <div class="d-flex justify-content-between text-center">
          <div class="text-primary">Issued Amount (%):</div>
          <div>${viewObj.issuedAmount}</div>
        </div>
        <hr />
        <div class="d-flex justify-content-between text-center">
          <div class="text-primary">Total After Issue (%):</div>
          <div>${viewObj.ITotalContract}</div>
        </div>
        <hr />
        <div class="d-flex justify-content-between text-center">
          <div class="text-primary">Investment (USA):</div>
          <div>${viewObj.IInvestmentContract}</div>
        </div>
        <hr />
        <div class="d-flex justify-content-between text-center">
          <div class="text-primary">Notes:</div>
          <div>${viewObj.Inotes}</div>
        </div>
        <hr />
      </div>
    </div>

    <div class="d-flex justify-content-end">
      <button data-bs-dismiss="modal" class="btn btn-danger">Ok</button>
    </div>
  </div>
</div>
            `;
  document.getElementById("show-view-contract-issued").innerHTML = summary;
}
export function veiwDetailExistPartner(index) {
  let indexFounded = existPartnerDatas.findIndex(
    (e) => parseInt(e.idPassport) === parseInt(index)
  );
  let viewObj = existPartnerDatas[indexFounded];

  new bootstrap.Modal(
    document.getElementById("viewDdetail-exist-partner")
  ).show();
  let summary = `
        <div class="row g-4">
   <div class="col-6 col-md-5 text-center">
    <img
      src="${viewObj.photo}"
      id="summaryImage"
      alt="Profile"
      class="img-fluid rounded-circle mb-3 shadow-sm"
      style="width: 80px; height: 80px"
    />
    <p class="h5 fw-semibold text-dark">
      ${viewObj.firstName} ${viewObj.lastName}
    </p>
    <p class="text-muted small">ID / Passport: ${viewObj.idPassport}</p>
    <p class="text-muted small">Signature: ${viewObj.signature || "—"}</p>
  </div>
  <div class="col-6 text-nowrap d-flex flex-column align-items-end">
    <h3 class="fw-bold">Contract Details</h3>
    <p>Contract Number: ${viewObj.contactNumber}</p>
    <p>${viewObj.startAgreementDate}</p>
  </div>

  <div class="col-12 d-flex flex-column align-items-stretch justify-content-between">
    <div class="d-flex justify-content-between flex-column">
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Email:</div>
        <div>${viewObj.email}</div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Address:</div>
        <div>
          ${viewObj.adress.commune}, ${viewObj.adress.district},<br />${
    viewObj.adress.province
  }, ${viewObj.adress.country}
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Agreement:</div>
        <div>${viewObj.startAgreementDate} → ${viewObj.endAgreementDate}</div>
      </div>
      <hr />
      <div class="d-flex justify-content-between text-center">
        <div class="text-primary">Purchase Method:</div>
        <div>${viewObj.purchase}</div>
      </div>
      <hr />
    </div>
<div class="mt-4">
  <h3 class="section-title">Partner Information</h3>
  <div class="d-flex justify-content-between flex-column">
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">Partner Name:</div>
      <div>${viewObj.partnerName}</div>
    </div>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">ID/Passport:</div>
      <div>${viewObj.pExIdPassport}</div>
    </div>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">Current (%):</div>
      <div>${viewObj.pExCurrentPercent}%</div>
    </div>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">Transfer (%):</div>
      <div>${viewObj.pExTransferPercent}%</div>
    </div>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">Paid (USA):</div>
      <div>$${viewObj.pExPaidAmount}</div>
    </div>
    <hr />
    <div class="d-flex justify-content-between text-center">
      <div class="text-primary">Notes:</div>
      <div>${viewObj.pExNoteContract}</div>
    </div>
    <hr />
  </div>
</div>
<div class="d-flex justify-content-end">
  <button data-bs-dismiss="modal" class="btn btn-danger">Ok</button>
</div>
            `;
  document.getElementById("show-view-contract-exist-partner").innerHTML =
    summary;
}
