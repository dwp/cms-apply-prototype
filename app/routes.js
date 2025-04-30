//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const radioButtonRedirect = require('radio-button-redirect')
const util = require('util')
router.use(radioButtonRedirect)
// Add your routes here






//////////////////////////MCMC SIGN UP ROUTES///////////////////////////

// New routes start

 // do-you-know-your-pin-and-password - october 2022



 router.post('/apply/october2022/mcmc-sign-up/do-you-know-your-pin-and-password', function(req, res) {
    if (req.body['know-pin'] === 'yes') {
      res.redirect('/apply/october2022/1-start-eligibility/urn-rp');
    } else if (req.body['know-pin'] === 'no'){
      res.redirect('/apply/october2022/mcmc-sign-up/reset-pin-and-password');
    } else {
      res.redirect('/apply/october2022/mcmc-sign-up/do-you-know-your-pin-and-password');
    }
     });
  

     router.post('/apply/october2022/mcmc-sign-up/do-you-know-your-pin-and-password-pp', function(req, res) {
        if (req.body['know-pin-pp'] === 'yes') {
          res.redirect('/apply/october2022/1-start-eligibility/urn');
        } else if (req.body['know-pin-pp'] === 'no'){
          res.redirect('/apply/october2022/mcmc-sign-up/reset-pin-and-password-pp');
        } else {
          res.redirect('/apply/october2022/mcmc-sign-up/do-you-know-your-pin-and-password-pp');
        }
         });


// october 2022 routes end

// october 2024 routes start

router.post('/apply/february2025/mcmc-sign-up/do-you-know-your-pin-and-password', function(req, res) {
    if (req.body['know-pin'] === 'yes') {
      res.redirect('/apply/february2025/1-start-eligibility/urn-rp');
    } else if (req.body['know-pin'] === 'no'){
      res.redirect('/apply/february2025/mcmc-sign-up/reset-pin-and-password');
    } else {
      res.redirect('/apply/february2025/mcmc-sign-up/do-you-know-your-pin-and-password');
    }
     });
  

     router.post('/apply/february2025/mcmc-sign-up/do-you-know-your-pin-and-password-pp', function(req, res) {
        if (req.body['know-pin-pp'] === 'yes') {
          res.redirect('/apply/february2025/1-start-eligibility/urn');
        } else if (req.body['know-pin-pp'] === 'no'){
          res.redirect('/apply/february2025/mcmc-sign-up/reset-pin-and-password-pp');
        } else {
          res.redirect('/apply/february2025/mcmc-sign-up/do-you-know-your-pin-and-password-pp');
        }
         });


      
// Old routes end   





























//Auth

router.post('/apply/current/auth/urn', function (req, res) {
    res.redirect('check-age')
});

router.post('/apply/paying-parent/8-other-parent/pp-address-2', function (req, res) {
    res.redirect('/apply/paying-parent/8-other-parent/pp-address-3')
});

router.post('/apply/paying-parent/3-pp-auth-u19/check-age', function (req, res) {
    res.redirect('confirm-age')
});
// router.post('/apply/current/auth/confirm-age', function (req, res) {
//     let applicantDateOfBirthYear = req.session.data['applicant-date-of-birth-year']
//     if (applicantDateOfBirthYear > 1999) {
//         res.redirect('no-fee')
//     } else if (applicantDateOfBirthYear < 2000) {
//         res.redirect('domestic-abuse-question')
//     } else {
//         res.redirect('domestic-abuse-question')
//     }
// });

//paying parent check age
  router.post('/apply/paying-parent/3-pp-auth/check-age', function(req, res) {
  if (req.body['applicant-date-of-birth-year'] > '2002') {``
    res.redirect('/apply/paying-parent/3-pp-auth-u19/confirm-age');
  } else {
    res.redirect('confirm-age');
  }
});

//receiving parent
router.post('/apply/current/auth/check-age', function(req, res) {
  if (req.body['applicant-date-of-birth-year'] > '2002') {``
    res.redirect('/apply/current/auth/confirm-age-u19');
  } else {
    res.redirect('confirm-age');
  }
});

router.post('/apply/current/auth/no-fee-u19', function (req, res) {
    res.redirect('domestic-abuse-question-u19')
});

router.post('/apply/current/auth/tell-someone', function (req, res) {
    res.redirect('/apply/current/applicant/applicant-name')
});


router.post('/apply/current/auth/domestic-abuse-tell-someone', function (req, res) {
    res.redirect('no-fee')
});


router.post('/apply/paying-parent/3-pp-auth-u19/no-fee', function (req, res) {
    res.redirect('domestic-abuse-under-19')
});


router.post('/apply/paying-parent/3-pp-auth-u19/tell-someone', function (req, res) {
    res.redirect('../4-pp-info/pp-name')
});



router.post('/apply/current/auth/no-fee', function (req, res) {
    res.redirect('../applicant/applicant-name')
});

//about applicant
router.post('/apply/current/applicant/applicant-name', function (req, res) {
    res.redirect('nino')
});

router.post('/apply/current/applicant/nino', function (req, res) {
    res.redirect('phone-number')
});

router.post('/apply/current/applicant/phone-number', function (req, res) {
    res.redirect('phone-preference')
});

router.post('/apply/current/applicant/phone-preference', function (req, res) {
    res.redirect('text')
});

router.post('/apply/current/applicant/text', function (req, res) {
    res.redirect('letters')
});

router.post('/apply/current/applicant/letters', function (req, res) {
    res.redirect('letter-address')
});

router.post('/apply/current/applicant/letter-address', function (req, res) {
    res.redirect('is-this-home')
});

router.post('/apply/current/applicant/home-address', function (req, res) {
    res.redirect('home-address-2')
});

router.post('/apply/current/applicant/home-address-2', function (req, res) {
    res.redirect('email-child-maintenace-updates')
});

router.post('/apply/current/applicant/email-child-maintenace-updates', function (req, res) {
    res.redirect('email-confirm')
});

router.post('/apply/current/applicant/check-answers', function (req, res) {
    res.redirect('../child/1-name')
});

//About children
//child one
router.post('/apply/current/child/1-name', function (req, res) {
    res.redirect('1-dob')
});

router.post('/apply/current/child/1-dob', function (req, res) {
    res.redirect('1-birth-certificate')
});

router.post('/apply/current/child/1-birth-certificate', function (req, res) {
    res.redirect('1-child-benefit-V3')
});

router.post('/apply/current/child/1-child-benefit-V3', function (req, res) {
    res.redirect('1-check-answers')
});

router.post('/apply/current/child/1-check-answers', function (req, res) {
    res.redirect('1-add-another-child')
});
// child 2
router.post('/apply/current/child/2-name', function (req, res) {
    res.redirect('2-dob')
});

router.post('/apply/current/child/2-dob', function (req, res) {
    res.redirect('2-birth-certificate')
});

router.post('/apply/current/child/2-birth-certificate', function (req, res) {
    res.redirect('2-child-benefit-V3')
});

router.post('/apply/current/child/2-child-benefit-V3', function (req, res) {
    res.redirect('2-check-answers')
});

router.post('/apply/current/child/2-check-answers', function (req, res) {
    res.redirect('3-add-another-child')
});
// child 3
router.post('/apply/current/child/3-name', function (req, res) {
    res.redirect('3-dob')
});

router.post('/apply/current/child/3-dob', function (req, res) {
    res.redirect('3-birth-certificate')
});

router.post('/apply/current/child/3-birth-certificate', function (req, res) {
    res.redirect('3-child-benefit-V3')
});

router.post('/apply/current/child/3-child-benefit-V3', function (req, res) {
    res.redirect('3-check-answers')
});

router.post('/apply/current/child/3-check-answers', function (req, res) {
    res.redirect('4-add-another-child')
});

// child 4
router.post('/apply/current/child/4-name', function (req, res) {
    res.redirect('4-dob')
});

router.post('/apply/current/child/4-dob', function (req, res) {
    res.redirect('4-birth-certificate')
});

router.post('/apply/current/child/4-birth-certificate', function (req, res) {
    res.redirect('4-child-benefit-V3')
});

router.post('/apply/current/child/4-child-benefit-V3', function (req, res) {
    res.redirect('4-check-answers')
});

router.post('/apply/current/child/4-check-answers', function (req, res) {
    res.redirect('check-answers-all-4')
});

router.post('/apply/current/child/check-answers-all-4', function (req, res) {
    res.redirect('/apply/current/shared-care/1-overnight-stays')
});
//shared care

router.post('/apply/current/shared-care/1-overnight-stays', function (req, res) {
    res.redirect('1-confirm-overnight-stays')
});


router.post('/apply/paying-parent/6-pp-qualifying-children/1-confirm-overnight-stays', function (req, res) {
  var addchild = req.session.data['addchild']
  if (addchild.includes('yes')){
    res.redirect('1-same-arrangement')
  } else if (addchild.includes ('no')){
    res.redirect('2-arrangement-details')
  }
});


router.post('/apply/current/shared-care/1-check-answers-overnights', function (req, res) {
    res.redirect('../service-choice/direct-pay')
});

//service choice

router.post('/apply/current/service-choice/direct-pay-stops-working', function (req, res) {
    res.redirect('pass-bank-info')
});

router.post('/apply/current/service-choice/collect-and-pay', function (req, res) {
    res.redirect('bank-info')
});

router.post('/apply/current/service-choice/bank-info', function (req, res) {
    res.redirect('check-your-answers-bank')
});

router.post('/apply/current/service-choice/check-your-answers-bank', function (req, res) {
    res.redirect('../other-parent/pp-name')
});

router.post('/apply/current/service-choice/check-your-answers', function (req, res) {
    res.redirect('../other-parent/pp-name')
});

//other parent
router.post('/apply/current/other-parent/pp-name', function (req, res) {
    res.redirect('pp-dob')
});



router.post('/apply/current/other-parent/pp-address-2', function (req, res) {
    res.redirect('pp-address-3')
});

router.post('/apply/current/other-parent/pp-previous-address-2', function (req, res) {
    res.redirect('pp-previous-address-3')
});
router.post('/apply/current/other-parent/pp-address-5', function (req, res) {
    res.redirect('pp-address-6')
});


router.post('/apply/current/other-parent/pp-other-info', function (req, res) {
    res.redirect('check-your-answers')
});

router.post('/apply/current/other-parent/check-your-answers', function (req, res) {
    res.redirect('../portal/previous-application')
});

// portal sign up
router.post('/apply/current/portal/create-pin', function (req, res) {
    res.redirect('create-password')
});

router.post('/apply/current/portal/use-old-login', function (req, res) {
    res.redirect('../end/declaration-fee')
});

router.post('/apply/current/portal/create-password', function (req, res) {
    res.redirect('../end/declaration-fee')
});
// end of journey
router.post('/apply/current/end/declaration-fee', function (req, res) {
    res.redirect('payment-details')
});

router.post('/apply/current/end/payment-details', function (req, res) {
    res.redirect('submitted-fee')
});



//////////////////////////Current journey//////////////////////





//////////////////////August2020////////////////////////

router.post('/apply/current/applicant/do-you-want-confirmation', function (req, res) {
    res.redirect('check-answers')
});

router.post('/apply/august2020/confirmation-email/do-you-want-confirmation', function (req, res) {
    res.redirect('declaration-fee')
});
router.post('/apply/august2020/confirmation-email/declaration-fee', function (req, res) {
    res.redirect('payment-details')
});

router.post('/apply/august2020/confirmation-email/payment-details', function (req, res) {
    res.redirect('submitted-fee')
});



////////////////November2020/////////////////////////

router.post('/apply/november2020/shared-care/1-shared-care', function (req, res) {
    res.redirect('1-arrangement')
});

