'use client'

import css from "./Main.module.scss";
import React from "react";
import {Service} from "@/components/common/primitives/Service";


export const Main = () => {
    return (
        <div className={css.main}>
            <Service/>
        </div>
    );
};

