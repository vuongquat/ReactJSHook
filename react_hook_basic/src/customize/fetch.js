import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';

const useFetch = (url, isCovidData) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                });
                let data = res && res.data ? res.data : [];

                if (data && data.length > 0 && isCovidData === true) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return data;
                    })

                };
                setData(data);
                setLoading(false);

            }
            catch (e) {
                if (axios.isCancel(e)) {
                    console.log('request cancel', e.message);
                }
                else {
                    setLoading(false);
                }
                console.log('error: ', e);
            }
        }
        fetchData();


        return () => { ourRequest.cancel('request cancel') }
    }, [url]);

    return {
        data, loading
    }
}
export default useFetch;