router.post('/apply/november2020/shared-care/2-shared-care', function (req, res) {
    res.redirect('2-arrangement')
});



router.post('/apply/november2020/exit-survey/application-sent-3', function (req, res) {
    res.redirect('exit-survey')
});

router.post('/apply/november2020/exit-survey/exit-survey', function (req, res) {
    res.redirect('exit-survey-sent')
});

router.post('/apply/november2020/special-requirements/different-formats', function (req, res) {
    res.redirect('phone-number')
});

router.post('/apply/november2020/nino/nino', function (req, res) {
    res.redirect('confirm-nino')
});

////////////////December2020/////////////////////////

router.post('/apply/december2020/lang-pref/home-address', function (req, res) {
    res.redirect('home-address-2')
});

router.post('/apply/december2020/lang-pref/home-address-2', function (req, res) {
    res.redirect('lang-pref')
});

router.post('/apply/december2020/lang-pref/lang-pref', function (req, res) {
    res.redirect('lang-pref-error')
});

router.post('/apply/december2020/lang-pref/lang-pref-error', function (req, res) {
    res.redirect('check-answers')
});


router.post('/apply/december2020/paying-parent/pp-other-children/other-children', function (req, res) {
    res.redirect('child-1-name')
});

router.post('/apply/december2020/paying-parent/pp-other-children/child-1-name', function (req, res) {
    res.redirect('child-1-dob')
});

router.post('/apply/december2020/paying-parent/pp-other-children/child-1-dob', function (req, res) {
    res.redirect('roc-query')
});

router.post('/apply/december2020/paying-parent/pp-other-children/child-1-address', function (req, res) {
    res.redirect('child-1-benefit-2')
});

router.post('/apply/december2020/paying-parent/pp-other-children/check-ans-roc', function (req, res) {
    res.redirect('add-other-child')
});

router.post('/apply/december2020/paying-parent/pp-other-children/check-ans-cifba', function (req, res) {
    res.redirect('add-other-child')
});

//////////////////January2021/////////////////

router.post('/apply/paying-parent/1-start/pp-welcome', function (req, res) {
    res.redirect('../2-eligibility/live-in-uk')
});

router.post('/apply/paying-parent/3-pp-auth/urn', function (req, res) {
    res.redirect('check-age')
});

router.post('/apply/paying-parent/3-pp-auth/check-age', function (req, res) {
    res.redirect('confirm-age')
});

router.post('/apply/paying-parent/3-pp-auth/tell-someone', function (req, res) {
    res.redirect('told-someone')
});

router.post('/apply/paying-parent/3-pp-auth/no-fee', function (req, res) {
    res.redirect('../4-pp-info/pp-name')
});

router.post('/apply/paying-parent/4-pp-info/pp-nino', function (req, res) {
    res.redirect('pp-confirm-nino')
});

router.post('/apply/paying-parent/4-pp-info/pp-postal', function (req, res) {
    res.redirect('pp-postal-2')
});

router.post('/apply/paying-parent/4-pp-info/pp-postal-2', function (req, res) {
    res.redirect('pp-home')
});

router.post('/apply/paying-parent/4-pp-info/pp-home-2', function (req, res) {
    res.redirect('pp-home-3')
});

router.post('/apply/paying-parent/4-pp-info/pp-home-3', function (req, res) {
    res.redirect('check-ans')
});

router.post('/apply/paying-parent/4-pp-info/pp-address-1', function (req, res) {
    res.redirect('check-ans')
});

router.post('/apply/paying-parent/4-pp-info/check-ans', function (req, res) {
    res.redirect('../5-pp-income/1-income-query')
});


router.post('/apply/paying-parent/5-pp-income/1-income-query', function (req, res) {
  var income = req.session.data['income']
  if (income.includes('benefits')){
    res.redirect('universal-credit')
  } else if (income.includes ('employment')){
    res.redirect('3-job-details')
  } else if (income.includes ('self-employment')){
   res.redirect('4-company-details')
} else {
  res.redirect('/apply/paying-parent/6-pp-qualifying-children/version2/child-section-start')
}
});



router.post('/apply/paying-parent/5-pp-income/annual-income-amount', function (req, res) {
    res.redirect('3-add-job')
});




router.post('/apply/paying-parent/5-pp-income/2-benefit-list', function (req, res) {
  var benefit = req.session.data['benefit']
  if (benefit.includes('income-support')){
    res.redirect('2-shared-benefit')
  } else if (benefit.includes ('jobseekers-allowance-2')){
    res.redirect('2-shared-benefit')
  } else if (benefit.includes ('income-related-employment')){
    res.redirect('2-shared-benefit')
  } else if (benefit.includes ('pension-credit')){
    res.redirect('2-shared-benefit')
  } else if (benefit.includes ('armed-forces')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('bereavement-allowance')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('carers-allowance')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('incapacity-benefit')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('jobseekers-allowance')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('maternity-allowance')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('non-uk')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('skillseekers-training')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('state-pension')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('training-allowance')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('universal-credit')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('war-disablement-pension')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('civil-partner-pension')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('widows-pension')){
    res.redirect('solo-check-your-ans')
  } else if (benefit.includes ('widow-parent')){
    res.redirect('solo-check-your-ans')
} else {
  res.redirect('solo-check-your-ans')
}
});

router.post('/apply/paying-parent/5-pp-income/2-shared-benefit', function (req, res) {
  var shared = req.session.data['shared']
  if (shared.includes('income')){
    res.redirect('2-partner-name')
  } else if (shared.includes ('pension-credit')){
    res.redirect('2-partner-name')
  } else if (shared.includes ('jobseekers-income-based')){
    res.redirect('2-partner-name')
  } else if (shared.includes ('income-support-allowance')){
    res.redirect('2-partner-name')
} else {
  res.redirect('solo-check-your-ans')
}
});


router.post('/apply/paying-parent/5-pp-income/3-add-job', function (req, res) {
  var income = req.session.data['income']
  if (income.includes('self-employment')){
    res.redirect('4-company-details')
} else {
  res.redirect('5-pension-query')
}
});

router.post('/apply/paying-parent/5-pp-income/3-check-job-ans', function (req, res) {
  var income = req.session.data['income']
  if (income.includes('self-employment')){
    res.redirect('4-company-details')
} else {
  res.redirect('5-pension-query')
}
});




router.post('/apply/paying-parent/5-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/paying-parent/5-pp-income/2-partner-dob', function (req, res) {
  var income = req.session.data['income']
  if (income.includes('employment')){
    res.redirect('3-job-details')
  } else if (income.includes ('self-employment')){
    res.redirect('4-company-details')
} else {
  // res.redirect('5-pension-query')
  res.redirect('overall-check-your-ans')
}
});



// router.post('/apply/paying-parent/5-pp-income/2-partner-dob', function (req, res) {
//     res.redirect('additional-income')
// });

// router.post('/apply/paying-parent/5-pp-income/2-check-benefit-ans', function (req, res) {
//     res.redirect('3-job-details')
// });

router.post('/apply/paying-parent/5-pp-income/2-check-benefit-ans', function (req, res) {
  var income = req.session.data['income']
  if (income.includes('employment')){
    res.redirect('3-job-details')
  } else if (income.includes ('self-employment')){
    res.redirect('4-company-details')
} else {
  // res.redirect('5-pension-query')
  res.redirect('additional-income')
}
});


router.post('/apply/paying-parent/5-pp-income/2-check-benefit-ans2', function (req, res) {
  var income = req.session.data['income']
  if (income.includes('employment')){
    res.redirect('3-job-details')
  } else if (income.includes ('self-employment')){
    res.redirect('4-company-details')
  } else {
    res.redirect('additional-income')
  }
});

router.post('/apply/paying-parent/5-pp-income/overall-check-your-ans', function (req, res) {
  var income = req.session.data['income']
  if (income.includes('employment')){
    res.redirect('3-job-details')
  } else if (income.includes ('self-employment')){
    res.redirect('4-company-details')
  } else {
    res.redirect('/apply/paying-parent/6-pp-qualifying-children/version2/child-section-start')
  }
});


// router.post('/apply/paying-parent/5-pp-income/overall-check-your-ans', function (req, res) {
//     res.redirect('/apply/paying-parent/6-pp-qualifying-children/version2/1-name')
// });


router.post('/apply/paying-parent/5-pp-income/3-job-details', function (req, res) {
    res.redirect('annual-income')
});

router.post('/apply/paying-parent/5-pp-income/3-often-paid', function (req, res) {
    res.redirect('3-work-hours')
});

router.post('/apply/paying-parent/5-pp-income/3-fixed-income', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/paying-parent/5-pp-income/last-3-income', function (req, res) {
    res.redirect('last-3-income-amount')
});

router.post('/apply/paying-parent/5-pp-income/last-income', function (req, res) {
    res.redirect('last-income-amount')
});

router.post('/apply/paying-parent/5-pp-income/last-3-income-amount', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/paying-parent/5-pp-income/last-income-amount', function (req, res) {
    res.redirect('3-add-job')
});



router.post('/apply/paying-parent/5-pp-income/3-flexible-income', function (req, res) {
    res.redirect('3-add-job')
});

//NEW FRIDAY 8th OCTO

router.post('/apply/paying-parent/5-pp-income/additional-income', function (req, res) {
    res.redirect('overall-check-your-ans')
});




router.post('/apply/paying-parent/5-pp-income/4-company-details', function (req, res) {
    res.redirect('4-add-company')
});

router.post('/apply/paying-parent/5-pp-income/4-self-declaration', function (req, res) {
    res.redirect('4-add-company')
});

router.post('/apply/paying-parent/5-pp-income/4-check-company-ans', function (req, res) {
    res.redirect('5-pension-query')
});

// router.post('/apply/paying-parent/5-pp-income/5-pension-details', function (req, res) {
//     res.redirect('5-pension-amount')
// });

router.post('/apply/paying-parent/5-pp-income/5-pension-details', function (req, res) {
  var pensiontype = req.session.data['pensiontype']
  if (pensiontype.includes('private')){
    res.redirect('5-private-pension')
  } else if (pensiontype.includes ('workplace')){
    res.redirect('overall-check-your-ans2')
  }
  else {
    res.redirect('additional-income2')
  }
});

router.post('/apply/paying-parent/5-pp-income/5-private-pension', function (req, res) {
    res.redirect('overall-check-your-ans2')
});



router.post('/apply/paying-parent/5-pp-income/5-pension-amount', function (req, res) {
    res.redirect('5-add-pension')
});

router.post('/apply/paying-parent/5-pp-income/5-check-pension-ans', function (req, res) {
    res.redirect('additional-income2')
});

router.post('/apply/paying-parent/5-pp-income/additional-income2', function (req, res) {
    res.redirect('overall-check-your-ans2')
});

router.post('/apply/paying-parent/5-pp-income/overall-check-your-ans2', function (req, res) {
    res.redirect('/apply/paying-parent/6-pp-qualifying-children/version2/child-section-start')
});

router.post('/apply/paying-parent/8-other-children/2-child-1-name', function (req, res) {
    res.redirect('2-child-1-dob')
});

router.post('/apply/paying-parent/8-other-children/child2/2-child-1-name', function (req, res) {
    res.redirect('2-child-1-dob')
});

router.post('/apply/paying-parent/8-other-children/cifba-child-name-1', function (req, res) {
    res.redirect('cifba-child-dob-1')
});

router.post('/apply/paying-parent/8-other-children/cifba2/cifba-child-name-1', function (req, res) {
    res.redirect('cifba-child-dob-1')
});

router.post('/apply/paying-parent/8-other-children/2-child-1-dob', function (req, res) {
    res.redirect('3-child-1-benefit')
});

