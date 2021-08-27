const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=<key>&query=' + latitude + ',' + longitude +'&units=f'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect weather service!')
        } else if (body.error) {
            callback('Unable to find location!')
        } else {
            callback(undefined, {
                weather_descriptions: body.current.weather_descriptions[0],
                current_temperature: body.current.temperature,
                feels_like_temperature: body.current.feelslike
            })
        }
    })
}

module.exports = forecast