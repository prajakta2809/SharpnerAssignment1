const express=require('express');
const bodyParser=require('body-parser');
const {Sequelize,DataTypes}=require('sequelize');

const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

const sequelize=new Sequelize('feedback','root','TusharMinche@2003',{
    host:'localhost',
    dialect:'mysql',
});

const FeedBack=sequelize.define('FeedBack',{
    companyName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    pros:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    cons:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
});

sequelize.sync()
.then(()=>{
    console.log("Synced");
})
.catch((err)=>console.log(err));

app.get('/feedback-form', (req, res) => {
    FeedBack.findAll()
      .then((feedbackList) => {
        res.render('feebackForm', { feedbackList, searchedCompany: null });
      })
      .catch((err) => {
        console.error('Error fetching feedback:', err);
        res.status(500).send('Error fetching feedback');
      });
  });
//-------------------------------------------------------------

app.get('/search', (req, res) => {
    const { searchCompany } = req.query;
    FeedBack.findAll({
      where: { companyName: searchCompany },
    })
      .then((feedbackDetails) => {
        const searchedCompany = {
          companyName: searchCompany,
          feedbackDetails: feedbackDetails,
          avgRating: calculateAverageRating(feedbackDetails),
        };
        return FeedBack.findAll()
          .then((feedbackList) => {
            res.render('feebackForm', { feedbackList, searchedCompany });
          });
      })
      .catch((err) => {
        console.error('Error searching company:', err);
        res.status(500).send('Error searching company');
      });
  });
  
  function calculateAverageRating(feedbackDetails) {
    if (feedbackDetails.length === 0) {
      return 'N/A';
    }
    const sum = feedbackDetails.reduce((acc, feedback) => acc + feedback.rating, 0);
    return (sum / feedbackDetails.length).toFixed(2);
  }
  
//-------------------------------------------------------------
app.post('/feedback', (req, res) => {
    const { companyName, pros, cons, rating } = req.body;
    FeedBack.create({ companyName, pros, cons, rating })
      .then(() => {
      
        res.redirect('/feedback-form')
      })
      .catch((err) => {
        res.status(500).send('Error submitting feedback');
      });
  });
  
// app.get('/feedback-list',(req,res)=>{
//     FeedBack.findAll()
//     .then((feedbackList)=>{
//         res.render('feedbackList',{feedbackList});
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})