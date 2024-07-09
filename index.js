const concurrently = require('concurrently');

const commands = [
{ command: 'cd Bus_Booking_System-MobileEnd && npx ionic serve', name: 'Ionic', prefixColor: 'blue' },
{ command: 'cd Bus_Booking_System-webEnd && npx serve -s .', name: 'HTML5', prefixColor: 'green' }
];

concurrently(commands, {
prefix: 'name',
killOthers: ['failure', 'success'],
});
