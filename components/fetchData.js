const fetchData = async(url)=>{

    try{
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data);
        return data;
    }
    catch(err){
        console.log(err);
    }




}


export {fetchData} ;