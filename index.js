const concurrently = require('concurrently');

const commands = [
// { command: 'cd Bus_Booking_System-MobileEnd && npx ionic serve', name: 'Ionic', prefixColor: 'blue' },
{ command: 'cd Bus_Booking_System && ng serve',
    name: 'Angular',
    prefixColor: 'green' },
    { command: 'cd Bus_Booking_System && cd Bus_Booking_System-BackEnd && npm run reload',
        name: 'EndPoints',
        prefixColor: 'blue' }
];

concurrently(commands, {
prefix: 'name',
killOthers: ['failure', 'success'],
});
