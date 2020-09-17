import './index.scss';
import React from 'react';

type Props = {
  children: React.ReactElement,
};

const Layout = ({ children }: Props): JSX.Element => (
  <div className="Layout">
    <header className="Layout__header">
      <nav>
        <h1>Test technique React.js</h1>
        <ul>
          <li>
            <a href={"/home"}>Home</a>
          </li>
          <li>
            <a href={"/todos"}>Todos</a>
          </li>
        </ul>
      </nav>
    </header>
    <main className="Layout__main">
      {children}
    </main>
  </div>
);

export default Layout;
