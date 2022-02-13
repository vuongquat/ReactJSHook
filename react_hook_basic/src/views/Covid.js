import moment from "moment";
import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";

const Covid = () => {

    // == componenDidMount react class
    // const today = new Date(new Date().setHours(0, 0, 0, 0));
    const today = moment().startOf('day').toISOString(true);
    const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);
    const { data: dataCovid, loading } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true);

    return (
        <>
            <h1>Covid 19 tracking in VietNam</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {loading === true &&
                        <tr>
                            <td colSpan="5" style={{ 'textAlign': 'center' }}>
                                Loading...
                            </td>
                        </tr>
                    }
                    {loading === false && dataCovid && dataCovid.length > 0 && dataCovid.map((index, item) => {
                        return (
                            <tr key={index.ID}>
                                <td>{index.Date}</td>
                                <td>{index.Confirmed}</td>
                                <td>{index.Active}</td>
                                <td>{index.Deaths}</td>
                                <td>{index.Recovered}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default Covid;