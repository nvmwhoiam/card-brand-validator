# Intelligent Card Brand Detector & Validator Tool

Card Brand Validator detects and validates credit card brands in real time using the Luhn algorithm. Fast, responsive, and easy to integrate with any site.

## Features

### Card Detection & Validation

- Real-time card brand detection
- Support for multiple card types:
- Luhn algorithm validation
- Dynamic card number formatting

### UX Improvements

- Clean, intuitive interface
- Visual length indicator
- Responsive design
- Modern visual styling
- Mobile-friendly layout

## 🛠️ Technologies Used

- **HTML5:** Core structure and semantic markup
- **CSS3/SCSS:** Advanced styling with SCSS preprocessing
- **JavaScript:** Dynamic functionality and user interactions
- **Custom Icon Fonts:** Optimized icon delivery system
- **SVG System** - Optimized card brand icons

## How to Use

1. Clone the repository:
   ```sh
   git clone https://github.com/nvmwhoiam/card-brand-validator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd card-brand-validator
   ```
3. Open `index.html` in your web browser to view the application.

## Usage

Test the validator with these valid example numbers:

- Visa: `4263 9826 4026 9299`
- Mastercard: `5425 2334 3010 9903`
- American Express: `3782 8224 6310 005`
- Discover: `6011 0009 9013 9424`
- JCB: `3530 1113 3330 0000`
- Diners Club: `3056 9309 0259 0404`
- Maestro: `5018 4000 0009 3939`

Note: These are test numbers that pass the Luhn algorithm validation. Do not use real card numbers for testing.

## Technical Improvements

- **Fixed Logic Errors in Card Type Validation**  
  Resolved issues where card types were not matching Luhn validation for most card types.

  - Previously, certain card types were incorrectly validated due to flawed logic.
  - Now correctly validates card types according to Luhn algorithm standards.

- **Removed Redundant/Useless Logic**  
  Eliminated hard-to-maintain and difficult-to-read code.

  - Simplified validation logic by removing unnecessary checks.
  - Improved code structure for better readability and maintainability.

- **Enhanced Test Coverage**  
  Added support for test card numbers to ensure reliable validation.
  - System now properly validates both real and test card numbers.
  - Validation accuracy verified against known test cases.

## Screenshots

![Alt text](https://sadevworks.com/assets/img/projects/card-brand-validator.png "a title")

## Live Demo

[Live Demo](https://sadevworks.com/demo/card-brand-validator)

## Contact

If you have any questions or need assistance, please do not hesitate to reach out. I apologize if any part of this setup is not clear; this is my first major project, and I am putting in continuous effort to improve it. Feel free to contact me at [info@sadevworks.com](mailto:info@sadevworks.com) or open an issue on the [GitHub Repository](https://github.com/nvmwhoiam/card-brand-validator).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

- Email: [info@sadevworks.com](mailto:info@sadevworks.com)
- Website: [sadevworks.com](https://sadevworks.com)
- GitHub: [@nvmwhoiam](https://github.com/nvmwhoiam/)