router.post('/apply/paying-parent/8-other-children/cifba2/2-child-1-dob', function (req, res) {
    res.redirect('3-child-1-benefit')
});

router.post('/apply/paying-parent/8-other-children/child2/2-child-1-dob', function (req, res) {
    res.redirect('3-child-1-benefit')
});

router.post('/apply/paying-parent/8-other-children/cifba-child-dob-1', function (req, res) {
    res.redirect('cifba-child-address-1')
});

router.post('/apply/paying-parent/8-other-children/cifba2/cifba-child-dob-1', function (req, res) {
    res.redirect('cifba-child-address-1')
});

router.post('/apply/paying-parent/8-other-children/3-child-1-benefit', function (req, res) {
    res.redirect('3-check-roc-ans')
});

router.post('/apply/paying-parent/8-other-children/child2/3-child-1-benefit', function (req, res) {
    res.redirect('3-check-roc-ans')
});

router.post('/apply/paying-parent/8-other-children/cifba-child-address-1', function (req, res) {
    res.redirect('cifba-child-pay-1')
});

router.post('/apply/paying-parent/8-other-children/cifba2/cifba-child-address-1', function (req, res) {
    res.redirect('cifba-child-pay-1')
});

router.post('/apply/paying-parent/8-other-children/cifba-child-pay-1', function (req, res) {
    res.redirect('cifba-child-benefit-1')
});

router.post('/apply/paying-parent/8-other-children/cifba2/cifba-child-pay-1', function (req, res) {
    res.redirect('cifba-child-benefit-1')
});


router.post('/apply/paying-parent/8-other-children/4-child-1-support', function (req, res) {
    res.redirect('4-child-1-benefit')
});

router.post('/apply/paying-parent/8-other-children/4-child-1-benefit', function (req, res) {
    res.redirect('cifba-check-answers')
});

router.post('/apply/paying-parent/8-other-children/cifba-check-answers', function (req, res) {
    res.redirect('cifba-add-child')
});

router.post('/apply/paying-parent/8-other-children/cifba2/cifba-check-answers', function (req, res) {
    res.redirect('cifba-add-child')
});

router.post('/apply/paying-parent/5-pp-income/2-shared-benefit', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply/paying-parent/5-pp-income/2-shared-benefit-single', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply/paying-parent/8-other-children/cifba-check-answers', function(req, res) {
  if (req.body['other-children'] === 'no') {
    res.redirect('add-child');
  } else {
    res.redirect('/apply/paying-parent/9-pp-existing-case/previous-application');
  }
});

router.post('/apply/paying-parent/8-other-children/3-check-roc-ans', function (req, res) {
    res.redirect('roc-add-child')
});

router.post('/apply/paying-parent/8-other-children/child2/3-check-roc-ans', function (req, res) {
    res.redirect('roc-add-child')
});

//section 5 pp
router.post('/apply/paying-parent/6-pp-qualifying-children/1-name', function (req, res) {
    res.redirect('1-dob')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/child-section-start', function (req, res) {
    res.redirect('1-name')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/child-section-start', function (req, res) {
    res.redirect('1-dob')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/1-dob', function (req, res) {
    res.redirect('1-birth-certificate')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/1-child-benefit-V3', function (req, res) {
    res.redirect('1-overnight-frequency')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/1-overnight-frequency', function (req, res) {
    res.redirect('1-check-your-answers-small')
});
router.post('/apply/paying-parent/6-pp-qualifying-children/version2/1-check-your-answers-small', function (req, res) {
    res.redirect('1-add-another-child')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/1-add-another-child', function (req, res) {
  var addchild = req.session.data['addchild']
  if (addchild.includes('yes')){
    res.redirect('1-name')
  } else if (addchild.includes ('no')){
    res.redirect('1-any-private-arrangement')
  }
});

router.post('/apply/paying-parent/6-pp-qualifying-children/1-dob', function (req, res) {
    res.redirect('1-birth-certificate')
});
router.post('/apply/paying-parent/6-pp-qualifying-children/1-birth-certificate', function (req, res) {
    res.redirect('1-check-answers')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/1-check-answers', function (req, res) {
    res.redirect('1-add-another-child')
});

//additional child
router.post('/apply/paying-parent/6-pp-qualifying-children/2-name', function (req, res) {
    res.redirect('2-dob')
});


router.post('/apply/paying-parent/6-pp-qualifying-children/2-dob', function (req, res) {
    res.redirect('2-birth-certificate')
});
router.post('/apply/paying-parent/6-pp-qualifying-children/2-birth-certificate', function (req, res) {
    res.redirect('2-check-answers')
});
router.post('/apply/paying-parent/6-pp-qualifying-children/2-check-answers', function (req, res) {
    res.redirect('2-add-another-child')
});

//additional child (3rd)
router.post('/apply/paying-parent/6-pp-qualifying-children/3-name', function (req, res) {
    res.redirect('3-dob')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/3-dob', function (req, res) {
    res.redirect('3-birth-certificate')
});
router.post('/apply/paying-parent/6-pp-qualifying-children/3-birth-certificate', function (req, res) {
    res.redirect('3-check-answers')
});
router.post('/apply/paying-parent/6-pp-qualifying-children/3-check-answers', function (req, res) {
    res.redirect('3-add-another-child')
});

//additional child (4th)
router.post('/apply/paying-parent/6-pp-qualifying-children/4-name', function (req, res) {
    res.redirect('4-dob')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/4-dob', function (req, res) {
    res.redirect('4-birth-certificate')
});
router.post('/apply/paying-parent/6-pp-qualifying-children/4-birth-certificate', function (req, res) {
    res.redirect('4-check-answers')
});
router.post('/apply/paying-parent/6-pp-qualifying-children/4-check-answers', function (req, res) {
    res.redirect('4-add-another-child')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/2-arrangement-details', function (req, res) {
    res.redirect('/apply/paying-parent/7-service-types/direct-pay')
});



router.post('/apply/paying-parent/6-pp-qualifying-children/1-check-answers-overnights', function (req, res) {
    res.redirect('/apply/paying-parent/7-service-types/direct-pay')
});

//pp section 6
router.post('/apply/paying-parent/7-service-types/direct-pay', function (req, res) {
    res.redirect('direct-pay-stops-working')
});

router.post('/apply/paying-parent/7-service-types/direct-pay-stops-working', function (req, res) {
    res.redirect('bank-details')
});

router.post('/apply/paying-parent/7-service-types/bank-details', function (req, res) {
    res.redirect('pass-bank-details')
});

router.post('/apply/paying-parent/7-service-types/pass-bank-details', function (req, res) {
    res.redirect('collect-and-pay')
});

router.post('/apply/paying-parent/7-service-types/collect-and-pay', function (req, res) {
    res.redirect('bank-account-details')
});

router.post('/apply/paying-parent/7-service-types/bank-account-details', function (req, res) {
    res.redirect('bank-info')
});

router.post('/apply/paying-parent/7-service-types/bank-info', function (req, res) {
    res.redirect('review-service-details')
});

router.post('/apply/paying-parent/7-service-types/check-your-answers', function (req, res) {
    res.redirect('/apply/paying-parent/8-other-parent/pp-name')
});


//pp section 7 - other parent
router.post('/apply/paying-parent/8-other-parent/pp-name', function (req, res) {
    res.redirect('pp-dob')
});

router.post('/apply/paying-parent/8-other-parent/pp-dob', function (req, res) {
    res.redirect('pp-nino')
});

router.post('/apply/paying-parent/8-other-parent/pp-nino', function (req, res) {
    res.redirect('pp-phone')
});

router.post('/apply/paying-parent/8-other-parent/pp-phone', function (req, res) {
    res.redirect('pp-live-with-other-parent')
});

router.post('/apply/paying-parent/8-other-parent/pp-current-town', function (req, res) {
    res.redirect('pp-current-area')
});

router.post('/apply/paying-parent/8-other-parent/pp-address-1', function (req, res) {
    res.redirect('pp-address-1-details')
});

router.post('/apply/paying-parent/8-other-parent/pp-postal', function (req, res) {
    res.redirect('pp-postal-2')
});

router.post('/apply/paying-parent/8-other-parent/pp-postal-2', function (req, res) {
    res.redirect('pp-address-1-details')
});

router.post('/apply/paying-parent/8-other-parent/pp-current-area', function (req, res) {
    res.redirect('pp-previous-address')
});

router.post('/apply/paying-parent/8-other-parent/pp-address-5', function (req, res) {
    res.redirect('pp-address-6')
});

router.post('/apply/paying-parent/8-other-parent/pp-previous-town', function (req, res) {
    res.redirect('pp-previous-area')
});

router.post('/apply/paying-parent/8-other-parent/pp-previous-address-2', function (req, res) {
    res.redirect('pp-previous-address-3')
});



router.post('/apply/paying-parent/8-other-parent/pp-other-info', function (req, res) {
    res.redirect('check-your-answers')
});

router.post('/apply/paying-parent/8-other-parent/check-your-answers', function (req, res) {
    res.redirect('/apply/paying-parent/9-pp-existing-case/previous-application')
});

//pp section 9 - existing cases
router.post('/apply/paying-parent/9-pp-existing-case/create-pin', function (req, res) {
    res.redirect('../../january2021/diversity/extra-question')
});

router.post('/apply/paying-parent/9-pp-existing-case/create-password', function (req, res) {
    res.redirect('create-pin')
});
router.post('/apply/paying-parent/9-pp-existing-case/create-pin2', function (req, res) {
    res.redirect('create-password2')
});
router.post('/apply/paying-parent/9-pp-existing-case/create-password2', function (req, res) {
    res.redirect('../../january2021/diversity/extra-question')
});

router.post('/apply/paying-parent/9-pp-existing-case/manage-online2', function (req, res) {
    res.redirect('../../january2021/diversity/extra-question')
});

router.post('/apply/paying-parent/9-pp-existing-case/use-old-login', function (req, res) {
    res.redirect('../../january2021/diversity/extra-question')
});


router.post('/apply/january2021/diversity/declaration', function (req, res) {
    res.redirect('/apply/paying-parent/10-confirmation-email/submitted-fee')
});




//pp section 10
router.post('/apply/paying-parent/10-confirmation-email/declaration-fee', function (req, res) {
    res.redirect('submitted-fee')
});


//new qualifying children section version 2
router.post('/apply/paying-parent/6-pp-qualifying-children/version2/1-name', function (req, res) {
    res.redirect('1-dob')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/1-dob', function (req, res) {
    res.redirect('where-child-lives')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/child-address', function (req, res) {
    res.redirect('child-pay')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/child-pay', function (req, res) {
    res.redirect('child-benefit')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/1-check-answers', function (req, res) {
    res.redirect('1-add-another-child')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/2-name', function (req, res) {
    res.redirect('2-dob')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/2-dob', function (req, res) {
    res.redirect('child-address')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/2-check-answers', function (req, res) {
    res.redirect('2-add-another-child')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/overall-cya', function (req, res) {
    res.redirect('/apply/paying-parent/7-service-types/direct-pay')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/2-check-your-answers-private', function (req, res) {
    res.redirect('/apply/paying-parent/6-pp-qualifying-children/version2/2-add-another-child-private')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/3-name', function (req, res) {
    res.redirect('/apply/paying-parent/6-pp-qualifying-children/version2/3-dob')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/3-dob', function (req, res) {
    res.redirect('/apply/paying-parent/6-pp-qualifying-children/version2/3-live-with-child-benefit')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/3-live-with-child-benefit', function (req, res) {
    res.redirect('/apply/paying-parent/6-pp-qualifying-children/version2/3-child-benefit')
});

