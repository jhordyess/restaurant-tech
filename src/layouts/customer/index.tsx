import * as React from "react";

interface Customer {
  children: React.ReactNode;
  links?: any;
}

export default function Customer({ children }: Customer) {
  return (
    <div>
      <header>
        <nav className="flex flex-row justify-around items-center">
          <div>
            Logo
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Social</li>
            </ul>
          </div>
          <div>Menu</div>
          <div>
            <ul>
              <li>BOOK NOW</li>
              <li>LOGIN</li>
            </ul>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
