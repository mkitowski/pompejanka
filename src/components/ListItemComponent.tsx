import React, {FC, ReactNode} from "react";
import {ListItem, ListItemText} from "@mui/material";

export const ListItemComponent: FC<{children: ReactNode}> = ({children}) => (
    <ListItem>
        <ListItemText>{children}</ListItemText>
    </ListItem>
)
