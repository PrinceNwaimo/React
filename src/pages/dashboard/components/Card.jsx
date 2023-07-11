import React, { useState, useEffect, useCallback } from "react";
import { Grid, Button, Box, useMediaQuery, useTheme } from "@mui/material";
import Images from "../../../assets/image/img.png";

const Cards = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const xSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
    const [data, setData] = useState({});
    const [value, setValue] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const[dataList,setDataList]= useState([])

    const url = "https://dummyjson.com/products/1";

    useEffect(() => {
        const fetchProduct = async () => {
            await fetch(url)
                .then((data) => data.json())
                .then((data) => {
                    setValue(data);
                    console.log(value);
                })
                .catch((err) => setError(err.message));
        };
        fetchProduct();
        setIsLoading(false);
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <p style={{
                fontSize:smallScreen ? '20px': xSmallScreen ? '10px': '50px',
                fontWeight: smallScreen ? '500' : xSmallScreen ? '400': '700',
            }}
            >
            Brand Name: {value.brand}
            </p>
            <Grid container>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width:smallScreen ? '100%' : xSmallScreen ? '100%': '70%',
                        height:smallScreen ? '50%' : xSmallScreen ? '50%' : '80%',
                    }} />
                </Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width:smallScreen ? '100%' : xSmallScreen ? '100%': '70%',
                        height:smallScreen ? '50%' : xSmallScreen ? '100%' : '80%',
                    }}/>
                </Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width:smallScreen ? '100%' : xSmallScreen ? '100%': '70%',
                        height:smallScreen ? '50%' : xSmallScreen ? '50%' : '80%',
                    }} />
                </Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width:smallScreen ? '100%' : xSmallScreen ? '100%': '70%',
                        height:smallScreen ? '50%' : xSmallScreen ? '50%' : '80%',
                    }} />
                </Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width:smallScreen ? '100%' : xSmallScreen ? '100%': '70%',
                        height:smallScreen ? '50%' : xSmallScreen ? '50%' : '80%',
                    }}/>
                </Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width:smallScreen ? '100%' : xSmallScreen ? '100%': '70%',
                        height:smallScreen ? '50%' : xSmallScreen ? '50%' : '80%',
                    }} />
                </Grid>
            </Grid>
        </div>
    );
};
export default Cards;

// const fetchData = useCallback(async () => {
// 	setIsLoading(true);
// 	try {
// 		const res = await fetch(url, {
// 			method: "GET",
// 			headers: {
// 				"content-type": "application/json",
// 			},
// 		});
// 		if (res.ok) {
// 			const data = await res.json();
// 			setData(data);
// 			setIsLoading(false);
// 		} else {
// 			console.log("Error: Network connection was lost");
// 		}
// 	} catch (err) {
// 		setError(err.message);
// 		setIsLoading(false);
// 	}
// }, []);