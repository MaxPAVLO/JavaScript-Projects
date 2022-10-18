const Input = document.querySelector(".Input");
const Button = document.querySelector(".Button");
const Cities = document.querySelector(".Cities");
var CityWidth = 20;
var CityList = new Array;
var NameCreated = false;

Button.addEventListener("click", () => {
    var city = String(Input.value);
    city = city.toLocaleLowerCase();
    city = city[0].toUpperCase() + city.slice(1);

    if(CityList.includes(city)) {
        var ListCities = new Array;
        
        for(const i of Cities.childNodes) {
            ListCities.push(i);
        }

        for(const i of ListCities.slice(1)) {
            var NameOfCity = console.log(i.childNodes[0].childNodes[0].textContent);

            if(city = NameOfCity) {
                scrollTo(i);  
            }
        }
    }

    else{
        const fetchData = async () => {
            const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c2a7abaeee27d5b6bc639039d38d3ab2");
            var time = new Date();
            const data = await result.json();
    
            var degrees = Math.round(data.main.temp) - 273;
            var Weather = data.weather[0].description;
            var cloudCover = data.clouds.all;
            var hoursApi = String(time).split(" ")[4].split(":")[0];
            var hoursGmt = hoursApi - String(time).split(" ")[5].split("+")[1][1];
            
            if(hoursGmt < 0) {
                hoursGmt = 24 + (hoursGmt);
            }

            var PlusTimeInCity = data.timezone / 3600;
            
            var TimeInCity = hoursGmt + (PlusTimeInCity);

            if(TimeInCity >= 24) {
                TimeInCity = TimeInCity - 24;
            }

            if(TimeInCity < 0) {
                TimeInCity = 24 + (TimeInCity);
            }
    
            const block = document.createElement("div");
            block.className = "block";
            const NameOfCity = document.createElement("div");
            NameOfCity.className = "NameOfCity";
            const Span = document.createElement("span");
            Span.textContent = city;
            
            const I = document.createElement("i");
            I.className = "fas fa-regular fa-xmark";
            I.setAttribute("onclick", "Deleting(this)");
            const Degrees = document.createElement("div");
            Degrees.className = "degrees";
            Degrees.textContent = degrees + "°C";
            const weather = document.createElement("div");
            weather.className = "Weather";
            const Img = document.createElement("div");
            const I2 = document.createElement("i");
            if(cloudCover >= 40 & TimeInCity >= 18 || TimeInCity <= 6) {
                I2.className = "fa-solid fa-cloud-moon";
            }
            else if(cloudCover < 40 & TimeInCity >= 18 || TimeInCity <= 6) {
                I2.className = "fa-solid fa-moon";
            }
            else if(cloudCover >= 40 & 6 > TimeInCity < 18) {
                I2.className = "fa-solid fa-cloud-sun";
            }
            else if(cloudCover < 40 & 6 > TimeInCity < 18) {
                I2.className = "fa-regular fa-sun";
            }
            const Now = document.createElement("div");
            Now.className = "Now";
            Now.textContent = Weather.toLowerCase();
            CityWidth = CityWidth + 20;
            Cities.style.width = String(CityWidth) + "%";
            NameOfCity.append(Span, I);
            Img.append(I2);
            weather.append(Img, Now)
            block.append(NameOfCity, Degrees, weather);
            Cities.append(block);

            if (NameCreated == false) {
                
                const createBy = document.createElement("div");
                const created = document.createElement("span");
                const Name = document.createElement("span");

                createBy.setAttribute("class", "createBy");
                created.setAttribute("class", "created");
                Name.setAttribute("class", "name");

                created.textContent = "created by ";
                Name.textContent = "Maxim Pavlov"
                
                createBy.append(created, Name);

                document.body.append(createBy);

                NameCreated = true;
            }

            CityList.push(city);
            console.log(CityList)
        };
        
        fetchData();
    }
           
    Input.value = "";
});

function Deleting(MarkI) {
    
    const Parent1 = MarkI.parentNode;
    const created = document.querySelector(".created");
    const Name = document.querySelector(".name");
    let index = CityList.indexOf(MarkI.previousElementSibling.textContent);
    delete CityList[index];
    CityList.filter(item => !!item);

    const MainParent = Parent1.parentNode;
    MainParent.remove();
    CityWidth -= 20;
    Cities.style.width = String(CityWidth) + "%";
}