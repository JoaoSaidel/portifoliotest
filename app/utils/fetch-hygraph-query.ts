export const fetchHygraphQuery = async (
    query: string,
    revalidate?: number
    ) => {
    const response = await fetch('https://api-sa-east-1.hygraph.com/v2/clldubeyf3wx601t9cf7n294w/master',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTIyMDA0NDcsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xsZHViZXlmM3d4NjAxdDljZjduMjk0dy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTJjZTQ0ODUtOWRkYS00OGEzLWJlNmUtNTE4YjExY2VjMTk4IiwianRpIjoiY2xsZHdnZTc4NDljZzAxdWc1YjR6OGp0cSJ9.Vf_8hWyqvce_xSP9jD7_9RysTDMcBpSdPg9P2uo0R6iTGcPKfLp0eCFdslCDK_Ey8iKV2GJU8DJZSeIi3mpEKSB5j_fPEt6wPDgrziykFe0_v1OBdkbtXTFh-nR-r1KOKGnVDWZIBWet-ahVuN4ThNLELf4S0hd4Pr0mp53gQyXnvm7kvJns88fx9JUOVEFbmgBW0pDNrbSgjEwn44XHVnQKmna1w2kp2RiQvNprMWGfhsli_6jzYxikn1op6qVOKnrR4ySZtzzUf5yUmixBs776jMZZi0rm-IcALjZOzLHuYQ8Eo22hnQZUiy82fjvaDXTK-KWPUn3aPFnSEj7bt_YQ7IYw9PZaIe5Agg3kpmUN9XZgDUySIJwjTEHUOqozCMn7VGddxbX0mV7UUf3nLTprU26Ci7-wKteTIQJybY2SUNDH3WX2KM-wHpwCOj6aGNxeBIVO2_JYQmAiOwq8yS1WHpH9ldte8Bn4YVzsx6C_OOCAICGdEG2rqCIfzvzqMPk3W-A1jCdA4pkAi8wWxb9AZatPbxfr7bKb7beD8ptBkdduzYKkPKtb9wStUt_A9CPM1N4kqCmKKByAzu8QsFzdCA2Ki0otGimv2vI9wUBybWR5R-uAoSn77czPt2ip_zECqHqRskxR-IvYMcO2ZO-VSksuyS7DHh1kO7mlrjA'}`
        },
        body: JSON.stringify({ query }),
        next: {
            revalidate
        }
    } )

    const { data } = await response.json();

    return data
}