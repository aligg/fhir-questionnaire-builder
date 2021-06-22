import AddIcon from "@material-ui/icons/Add";
import {
    Box,
    Fab,
    FormControl,
    MenuItem,
    Select,
    TextField,
    Tooltip,
} from "@material-ui/core";
import React from "react";

const Form = ({ data, dispatch }) => {
    return (
        <form className="form">
            <TextField
                id="outlined-basic"
                label="Title (Human Readable)"
                defaultValue={data.title}
                variant="outlined"
                fullWidth={true}
                onChange={(evt) => {
                    dispatch({ type: "title", payload: evt.target.value });
                }}
                size="small"
                margin="normal"
            />
            <TextField
                id="outlined-basic"
                label="Name (Computer Readable)"
                defaultValue={data.name}
                variant="outlined"
                fullWidth={true}
                onChange={(evt) => {
                    dispatch({ type: "name", payload: evt.target.value });
                }}
                size="small"
                margin="normal"
            />
            <Box bgcolor="white" borderRadius={5}>
                <TextField
                    defaultValue={data.title}
                    onChange={(evt) => {
                        dispatch({ type: "title", payload: evt.target.value });
                    }}
                    size="small"
                    id="standard-basic"
                />
                <FormControl>
                    <Select
                        value={data.item[0].type}
                        onChange={(evt) => {
                            console.log(evt.target.value);
                        }}
                    >
                        <MenuItem value="string">string</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </form>
    );
};

export default Form;

//  <Tooltip
// title="Add question item"
// aria-label="add question"
// placement="right-start"
// arrow={true}
// >
// <Fab
//     color="primary"
//     aria-label="add"
//     size="small"
//     onClick={() => {
//         console.log("click");
//     }}
//     component="button"
// >
//     <AddIcon />
// </Fab>
// </Tooltip>