router.post('/apply/paying-parent/6-pp-qualifying-children/version2/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/paying-parent/6-pp-qualifying-children/version2/3-add-another-child-roc')
});





//Webchat
router.post('/webchat/register', function (req, res) {
    res.redirect('chatrequested')
});

router.post('/webchat/chat-1', function (req, res) {
    res.redirect('chat-2')
});


//February 2022 - routing
//Section 1: Start & Eligibility
//All Routing is on each page apart from URN -> Section 2
router.post('/apply/february2022PP/1-start-eligibility/urn', function (req, res) {
    res.redirect('/apply/february2022PP/2-fees/check-age')
});

//Section 2: Fees
//paying parent check age
router.post('/apply/february2022PP/2-fees/check-age', function(req, res) {
    if (req.body['applicant-date-of-birth-year'] > '2002') {``
      res.redirect('/apply/february2022PP/2-fees/confirm-age-under-19');
    } else {
      res.redirect('confirm-age');
    }
  });

router.post('/apply/february2022PP/2-fees/no-fee-under-19', function (req, res) {
    res.redirect('/apply/february2022PP/2-fees/domestic-abuse-under-19')
});

router.post('/apply/february2022PP/2-fees/tell-someone-under-19', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/pp-name')
});

router.post('/apply/february2022PP/2-fees/tell-someone', function (req, res) {
    res.redirect('/apply/february2022PP/2-fees/told-someone')
});

router.post('/apply/february2022PP/2-fees/no-fee', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/pp-name')
});

//Section 3: Applicant Info
router.post('/apply/february2022PP/3-applicant-info/pp-name', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/pp-nino')
});

router.post('/apply/february2022PP/3-applicant-info/pp-nino', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/pp-confirm-nino')
});

router.post('/apply/february2022PP/3-applicant-info/pp-confirm-nino', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/contact-you')
});

router.post('/apply/february2022PP/3-applicant-info/pp-confirm-nino', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/equality/extra-question')
});

router.post('/apply/february2022PP/3-applicant-info/pp-postal', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/pp-postal-2')
});

router.post('/apply/february2022PP/3-applicant-info/pp-postal-2', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/pp-home')
});

router.post('/apply/february2022PP/3-applicant-info/pp-address-1', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/check-ans')
});

router.post('/apply/february2022PP/3-applicant-info/pp-home-2', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/pp-home-3')
});

router.post('/apply/february2022PP/3-applicant-info/pp-home-3', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/pp-address-1')
});

router.post('/apply/february2022PP/3-applicant-info/check-ans', function (req, res) {
    res.redirect('/apply/february2022PP/4-pp-income/1-income-query')
});

//Section 4  PP Income


router.post('/apply/february2022PP/4-pp-income/universal-credit', function (req, res) {
    res.redirect('/apply/february2022PP/4-pp-income/2-benefit-list')
});

router.post('/apply/february2022PP/4-pp-income/1-income-query', function (req, res) {
    var income = req.session.data['income']
    if (income.includes('benefits')){
      res.redirect('universal-credit')
    } else if (income.includes ('employment')){
      res.redirect('3-job-details')
    } else if (income.includes ('self-employment')){
     res.redirect('4-company-details')
  } else {
    res.redirect('/apply/february2022PP/5-all-children/child-section-start')
  }
  });

  router.post('/apply/february2022PP/4-pp-income/2-benefit-list', function (req, res) {
    var benefit = req.session.data['benefit']
    if (benefit.includes('income-support')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('jobseekers-allowance-2')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('income-related-employment')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('pension-credit')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('armed-forces')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('bereavement-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('carers-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('incapacity-benefit')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('jobseekers-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('maternity-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('non-uk')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('skillseekers-training')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('state-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('training-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('universal-credit')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('war-disablement-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('civil-partner-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('widows-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('widow-parent')){
      res.redirect('solo-check-your-ans')
  } else {
    res.redirect('solo-check-your-ans')
  }
  });

  router.post('/apply/february2022PP/4-pp-income/2-shared-benefit', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply/february2022PP/4-pp-income/2-shared-benefit-single', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply/february2022PP/4-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/february2022PP/4-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/february2022PP/4-pp-income/2-partner-dob', function (req, res) {
    res.redirect('overall-check-your-ans')
});

router.post('/apply/february2022PP/4-pp-income/3-job-details', function (req, res) {
    res.redirect('annual-income')
});

router.post('/apply/february2022PP/4-pp-income/3-fixed-income', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/february2022PP/4-pp-income/annual-income-amount', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/february2022PP/4-pp-income/4-company-details', function (req, res) {
    res.redirect('4-add-company')
});

router.post('/apply/february2022PP/4-pp-income/5-pension-details', function (req, res) {
    var pensiontype = req.session.data['pensiontype']
    if (pensiontype.includes('private')){
      res.redirect('5-private-pension')
    } else if (pensiontype.includes ('workplace')){
      res.redirect('overall-check-your-ans2')
    }
    else {
      res.redirect('additional-income2')
    }
  });


router.post('/apply/february2022PP/4-pp-income/5-private-pension', function (req, res) {
    res.redirect('overall-check-your-ans2b')
});

router.post('/apply/february2022PP/4-pp-income/overall-check-your-ans2', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/child-section-start')
});

router.post('/apply/february2022PP/4-pp-income/overall-check-your-ans2b', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/child-section-start')
});

router.post('/apply/february2022PP/4-pp-income/overall-check-your-ans', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/child-section-start')
});

router.post('/apply/february2022PP/4-pp-income/solo-check-your-ans', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/child-section-start')
});

//Section 5: All Children
router.post('/apply/february2022PP/5-all-children/child-section-start', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/1-name')
});

router.post('/apply/february2022PP/5-all-children/1-name', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/1-dob')
});

router.post('/apply/february2022PP/5-all-children/1-dob', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/1-birth-certificate')
});

router.post('/apply/february2022PP/5-all-children/1-birth-certificate', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/1-overnight-frequency')
});

router.post('/apply/february2022PP/5-all-children/1-overnight-frequency', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/1-check-your-answers-small')
});

router.post('/apply/february2022PP/5-all-children/1-check-your-answers-small', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/1-add-another-child')
});

router.post('/apply/february2022PP/5-all-children/1-add-another-child', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/1-any-private-arrangement')
});

router.post('/apply/february2022PP/5-all-children/1-any-private-arrangement', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/2-name')
});

router.post('/apply/february2022PP/5-all-children/2-name', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/2-dob')
});

router.post('/apply/february2022PP/5-all-children/2-dob', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/child-address')
});

router.post('/apply/february2022PP/5-all-children/child-address', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/child-pay')
});

router.post('/apply/february2022PP/5-all-children/child-pay', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/child-benefit')
});

router.post('/apply/february2022PP/5-all-children/child-pay', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/2-check-your-answers-private')
});

router.post('/apply/february2022PP/5-all-children/2-check-your-answers-private', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/2-add-another-child-private')
});

router.post('/apply/february2022PP/5-all-children/2-add-another-child-private', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/3-children-live-with')
});

router.post('/apply/february2022PP/5-all-children/3-name', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/3-dob')
});

router.post('/apply/february2022PP/5-all-children/3-dob', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/3-live-with-child-benefit')
});

router.post('/apply/february2022PP/5-all-children/3-child-benefit', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/3-check-your-answers-roc')
});

router.post('/apply/february2022PP/5-all-children/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/3-add-another-child-roc')
});

router.post('/apply/february2022PP/5-all-children/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/february2022PP/5-all-children/overall-cya')
});

router.post('/apply/february2022PP/5-all-children/overall-cya', function (req, res) {
    res.redirect('/apply/february2022PP/6-service-types/direct-pay')
});



//Section 6: Service Types
router.post('/apply/february2022PP/6-service-types/direct-pay-stops-working', function (req, res) {
    res.redirect('/apply/february2022PP/6-service-types/select-payment-frequency')
});


router.post('/apply/february2022PP/6-service-types/check-your-answers-collect-pay', function (req, res) {
    res.redirect('/apply/february2022PP/7-other-parent/pp-name')
});
router.post('/apply/february2022PP/6-service-types/check-your-answers-direct-pay', function (req, res) {
    res.redirect('/apply/february2022PP/7-other-parent/pp-name')
});

router.post('/apply/february2022PP/6-service-types/check-your-answers-collect-pay-doe', function (req, res) {
    res.redirect('/apply/february2022PP/7-other-parent/pp-name')
});

//Section 7: Other Parent
router.post('/apply/february2022PP/7-other-parent/pp-name', function (req, res) {
    res.redirect('/apply/february2022PP/7-other-parent/pp-dob')
});

router.post('/apply/february2022PP/7-other-parent/pp-nino', function (req, res) {
    res.redirect('pp-phone')
});

router.post('/apply/february2022PP/7-other-parent/pp-phone', function (req, res) {
    res.redirect('pp-live-with-other-parent')
});

router.post('/apply/february2022PP/7-other-parent/pp-postal', function (req, res) {
    res.redirect('pp-postal-2')
});

router.post('/apply/february2022PP/7-other-parent/pp-postal-2', function (req, res) {
    res.redirect('pp-address-1-details')
});

router.post('/apply/february2022PP/7-other-parent/pp-address-2', function (req, res) {
    res.redirect('pp-address-3')
});

router.post('/apply/february2022PP/7-other-parent/pp-address-3', function (req, res) {
    res.redirect('pp-other-info')
});

router.post('/apply/february2022PP/7-other-parent/pp-address-5', function (req, res) {
    res.redirect('pp-address-6')
});

router.post('/apply/february2022PP/7-other-parent/pp-other-info', function (req, res) {
    res.redirect('check-your-answers')
});

router.post('/apply/february2022PP/7-other-parent/check-your-answers', function (req, res) {
    res.redirect('../8-existing-cases/previous-application')
});

//Section 8: Existing Questions
router.post('/apply/february2022PP/8-existing-cases/use-old-login', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});

router.post('/apply/february2022PP/8-existing-cases/create-password', function (req, res) {
    res.redirect('create-pin')
});

router.post('/apply/february2022PP/8-existing-cases/create-pin', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});

router.post('/apply/february2022PP/8-existing-cases/create-pin2', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});

//Section 9: Confirmation
router.post('/apply/february2022PP/9-confirmation/declaration-fee', function (req, res) {
    res.redirect('submitted-fee')
});

//Spike - Removal of fee
router.post('/apply/february2022PP/spike-removal-of-fee/urn', function (req, res) {
    res.redirect('pp-name')
});

router.post('/apply/february2022PP/spike-removal-of-fee/check-age', function (req, res) {
    res.redirect('pp-nino')
});

router.post('/apply/february2022PP/spike-removal-of-fee/pp-nino', function (req, res) {
    res.redirect('extra-question')
});



router.post('/apply/february2022PP/spike-removal-of-fee/tell-someone', function (req, res) {
    res.redirect('pp-name')
});

router.post('/apply/february2022PP/spike-removal-of-fee/pp-name', function (req, res) {
    res.redirect('check-age')
});

//September 2022 - Prototype version
//Section 1: Start and Eligibility
router.post('/apply/september2022/1-start-eligibility/welcome', function (req, res) {
    res.redirect('intro')
});


router.post('/apply/september2022/1-start-eligibility/urn', function (req, res) {
    res.redirect('../3-applicant-info/domestic-abuse-under-19')
});

router.post('/apply/september2022/3-applicant-info/tell-someone', function (req, res) {
    res.redirect('pp-name')
});

router.post('/apply/september2022/3-applicant-info/pp-dob', function (req, res) {
    res.redirect('pp-nino')
});

