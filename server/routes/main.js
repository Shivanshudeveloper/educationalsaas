const express = require('express');
const crypto = require('crypto');
require('dotenv').config();
const router = express.Router();
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const aws_con = require('../controllers/aws_s3');
require('dotenv').config();

// SendGrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// Getting Module

const Appt_Model = require('../models/Appointment');
const User_Model = require('../models/User');
const Class_Model = require('../models/Class');
const ClassSubject_Model = require('../models/ClassSubject');
const ClassLevel_Model = require('../models/ClassLevel');
const Teacher_Model = require('../models/Teacher');
const TeacherYear_Model = require('../models/TeacherYear');
const Observer_Model = require('../models/Observer');
const Form_Model = require('../models/Form');
const Training_Model = require('../models/Training');
const FormResponse_Model = require('../models/FormResponses');
const Event_Model = require('../models/Event');
const ShareRecording_Model = require('../models/SharedRecording');
const Plans_Model = require('../models/Plans');
const Attendee_Model = require('../models/Attendee');
const Token_Model = require('../models/Token');
const Video_Model = require('../models/Video');

var schedule = require('node-schedule');
// const { findById } = require("../models/Class");
const emailId = require('../config/keys').Email;
const emailPassword = require('../config/keys').Password;
const req = require('express/lib/request');

router.get('/test', (req, res) => {
  res.send('Working');
});
const stripe = require('stripe')(
  'sk_test_51GtK1fKwfxSi9h7Q5BBxgt3vc3EjhDni1MGIiKLMQIbJgXhfZYTQyOTYUi1ZhMr9gLTGQcEyhEvFBlhxKsbRgP7200PbAHaVIg'
);
///////////////////////
// APPOINTMENT
///////////////////////

