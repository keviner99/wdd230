function get_wind_chill(temp_f,wind_speed_mph) {

    if (temp_f <= 50  && wind_speed_mph > 3) {

        wind_chill  = 35.74 + 0.6215 * temp_f - 35.75 * wind_speed_mph ** 0.16 + 0.4275 * temp_f * wind_speed_mph ** 0.16
    
        return (wind_chill_str +  " &#176;F")
    }

    else {

        return "N/A"
    }
}

const TempF = document.querySelector(".var-temp");
const WindSpeed = document.querySelector(".var-wind-speed")
const WindChill = document.querySelector(".var-wind-chill")

temp_f = parseFloat(TempF.innerHTML)
wind_speed_mph = parseFloat(WindSpeed.innerHTML)
computed_wind_chill = get_wind_chill(temp_f,wind_speed_mph);
WindChill.innerHTML = computed_wind_chill       