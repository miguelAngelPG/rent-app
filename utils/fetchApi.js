import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async ( url ) => {

    try {
        
        const { data } = await axios.get((url), {
            "headers": {
                "x-rapidapi-host": "bayut.p.rapidapi.com",
                "x-rapidapi-key": "ceaf1f4b94msh600ba3162f35a7dp1bfa1ajsn0ecaa6511adf"
            }
        })

        return data
    } catch (error) {
        throw new Error('Algo salio mal' + error)
    }

}
