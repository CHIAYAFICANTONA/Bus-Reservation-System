document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar ul li');
    const mainContent = document.querySelector('.mainContent');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const section = link.getAttribute('id')
  
        links.forEach(item => item.classList.remove('active'));
  
        link.classList.add('active');
        loadSection(section);
      })
    })
  
    function loadSection(section) {
      fetch(`pages/pages/${section}.html`)
        .then(response => response.text())
        .then(html => {
          mainContent.innerHTML = html;
        })
        .catch(error => {
          console.error('Error loading section:', error);
        });
        fetchAdminData();
        fetchBusData();
        fetchHotelData();
        fetchPaymentData();
        fetchReservationData();
        fetchRoomData();
        fetchSeatData();
        fetchTicketData();
        fetchUserData();
        fetchUserRoomBookingData();
    }
  
    function fetchAdminData() {
      fetch('http://localhost:8000/admin/')
        .then(response => response.json())
        .then((admin) => {
          console.log('Data from API:', admin);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function fetchBusData() {
      fetch('http://localhost:8000/bus/')
        .then(response => response.json())
        .then((bus) => {
          console.log('Data from API:', bus);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function fetchHotelData() {
      fetch('http://localhost:8000/hotel/')
        .then(response => response.json())
        .then((hotel) => {
          console.log('Data from API:', hotel);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function fetchUserData() {
      fetch('http://localhost:5000/student/')
        .then(response => response.json())
        .then((user) => {
          console.log('Data from API:', user);
          updateUserName(user);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function fetchPaymentData() {
      fetch('http://localhost:8000/payment/')
        .then(response => response.json())
        .then((payment) => {
          console.log('Data from API:', payment);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function fetchReservationData() {
      fetch('http://localhost:8000/reservation/')
        .then(response => response.json())
        .then((reservation) => {
          console.log('Data from API:', reservation);
          updateTripStatus(reservation);
          updateBusRoute(reservation);
          updateTicketId(reservation);
          updateBusLicencePlate(reservation);
          updateSeatNumber(reservation);
          updateTripPrice(reservation);
          updatePaymentMethod(reservation);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function fetchRoomData() {
      fetch('http://localhost:8000/room/')
        .then(response => response.json())
        .then((room) => {
          console.log('Data from API:', room);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function fetchSeatData() {
      fetch('http://localhost:8000/seat/')
        .then(response => response.json())
        .then((seat) => {
          console.log('Data from API:', seat);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function fetchTicketData() {
      fetch('http://localhost:8000/ticket/')
        .then(response => response.json())
        .then((ticket) => {
          console.log('Data from API:', ticket);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function fetchUserRoomBookingData(){
      fetch('http://localhost:8000/userroombooking/')
        .then(response => response.json())
        .then((userroombooking) => {
          console.log('Data from API:', userroombooking);
          updateHotelName(userroombooking);
          updateRoomNumber(userroombooking);
          updateHotelLocation(userroombooking);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
    
    function updateUserName(user) {
      const name = document.getElementById('userName');
      if (name) {
        name.innerHTML = `${user.name}`;
      }
    }
  
    function updateBusRoute(reservation) {
      const route = document.getElementById('busRoute');
      if (route) {
        route.innerHTML = `${reservation.busRoute}`;
      }
    }
  
    function updateTripStatus(reservation) {
  
      const tripDate = new Date(reservation.reservationDate);
     
      const currentDate = new Date();
      
      if (currentDate > tripDate) {
        document.getElementById('tripStatus').textContent = '✅Done';
      } else {
        document.getElementById('tripStatus').textContent = '🕝Upcoming';
      }
    }
  
    function updateTicketId(reservation){
      const ticketId = document.getElementById('ticketId');
      if (ticketId) {
        ticketId.innerHTML = `${reservation.id}`;
      }
    }
  
    function updateBusLicencePlate(reservation){
      const busLicencePlate = document.getElementById('busLicencePlate');
      if (busLicencePlate) {
        busLicencePlate.innerHTML = `${reservation.busLicensePlate}`;
      }
    }
  
    function updateSeatNumber(reservation){
      const seatNumber = document.getElementById('seatNumber');
      if (seatNumber) {
        seatNumber.innerHTML = `${reservation.seat}`;
      }
    }
  
    function updateHotelName(userroombooking) {
      const hotelName = document.getElementById('hotelName');
      if (hotelName) {
        hotelName.innerHTML = `${userroombooking.hotelName}`
      }
    }
  
    function updateRoomNumber(userroombooking) {
      const roomNumber = document.getElementById('roomNumber');
      if (roomNumber) {
        roomNumber.innerHTML = `${userroombooking.roomNumber}`
      }
    }
  
    function updateTripPrice(reservation){
      const tripPrice = document.getElementById('tripPrice');
      if (tripPrice) {
        tripPrice.innerHTML = `${reservation.tripPrice}`
      }
    }
  
    function updateHotelLocation(userroombooking) {
      const hotelLocation = document.getElementById('hotelLocation');
      if (hotelLocation) {
        hotelLocation.innerHTML = `${userroombooking.hotelLocation}`
      }
    }
  
    function updatePaymentMethod(reservation){
      const paymentMethod = document.getElementById('paymentMethod');
      if (paymentMethod) {
        paymentMethod.innerHTML = `${reservation.paymentMethod}`
      }
    }
  
    function signUp(){
      const signUpForm = document.getElementById('register');
      signUpForm.addEventListener('submit', async (event) => {
          event.preventDefault();
          
          const formData = new FormData(signUpForm);
          const data = Object.fromEntries(formData.entries());
  
          try {
              const response = await fetch('http://localhost:8000/user', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
              });
              const result = await response.json();
              console.log('User signed up:', result);
          } catch (error) {
              console.error('Error signing up:', error);
          }
      });
    }
  
    function updateUser(){
      fetch('http://localhost:8000/user')
        .then(response => response.json())
        .then((user) => {
          const updateForm = document.getElementById('update');
          updateForm.addEventListener('submit', async (event) => {
          event.preventDefault();
  
          const formData = new FormData(updateForm);
          const data = Object.fromEntries(formData.entries());
          const userId = user.id;
  
          try {
              const response = await fetch(`http://localhost:8000/user?id=${userId}`, {
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
              });
              const result = await response.json();
              console.log('User updated:', result);
          } catch (error) {
              console.error('Error updating user:', error);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  
      });
    }
  
    function deleteUser(){
      fetch('http://localhost:8000/user')
        .then(response => response.json())
        .then((user) => {
          const deleteUserButton = document.getElementById('deleteUser');
          deleteUserButton.addEventListener('click', async () => {
          const userId = user.id;
  
          try {
              const response = await fetch(`http://localhost:8000/user?id=${userId}`, {
                  method: 'DELETE',
              });
              if (response.ok) {
                  console.log('User deleted successfully');
              } else {
                  console.error('Error deleting user:', response.statusText);
              }
          } catch (error) {
              console.error('Error deleting user:', error);
          }
      });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      
    }
  
    loadSection('tripDetails')
  })