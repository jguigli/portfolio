import { useState } from 'react'
// import Wallpaper from './Wallpaper';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import Aurora from './react_bits/Aurora';
import DotGrid from './react_bits/DotGrid';


export default function Layout() {
  return (
    <>
        <Theme>
          <div className="relative min-h-screen bg-black flex flex-col justify-center items-center">
            {/* <Aurora
              className="absolute top-0 left-0 w-full h-full"
              colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            /> */}

              <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <DotGrid
                  dotSize={5}
                  gap={50}
                  baseColor="#3b3b3fff"
                  activeColor="#5227FF"
                  proximity={150}
                  shockRadius={250}
                  shockStrength={5}
                  resistance={750}
                  returnDuration={1.5}
                />
              </div>
            <div className="relative">
              <Outlet />
            </div>
          </div>
        </Theme>
    </>
  )
}
