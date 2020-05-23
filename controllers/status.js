module.exports = function(app){
    app.get('/status', (req, res) => res.send({
        internet_connectivity: false,
        gps_connectivity: false,
        bluetooth_connectivity: false,
        speed: 0,
        speed_unit: 'kmph',
        rpm: 0,
        fuel_percent: 85
    }));
};