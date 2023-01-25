import React, {useCallback, useState} from 'react';
import {Box} from "@mui/material";
import dayjs from "dayjs";
import {StartScreen} from "./components/StartScreen";
import {PrayDay} from "./components/PrayDay";
import {Colors} from "./const/colors";

const today = dayjs().hour(0).minute(0).second(0);

window.onblur = () => { window.onfocus = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
}}
function App() {
    const [day, setDay] = useState<number | null>(() => {
        const result = document.cookie.split(';').reduce((a, b) => {
            const value = b.split('=');
            return {
                ...a,
                [value[0]]: value[1],
            }
        }, {day: null}).day;
        if (result) {
            const startDate = dayjs(result);
            const totalDays = Math.ceil(today.diff(startDate) / 86400000);
            if (totalDays <= 54) {
                return totalDays;
            }
            document.cookie = `day=null`;
            return null;
        }
        return null;
    })

    const startHandler = useCallback(() => {
        setDay(1);
        document.cookie = `day=${today.format()};max-age=${54*3600*24}`
    }, []);

    const setStartDateHandler = useCallback((e: any) => {
        const count = Math.ceil(today.diff(e) / 86400000)+1
        setDay(count)
        document.cookie=`day=${e.hour(0).minute(0).second(0).format()};max-age=${(54-count)*3600*24}`;
    }, [])

    return (
        <Box sx={{
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
            backgroundColor: Colors.Background,
            color: Colors.Font,
            minHeight: '100vh',
            top: '0px',
        }}>
            {day ? <PrayDay day={day}/> : <StartScreen startHandler={startHandler} setStartDateHandler={setStartDateHandler}/>}
        </Box>
    );
}

export default App;
