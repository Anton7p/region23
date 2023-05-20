"use client"
import React from "react";
import css from "./Header.module.scss";
import {Button} from "@/components/common/primitives";
import ArrowBackIcon from "../../../../public/images/arrow_back.svg";


export const Header = () => {
    return (
        <header className={css.header}>
                <Button className="header"><ArrowBackIcon/>На главную</Button>
        </header>
    );
};