router.post('/saveappt', async (req, res) => {
  const { userEmail, appData } = req.body;
  try {
    const newUser = new Appt_Model({ ...appData, userEmail: userEmail });
    const observer = await Observer_Model.findById(appData.observerId);
    await newUser.save();

    // try {
    //   (transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //       user: emailId,
    //       pass: emailPassword,
    //     },
    //   })),
    //     (mailOption = {
    //       from: emailId,
    //       to: appData?.teacherData[0]?.Email,
    //       subject: "Appointment Booked",
    //       html: `Appointment booked by ${observer.name} for ${appData.apptDate}<br />${appData.note}`,
    //     }),
    //     transporter.sendMail(mailOption, (err, data) => {
    //       console.log("Email Sent!");
    //     });
    // } catch (error) {
    //   console.log(error);
    // }

    // Mail using send grid
    const msg = {
      to: appData?.teacherData[0]?.Email, // Change to your recipient
      from: emailId, // Change to your verified sender
      subject: 'Appointment Booked',
      html: `Appointment booked by ${observer.name} for ${appData.apptDate}<br />${appData.note}`,
    };

    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
        console.log('Email Sent!');
        return res.status(201).json({ message: 'New Appointment Created' });
      })
      .catch((error) => {
        console.error(error);
      });
    res.status(500).json({ message: 'Server Error' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});
router.get('/getappt/:userEmail', async (req, res) => {
  const { userEmail } = req.params;
  try {
    const data = await Appt_Model.find({ userEmail: userEmail });
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

// /////////////////////
// USERS
// /////////////////////
router.post('/adduser', async (req, res) => {
  let userData = req.body;
  try {
    const newUser = new User_Model(userData);
    await newUser.save();
    console.log(newUser);
    res.status(201).json({ message: 'New Class Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});
router.get('/getuser/:id', async (req, res) => {
  let { id } = req.params;
  try {
    const newUser = await User_Model.find({ userId: id });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Error' });
  }
});

router.post('/getuserbyemail/', async (req, res) => {
  let { email } = req.body;
  try {
    const newUser = await User_Model.find({ userEmail: email });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Error' });
  }
});

router.post('/updateuser/:id', async (req, res) => {
  let { id } = req.params;
  let formData = req.body;

  try {
    const newUser = await User_Model.find({ userId: id });
    await User_Model.findByIdAndUpdate(newUser[0]._id, formData, {
      useFindAndModify: false,
    });
    res.status(201).json({ message: 'Updated' });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Error' });
  }
});

// ////////////
// CLASS
// ////////////
router.post('/addclasslist', async (req, res) => {
  const { userEmail, formData } = req.body;
  try {
    const newClass = new Class_Model({ ...formData, userEmail: userEmail });
    await newClass.save();
    res.status(201).json({ message: 'New Class Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.patch('/editclasslist', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = await Class_Model.findByIdAndUpdate(
      { _id: formData._id },
      { ...formData, userEmail: userEmail },
      { useFindAndModify: false }
    );
    res.status(201).json({ message: 'New Level Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.get('/getclasslist/:userEmail', async (req, res) => {
  const { userEmail } = req.params;
  try {
    const allClasses = await Class_Model.find({ userEmail: userEmail });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.delete('/deleteclasslist/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Class_Model.findByIdAndDelete(id);
    res.status(201).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

//
//

router.post('/addclasssubject', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = new ClassSubject_Model({
      ...formData,
      userEmail: userEmail,
    });
    await newClass.save();
    const prevClass = await Class_Model.find({ name: formData.class });
    prevClass[0].numberOfSubjects = prevClass[0].numberOfSubjects + 1;
    await Class_Model.findByIdAndUpdate(
      { _id: prevClass[0]._id },
      prevClass[0],
      {
        useFindAndModify: false,
      }
    );
    res.status(201).json({ message: 'New Class Created' });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Error' });
  }
});

router.patch('/editclasssubject', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = await ClassSubject_Model.findByIdAndUpdate(
      { _id: formData._id },
      { ...formData, userEmail: userEmail },
      { useFindAndModify: false }
    );
    res.status(201).json({ message: 'New Level Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.get('/getclasssubject/:userEmail', async (req, res) => {
  const { userEmail } = req.params;
  try {
    const allClasses = await ClassSubject_Model.find({ userEmail: userEmail });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});
router.delete('/deleteclasssubject/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prevSubject = await ClassSubject_Model.findById(id);
    const prevClass = await Class_Model.find({ name: prevSubject.class });
    prevClass[0].numberOfSubjects = prevClass[0].numberOfSubjects - 1;
    await Class_Model.findByIdAndUpdate(
      { _id: prevClass[0]._id },
      prevClass[0],
      {
        useFindAndModify: false,
      }
    );
    await ClassSubject_Model.findByIdAndDelete(id);
    res.status(201).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

//
//

router.post('/addclasslevel', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = new ClassLevel_Model({
      ...formData,
      userEmail: userEmail,
    });
    await newClass.save();
    console.log(newClass);
    res.status(201).json({ message: 'New Level Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.patch('/editclasslevel', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = await ClassLevel_Model.findByIdAndUpdate(
      { _id: formData._id },
      { ...formData, userEmail: userEmail },
      { useFindAndModify: false }
    );
    res.status(201).json({ message: 'New Level Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.get('/getclasslevel/:userEmail', async (req, res) => {
  const { userEmail } = req.params;
  try {
    const allClasses = await ClassLevel_Model.find({ userEmail: userEmail });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.delete('/deleteclasslevel/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await ClassLevel_Model.findByIdAndDelete(id);
    res.status(201).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

// /////////////////////
// TEACHERS
// /////////////////////

router.post('/addteacherlist', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = new Teacher_Model({ ...formData, userEmail: userEmail });
    await newClass.save();
    const year = await TeacherYear_Model.find({
      yearOfJoining: formData.yearOfJoining,
    });

    if (year.length === 0) {
      const newYear = new TeacherYear_Model({
        yearOfJoining: formData.yearOfJoining,
      });
      await newYear.save();
    } else {
      console.log(year[0].total);
      await TeacherYear_Model.findByIdAndUpdate({ _id: year[0]._id }, year[0], {
        useFindAndModify: false,
      });
    }

    res.status(201).json({ message: 'New Level Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.patch('/editteacherlist', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = await Teacher_Model.findByIdAndUpdate(
      { _id: formData._id },
      { ...formData, userEmail },
      { useFindAndModify: false }
    );
    res.status(201).json({ message: 'New Level Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.get('/getteacherlist/:userEmail', async (req, res) => {
  const { userEmail } = req.params;
  try {
    const allClasses = await Teacher_Model.find({ userEmail: userEmail });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});
router.get('/getteacheryears', async (req, res) => {
  try {
    const allClasses = await TeacherYear_Model.find();
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.delete('/deleteteacher/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher_Model.findById(id);

    await Teacher_Model.findByIdAndDelete(id);

    const year = await TeacherYear_Model.find({
      yearOfJoining: teacher.yearOfJoining,
    });

    year[0].total = year[0].total - 1;
    await TeacherYear_Model.findByIdAndUpdate({ _id: year[0]._id }, year[0], {
      useFindAndModify: false,
    });

    res.status(201).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

// ////////////////////
// OBSERVSERS
// ////////////////////

router.post('/addobserver', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = new Observer_Model({ ...formData, userEmail: userEmail });
    await newClass.save();
    res.status(201).json({ message: 'New Observer Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.patch('/editobserver', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = await Observer_Model.findByIdAndUpdate(
      { _id: formData._id },
      { ...formData, userEmail: userEmail },
      { useFindAndModify: false }
    );
    res.status(201).json({ message: 'Observer Updated' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.get('/getobserver/:userEmail', async (req, res) => {
  const { userEmail } = req.params;
  try {
    const allClasses = await Observer_Model.find({ userEmail: userEmail });
    console.log(allClasses);
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.delete('/deleteobserver/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Observer_Model.findByIdAndDelete(id);
    res.status(201).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

// //////////////////
// FORMS
// ///////////////////
router.post('/saveform', async (req, res) => {
  const { fieldData, userEmail } = req.body;
  try {
    const newClass = new Form_Model({ ...fieldData, userEmail: userEmail });
    await newClass.save();
    res.status(201).json({ message: 'New Form Created' });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Error' });
  }
});

router.get('/getforms/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const allClasses = await Form_Model.find({ observerId: id });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});
router.get('/getallforms/:userEmail', async (req, res) => {
  const { userEmail } = req.params;
  try {
    const allClasses = await Form_Model.find({ userEmail: userEmail });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});
router.get('/getformpreview/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const allClasses = await Form_Model.find({ _id: id });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});
router.get('/getformresponses/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const allClasses = await FormResponse_Model.find({ formId: id });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});
router.get('/getallresponses/:userEmail', async (req, res) => {
  try {
    const allClasses = await FormResponse_Model.find({
      userEmail: req.params.userEmail,
    });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.post('/submitform', async (req, res) => {
  const { formData, userEmail } = req.body;

  try {
    const newResponse = new FormResponse_Model({ ...formData, userEmail });
    const form = await Form_Model.find({ _id: formData.formId });
    form[0].noOfResponses = form[0].noOfResponses + 1;
    await Form_Model.findByIdAndUpdate({ _id: form[0]._id }, form[0], {
      useFindAndModify: false,
    });
    await newResponse.save();
    res.status(201).json(newResponse);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.delete('/deleteform/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Form_Model.findByIdAndDelete(id);
    const allForms = await FormResponse_Model.find({ formId: id });
    allForms.map(
      async (form) => await FormResponse_Model.findByIdAndDelete(form._id)
    );
    res.status(201).json({ message: 'Deleted' });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Error' });
  }
});

// ////////////////////////////
// TRAINING
// ///////////////////////////
router.post('/addtraininglist', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = new Training_Model({ ...formData, userEmail: userEmail });
    await newClass.save();
    res.status(201).json({ message: 'New Class Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.patch('/edittraininglist', async (req, res) => {
  const { formData, userEmail } = req.body;
  try {
    const newClass = await Training_Model.findByIdAndUpdate(
      { _id: formData._id },
      { ...formData, userEmail: userEmail },
      { useFindAndModify: false }
    );
    res.status(201).json({ message: 'New Level Created' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.get('/gettraininglist/:userEmail', async (req, res) => {
  try {
    const allClasses = await Training_Model.find({
      userEmail: req.params.userEmail,
    });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});
router.get('/gettrainer/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const allClasses = await Training_Model.find({ _id: id });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.delete('/deletetraininglist/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Training_Model.findByIdAndDelete(id);
    res.status(201).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

// ////////////////////////////
// TRAINING Teacher
// ///////////////////////////
router.post('/addtrainingteacher/:id', async (req, res) => {
  const { id } = req.params;
  let formData = req.body;
  try {
    const newClass = await Training_Model.find({ _id: id });
    newClass[0].teachers.push(formData);
    const newTraining = await Training_Model.findByIdAndUpdate(
      id,
      newClass[0],
      {
        new: true,
        useFindAndModify: false,
      }
    );
    console.log(newTraining);
    res.status(201).json({ message: 'New Teacher Added' });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Error' });
  }
});

// router.patch("/edittrainingteacher", async (req, res) => {
//   let formData = req.body;
//   try {
//     const newClass = await Training_Model.findByIdAndUpdate(
//       { _id: formData._id },
//       formData,
//       { useFindAndModify: false }
//     );
//     res.status(201).json({ message: "New Level Created" });
//   } catch (error) {
//     res.status(404).json({ message: "Error" });
//   }
// });

router.get('/gettrainingteacher/:userEmail', async (req, res) => {
  try {
    const allClasses = await Training_Model.find({
      userEmail: req.params.userEmail,
    });
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

router.post('/deletetrainingteacher/:id', async (req, res) => {
  const { id } = req.params;
  let formData = req.body;
  try {
    const newClass = await Training_Model.find({ _id: id });
    newClass[0].teachers = newClass[0].teachers.filter((t) => t != formData);
    const newTraining = await Training_Model.findByIdAndUpdate(
      id,
      newClass[0],
      {
        new: true,
        useFindAndModify: false,
      }
    );
    res.status(201).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Error' });
  }
});

// ////////////////////////////
// Events
// ///////////////////////////
router.post('/addevent', async (req, res) => {
  const { event, userEmail, userName } = req.body;
  // console.log(req.body);
  // Using nodemailer to send email
  // let transporter = nodemailer.createTransport({
  //   host: "evanalin.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: "sendinvite@evanalin.com",
  //     pass: "f[}4eq-KoFrH",
  //   },
  // });

  // let mailOptions = {
  //   from: "sendinvite@evanalin.com",
  //   to: [req.body.event.email],
  //   subject: "Event Schedule",
  //   text: "Event Schedule",
  //   html: `<h1>An Event ${req.body.event.title} is schedule</h1>
  //           <br />
  //           <h4>
  //             Description: ${req.body.event.description}
  //           </h4>
  //           <h4>
  //             <a href="https://evaliain-video.vercel.app/30d18002-89c3-4e98-ba2b-4541173377af">Click here to join</a>
  //           </h4>
  //           <h5>Please login to the dashboard to check the scheduled events.</h5>
  //     `,
  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log("Message sent: %s", info.messageId);
  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  //   res.render("contact", { msg: "Email has been sent" });
  // });

  // Mail using sendgrid
  try {
    const Event = await Event_Model.create({ ...event, userEmail: userEmail });
    // await Event.save();
    console.log(Event);
    const msg = {
      // to: [req.body.event.email], // Change to your recipient
      to: [req.body.event.email],
      from: 'sendinvite@evanalin.com', // Change to your verified sender
      subject: 'Event Schedule',
      text: 'Event Schedule',
      html: `<h1>An Event ${req.body.event.title} is schedule</h1>
                 <br />
                 <h4>
                   Description: ${req.body.event.description}
                 </h4>
                 <h4>
                   <a href=${Event.Attende}>Click here to join</a>
                 </h4>
                 <h5>Please login to the dashboard to check the scheduled events.</h5>
           `,
    };

    sgMail
      .send(msg)
      .then((response) => {
        console.log('Emailed Sent');
        // console.log(response[0].statusCode);
        // console.log(response[0].headers);
      })
      .catch((error) => {
        console.error(error);
      });
    res.send(Event);
  } catch (err) {
    console.log(err.message);
    res.send(err);
  }
});

router.get('/getevents/:userEmail', async (req, res) => {
  const { userEmail } = req.params;
  try {
    const events = await Event_Model.find({ userEmail: userEmail });
    res.status(201).send(events);
  } catch (err) {
    res.send(err);
  }
});
router.patch('/updateevent', (req, res) => {
  const { event } = req.body;
  Event_Model.findOneAndUpdate(
    { _id: event._id },
    event,
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});
router.delete('/deleteevent/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const events = await Event_Model.deleteOne({ _id: id });

    res.status(204).send(events);
  } catch (err) {
    res.send(err);
  }
});
// ////////////////////////////
// Share Recordings
// ///////////////////////////
router.post('/recordings/shared', async (req, res) => {
  const { recording, shareEmail } = req.body;
  try {
    const newRec = new ShareRecording_Model({
      userEmail: shareEmail,
      recording: recording,
    });
    await newRec.save();
    res.status(201).send({ message: 'Recording Shared' });
  } catch (err) {
    res.send(err);
  }
});
router.get('/recordings/shared/:userEmail', async (req, res) => {
  try {
    const recs = await ShareRecording_Model.find({
      userEmail: req.params.userEmail,
    });
    res.status(200).send(recs);
  } catch (err) {
    res.send(err);
  }
});
//payment
router.post('/charges', async (req, res) => {
  const { email, amount } = req.body;
  console.log(email);
  console.log(amount);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'usd',
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: 'accept_a_payment' },
    receipt_email: email,
  });

  res.send({ cc: paymentIntent['client_secret'] });
});
router.post('/secret', async (req, res) => {
  // const {email, amount} = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1929,
    currency: 'eur',
    payment_method_types: ['ideal'],
  });

  res.json({ client_secret: paymentIntent.client_secret });
});

//prices and plans
router.post('/addplan', async (req, res) => {
  const { price, type, email } = req.body;
  try {
    const newPlan = new Plans_Model({
      email,
      type,
      price,
      active: true,
    });
    await newPlan.save();
    res.status(201).send({ message: 'Plan Added' });
  } catch (err) {
    res.send(err);
  }
});
router.get('/getcurrentplan/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const plan = await Plans_Model.find({
      email,
    });

    res.send(plan);
  } catch (err) {
    res.send(err);
  }
});
router.patch('/updateplan', async (req, res) => {
  const { price, type, email } = req.body;

  Plans_Model.findOneAndUpdate(
    { email: email },
    { price: price, type: type, active: true },
    { runValidators: true },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.status(402).send({ message: 'Plan Updated' });
      }
    }
  );
});
// router.delete("/deleteplan/:id", async (req, res) => {
//   const { id} = req.params;

//  const dat=await Plans_Model.deleteOne({_id:id});
// res.send(dat);

// });
//0 0 * * *
schedule.scheduleJob('0 0 * * *', async () => {
  try {
    const data = await Plans_Model.find({});
    for (let i = 0; i < data.length; i++) {
      if (new Date(data[i].createdAt).getDate() === new Date().getDate()) {
        Plans_Model.findOneAndUpdate(
          { _id: data[i]._id },
          { createdAt: new Date(), active: false },
          { runValidators: true },
          function (err, doc) {}
        );
      }
    }
  } catch (err) {
    console.log(err);
  }
});
//s3 listvideos endpoint
router.get('/listvideos/', aws_con.listVideos);
router.get('/listvideos/:date', aws_con.listVideos);
router.delete('/deletevideo', aws_con.deleteVideo);

//save video url endpoint
router.get('/getVideoUrl/:title', async (req, res) => {
  // console.log();
  // console.log(title);
  try {
    const video = await Video_Model.findOne({ title: req.params.title });
    if (!video) return res.status(404).send({ message: 'Video not found' });
    console.log('video', video);
    res.status(200).send({ message: 'success', data: video });
  } catch (error) {
    res.status(500).send(error);
  }
});
router.post('/setVideoUrl', async (req, res) => {
  const { title, url, uuid } = req.body;
  try {
    const video = await Video_Model.create({ title, url, uuid });
    // await video.save();
    console.log(video);
    res.status(201).send({ message: 'Video Saved', data: video });
  } catch (error) {
    res.status(500).send(error);
  }
});
// ATTENDANCE ROUTES
router.post('/attendance/clock-in', async (req, res) => {
  const { id } = req.body;
  // const isStudentAlreadyPresent = await Attendee_Model.findOne({ userId: id });
  // if (isStudentAlreadyPresent)
  //   return res.status(201).send({
  //     message:
  //       "Student is already present in meeting. Kindly clock out before joining again. ",
  //   });
  try {
    const newAttende = new Attendee_Model({
      userId: id,
      clockInTime: Date.now(),
    });
    await newAttende.save();
    res.status(201).send({ message: 'Attende Joinned In', newAttende });
  } catch (err) {
    res.send(err);
  }
});

router.patch('/attendance/clock-out', async (req, res) => {
  const { id } = req.body;
  const isStudentPresent = await Attendee_Model.findOne({ userId: id });
  if (!isStudentPresent)
    return res.status(201).send({
      message: 'Student is absent in meeting. Kindly clock in. ',
    });
  try {
    const query = { userId: id };
    const attende = await Attendee_Model.findOneAndUpdate(
      query,
      {
        clockOutTime: Date.now(),
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).send({ message: 'Attende Left', attende });
  } catch (err) {
    res.send(err);
  }
});

router.delete('/attendance/delete-record', async (req, res) => {
  console.log(req.body);
  try {
    const deletedUser = await Attendee_Model.deleteOne(req.body);
    // console.log(deletedUser);
  } catch (error) {
    res.status(500).send({ message: 'Server Error' });
  }
});

router.get('/attendance', async (req, res) => {
  try {
    const attendes = await Attendee_Model.find().sort({
      clockInTime: 'desc',
    });
    res.status(200).send({ attendes });
  } catch (err) {
    res.send(err);
  }
});

router.post('/password-reset', async (req, res) => {
  try {
    const user = await User_Model.findOne({ userEmail: req.body.email });
    if (!user)
      return res.status(400).send("user with given email doesn't exist");

    let token = await Token_Model.findOne({ userId: user._id });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString('hex'),
      }).save();
    }

    const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
    await sendEmail(user.userEmail, 'Password reset', link);

    res.send('password reset link sent to your email account');
  } catch (error) {
    res.send('An error occured');
    console.log(error);
  }
});

router.post('/password-reset/:userId/:token', async (req, res) => {
  try {
    const user = await User_Model.findById(req.params.userId);
    if (!user) return res.status(400).send('invalid link or expired');

    const token = await Token_Model.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send('Invalid link or expired');

    user.password = req.body.password;
    await user.save();
    await token.delete();

    res.send('password reset sucessfully.');
  } catch (error) {
    res.send('An error occured');
    console.log(error);
  }
});

module.exports = router;
