import { useEffect, useState } from 'react'
import apiService from "../services/apiService"

const useWorkDays = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const workDays = await apiService.getAllWorkDays();
                setData(workDays);
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[])

    return {data, loading, error}
}

export default useWorkDays;