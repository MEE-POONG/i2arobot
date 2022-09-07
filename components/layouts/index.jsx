import { loginState, userInfoState } from "@/context/states";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import NavberMenu from "./NavbarMenu";

export default function Layout({ children }) {
  return (
    <>
      <NavberMenu />
      <div className="bg-layout">
        {children}
      </div>
    </>
  );
}
