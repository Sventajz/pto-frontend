"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Banner,
  SideBarButtons,
  SideBarComponent,
  SideBarItems,
  UserControls,
  StyledLink,
  HamburgerButton,
} from "./styled";

// async function Logout() {
//   try {
//     await apiClient.post("/logout");
//     window.location.href = "/";
//   } catch (error) {
//     console.log(err);
//   }
// }

export default function SideBar({}) {
  const [isOpen, setIsOpen] = useState(false);
  // //const user = useContext(UserContext);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const pathname = usePathname();

  return (
    <SideBarComponent $isOpen={isOpen}>
      <HamburgerButton onClick={toggleIsOpen} $isOpen={isOpen}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>
      <Banner>
        <img src="/kantunlogo.svg" alt="Kantun Logo" />
        {isOpen && <h3>PTO System</h3>}
      </Banner>
      <SideBarItems>
        <StyledLink href="/dashboard/welcome">
          {/* $isOpen={isOpen} */}
          <SideBarButtons
            $active={pathname === "/dashboard/welcome"}
            $isOpen={isOpen}
          >
            <img src="/home.svg" alt="home svg icon" height={20} width={20} />
            {isOpen && <span>Home</span>}
          </SideBarButtons>
        </StyledLink>
        <StyledLink href="/dashboard/ptodash/mycalendar">
          <SideBarButtons
            $active={pathname === "/dashboard/ptodash/mycalendar"}
            $isOpen={isOpen}
          >
            <img src="/work.svg" alt="home svg icon" height={20} width={20} />
            {isOpen && <span>PTO</span>}
          </SideBarButtons>
        </StyledLink>

        <StyledLink href="/dashboard/ptodash/employees">
          <SideBarButtons
            $active={pathname === "/dashboard/ptodash/employees"}
            $isOpen={isOpen}
          >
            <img src="/user.svg" alt="home svg icon" height={20} width={20} />
            {isOpen && <span>Employees</span>}
          </SideBarButtons>
        </StyledLink>
      </SideBarItems>
      <UserControls>
        <SideBarButtons $borderbottom={true} $isOpen={isOpen}>
          <img src="/user.svg" alt="home svg icon" height={20} width={20} />
          {isOpen && <span>Name</span>}
        </SideBarButtons>
        <br />
        <SideBarButtons $isOpen={isOpen}>
          <img src="/logout.svg" alt="home svg icon" height={20} width={20} />
          {isOpen && <span>LogOut</span>}
        </SideBarButtons>
      </UserControls>
    </SideBarComponent>
  );
}
