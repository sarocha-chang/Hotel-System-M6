const {
  cus_detail,
  Customer
} = require("./customer");
const {
  room_detail,
  Room
} = require("./room");
const {
  reservation,
  Reserve
} = require("./reservation");


const check_text = /^[a-zA-Z]{1,99}$/;
const check_phone = /^\d{10}$/;
const check_age = /^[0-9]{1,2}$/;
const check_id = /^\d{1,2}$/
const check_price = /^\d{1,5}$/;
const check_room = /^[0-9][0-9][0-9]$/;
const check_date = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/;

AddCustomer = (cus_id, firstName, lastName, age, phone) => {
  if (check_id.test(cus_id) && check_text.test(firstName) && check_text.test(lastName) && check_age.test(age) && check_phone.test(phone)) {
    for (let i = 0; i < cus_detail.length; i++) {
      if (cus_detail[i].id === cus_id) {
        console.log("Customer already exists");
        return;
      } else {
        let customer = new Customer(cus_id, firstName, lastName, age, phone);
        var res = customer;
        cus_detail.push({
          id: customer.cus_id,
          firstName: customer.firstName,
          lastName: customer.lastName,
          age: customer.age,
          phone: customer.phone,
        });
        console.log("Customer added");
        console.table(cus_detail);
        return res;
      }
    }
  } else {
    console.error("Invalid input");
  };
}
//AddCustomer(4,"John","Doe",20,"0815312420");

CreateRoom = (room_id, room_num, room_type, room_price, room_status) => {
  if (check_id.test(room_id) && check_room.test(room_num) && check_text.test(room_type) && check_price.test(room_price) && check_text.test(room_status)) {
    for (let i = 0; i < room_detail.length; i++) {
      if (room_detail[i].id == room_id) {
        console.log("Room already exists");
        return;
      } else {
        let newRoom = new Room(room_id, room_num, room_type, room_price, room_status);
        var res = newRoom;
        room_detail.push({
          id: newRoom.room_id,
          room_num: newRoom.room_num,
          room_type: newRoom.room_type,
          room_price: newRoom.room_price,
          room_status: newRoom.room_status,
        });
        console.log(newRoom.id)
        console.log("Room added");
        console.table(room_detail);
        return res;
      }
    }
  } else {
    console.error("Invalid input");
  }
};
//CreateRoom(5,101,"Single",100,"Available");

GetCustomer = (cus_id) => {
  for (let i = 0; i < cus_detail.length; i++) {
    if (cus_detail[i].id === cus_id) {
      console.log("Customer found");
      console.log(cus_detail[i]);
      return GetCustomer;
    };
  };
  console.log("Customer not found");
};
//GetCustomer(1);

GetRoom = (room_id) => {
  for (let i = 0; i < room_detail.length; i++) {
    if (room_detail[i].id === room_id) {
      console.log("Room found");
      console.log(room_detail[i]);
      return GetRoom;
    };
  };
  console.log("Room not found");
};
//GetRoom(2);

MakeReservation = (res_id,cus_id, room_id, dateIn, dateOut) => {
  if (check_id.test(res_id)&&check_id.test(cus_id) && check_id.test(room_id) && check_date.test(dateIn) && check_date.test(dateOut)) {
    for (let i = 0; i < cus_detail.length; i++) {
      if (cus_detail[i].id !== cus_id && room_detail[i].id !== room_id) {
        console.log("Customer or Room not found");
      } else {
        let newReserve = new Reserve(res_id,cus_id, room_id, dateIn, dateOut);
        var res = newReserve;
        reservation.push({
          id: newReserve.res_id,
          cus_id: newReserve.cus_id,
          room_id: newReserve.room_id,
          dateIn: newReserve.dateIn,
          dateOut: newReserve.dateOut,
        });
        console.log("Reservation made");
        console.table(reservation);
        return res;
      }
    }
  } else {
    console.error("Invalid input");
  }
};
// MakeReservation(1,1,2,"12-12-2012 12:12","12-12-2012 12:12");

GetReservation = (res_id) => {
  for (let i = 0; i < reservation.length; i++) {
    if (reservation[i].id === res_id) {
      console.log("Reservation found");
      console.log(reservation[i]);
      return GetReservation;
    };
  };
  console.log("Reservation not found");
}
//GetReservation(1);

DeleteReservation = (res_id) => {
for (let i = 0; i < reservation.length; i++) {
  if (reservation[i].id === res_id) {
    reservation.splice(i, 1);
    console.log("Reservation deleted");
    console.table(reservation);
    return DeleteReservation;
  }
};
console.log("Reservation not found");
}
// DeleteReservation(2);
module.exports = {
  AddCustomer: AddCustomer,
  CreateRoom: CreateRoom,
  GetCustomer: GetCustomer,
  GetRoom: GetRoom,
  MakeReservation: MakeReservation,
  GetReservation: GetReservation,
  DeleteReservation: DeleteReservation
};
