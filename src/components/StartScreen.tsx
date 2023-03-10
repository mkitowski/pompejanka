import React, {FC, Fragment, useCallback, useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import {MobileDatePicker} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from "dayjs";
import CookieIcon from '@mui/icons-material/Cookie';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

type StartScreenProps = {
    setStartDateHandler(e: any): void;
    startHandler(): void;
}

export const StartScreen: FC<StartScreenProps> = (
    {
        setStartDateHandler,
        startHandler
    }) => {
    const [startDate, setStartDate] = useState<Dayjs | null>();
    const [showCalendar, setCalendar] = useState<boolean>(false);
    const setStart = useCallback((e: any) => {
        setStartDate(e);
    }, []);
    const toggleCallendar = useCallback(() => {
        setCalendar(prevState => !prevState);
    }, []);
    const setAccept = useCallback((e: any) => {
        setStartDateHandler(e);
        setStartDate(e);
    }, [setStartDateHandler])
    return (
        <Fragment>
            <h1>Pompejanka</h1>
            <h4>To co zaczynamu pompejankę ??</h4>
            <Box>
                <Button variant='contained' onClick={startHandler} sx={{marginRight: '10px'}}
                        size="large">Zaczynamy</Button>
                <Button variant='contained' onClick={toggleCallendar} size="large">Już się modlę</Button>
            </Box>
            <Box
            sx={{
                minHeight: '100px',
            }}
            >
            {showCalendar ? <Box
                sx={{
                    padding: '20px',
                    borderRadius: '5px'
                }}
            >
                <MobileDatePicker
                    label='od kiedy się modlisz?'
                    renderInput={(params) => <TextField {...params} />}
                    onChange={setStart}
                    onAccept={setAccept}
                    value={startDate}
                    minDate={dayjs().subtract(53, 'day')}
                />
            </Box> : null}
            </Box>
            <Box textAlign='center'>
                <Typography variant='caption'>
                    Aby pamiętać na którym dniu jesteś wykorzystujemy ciasteczka <CookieIcon/> nie jedz ani nie usuwaj danych przglądarki to się nie pogubimy :)
                </Typography><br/>
                <Typography variant='caption'>
                    A jeśli niechcesz aby coś tam się zapisało na Twym urządzeniu to zmykaj ;) <DirectionsRunIcon/>
                </Typography>
            </Box>
        </Fragment>
    )
}
