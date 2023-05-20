"use client"
import React from "react";
import css from "./Footer.module.scss";




export const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <div className={css.text}>
                    <span >©2023 Region 23</span>
                </div>
            </div>
        </footer>
    );
};