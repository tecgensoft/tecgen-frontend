import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header/Header";

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