router.post('/apply/september2022/3-applicant-info/pp-nino', function (req, res) {
    res.redirect('../3-equality/equality-question')
});


router.post('/apply/september2022/3-contact-info/pp-postal', function (req, res) {
    res.redirect('/apply/september2022/3-contact-info/pp-postal-2')
});

router.post('/apply/september2022/3-contact-info/pp-postal-2', function (req, res) {
    res.redirect('/apply/february2022PP/3-applicant-info/pp-home')
});

router.post('/apply/september2022/3-contact-info/pp-address-1', function (req, res) {
    res.redirect('/apply/september2022/3-contact-info/check-ans')
});

router.post('/apply/september2022/3-contact-info/pp-home-2', function (req, res) {
    res.redirect('/apply/september2022/3-contact-info/pp-home-3')
});

router.post('/apply/september2022/3-contact-info/pp-home-3', function (req, res) {
    res.redirect('/apply/september2022/3-contact-info/pp-address-1')
});

router.post('/apply/september2022/3-contact-info/check-ans', function (req, res) {
    res.redirect('/apply/september2022/4-pp-income/1-income-query')
});

router.post('/apply/september2022/4-pp-income/1-income-query', function (req, res) {
    var income = req.session.data['income']
    if (income.includes('benefits')){
      res.redirect('universal-credit')
    } else if (income.includes ('employment')){
      res.redirect('3-job-details')
    } else if (income.includes ('self-employment')){
     res.redirect('4-company-details')
  } else {
    res.redirect('/apply/september2022/5-all-children/child-section-start')
  }
  });

  router.post('/apply/september2022/4-pp-income/universal-credit', function (req, res) {
    res.redirect('/apply/september2022/4-pp-income/2-benefit-list')
});


router.post('/apply/september2022/4-pp-income/2-benefit-list', function (req, res) {
    var benefit = req.session.data['benefit']
    if (benefit.includes('income-support')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('jobseekers-allowance-2')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('income-related-employment')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('pension-credit')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('armed-forces')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('bereavement-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('carers-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('incapacity-benefit')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('jobseekers-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('maternity-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('non-uk')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('skillseekers-training')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('state-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('training-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('universal-credit')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('war-disablement-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('civil-partner-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('widows-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('widow-parent')){
      res.redirect('solo-check-your-ans')
  } else {
    res.redirect('solo-check-your-ans')
  }
  });


  router.post('/apply/september2022/4-pp-income/2-shared-benefit', function (req, res) {
    var shared = req.session.data['shared']
    if (shared.includes('income')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('pension-credit')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('jobseekers-income-based')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('income-support-allowance')){
      res.redirect('2-partner-name')
  } else {
    res.redirect('solo-check-your-ans')
  }
  });

  router.post('/apply//september2022/4-pp-income/2-shared-benefit', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply//september2022/4-pp-income/2-shared-benefit-single', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply//september2022/4-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/september2022/4-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/september2022/4-pp-income/2-partner-dob', function (req, res) {
    res.redirect('overall-check-your-ans')
});

router.post('/apply/september2022/4-pp-income/3-job-details', function (req, res) {
    res.redirect('annual-income')
});

router.post('/apply/september2022/4-pp-income/3-fixed-income', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/september2022/4-pp-income/annual-income-amount', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/september2022/4-pp-income/4-company-details', function (req, res) {
    res.redirect('4-add-company')
});

router.post('/apply/september2022/4-pp-income/5-pension-details', function (req, res) {
    var pensiontype = req.session.data['pensiontype']
    if (pensiontype.includes('private')){
      res.redirect('5-private-pension')
    } else if (pensiontype.includes ('workplace')){
      res.redirect('overall-check-your-ans2')
    }
    else {
      res.redirect('additional-income2')
    }
  });


router.post('/apply/september2022/4-pp-income/5-private-pension', function (req, res) {
    res.redirect('overall-check-your-ans2b')
});

router.post('/apply/september2022/4-pp-income/overall-check-your-ans2', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/child-section-start')
});

router.post('/apply/september2022/4-pp-income/overall-check-your-ans2b', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/child-section-start')
});

router.post('/apply/september2022/4-pp-income/overall-check-your-ans', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/child-section-start')
});

router.post('/apply/september2022/4-pp-income/solo-check-your-ans', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/child-section-start')
});



//Children Info Gather
router.post('/apply/september2022/5-all-children/child-section-start', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/1-name')
});

router.post('/apply/september2022/5-all-children/1-name', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/1-dob')
});

router.post('/apply/september2022/5-all-children/1-dob', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/1-birth-certificate')
});

router.post('/apply/september2022/5-all-children/1-birth-certificate', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/1-overnight-frequency')
});

router.post('/apply/september2022/5-all-children/1-overnight-frequency', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/1-check-your-answers-small')
});

router.post('/apply/september2022/5-all-children/1-check-your-answers-small', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/1-add-another-child')
});

router.post('/apply/september2022/5-all-children/1-add-another-child', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/1-any-private-arrangement')
});

router.post('/apply/september2022/5-all-children/1-any-private-arrangement', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/2-name')
});

router.post('/apply/september2022/5-all-children/2-name', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/2-dob')
});

router.post('/apply/september2022/5-all-children/2-dob', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/child-address')
});

router.post('/apply/september2022/5-all-children/child-address', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/child-pay')
});

router.post('/apply/september2022/5-all-children/child-pay', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/child-benefit')
});

router.post('/apply/september2022/5-all-children/child-pay', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/2-check-your-answers-private')
});

router.post('/apply/september2022/5-all-children/2-check-your-answers-private', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/2-add-another-child-private')
});

router.post('/apply/september2022/5-all-children/2-add-another-child-private', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/3-children-live-with')
});

router.post('/apply/september2022/5-all-children/3-name', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/3-dob')
});

router.post('/apply/september2022/5-all-children/3-dob', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/3-live-with-child-benefit')
});

router.post('/apply/september2022/5-all-children/3-child-benefit', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/3-check-your-answers-roc')
});

router.post('/apply/september2022/5-all-children/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/3-add-another-child-roc')
});

router.post('/apply/september2022/5-all-children/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/september2022/5-all-children/overall-cya')
});

router.post('/apply/september2022/5-all-children/overall-cya', function (req, res) {
    res.redirect('/apply/september2022/6-service-types/direct-pay')
});

router.post('/apply/september2022/6-service-types/direct-pay-stops-working', function (req, res) {
    res.redirect('/apply/september2022/6-service-types/select-payment-frequency')
});


router.post('/apply/september2022/6-service-types/check-your-answers-collect-pay', function (req, res) {
    res.redirect('/apply/september2022/7-other-parent/pp-name')
});
router.post('/apply/september2022/6-service-types/check-your-answers-direct-pay', function (req, res) {
    res.redirect('/apply/september2022/7-other-parent/pp-name')
});

router.post('/apply/september2022/6-service-types/check-your-answers-collect-pay-doe', function (req, res) {
    res.redirect('/apply/september2022/7-other-parent/pp-name')
});

//Section 7: Other Parent
router.post('/apply/september2022/7-other-parent/pp-name', function (req, res) {
    res.redirect('/apply/september2022/7-other-parent/pp-dob')
});

router.post('/apply/september2022/7-other-parent/pp-nino', function (req, res) {
    res.redirect('pp-phone')
});

router.post('/apply/september2022/7-other-parent/pp-phone', function (req, res) {
    res.redirect('pp-live-with-other-parent')
});

router.post('/apply/september2022/7-other-parent/pp-postal', function (req, res) {
    res.redirect('pp-postal-2')
});

router.post('/apply/september2022/7-other-parent/pp-postal-2', function (req, res) {
    res.redirect('pp-address-1-details')
});

router.post('/apply/september2022/7-other-parent/pp-address-2', function (req, res) {
    res.redirect('pp-address-3')
});

router.post('/apply/september2022/7-other-parent/pp-address-3', function (req, res) {
    res.redirect('pp-other-info')
});

router.post('/apply/february2022PP/7-other-parent/pp-address-5', function (req, res) {
    res.redirect('pp-address-6')
});

router.post('/apply/september2022/7-other-parent/pp-other-info', function (req, res) {
    res.redirect('check-your-answers')
});

router.post('/apply/september2022/7-other-parent/check-your-answers', function (req, res) {
    res.redirect('../8-existing-cases/previous-application')
});
//Section 8: Existing Questions
router.post('/apply/september2022/8-existing-cases/use-old-login', function (req, res) {
    res.redirect('../9-confirmation/declaration-no-fee')
});

router.post('/apply/september2022/8-existing-cases/create-password', function (req, res) {
    res.redirect('create-pin')
});

router.post('/apply/september2022/8-existing-cases/create-pin', function (req, res) {
    res.redirect('../9-confirmation/declaration-no-fee')
});

router.post('/apply/september2022/8-existing-cases/create-pin2', function (req, res) {
    res.redirect('../9-confirmation/declaration-no-fee')
});

//Section 9: Confirmation
router.post('/apply/september2022/9-confirmation/declaration-no-fee', function (req, res) {
    res.redirect('submitted-fee')
});









//October 2022 Prototype:
//Section 1: Start Eligability
router.post('/apply/october2022/1-start-eligibility/urn', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/pp-name.html')

    
});


router.post('/apply/october2022/1-start-eligibility/urn-rp', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/rp-name')
});



//Section 2: Fees
//paying parent check age

router.post('/apply/october2022/2-fees/check-age', function(req, res) {
    if (req.body['applicant-date-of-birth-year'] > '2002') {``
      res.redirect('/apply/october2022/3-applicant-info/pp-nino');
    } else {
      res.redirect('/apply/october2022/3-applicant-info/pp-nino');
    }
  });

//   router.post('/apply/october2022/2-fees-rp/check-age', function(req, res) {
//     if (req.body['applicant-date-of-birth-year'] > '2002') {``
//       res.redirect('/apply/october2022/3-applicant-info-rp/rp-nino');
//     } else {
//       res.redirect('/apply/october2022/3-applicant-info-rp/rp-nino');
//     }
//   });

  router.post('/apply/october2022/2-fees-rp/check-age', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/rp-nino')
});


router.post('/apply/october2022/2-fees/no-fee-under-19', function (req, res) {
    res.redirect('/apply/october2022/2-fees/domestic-abuse-under-19')
});

router.post('/apply/october2022/2-fees/tell-someone-under-19', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/pp-name')
});

router.post('/apply/october2022/2-fees/tell-someone', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/check-ans.html')
});

router.post('/apply/october2022/2-fees/no-fee', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/pp-nino')
});

//RP
router.post('/apply/october2022/2-fees-rp/no-fee-under-19', function (req, res) {
    res.redirect('/apply/october2022/2-fees-rp/domestic-abuse-under-19')
});

router.post('/apply/october2022/2-fees-rp/tell-someone-under-19', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/rp-nino')
});

router.post('/apply/october2022/2-fees-rp/tell-someone', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/check-ans')
});

router.post('/apply/october2022/2-fees-rp/no-fee', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/rp-nino')
});

router.post('/apply/october2022/2-fees-rp/no-fee', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/rp-nino')
});


//Section 3: Applicant Info
router.post('/apply/october2022/3-applicant-info/pp-name', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/pp-nino')
});

router.post('/apply/october2022/3-applicant-info/pp-nino', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/pp-address-1')
});


router.post('/apply/october2022/3-applicant-info/pp-confirm-nino', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/equality/extra-question')
});

router.post('/apply/october2022/3-applicant-info/pp-postal', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/pp-postal-2')
});

router.post('/apply/october2022/3-applicant-info/pp-postal-2', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/pp-home')
});

router.post('/apply/october2022/3-applicant-info/pp-address-1', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/pp-home')
});

