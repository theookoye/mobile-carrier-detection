interface CarrierMapping {
    carrier: string;
    pattern: RegExp;
}

const carrierMappings: CarrierMapping[] = [
    {
        carrier: 'MTN',
        pattern: /^(060[3-5]|063[0-5]|063[8-9]|065[5-7]|0710|071[7-9]|073|078|083|0810)$/
    },
    {
        carrier: 'Vodacom',
        pattern: /^(060[6-9]|063[6-7]|064[6-9]|065[0-3]|066[0-5]|071[1-6]|072|076|079|0818|082)$/
    },
    {
        carrier: 'Cell C',
        pattern: /^(061[0-3]|061[5-9]|062|064[1-5]|074|084)$/
    },
    {
        carrier: 'Telkom Mobile',
        pattern: /^(0614|065[8-9]|067[0-2]|0811|0815|0817)$/
    },
    {
        carrier: 'Lycamobile SA',
        pattern: /^0654$/
    },
    {
        carrier: 'Virgin Mobile',
        pattern: /^0741$/
    },
    {
        carrier: 'Rain',
        pattern: /^0816$/
    },
    {
        carrier: 'Toll-free',
        pattern: /^080$/
    },
    {
        carrier: 'USAL licence holders',
        pattern: /^085$/
    },
    {
        carrier: 'Sharecall/MaxiCall/Premium-rate services',
        pattern: /^086[0-9]{1,2}$/
    },
    {
        carrier: 'Value-added services (including VoIP)',
        pattern: /^087$/
    },
    {
        carrier: 'Pagers and Telkom CallAnswer voicemail',
        pattern: /^088$/
    },
    {
        carrier: 'Maxinet, polls, and radio call-in services',
        pattern: /^089$/
    },
    {
        carrier: 'Premium-rate services',
        pattern: /^(090|0902|091|092)$/
    },
    {
        carrier: 'Machine related services',
        pattern: /^(096|097|098)$/
    }
];

export const detectCarrier = (phoneNumber: string): string | null => {
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    return carrierMappings.find(mapping => mapping.pattern.test(cleanedNumber))?.carrier ?? null;
};
