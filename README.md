# Mobile Carrier Detection Library

This library detects the mobile carrier of a given South African phone number based on specific number patterns.

## Installation

Install the package using npm:

```bash

npm install mobile-carrier-detection

```

## Usage

Import the detectCarrier function and pass a South African phone number to detect the mobile carrier.

```

import { detectCarrier } from 'mobile-carrier-detection';

const phoneNumber = '0821234567';
const carrier = detectCarrier(phoneNumber);
console.log(`Carrier: ${carrier}`); // Output: Carrier: Vodacom

```

## Supported Carriers

MTN \
Vodacom \
Cell C \
Telkom Mobile \
Lycamobile SA \
Virgin Mobile \
Rain \
Toll-free, Premium-rate, and other service numbers


## License

This project is licensed under the [MIT License](./LICENSE).