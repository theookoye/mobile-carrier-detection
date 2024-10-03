type CarrierPattern = [string, RegExp];

const carrierPatterns: readonly CarrierPattern[] = [
  ['Virgin Mobile', /^0741/],
  ['MTN', /^(060[3-5]|063[0-5]|063[8-9]|065[5-7]|0710|071[7-9]|073|078|083|0810)/],
  ['Vodacom', /^(060[6-9]|063[6-7]|064[6-9]|065[0-3]|066[0-5]|071[1-6]|072|076|079|0818|082)/],
  ['Cell C', /^(061[0-3]|061[5-9]|062|064[1-5]|074|084)/],
  ['Telkom Mobile', /^(0614|065[8-9]|067[0-2]|0811|0815|0817)/],
  ['Lycamobile SA', /^0654/],
  ['Rain', /^0816/],
  ['Toll-free', /^080/],
  ['USAL licence holders', /^085/],
  ['Sharecall/MaxiCall/Premium-rate services', /^086[0-9]{1,2}/],
  ['Value-added services (VoIP)', /^087/],
  ['Pagers and Telkom CallAnswer voicemail', /^088/],
  ['Maxinet, polls, and radio call-in services', /^089/],
  ['Premium-rate services', /^(090|0902|091|092)/],
  ['Machine related services', /^(096|097|098)/],
] as const;

const cleanPhoneNumber = (phoneNumber: string): string => {
  let cleaned = phoneNumber.replace(/\D/g, '');
  
  if (cleaned.startsWith('27')) {
    cleaned = cleaned.slice(2);
  }
  
  return cleaned.startsWith('0') ? cleaned : `0${cleaned}`;
};

const detectCarrier = (phoneNumber: string): string | null => {
  const cleanedNumber = cleanPhoneNumber(phoneNumber);
  
  const matchedCarrier = carrierPatterns.find(([_, pattern]) => 
    pattern.test(cleanedNumber)
  );
  
  return matchedCarrier ? matchedCarrier[0] : null;
};

export { detectCarrier };