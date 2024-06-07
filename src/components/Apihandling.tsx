import { Box, Button } from "@mui/material"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

export default function Apihandling() {
    const [userData , setuserData] = useState([])
   
    const getApiData = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments/').then((res) => {
            console.log(res.data, "Success Response")
            setuserData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    console.log(userData)

    const postApiData = () => {
        axios.post('https://jsonplaceholder.typicode.com/comments/', {
            userId: 1,
            title: "ABC Title",
            completed: true
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const putApiData = () => {
        axios.put('https://jsonplaceholder.typicode.com/comments/1', {
            userId: 3,
            title: "XYZ Title",
            completed: true
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const delApiData = () => {
        axios.delete('https://jsonplaceholder.typicode.com/comments/1').then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }




    return <>
        <Box>
            <Button sx={{ marginRight: '30px', marginTop: '20px' }} variant="contained" onClick={getApiData}>
                Get Api
            </Button>
            {userData.length && userData.map((e:any)=>{
                return(
                    <p>{e.body}</p>
                )
            })}
            <Button sx={{ marginRight: '30px', marginTop: '20px' }} variant="contained" onClick={postApiData}>
                Post Api
            </Button>
            <Button sx={{ marginRight: '30px', marginTop: '20px' }} variant="contained" onClick={putApiData}>
                Put Api
            </Button>
            <Button sx={{ marginRight: '30px', marginTop: '20px' }} variant="contained" onClick={delApiData}>
                Delete Api
            </Button>
        </Box>
    </>
}