const Room = function (room_id, room_num, room_type, room_price, room_status) {
    this.room_id = room_id;
    this.room_num = room_num;
    this.room_type = room_type;
    this.room_price = room_price;
    this.room_status = room_status;
}

Room.prototype.getRoom = function () {
    return `${this.room_id} ${this.room_num} ${this.room_type} ${this.room_price} ${this.room_status}`;
};

var room_detail = [{
        id: 1,
        room_num: 101,
        room_type: "standard",
        room_price: 699,
        room_status: "available"
    },
    {
        id: 2,
        room_num: 201,
        room_type: "superior",
        room_price: 899,
        room_status: "available"
    },
    {
        id: 3,
        room_num: 301,
        room_type: "deluxe",
        room_price: 1099,
        room_status: "available"
    },
    {
        id: 4,
        room_num: 401,
        room_type: "vip",
        room_price: 3099,
        room_status: "available"
    }
];

//console.log(room_detail);
module.exports = {
    Room: Room,
    room_detail: room_detail
};