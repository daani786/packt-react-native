# packt-react-native


npx create-expo-app@latest . --template

- npm start
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web

---------------------
setup windows environment
- install node
- open https://docs.expo.dev/get-started/set-up-your-environment/
- click on android emulator
- Set up an Android Emulator with Expo Go
- Set up Android Studio
- Select Windows
- Download Android Studio.
- Open Android Studio Setup. Under Select components to install, select Android Studio and Android Virtual Device. Then, click Next.
- In the Android Studio Setup Wizard, under Install Type, select Standard and click Next.
- The Android Studio Setup Wizard will ask you to verify the settings, such as the version of Android SDK, platform-tools, and so on. Click Next after you have verified.
- In the next window, accept licenses for all available components.
- By default, Android Studio will install the latest version of the Android SDK. However, Android 16 (Baklava) SDK is required to compile a React Native app.
- Open Android Studio, go to Settings > Languages & Frameworks > Android SDK. From the SDK Platforms tab, and under Android 16 (Baklava), select Android SDK Platform 36 and Sources for Android 36.
- Then, click on the SDK Tools tab and make sure you have at least one version of the Android SDK Build-Tools and Android Emulator installed.
- After the tools installation is complete, configure the ANDROID_HOME environment variable. Go to Windows Control Panel > User Accounts > User Accounts (again) > Change my environment variables and click New to create a new ANDROID_HOME user variable. The value of this variable will point to the path to your Android SDK:
- To verify that the new environment variable is loaded, open PowerShell, and copy and paste the following command:
- Get-ChildItem -Path Env: 
- The command will output all user environment variables. In this list, see if ANDROID_HOME has been added.
- To add platform-tools to the Path, go to Windows Control Panel > User Accounts > User Accounts (again) > Change my environment variables > Path > Edit > New and add the path to the platform-tools to the list as shown below:
- Finally, make sure that you can run adb from the PowerShell. For example, run the adb --version to see which version of the adb your system is running.
