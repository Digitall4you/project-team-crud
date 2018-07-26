import mongoose from 'mongoose';

function mongooseConnection(cb) {
    mongoose.connect('mongodb://localhost/');

    mongoose.connection.once('open', () => {
        cb();
    })

    mongoose.connection.on('connected', () => {
        console.log('connected to database');
    });

    mongoose.connection.on('error', () => {
        throw new Error('unable to establish connection');
    }); 

    mongoose.connection.on('disconnected from database', () => {
        console.log('unable to establish connection');
    }); 

}

export default mongooseConnection; 