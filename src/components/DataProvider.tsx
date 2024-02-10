"use client";

import {
    Box,
    Button,
    IconButton,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Image from "next/image";

interface DataProviderProps {
    rows: any[];
    columns: any[];
}

const DataProvider = (props: DataProviderProps) => {
    const [cursor, setCursor] = useState<number>(0);

    const next = () => {
        if (cursor < props.rows.length) {
            setCursor((prev) => prev + 1);
        }
    };

    const prev = () => {
        if (cursor > 0) {
            setCursor((prev) => prev - 1);
        }
    };

    return (
        <Box width="100%">
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="20px"
            >
                <Stack gap="20px" alignItems="center" width="20%">
                    {props.rows[cursor]
                        .slice(7)
                        .map((item: string, index: number) => (
                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                key={index}
                            >
                                {item}
                            </Button>
                        ))}
                </Stack>
                <Image
                    src={`/images/${cursor + 1}.jpg`}
                    alt="image"
                    width={480}
                    height={640}
                />
            </Stack>
            <Stack direction="row" justifyContent="center" mt={3}>
                <TableContainer sx={{ width: "80%" }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>زاویه زانوی چپ</TableCell>
                                <TableCell align="left">
                                    زاویه زانوی راست
                                </TableCell>
                                <TableCell align="left">
                                    فاصله دو زانو
                                </TableCell>
                                <TableCell align="left">لگن نابرابر</TableCell>
                                <TableCell align="left">کج گردنی</TableCell>
                                <TableCell align="left">شانه نابرابر</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                {props.rows[cursor]
                                    .slice(1, 7)
                                    .map((item: any, index: number) => (
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            key={index}
                                        >
                                            {item}
                                        </TableCell>
                                    ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
            <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={3}
            >
                <IconButton size="large" disabled={cursor <= 0} onClick={prev}>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton
                    size="large"
                    disabled={cursor >= props.rows.length - 1}
                    onClick={next}
                >
                    <ChevronRightIcon />
                </IconButton>
            </Stack>
        </Box>
    );
};

export default DataProvider;
