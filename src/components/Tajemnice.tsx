import React, {FC, Fragment} from "react";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {ArrowRight} from "@mui/x-date-pickers/internals/components/icons";
import {ListItemComponent} from "./ListItemComponent";

export const Tajemnice: FC<{taj: string[], title: string}> = ({taj, title}) => (
    <Fragment>
        <ListItemComponent>
                <strong>{title}</strong>
        </ListItemComponent>
        {taj.map(t => (
            <ListItem disablePadding>
                <ListItemIcon><ArrowRight/></ListItemIcon>
                <ListItemText>{t}</ListItemText>
            </ListItem>
        ))}
    </Fragment>
)