router.post('/apply/october2022/3-applicant-info/pp-home-2', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/pp-phone')
});

router.post('/apply/october2022/3-applicant-info/pp-home-3', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/check-ans')
});

router.post('/apply/october2022/3-applicant-info/check-ans', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/equality/extra-question-pp')
});

router.post('/apply/october2022/3-applicant-info/pp-address-2', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info/check-ans')
});

//Section 3: Applicant Info RP
router.post('/apply/october2022/3-applicant-info-RP/rp-name', function (req, res) {
    res.redirect('/apply/october2022/2-fees-rp/check-age')
});

router.post('/apply/october2022/3-applicant-info-RP/rp-nino', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/rp-address-1')
});


// router.post('/apply/october2022/3-applicant-info-RP/rp-nino', function (req, res) {
//     res.redirect('/apply/october2022/3-applicant-info-RP/rp-postal')
// });

router.post('/apply/october2022/3-applicant-info-RP/rp-confirm-nino', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/equality/extra-question')
});

router.post('/apply/october2022/3-applicant-info-RP/rp-postal', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/rp-postal-2')
});

router.post('/apply/october2022/3-applicant-info-RP/rp-postal-2', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/rp-home')
});

router.post('/apply/october2022/3-applicant-info-RP/rp-address-1', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/rp-home')
});

router.post('/apply/october2022/3-applicant-info-RP/rp-home-2', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/rp-phone')
});

router.post('/apply/october2022/3-applicant-info-RP/rp-home-3', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/check-ans')
});

router.post('/apply/october2022/3-applicant-info-RP/rp-address-2', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/check-ans')
});

router.post('/apply/october2022/3-applicant-info-RP/check-ans', function (req, res) {
    res.redirect('/apply/october2022/3-applicant-info-RP/equality/extra-question.html')
});

//Section 4: PP Income

router.post('/apply/october2022/4-pp-income/1-income-query', function (req, res) {
    var income = req.session.data['income']
    if (income.includes('benefits')){
      res.redirect('2-benefit-list')
    } else if (income.includes ('employment')){
      res.redirect('3-job-details')
    } else if (income.includes ('self-employment')){
     res.redirect('4-company-details')
  } else {
    res.redirect('/apply/october2022/5-all-children/1-name.html')
  }
  });

  router.post('/apply/october2022/4-pp-income/universal-credit', function (req, res) {
    res.redirect('/apply/october2022/4-pp-income/2-benefit-list')
});


router.post('/apply/october2022/4-pp-income/2-benefit-list', function (req, res) {
    var benefit = req.session.data['benefit']
    if (benefit.includes('income-support')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('jobseekers-allowance-2')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('income-related-employment')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('pension-credit')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('armed-forces')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('bereavement-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('carers-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('incapacity-benefit')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('jobseekers-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('maternity-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('non-uk')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('skillseekers-training')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('state-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('training-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('universal-credit')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('war-disablement-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('civil-partner-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('widows-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('widow-parent')){
      res.redirect('solo-check-your-ans')
  } else {
    res.redirect('solo-check-your-ans')
  }
  });


  router.post('/apply/october2022/4-pp-income/2-shared-benefit', function (req, res) {
    var shared = req.session.data['shared']
    if (shared.includes('income')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('pension-credit')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('jobseekers-income-based')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('income-support-allowance')){
      res.redirect('2-partner-name')
  } else {
    res.redirect('solo-check-your-ans')
  }
  });

  router.post('/apply/october2022/4-pp-income/2-shared-benefit', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply/october2022/4-pp-income/2-shared-benefit-single', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply/october2022/4-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/october2022/4-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/october2022/4-pp-income/2-partner-dob', function (req, res) {
    res.redirect('overall-check-your-ans')
});

router.post('/apply/october2022/4-pp-income/3-job-details', function (req, res) {
    res.redirect('annual-income')
});

router.post('/apply/october2022/4-pp-income/3-fixed-income', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/october2022/4-pp-income/annual-income', function (req, res) {
    res.redirect('3-add-job')
});


router.post('/apply/october2022/4-pp-income/annual-income-amount', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/october2022/4-pp-income/4-company-details', function (req, res) {
    res.redirect('4-add-company')
});


router.post('/apply/october2022/4-pp-income/overall-check-your-ans3', function (req, res) {
    res.redirect('5-pension-query')
});




router.post('/apply/october2022/4-pp-income/5-pension-details', function (req, res) {
    var pensiontype = req.session.data['pensiontype']
    if (pensiontype.includes('private')){
      res.redirect('5-private-pension')
    } else if (pensiontype.includes ('workplace')){
      res.redirect('/apply/october2022/5-all-children/child-section-start.html')
    }
    else {
      res.redirect('additional-income2')
    }
  });


  router.post('/income-answer', function(request, response) {

    var income = request.session.data['income']
    if (income.includes("benefits")){
        response.redirect("/apply/february2025/4-pp-income/2-benefit-list")
    } 
    
    else if (income.includes("employment")){
        response.redirect("/apply/february2025/4-pp-income/3-job-details")
    } 

    else if (income.includes("self")){
        response.redirect("/apply/february2025/4-pp-income/4-company-details")
    } 

    else {
        response.redirect("/next-question")
    }
})


router.post('/apply/october2022/4-pp-income/5-private-pension', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/child-section-start.html')
});

router.post('/apply/october2022/4-pp-income/overall-check-your-ans2', function (req, res) {
    res.redirect('/apply/october2022/4-pp-income/5-pension-query.html')
});

router.post('/apply/october2022/4-pp-income/overall-check-your-ans2b', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/1-name.html')
});

router.post('/apply/october2022/4-pp-income/overall-check-your-ans', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/1-name.html')
});

router.post('/apply/october2022/4-pp-income/solo-check-your-ans', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/1-name.html')
});

//Section 5: All Children
router.post('/apply/october2022/5-all-children/child-section-start', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/1-name')
});

router.post('/apply/october2022/5-all-children/1-name', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/1-dob')
});

router.post('/apply/october2022/5-all-children/1-dob', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/1-birth-certificate')
});

router.post('/apply/october2022/5-all-children/1-birth-certificate', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/1-overnight-frequency')
});

router.post('/apply/october2022/5-all-children/1-overnight-frequency', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/1-check-your-answers-small')
});

router.post('/apply/october2022/5-all-children/1-check-your-answers-small', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/1-add-another-child')
});

router.post('/apply/october2022/5-all-children/1-add-another-child', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/1-any-private-arrangement')
});

router.post('/apply/october2022/5-all-children/1-any-private-arrangement', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/2-name')
});

router.post('/apply/october2022/5-all-children/2-name', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/2-dob')
});

router.post('/apply/october2022/5-all-children/2-dob', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/child-address')
});

router.post('/apply/october2022/5-all-children/child-address', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/child-pay')
});

router.post('/apply/october2022/5-all-children/child-pay', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/child-benefit')
});

router.post('/apply/october2022/5-all-children/child-pay', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/2-check-your-answers-private')
});

router.post('/apply/october2022/5-all-children/2-check-your-answers-private', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/2-add-another-child-private')
});

router.post('/apply/october2022/5-all-children/2-add-another-child-private', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/3-children-live-with')
});

router.post('/apply/october2022/5-all-children/3-name', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/3-dob')
});

router.post('/apply/october2022/5-all-children/3-dob', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/3-live-with-child-benefit')
});

router.post('/apply/october2022/5-all-children/3-child-benefit', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/3-check-your-answers-roc')
});

router.post('/apply/october2022/5-all-children/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/3-add-another-child-roc')
});

router.post('/apply/october2022/5-all-children/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/october2022/5-all-children/overall-cya')
});

router.post('/apply/october2022/5-all-children/overall-cya', function (req, res) {
    res.redirect('/apply/october2022/6-service-types/direct-pay')
});

//Section 5: RP child info gather
router.post('/apply/october2022/5-children-info-RP/1-name', function (req, res) {
    res.redirect('1-dob')
});

router.post('/apply/october2022/5-children-info-RP/1-dob', function (req, res) {
    res.redirect('1-birth-certificate')
});

router.post('/apply/october2022/5-children-info-RP/1-birth-certificate', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/1-child-benefit-V3')
});
router.post('/apply/october2022/5-children-info-RP/1-child-benefit-V3', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/1-check-your-answers-small')
});

router.post('/apply/october2022/5-children-info-RP/1-check-your-answers-small', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/1-add-another-child')
});


router.post('/apply/october2022/5-children-info-RP/1-overnight-frequency', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/1-confirm-overnight-stays')
});

router.post('/apply/october2022/5-children-info-RP/1-confirm-overnight-stays', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/1-check-answers-overnights')
});



router.post('/apply/october2022/5-children-info-RP/2-name', function (req, res) {
    res.redirect('2-dob')
});

router.post('/apply/october2022/5-children-info-RP/2-dob', function (req, res) {
    res.redirect('2-birth-certificate')
});

router.post('/apply/october2022/5-children-info-RP/2-birth-certificate', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/2-child-benefit-V3')
});
router.post('/apply/october2022/5-children-info-RP/2-child-benefit-V3', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/2-check-your-answers-small')
});

router.post('/apply/october2022/5-children-info-RP/2-check-your-answers-small', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/2-add-another-child')
});


router.post('/apply/october2022/5-children-info-RP/2-overnight-frequency', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/2-confirm-overnight-stays')
});

router.post('/apply/october2022/5-children-info-RP/2-confirm-overnight-stays', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/2-check-answers-overnights')
});


router.post('/apply/october2022/5-children-info-RP/2-check-your-answers', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/1-overnight-more')
});


router.post('/apply/october2022/6-service-types/bank-collection', function (req, res) {
    res.redirect('/apply/october2022/6-service-types/check-your-answers-direct-pay.html')
});





router.post('/apply/october2022/5-children-info-RP/1-overnight-more', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/1-overnight-frequency-more')
});

router.post('/apply/october2022/5-children-info-RP/1-overnight-frequency-more', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/1-confirm-overnight-stays-more')
});

router.post('/apply/october2022/5-children-info-RP/1-confirm-overnight-stays-more', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/2-same-overnight')
});


router.post('/apply/october2022/5-children-info-RP/2-check-your-answers', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/1-overnight-more')
});


router.post('/apply/october2022/5-children-info-RP/2-overnight-frequency-more', function (req, res) {
    res.redirect('/apply/october2022/5-children-info-RP/2-confirm-overnight-stays-more')
});

 

router.post('/apply/october2022/5-children-info-RP/2-check-answers-overnights-more', function (req, res) {
    res.redirect('/apply/october2022/6-service-types-RP/direct-pay')
});

router.post('/apply/october2022/5-children-info-RP/1-check-answers-overnights', function (req, res) {
    res.redirect('/apply/october2022/6-service-types-RP/direct-pay')
});

 


//Section 6: Service Types
router.post('/apply/october2022/6-service-types/direct-pay-stops-working', function (req, res) {
    res.redirect('/apply/october2022/6-service-types/select-payment-frequency')
});

router.post('/apply/october2022/6-service-types-RP/collect-and-pay', function (req, res) {
    res.redirect('/apply/october2022/6-service-types-RP/check-your-answers')
});

router.post('/apply/october2022/6-service-types/check-your-answers-collect-pay', function (req, res) {
    res.redirect('/apply/october2022/7-other-parent/pp-name')
});
router.post('/apply/october2022/6-service-types/check-your-answers-direct-pay', function (req, res) {
    res.redirect('/apply/october2022/7-other-parent/pp-name')
});

router.post('/apply/october2022/6-service-types/check-your-answers-collect-pay-doe', function (req, res) {
    res.redirect('/apply/october2022/7-other-parent/pp-name')
});

