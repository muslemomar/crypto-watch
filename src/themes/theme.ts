import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: "#ea580c",
            dark: "white",
        },
        secondary: {
            main: "rgb(255 255 255 / 0.6)",
            dark: "rgb(255 255 255 / 0.4)",
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "1px",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "1px",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "1px",
                    },
                },
            },
        },
    },
});

export default theme;
