const [dates, setDates] = useState([])
    const [page, setPage] = useState(1)
    var today = new Date();
    useEffect(() => {
        let temp = []
        const inc = (page - 1) * 3
        today.setDate(today.getDate() + inc-1)
        for (let i = 0; i < 3; i++) {
            // today.setDate(today.getDate() + (i + inc))
            // console.log(today.getDate(today.setDate(today.getDate() + 1)))
            let dd = today.getDate(today.setDate(today.getDate() + 1))
            let mm = today.getMonth() + 1
            let yyyy = today.getFullYear()
            temp.push(dd + '-' + mm + '-' + yyyy)
        }
        setDates(temp);
    },[page])