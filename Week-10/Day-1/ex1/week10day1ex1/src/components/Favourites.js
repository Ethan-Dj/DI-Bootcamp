import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Favourites = (props) => {

    const searchPlace = (name) => {
        return fetch(`https://api.api-ninjas.com/v1/city?name=${name}`, {
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
            return getWeatherData(result[0].longitude,result[0].latitude, result[0].name)
        })
    }

    const getWeatherData = async(long, lat) => {
        const currentDate = new Date();
        const formattedCurrentDate = currentDate.toISOString().slice(0,10);

        const username='none_djanogly'
        const password='U652oGdOw1'
        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

        return fetch(`https://api.meteomatics.com/${formattedCurrentDate}T11:45:00.000+00:00/t_2m:C/${lat},${long}/json?model=mix`, {
            method: 'GET', headers: headers
        }).then(res => {
            return res.json();
        }).catch(function (err) {
            console.log('something went wrong', err);
        });
    }

    const favs = useSelector(state => state.favourites)
    const [data, setData] = useState([])
    const [key1, setKey1] = useState(0)

    useEffect(()=> {
        let promises = []
        favs.forEach(item => {
            promises.push(searchPlace(item))
            console.log(promises)
        })
        Promise.all(promises).then(results => {
            setData(results)
            setKey1(key1 + 1)
        })
    },[favs])

    return(
        <>
        <div key={key1}>
        {data.length === 0 || favs.length != data.length? (
          <p>Loading...</p>
        ) : (
          favs.map((item, index) => {
            console.log(data[index].data[0].coordinates[0].dates[0].value);
            return(
                <>
                <h1>{item}</h1>
                <h2>{data[index].data[0].coordinates[0].dates[0].value}</h2>
                </>
            )
          })
        )}
        </div>
        </>
    )
}

export default Favourites
