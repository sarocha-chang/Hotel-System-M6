var http = require('http');
var url = require('url');

const {
    AddCustomer,
    CreateRoom,
    GetCustomer,
    GetRoom,
    MakeReservation,
    GetReservation,
    DeleteReservation
} = require('./hotelSystem');

http.createServer(function (req, res) {
    var request_path = url.parse(req.url, true);
    var message = '';
    var data;
    var status = 200;
    switch (request_path.pathname) {
        case '/addCustomer':
            try {
                data = AddCustomer(parseInt(request_path.query.id), request_path.query.firstName, request_path.query.lastName,parseInt(request_path.query.age), request_path.query.phone);
                message = 'Customer added successfully';
            } catch (err) {
                message += err;
                status = 400;
                console.log(err);
            }
            break;

        case '/createRoom':
            try {
                data = CreateRoom(parseInt(request_path.query.id), parseInt(request_path.query.room_num), request_path.query.room_type,parseInt(request_path.query.room_price), request_path.query.room_status);
                message = 'Room added successfully';
            } catch (err) {
                message += err;
                status = 400;
                console.log(err);
            }
            break;
        case '/getCustomer':
            try {
                data = GetCustomer(parseInt(request_path.query.id));
                message = 'Customer found successfully';
            } catch (err) {
                message += err;
                status = 400;
                console.log(err);
            }
            break;
        case '/getRoom':
            try {
                data = GetRoom(parseInt(request_path.query.id));
                message = 'Room found successfully';
            } catch (err) {
                message += err;
                status = 400;
                console.log(err);
            }
            break;
        case '/makeReservation':
            try {
                data = MakeReservation(parseInt(request_path.query.res_id),parseInt(request_path.query.cus_id), parseInt(request_path.query.room_id), request_path.query.dateIn, request_path.query.dateOut);
                message = 'Reservation made successfully';
            } catch (err) {
                message += err;
                status = 400;
                console.log(err);
            }
            break;
        case '/getReservation':
            try {
                data = GetReservation(parseInt(request_path.query.res_id));
                message = 'Reservation found successfully';
            } catch (err) {
                message += err;
                status = 400;
                console.log(err);
            }
            break;
        case '/deleteReservation':
            try {
                data = DeleteReservation(parseInt(request_path.query.res_id));
                message = 'Reservation deleted successfully';
            } catch (err) {
                message += err;
                status = 400;
                console.log(err);
            }
            break;
        default:
            status = 404
            message = ' Not Found '
            break;
    }
    let response_object = {
        statusCode: status,
        message: message,
        data: data
    };
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(response_object));
}).listen(8080);
console.log('Server running at pot 8080');