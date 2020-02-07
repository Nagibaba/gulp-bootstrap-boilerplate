fetch('https://fizza.az/site/logInfo').then((response)=>response.text()).then((t)=>{
    $('#log-info').html(t)
})