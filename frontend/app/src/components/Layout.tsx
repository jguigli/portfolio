import { Outlet } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import Header from "./Header";
import Footer from "./Footer";


export default function Layout() {
  return (
    <>
        <Theme>
          <div className="relative min-h-screen bg-[#0a0e14] flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-center py-8">
              <Outlet />
            </div>
            <Footer />
          </div>
        </Theme>
    </>
  )
}
