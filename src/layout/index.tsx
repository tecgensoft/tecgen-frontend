import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer";

export default function Layout() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </React.Fragment>
    );
}