router.post('/apply/october2022/6-service-types/direct-pay', function (req, res) {
    res.redirect('/apply/october2022/6-service-types/service-type-pp')
});

router.post('/apply/october2022/6-service-types/service-type-pp', function (req, res) {
    res.redirect('/apply/october2022/6-service-types/service-type-preference-pp')
});


//RP Bank Info

router.post('/apply/october2022/6-service-types-RP/bank-info', function (req, res) {
    res.redirect('/apply/october2022/6-service-types-RP/check-your-answers-bank')
});

router.post('/apply/october2022/6-service-types-RP/direct-pay-stops-working', function (req, res) {
    res.redirect('/apply/october2022/6-service-types-RP/pass-bank-info')
});

router.post('/apply/october2022/6-service-types-RP/bank-info-direct-pay', function (req, res) {
    res.redirect('/apply/october2022/6-service-types-RP/check-your-answers-bank')
});

//Section 7: Other Parent
router.post('/apply/october2022/7-other-parent/pp-name', function (req, res) {
    res.redirect('/apply/october2022/7-other-parent/pp-dob')
});

router.post('/apply/october2022/7-other-parent/pp-nino', function (req, res) {
    res.redirect('pp-phone')
});

router.post('/apply/october2022/7-other-parent/pp-phone', function (req, res) {
    res.redirect('pp-live-with-other-parent')
});

router.post('/apply/october2022/7-other-parent/pp-postal', function (req, res) {
    res.redirect('pp-address-3')
});

router.post('/apply/october2022/7-other-parent/pp-postal-2', function (req, res) {
    res.redirect('pp-address-1-details')
});

router.post('/apply/october2022/7-other-parent/pp-address-1', function (req, res) {
    res.redirect('pp-address-1-details')
});

router.post('/apply/october2022/7-other-parent/pp-address-2', function (req, res) {
    res.redirect('pp-address-3')
});


router.post('/apply/october2022/7-other-parent/pp-address-part-2', function (req, res) {
    res.redirect('pp-address-previous-details')
});


router.post('/apply/october2022/7-other-parent/pp-address-3', function (req, res) {
    res.redirect('pp-other-info')
});

router.post('/apply/october2022/7-other-parent/pp-address-5', function (req, res) {
    res.redirect('pp-address-6')
});

router.post('/apply/october2022/7-other-parent/pp-other-info', function (req, res) {
    res.redirect('check-your-answers')
});

router.post('/apply/october2022/7-other-parent/check-your-answers', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});

//Section 7: Other Parent RP
router.post('/apply/october2022/6-service-types-RP/check-your-answers', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-name')
});

//Section 7: Other Parent RP
router.post('/apply/october2022/7-other-parent-rp/check-your-answers', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});



router.post('/apply/october2022/6-service-types-RP/check-your-answers-bank', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-name')
});

router.post('/apply/october2022/7-other-parent-RP/pp-name', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-dob')
});

router.post('/apply/october2022/7-other-parent-RP/pp-address-2', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-address-3')
});

router.post('/apply/october2022/7-other-parent-RP/pp-address-5', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-previous-address-3')
});

router.post('/apply/october2022/7-other-parent-RP/pp-previous-address-2', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-previous-replay')
});

router.post('/apply/october2022/7-other-parent-RP/pp-previous-address-3', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-other-info')
});

router.post('/apply/october2022/7-other-parent-RP/pp-other-info', function (req, res) {
    res.redirect('../7-other-parent-RP/check-your-answers')
});




router.post('/apply/october2022/6-service-types-RP/direct-pay', function (req, res) {
    res.redirect('../6-service-types-RP/service-type')
});

router.post('/apply/october2022/6-service-types-RP/service-type', function (req, res) {
    res.redirect('../6-service-types-RP/service-type-preference')
});




//Section 8: Existing Questions
router.post('/apply/october2022/8-existing-cases/use-old-login', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});


router.post('/apply/october2022/8-existing-cases/create-pin2', function (req, res) {
    res.redirect('create-password2')
});

router.post('/apply/october2022/8-existing-cases/create-password', function (req, res) {
    res.redirect('create-pin')
});

router.post('/apply/october2022/8-existing-cases/create-pin', function (req, res) {
    res.redirect('create-')
});

router.post('/apply/october2022/8-existing-cases/create-password2', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});

//Section 8: Existing Questions RP
router.post('/apply/october2022/8-existing-cases-RP/use-old-login', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});

router.post('/apply/october2022/8-existing-cases-RP/create-password', function (req, res) {
    res.redirect('create-pin')
});

router.post('/apply/october2022/8-existing-cases-RP/create-pin', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});

router.post('/apply/october2022/8-existing-cases-RP/create-pin2', function (req, res) {
    res.redirect('create-password2')
});

router.post('/apply/october2022/8-existing-cases-RP/create-password2', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});


//Section 9: Confirmation
router.post('/apply/october2022/9-confirmation/declaration-fee', function (req, res) {
    res.redirect('submitted-fee')
});

//Section 9: Confirmation RP
router.post('/apply/october2022/9-confirmation-RP/declaration-fee', function (req, res) {
    res.redirect('submitted-fee')
});







//paying parent: switching route 
router.post('/apply/october2022/3-applicant-info-RP/equality/extra-question', function(req, res) {
    if (req.body[''] === 'no') {
      res.redirect('email-sent-by-phone');
    } else {
      res.redirect('your-application-reference-number');
    }
  });




//October 2024 Prototype:
//Section 1: Start Eligability
router.post('/apply/february2025/1-start-eligibility/urn', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-name.html')

    
});


router.post('/apply/february2025/1-start-eligibility/urn-rp', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-name')
});



//Section 2: Fees
//paying parent check age

router.post('/apply/february2025/2-fees/check-age', function(req, res) {
    if (req.body['applicant-date-of-birth-year'] > '2002') {``
      res.redirect('/apply/february2025/3-applicant-info/pp-nino');
    } else {
      res.redirect('/apply/february2025/3-applicant-info/pp-nino');
    }
  });

//   router.post('/apply/february2025/2-fees-rp/check-age', function(req, res) {
//     if (req.body['applicant-date-of-birth-year'] > '2002') {``
//       res.redirect('/apply/february2025/3-applicant-info-rp/rp-nino');
//     } else {
//       res.redirect('/apply/february2025/3-applicant-info-rp/rp-nino');
//     }
//   });

  router.post('/apply/february2025/2-fees-rp/check-age', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-nino')
});


router.post('/apply/february2025/2-fees/no-fee-under-19', function (req, res) {
    res.redirect('/apply/february2025/2-fees/domestic-abuse-under-19')
});

router.post('/apply/february2025/2-fees/tell-someone-under-19', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-name')
});

router.post('/apply/february2025/2-fees/tell-someone', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/check-ans.html')
});

router.post('/apply/february2025/2-fees/no-fee', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-nino')
});

//RP
router.post('/apply/february2025/2-fees-rp/no-fee-under-19', function (req, res) {
    res.redirect('/apply/february2025/2-fees-rp/domestic-abuse-under-19')
});

router.post('/apply/february2025/2-fees-rp/tell-someone-under-19', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-nino')
});

router.post('/apply/february2025/2-fees-rp/tell-someone', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/check-ans')
});

router.post('/apply/february2025/2-fees-rp/no-fee', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-nino')
});

router.post('/apply/february2025/2-fees-rp/no-fee', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-nino')
});


//Section 3: Applicant Info
// router.post('/apply/february2025/3-applicant-info/pp-name', function (req, res) {
//     res.redirect('/apply/february2025/3-applicant-info/pp-nino')
// });

router.post('/apply/february2025/3-applicant-info/pp-nino', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-address-1')
});


router.post('/apply/february2025/3-applicant-info/pp-confirm-nino', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/equality/extra-question')
});

router.post('/apply/february2025/3-applicant-info/pp-postal', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-postal-2')
});

router.post('/apply/february2025/3-applicant-info/pp-postal-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-home')
});

router.post('/apply/february2025/3-applicant-info/pp-address-1', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-home')
});

router.post('/apply/february2025/3-applicant-info/pp-home-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-phone')
});

router.post('/apply/february2025/3-applicant-info/pp-home-3', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/check-ans')
});

router.post('/apply/february2025/3-applicant-info/check-ans', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/equality/extra-question-pp')
}); 


router.post('/apply/february2025/3-applicant-info/pp-address-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/check-ans')
});

//Section 3: Applicant Info RP
router.post('/apply/february2025/3-applicant-info-RP/rp-name', function (req, res) {
    res.redirect('/apply/february2025/2-fees-rp/check-age')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-nino', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-address-1')
});


// router.post('/apply/february2025/3-applicant-info-RP/rp-nino', function (req, res) {
//     res.redirect('/apply/february2025/3-applicant-info-RP/rp-postal')
// });

router.post('/apply/february2025/3-applicant-info-RP/rp-confirm-nino', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/equality/extra-question')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-postal', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-postal-2')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-postal-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-home')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-address-1', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-home')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-home-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-phone')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-home-3', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/check-ans')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-address-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/check-ans')
});

router.post('/apply/february2025/3-applicant-info-RP/check-ans', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/equality/extra-question.html')
});

//Section 4: PP Income

router.post('/apply/february2025/4-pp-income/1-income-query', function (req, res) {
    var income = req.session.data['income']
    if (income.includes('benefits')){
      res.redirect('2-benefit-list')
    } else if (income.includes ('employment')){
      res.redirect('3-job-details')
    } else if (income.includes ('self-employment')){
     res.redirect('4-company-details')
  } else {
    res.redirect('/apply/february2025/5-all-children/1-name.html')
  }
  });

  router.post('/apply/february2025/4-pp-income/universal-credit', function (req, res) {
    res.redirect('/apply/february2025/4-pp-income/2-benefit-list')
});


router.post('/apply/february2025/4-pp-income/2-benefit-list', function (req, res) {
    var benefit = req.session.data['benefit']
    if (benefit.includes('income-support')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('jobseekers-allowance-2')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('income-related-employment')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('pension-credit')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('armed-forces')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('bereavement-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('carers-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('incapacity-benefit')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('jobseekers-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('maternity-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('non-uk')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('skillseekers-training')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('state-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('training-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('universal-credit')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('war-disablement-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('civil-partner-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('widows-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('widow-parent')){
      res.redirect('solo-check-your-ans')
  } else {
    res.redirect('solo-check-your-ans')
  }
  });


  router.post('/apply/february2025/4-pp-income/2-shared-benefit', function (req, res) {
    var shared = req.session.data['shared']
    if (shared.includes('income')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('pension-credit')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('jobseekers-income-based')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('income-support-allowance')){
      res.redirect('2-partner-name')
  } else {
    res.redirect('solo-check-your-ans')
  }
  });

  router.post('/apply/february2025/4-pp-income/2-shared-benefit', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply/february2025/4-pp-income/2-shared-benefit-single', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply/february2025/4-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/february2025/4-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/february2025/4-pp-income/2-partner-dob', function (req, res) {
    res.redirect('overall-check-your-ans')
});

router.post('/apply/february2025/4-pp-income/3-job-details', function (req, res) {
    res.redirect('annual-income')
});

router.post('/apply/february2025/4-pp-income/3-fixed-income', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/february2025/4-pp-income/annual-income', function (req, res) {
    res.redirect('3-add-job')
});


router.post('/apply/february2025/4-pp-income/annual-income-amount', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/february2025/4-pp-income/4-company-details', function (req, res) {
    res.redirect('4-add-company')
});


router.post('/apply/february2025/4-pp-income/overall-check-your-ans3', function (req, res) {
    res.redirect('5-pension-query')
});




router.post('/apply/february2025/4-pp-income/5-pension-details', function (req, res) {
    var pensiontype = req.session.data['pensiontype']
    if (pensiontype.includes('private')){
      res.redirect('5-private-pension')
    } else if (pensiontype.includes ('workplace')){
      res.redirect('/apply/february2025/5-all-children/child-section-start.html')
    }
    else {
      res.redirect('additional-income2')
    }
  });


router.post('/apply/february2025/4-pp-income/5-private-pension', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/child-section-start.html')
});

router.post('/apply/february2025/4-pp-income/overall-check-your-ans2', function (req, res) {
    res.redirect('/apply/february2025/4-pp-income/5-pension-query.html')
});

router.post('/apply/february2025/4-pp-income/overall-check-your-ans2b', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-name.html')
});

router.post('/apply/february2025/4-pp-income/overall-check-your-ans', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-name.html')
});

