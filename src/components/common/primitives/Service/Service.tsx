'use client'
import css from './Service.module.scss';
import React from "react";

import {exhausters} from "@/components/common/primitives/Service/constants";
import {EStatus, Indicator} from "@/components/common/primitives/Indicator";
import {CustomCard} from "@/components/common/primitives/CustomCard/CustomCard";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import {Box, Grid, Paper, Stack, styled} from "@mui/material";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: "var(--bs-secondary)",
    color: "var(--bs-white)",
    padding: theme.spacing(1),
    marginBottom: 10,
    marginTop: 10
}));

export const Service = () => {
    return (

        <Container maxWidth="xl">
            <Item><Typography variant="h5">Агломерационный цех №2</Typography></Item>

            <Grid container xs={12} spacing={1} display="flex" alignItems="center" top={1}
                  justifyContent="flex-end">
                <Grid item>
                    <Box display="flex" alignItems="center" justifyContent="flex-start" gap={1}>
                        <Indicator status={EStatus.ERROR}/>
                        опасность
                    </Box>
                </Grid>
                <Grid item>
                    <Box display="flex" alignItems="center"
                         justifyContent="flex-start" gap={1}>
                        <Indicator status={EStatus.WARNING}/>
                        предупреждение
                    </Box>
                </Grid>
            </Grid>
            <Container className={css.cards} maxWidth="xl">
                {exhausters.map(card => (
                    <div key={card.exhausterNumber}>
                        <CustomCard  {...card}/>
                    </div>
                ))}
            </Container>
        </Container>)
};
