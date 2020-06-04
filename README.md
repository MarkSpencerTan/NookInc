# NookInc
A React Native Application to Buy &amp; Sell Animal Crossing Items

Inspired by Nookazon.com, but I wanted to add in an extra feature to enable push notifications for mobile devices instead of relying on Discord for communication.

## Setting up Development Environment  

1. ```bash
   npm install
   npx react-native run-ios
   npx react-native run-android 
   ```

## Troubleshooting Dev Environment  

1. If Icons aren't showing up for the app, run the following command:
    ```bash
    npx react-native link react-native-vector-icons
    ```
2. If you're testing iOS and errors are showing up due to missing dependencies, do the following:
    ```bash
    # install ios dependencies
    cd ios && pod install
    # restart ios app
    npx react-native run-ios
    ```