import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, {useState} from "react";
import {EStatus, Indicator} from "@/components/common/primitives/Indicator";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Box, Chip, Grid, MenuItem, Paper, Select, SelectChangeEvent, Stack} from "@mui/material";
import css from './CustomCard.module.scss';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded';
import VibrationRoundedIcon from '@mui/icons-material/VibrationRounded';
import ExhausterSecondIcon from "../../../../../public/images/aglo_roto_2.svg";
import ExhausterThirdIcon from "../../../../../public/images/aglo_roto_3.svg";
import ExhausterFourIcon from "../../../../../public/images/aglo_roto_4.svg";
import ExhausterFirstIcon from "../../../../../public/images/aglo_roto_1.svg";


export type TExhauster = {
    status: EStatus,
    exhausterNumber: number,
    rotors: TRotor[],
}

export const getRotorIcon = (rotorNumber: number) => {
    switch (rotorNumber) {
        case 2:
            return <ExhausterSecondIcon/>
        case 3:
            return <ExhausterThirdIcon/>
        case 4:
            return <ExhausterFourIcon/>
        default:
            return <ExhausterFirstIcon/>
    }
}


export type TRotor = {
    rotorNumber: number,
    lastReplacementDate: string,
    forecastReplacementDate: number,
    forecastDate: number,
    forecastReplacementStatus: EStatus,
    oilLevel: number,
    oilLevelStatus: EStatus,
    vibration: number,
    temperature: number,
    vibrationStatus: EStatus,
    temperatureStatus: EStatus
}

export const CustomCard = ({
                               status,
                               exhausterNumber,
                               rotors,
                           }: TExhauster) => {

    const [activeRotor, setActiveRotor] = useState<TRotor>(rotors[0])


    const handleChange = (event: SelectChangeEvent) => {
        setActiveRotor(rotors.find(item => item.rotorNumber === Number(event.target.value)) as TRotor);
    };

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                sx={{background: "var(--bs-secondary)"}}
                action={
                    <IconButton aria-label="settings">
                        <ExitToAppOutlinedIcon/>
                    </IconButton>
                }
                title={
                    <Typography variant="h5" noWrap display="flex" gap={2} sx={{color: "var(--bs-white)"}}>
                        <Indicator status={status}/>
                        {`Эксгаустер №${exhausterNumber}`}
                    </Typography>
                }
            />
            <CardContent>
                <Grid container spacing={2} xs={12}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Select variant="standard"
                                        autoWidth
                                        size="medium"
                                        value={activeRotor.rotorNumber as any}
                                        onChange={handleChange}>
                                    {rotors.map(item => (
                                        <MenuItem value={item.rotorNumber} key={item.rotorNumber}>
                                            <Typography fontWeight="bold">
                                                {`Ротор №${item.rotorNumber}`}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack direction="row" spacing={1}>
                                    <Chip size="medium" label={
                                        <Box  fontWeight="bold">
                                            {activeRotor.lastReplacementDate}
                                        </Box>}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} spacing={1}>
                        <Grid container xs={12} spacing={1}>
                            <Grid item xs={8} display="flex" alignItems="center">
                                <Box fontWeight="bold" display="flex" alignItems="center">
                                    Прогноз :
                                </Box>
                            </Grid>
                            <Grid item xs={4} display="flex" alignItems="center" justifyContent="flex-start">
                                <Chip size="medium" label={
                                    <Box  fontWeight="bold" display="flex" gap={1}>
                                        {`${activeRotor.forecastDate} сут`}
                                        <Indicator status={activeRotor.forecastReplacementStatus}/>
                                    </Box>
                                }/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} spacing={1}>
                        <Grid container xs={12} spacing={1}>
                            <Grid item xs={8}>
                                <Typography  gutterBottom fontWeight="bold">
                                    Последняя замена ротора :
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Chip size="medium" label={
                                    <Box  fontWeight="bold">
                                        {`${activeRotor.forecastReplacementDate} сут`}
                                    </Box>}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box className={css.icon}>
                    {getRotorIcon(activeRotor.rotorNumber)}
                </Box>
                <Grid container xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Grid container xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <Box  display="flex" alignItems="center" justifyContent="flex-start"
                                     gap={1}>
                                    <WaterDropRoundedIcon/>
                                    Уровень масла
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box fontWeight="bold" display="flex" alignItems="center"
                                     justifyContent="flex-end" gap={1}>
                                    {activeRotor.oilLevel} кПа
                                    <Indicator status={activeRotor.forecastReplacementStatus}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <Box display="flex" alignItems="center" justifyContent="flex-start" gap={1}>
                                    <VibrationRoundedIcon/>
                                    Вибрация
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box  fontWeight="bold" display="flex" alignItems="center"
                                     justifyContent="flex-end" gap={1}>
                                    {activeRotor.vibration} мм/c
                                    <Indicator status={activeRotor.forecastReplacementStatus}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <Box display="flex" alignItems="center" justifyContent="flex-start" gap={1}>
                                    <DeviceThermostatRoundedIcon/>
                                    Температура
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box  fontWeight="bold" display="flex" alignItems="center"
                                     justifyContent="flex-end" gap={1}>
                                    {activeRotor.temperature} С
                                    <Indicator status={activeRotor.forecastReplacementStatus}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}