import React, {FC, Fragment} from "react";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {tajemniceRadosne} from "../const/tajemnice";
import {ArrowRight} from "@mui/x-date-pickers/internals/components/icons";
import {ListItemComponent} from "./ListItemComponent";

export const Tajemnice: FC<{taj: string[], title: string}> = ({taj, title}) => (
    <Fragment>
        <ListItemComponent>
                <strong>{title}</strong>
        </ListItemComponent>
        {tajemniceRadosne.map(t => (
            <ListItem disablePadding>
                <ListItemIcon><ArrowRight/></ListItemIcon>
                <ListItemText>{t}</ListItemText>
            </ListItem>
        ))}
    </Fragment>
)
