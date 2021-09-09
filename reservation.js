const Reserve = function (res_id,cus_id, room_id, dateIn, dateOut) {
    this.res_id = res_id;
    this.cus_id = cus_id;
    this.room_id = room_id;
    this.dateIn = dateIn;
    this.dateOut = dateOut;
};

Reserve.prototype.makeReservation = function () {
    return `${this.res_id}${this.cus_id}${this.room_id}${this.dateIn}${this.dateOut}`
};
var reservation = [{
    id: 1,
    cus_id: 1,
    room_id: 1,
    dateIn: '01-01-2021 13:10',
    dateOut: '02-01-2021 10:30'
},
{
    id: 2,
    cus_id: 2,
    room_id: 2,
    dateIn: '05-01-2021 13:10',
    dateOut: '08-01-2021 10:30'
}, ];

module.exports = {
    reservation: reservation,
    Reserve: Reserve
};