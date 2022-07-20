import React from "react";
import { NativeBaseProvider } from "native-base";
import LoginComponent from "../components/Login";

export default () => {
  return (
    <NativeBaseProvider>
      <LoginComponent />
    </NativeBaseProvider>
  );
};
