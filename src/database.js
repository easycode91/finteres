const { connect } = require('mongoose');

connect('mongodb://localhost/finterest',{ 
            useNewUrlParser : true,
            useUnifiedTopology : true
            })
            .then(db => console.log('Database is connected'))
            .catch(err => console.log(err))
