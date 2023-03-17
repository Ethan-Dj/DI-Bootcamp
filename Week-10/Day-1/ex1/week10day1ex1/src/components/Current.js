
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../reducers/actions'

const Current = (props) => {

    const dispatch = useDispatch()

    const searchPlace = (e) => {
        e.preventDefault()
        fetch(`https://api.api-ninjas.com/v1/city?name=${e.target.search.value}`, {
            headers: {
                'X-Api-Key': "cIFDScWhkDwqYsSrD6jrcg==zb7uD8eFujylVQ3b",
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            getWeatherData(result[0].longitude,result[0].latitude, result[0].name)
        })
    }

    const getWeatherData = async(long, lat, city) => {

        const currentDate = new Date();
        const formattedCurrentDate = currentDate.toISOString().slice(0,10);

        // Get the date 7 days from now
        const futureDate = new Date();
        futureDate.setDate(currentDate.getDate() + 7);
        const formattedFutureDate = futureDate.toISOString().slice(0,10);

        const username='none_djanogly'
        const password='U652oGdOw1'
        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

        fetch(`https://api.meteomatics.com/${formattedCurrentDate}T11:45:00.000+00:00--${formattedFutureDate}T11:45:00.000+00:00:P1D/t_2m:C/${lat},${long}/json?model=mix`, {
            method: 'GET', headers: headers
        }).then(res =>  {
            return res.json();
        }).then(data1 => {
            dispatch(update([city, data1.data[0].coordinates[0].dates]))
        }).catch(function (err) {
            console.log('something went wrong', err);
        });
    }

    return(
        <>
        <form onSubmit={(e) => {
            searchPlace(e)
            }}>
            <input type="text" name="search" placeholder="Search" />
            <input type="submit" placeholder="search" />
        </form>
        </>
    )
}

export default Current