import React from "react";
import css from "./MainContainer.module.scss";


import {Header} from "../../semantics/header";
import {Container} from "@/components/common/Container";
import {Footer} from "@/components/semantics/footer";


export const MainContainer: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className={css.body}>
            <Container>
                <Header/>
                <main className={css.main}>{children}</main>
                <Footer/>
            </Container>
        </div>
    );
};