router.post('/apply/february2025/4-pp-income/solo-check-your-ans', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-name.html')
});

//Section 5: All Children
router.post('/apply/february2025/5-all-children/child-section-start', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-name')
});

router.post('/apply/february2025/5-all-children/1-name', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-dob')
});

router.post('/apply/february2025/5-all-children/1-dob', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-birth-certificate')
});

router.post('/apply/february2025/5-all-children/1-birth-certificate', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-overnight-frequency')
});

router.post('/apply/february2025/5-all-children/1-overnight-frequency', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-check-your-answers-small')
});

router.post('/apply/february2025/5-all-children/1-check-your-answers-small', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-add-another-child')
});

router.post('/apply/february2025/5-all-children/1-add-another-child', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-any-private-arrangement')
});

router.post('/apply/february2025/5-all-children/1-any-private-arrangement', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/2-name')
});

router.post('/apply/february2025/5-all-children/2-name', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/2-dob')
});

router.post('/apply/february2025/5-all-children/2-dob', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/child-address')
});

router.post('/apply/february2025/5-all-children/child-address', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/child-pay')
});

router.post('/apply/february2025/5-all-children/child-pay', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/child-benefit')
});

router.post('/apply/february2025/5-all-children/child-pay', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/2-check-your-answers-private')
});

router.post('/apply/february2025/5-all-children/2-check-your-answers-private', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/2-add-another-child-private')
});

router.post('/apply/february2025/5-all-children/2-add-another-child-private', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/3-children-live-with')
});

router.post('/apply/february2025/5-all-children/3-name', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/3-dob')
});

router.post('/apply/february2025/5-all-children/3-dob', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/3-live-with-child-benefit')
});

router.post('/apply/february2025/5-all-children/3-child-benefit', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/3-check-your-answers-roc')
});

router.post('/apply/february2025/5-all-children/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/3-add-another-child-roc')
});

router.post('/apply/february2025/5-all-children/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/overall-cya')
});

router.post('/apply/february2025/5-all-children/overall-cya', function (req, res) {
    res.redirect('/apply/february2025/6-service-types/direct-pay')
});

//Section 5: RP child info gather
router.post('/apply/february2025/5-children-info-RP/1-name', function (req, res) {
    res.redirect('1-dob')
});

router.post('/apply/february2025/5-children-info-RP/1-dob', function (req, res) {
    res.redirect('1-birth-certificate')
});

router.post('/apply/february2025/5-children-info-RP/1-birth-certificate', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-child-benefit-V3')
});
router.post('/apply/february2025/5-children-info-RP/1-child-benefit-V3', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-check-your-answers-small')
});

router.post('/apply/february2025/5-children-info-RP/1-check-your-answers-small', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-add-another-child')
});


router.post('/apply/february2025/5-children-info-RP/1-overnight-frequency', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-confirm-overnight-stays')
});

router.post('/apply/february2025/5-children-info-RP/1-confirm-overnight-stays', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-check-answers-overnights')
});



router.post('/apply/february2025/5-children-info-RP/2-name', function (req, res) {
    res.redirect('2-dob')
});

router.post('/apply/february2025/5-children-info-RP/2-dob', function (req, res) {
    res.redirect('2-birth-certificate')
});

router.post('/apply/february2025/5-children-info-RP/2-birth-certificate', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-child-benefit-V3')
});
router.post('/apply/february2025/5-children-info-RP/2-child-benefit-V3', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-check-your-answers-small')
});

router.post('/apply/february2025/5-children-info-RP/2-check-your-answers-small', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-add-another-child')
});


router.post('/apply/february2025/5-children-info-RP/2-overnight-frequency', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-confirm-overnight-stays')
});

router.post('/apply/february2025/5-children-info-RP/2-confirm-overnight-stays', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-check-answers-overnights')
});


router.post('/apply/february2025/5-children-info-RP/2-check-your-answers', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-overnight-more')
});


router.post('/apply/february2025/6-service-types/bank-collection', function (req, res) {
    res.redirect('/apply/february2025/6-service-types/check-your-answers-direct-pay.html')
});





router.post('/apply/february2025/5-children-info-RP/1-overnight-more', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-overnight-frequency-more')
});

router.post('/apply/february2025/5-children-info-RP/1-overnight-frequency-more', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-confirm-overnight-stays-more')
});

router.post('/apply/february2025/5-children-info-RP/1-confirm-overnight-stays-more', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-same-overnight')
});


router.post('/apply/february2025/5-children-info-RP/2-check-your-answers', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-overnight-more')
});


router.post('/apply/february2025/5-children-info-RP/2-overnight-frequency-more', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-confirm-overnight-stays-more')
});

 

router.post('/apply/february2025/5-children-info-RP/2-check-answers-overnights-more', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/direct-pay')
});

router.post('/apply/february2025/5-children-info-RP/1-check-answers-overnights', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/direct-pay')
});

 


//Section 6: Service Types
router.post('/apply/february2025/6-service-types/direct-pay-stops-working', function (req, res) {
    res.redirect('/apply/february2025/6-service-types/select-payment-frequency')
});

router.post('/apply/february2025/6-service-types-RP/collect-and-pay', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/check-your-answers')
});

router.post('/apply/february2025/6-service-types/check-your-answers-collect-pay', function (req, res) {
    res.redirect('/apply/february2025/7-other-parent/pp-name')
});
router.post('/apply/february2025/6-service-types/check-your-answers-direct-pay', function (req, res) {
    res.redirect('/apply/february2025/7-other-parent/pp-name')
});

router.post('/apply/february2025/6-service-types/check-your-answers-collect-pay-doe', function (req, res) {
    res.redirect('/apply/february2025/7-other-parent/pp-name')
});

router.post('/apply/february2025/6-service-types/direct-pay', function (req, res) {
    res.redirect('/apply/february2025/6-service-types/service-type-pp')
});

router.post('/apply/february2025/6-service-types/service-type-pp', function (req, res) {
    res.redirect('/apply/february2025/6-service-types/service-type-preference-pp')
});


//RP Bank Info

router.post('/apply/february2025/6-service-types-RP/bank-info', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/check-your-answers-bank')
});

router.post('/apply/february2025/6-service-types-RP/direct-pay-stops-working', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/pass-bank-info')
});

router.post('/apply/february2025/6-service-types-RP/bank-info-direct-pay', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/check-your-answers-bank')
});

//Section 7: Other Parent
router.post('/apply/february2025/7-other-parent/pp-name', function (req, res) {
    res.redirect('/apply/february2025/7-other-parent/pp-dob')
});

router.post('/apply/february2025/7-other-parent/pp-nino', function (req, res) {
    res.redirect('pp-phone')
});

router.post('/apply/february2025/7-other-parent/pp-phone', function (req, res) {
    res.redirect('pp-live-with-other-parent')
});

router.post('/apply/february2025/7-other-parent/pp-postal', function (req, res) {
    res.redirect('pp-address-3')
});

router.post('/apply/february2025/7-other-parent/pp-postal-2', function (req, res) {
    res.redirect('pp-address-1-details')
});

router.post('/apply/february2025/7-other-parent/pp-address-1', function (req, res) {
    res.redirect('pp-address-1-details')
});

router.post('/apply/february2025/7-other-parent/pp-address-2', function (req, res) {
    res.redirect('pp-address-3')
});


router.post('/apply/february2025/7-other-parent/pp-address-part-2', function (req, res) {
    res.redirect('pp-address-previous-details')
});


router.post('/apply/february2025/7-other-parent/pp-address-3', function (req, res) {
    res.redirect('pp-other-info')
});

router.post('/apply/february2025/7-other-parent/pp-address-5', function (req, res) {
    res.redirect('pp-address-6')
});

router.post('/apply/february2025/7-other-parent/pp-other-info', function (req, res) {
    res.redirect('check-your-answers')
});

router.post('/apply/february2025/7-other-parent/check-your-answers', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});

//Section 7: Other Parent RP
router.post('/apply/february2025/6-service-types-RP/check-your-answers', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-name')
});

//Section 7: Other Parent RP
router.post('/apply/february2025/7-other-parent-rp/check-your-answers', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});



router.post('/apply/february2025/6-service-types-RP/check-your-answers-bank', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-name')
});

router.post('/apply/february2025/7-other-parent-RP/pp-name', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-dob')
});

router.post('/apply/february2025/7-other-parent-RP/pp-address-2', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-address-3')
});

router.post('/apply/february2025/7-other-parent-RP/pp-address-5', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-previous-address-3')
});

router.post('/apply/february2025/7-other-parent-RP/pp-previous-address-2', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-previous-replay')
});

router.post('/apply/february2025/7-other-parent-RP/pp-previous-address-3', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-other-info')
});

router.post('/apply/february2025/7-other-parent-RP/pp-other-info', function (req, res) {
    res.redirect('../7-other-parent-RP/check-your-answers')
});




router.post('/apply/february2025/6-service-types-RP/direct-pay', function (req, res) {
    res.redirect('../6-service-types-RP/service-type')
});

router.post('/apply/february2025/6-service-types-RP/service-type', function (req, res) {
    res.redirect('../6-service-types-RP/service-type-preference')
});




//Section 8: Existing Questions
router.post('/apply/february2025/8-existing-cases/use-old-login', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});


router.post('/apply/february2025/8-existing-cases/create-pin2', function (req, res) {
    res.redirect('create-password2')
});

router.post('/apply/february2025/8-existing-cases/create-password', function (req, res) {
    res.redirect('create-pin')
});

router.post('/apply/february2025/8-existing-cases/create-pin', function (req, res) {
    res.redirect('create-')
});

router.post('/apply/february2025/8-existing-cases/create-password2', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});

//Section 8: Existing Questions RP
router.post('/apply/february2025/8-existing-cases-RP/use-old-login', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});

router.post('/apply/february2025/8-existing-cases-RP/create-password', function (req, res) {
    res.redirect('create-pin')
});

router.post('/apply/february2025/8-existing-cases-RP/create-pin', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});

router.post('/apply/february2025/8-existing-cases-RP/create-pin2', function (req, res) {
    res.redirect('create-password2')
});

router.post('/apply/february2025/8-existing-cases-RP/create-password2', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});


//Section 9: Confirmation
router.post('/apply/february2025/9-confirmation/declaration-fee', function (req, res) {
    res.redirect('submitted-fee')
});

//Section 9: Confirmation RP
router.post('/apply/february2025/9-confirmation-RP/declaration-fee', function (req, res) {
    res.redirect('submitted-fee')
});







//paying parent: switching route 
router.post('/apply/february2025/3-applicant-info-RP/equality/extra-question', function(req, res) {
    if (req.body[''] === 'no') {
      res.redirect('email-sent-by-phone');
    } else {
      res.redirect('your-application-reference-number');
    }
  });

// end routes october 2024


// end routes

