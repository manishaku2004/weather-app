// alert('ok')
const button =document.getElementById("sbtn");
const input=document.getElementById("city_input");
const cityName=document.getElementById("cityName");
const cityTime=document.getElementById("cityTime");
const cityTemp=document.getElementById("cityTemp");
 //async =used asincronus js
async function getData (CityName){

    //call api ( fetch is return promise)
   
   const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=752fec28fc6746d6834180243260104&q=${CityName}&aqi=yes
`);
return await promise.json()
}
 button.addEventListener("click", async () => {
    // console.log(input.value);
    const value = input.value;
    const result= await getData(value);
    // console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region}- ${result.location.country}`;
    cityTemp.innerText = `${result.current.temp_c}`;
    cityTime.innerText= result.location.localtime;
    
});
// http://api.weatherapi.com/v1/current.json?key=752fec28fc6746d6834180243260104&q=London&aqi=yes
