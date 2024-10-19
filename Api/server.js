const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();




const categoryRoutes=require('./routes/categoryRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const providerRoutes = require('./routes/providerRoutes');
const documentRoutes = require('./routes/documentRoutes');
const couponRoutes = require('./routes/couponRoutes');
const editUserRoutes = require('./routes/editUserRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const detailsRoutes=require('./routes/detailsRoutes');
const homeCradsRoutes=require('./routes/homeCradsRoutes');
const jobRequestRoutes=require('./routes/jobRequestRoutes');
const newBookingRoutes=require('./routes/newBookingRoutes');
const newUsersRoutes=require('./routes/newUsersRoutes');
const providerTypeRoutes=require('./routes/providerTypeRoutes');
const packageRoutes=require('./routes/packageRoutes');
const bookingServiceRoutes=require('./routes/bookingServicesRoutes');
const bestSellerRoutes=require('./routes/bestSellerRoutes');
const groceryRoutes=require('./routes/groceryRoutes');
const handymanRoutes=require('./routes/handymanRoutes');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Handyman', {})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Failed to connect to MongoDB', err));

app.use('/category', categoryRoutes);
app.use('/services', serviceRoutes);
app.use('/providers', providerRoutes);
app.use('/documents', documentRoutes);
app.use('/coupons', couponRoutes);
app.use('/EditUser', editUserRoutes);
app.use('/payments', paymentRoutes);
app.use('/Details',detailsRoutes);
app.use('./HomeCrads',homeCradsRoutes);
app.use('./JobRequest',jobRequestRoutes);
app.use('./NewBooking',newBookingRoutes);
app.use('./NewUser',newUsersRoutes);
app.use('./ProviderType',providerTypeRoutes);
app.use('./Package',packageRoutes);
app.use('./BookingService',bookingServiceRoutes);
app.use('./Bestsellers',bestSellerRoutes);
app.use('./grocery',groceryRoutes);
app.use('./Handyman',handymanRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
