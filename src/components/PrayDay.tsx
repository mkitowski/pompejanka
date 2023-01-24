import React, {FC} from "react";
import {Box, Divider, List, ListItem, Typography} from "@mui/material";
import {Colors} from "../const/colors";
import {tajemniceBolesne, tajemniceChwalebne, tajemniceRadosne} from "../const/tajemnice";
import {Tajemnice} from "./Tajemnice";
import {Prayer} from "../const/prayer";
import {ListItemComponent} from "./ListItemComponent";

export const PrayDay: FC<{ day: number }> = ({day}) => {
    const isThanksPart = day > 27;

    return (
        <Box sx={{
            minWidth: '90%',
            margin: '10px',
            borderRadius: '5px'
        }}>
            <Typography variant='h3' align='center'>Dzień {day}</Typography>
            <List>
                <ListItem disablePadding>
                    <Typography variant='h5'>Przed każdym odmówieniem różańca</Typography>
                </ListItem>
                <ListItemComponent>
                    <strong>W imie Ojca i Syna i Ducha Świętego</strong>
                </ListItemComponent>
                <ListItemComponent>
                    Twoja intencja
                </ListItemComponent>
                <ListItemComponent>
                    <strong>Ten różaniec odmawiam na Twoją cześć,
                        Królowo Różańca świętego </strong>
                </ListItemComponent>
                <Divider color={Colors.Background}/>
                <ListItem disablePadding>
                    <Typography variant='h5'>Różaniec</Typography>
                </ListItem>
                <ListItemComponent>
                    Tylko raz na początku modlitwy:
                </ListItemComponent>
                <ListItemComponent>
                    <strong>Wierzę w Boga,</strong> Ojca Wszechmogącego, Stworzyciela nieba i ziemi, i w Jezusa
                    Chrystusa, Syna Jego
                    Jedynego, Pana naszego, który się począł z Ducha Świętego. Narodził się z Marii Panny, umęczon
                    pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion, zstąpił do piekieł, trzeciego dnia
                    zmartwychwstał, wstąpił na niebiosa, siedzi po prawicy Boga, Ojca Wszechmogącego, stamtąd
                    przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, Świętych
                    obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.
                </ListItemComponent>
                <ListItemComponent>
                    Ojczę nasz, 3x Zdrowaś Mario, Chwała Ojcu...
                </ListItemComponent>
                <Divider color={Colors.Background}/>
                <ListItem disablePadding>
                    <Typography variant='h5'>Po każdym różańcu</Typography>
                </ListItem>
                <ListItemComponent>
                    {isThanksPart ? Prayer.Thankfull : Prayer.Begging}
                </ListItemComponent>
                <ListItemComponent>
                    <strong>Pod Twoją obronę</strong>
                </ListItemComponent>
                <ListItemComponent>
                        3 x
                        <strong>Królowo Różańca świętego, módl się za nami!</strong>
                </ListItemComponent>
                <Divider color={Colors.Background}/>
                <ListItem disablePadding>
                    <Typography variant='h5'>Tajemnice różańca</Typography>
                </ListItem>
                <Tajemnice key='radosne' taj={tajemniceRadosne} title={'Tajemnice Radosne'}/>
                <Tajemnice key='bolesne' taj={tajemniceBolesne} title={'Tajemnice Bolesne'}/>
                <Tajemnice key='chwalenbe' taj={tajemniceChwalebne} title={'Tajemnice Chwalebne'}/>
            </List>
        </Box>

    )
}
