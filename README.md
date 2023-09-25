# Password Generator App

This React application, Password Generator App, is designed to create random passwords based on user-defined preferences. The application uses React's `useState`, `useCallback`, `useEffect`, and `useRef` hooks to manage the password generation logic and user interactions.

## Features

- Allows the user to specify the length of the password.
- Offers options to include numbers and special characters in the password.
- Displays the generated password and allows the user to copy it to the clipboard.
- Utilizes a background image to enhance the aesthetics of the application.

## Components

The core of the application is encapsulated in the `App` component, which comprises various state variables and functions to generate and manage passwords.

### `useState` Hook

- `length`: Manages the length of the password.
- `numberAllowed`: Tracks whether numbers are allowed in the password.
- `characterAllowed`: Tracks whether special characters are allowed in the password.
- `password`: Stores the generated password.

### `useCallback` Hook

- `generatePassword`: A function that generates a random password based on the user's preferences for length, numbers, and special characters.

### `useEffect` Hook

- Executes the `generatePassword` function whenever the dependencies (length, numberAllowed, characterAllowed) change to update the generated password.

### `useRef` Hook

- `passwordRef`: Ref to store a reference to the password input element, allowing for easy selection and copying of the password to the clipboard.

## User Interface

The UI of the application is designed to be intuitive and user-friendly, providing options for the user to customize the password generation according to the needs. The background image enhances the visual appeal of the app.


## Screenshot

![screencapture-itp-react-passwordgenerator-netlify-app-2023-09-26-00_50_14](https://github.com/itpmanis/itp-react-passwordGenerator/assets/95114404/0e94502e-e6ad-40c3-8b96-6fafb8abf312)
