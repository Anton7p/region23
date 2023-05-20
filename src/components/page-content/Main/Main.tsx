import css from "./Main.module.scss";
import React from "react";
import {Title} from "@/components/common/primitives";
import {Service} from "@/components/common/primitives/Service";
import {Subtitle} from "@/components/common/primitives/Subtitle";
import {Lists} from "@/components/common/primitives/Lists";
import {Address} from "@/components/common/primitives/Address";


export const Main = () => {
    return (
        <div className={css.main}>
            {/*<Title/>*/}
            <Service/>

            {/*<Subtitle/>*/}
            {/*<Indicator/>*/}
            {/*<Address/>*/}
        </div>
    );
};

