export class regexPattern {
  patternContractNum = /^[A-Z]{2,}-\d{2,10}$/;
  patternName = /^[A-Z]+[a-z]{1,20}$/;
  patternPartnerName = /^[A-Z]+[a-zA-Z\s]{1,40}$/;
  patternID = /^[A-Z0-9]{6,12}$/;
  patternSignature = /^[A-Za-z._-]{1,}$/;
  patternAddress = /^[A-Z]+[a-zA-Z0-9\s]{1,40}$/;
  patternEmail = /^[A-Za-z0-9.-_%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/;
  patternPercentage = /^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/;
  patternMoney = /^[0-9]{1,}$/;
  patterDate = /^[0-9]$/;
}
