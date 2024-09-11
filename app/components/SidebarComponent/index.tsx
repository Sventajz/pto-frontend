"use client";
// import { useContext, useState } from "react";
// import { usePathname } from "next/navigation";

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
  // const [isOpen, setIsOpen] = useState(true);
  // //const user = useContext(UserContext);

  // const toggleIsOpen = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const pathname = usePathname();

  return (
    <SideBarComponent>
      <HamburgerButton>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>
      <Banner>
        <img src="/kantunlogo.svg" alt="Kantun Logo" />
        <h3>PTO System</h3>
      </Banner>
      <SideBarItems>
        <StyledLink href="/dashboard/welcome">
          <SideBarButtons>
            <img src="/home.svg" alt="home svg icon" height={20} width={20} />
            <span>Home</span>
          </SideBarButtons>
        </StyledLink>
        <StyledLink href="/dashboard/ptodash/mycalendar">
          <SideBarButtons>
            <img src="/work.svg" alt="home svg icon" height={20} width={20} />
            <span>PTO</span>
          </SideBarButtons>
        </StyledLink>

        <StyledLink href="/dashboard/ptodash/employees">
          <SideBarButtons>
            <img src="/user.svg" alt="home svg icon" height={20} width={20} />
            <span>Employees</span>
          </SideBarButtons>
        </StyledLink>
      </SideBarItems>
      <UserControls>
        <SideBarButtons>
          <img src="/user.svg" alt="home svg icon" height={20} width={20} />
          <span>Name</span>
        </SideBarButtons>
        <br />
        <SideBarButtons>
          <img src="/logout.svg" alt="home svg icon" height={20} width={20} />
          <span>LogOut</span>
        </SideBarButtons>
      </UserControls>
    </SideBarComponent>
  );
}
