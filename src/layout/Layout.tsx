import React from "react";
import './styles.css';
import AppBar from './AppBar';
import { title } from "process";
import Footer from "./Footer";

export type LayoutProps = {
    children: string;
}

const Layout = (props : LayoutProps) => {
    return <div className="layout">
        <nav>
            <AppBar/>
        </nav>
        <main>{props.children}</main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
}

export default Layout;