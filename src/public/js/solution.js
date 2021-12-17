function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

var btn1 = document.getElementById("login-btn");
btn1.addEventListener("click", log);
function log() {
  window.location.href = "/home/login";
}
var btn2 = document.getElementById("login-btn2");
btn2.addEventListener("click", log2);
function log2() {
  window.location.href = "/home/signup";
}

var hm = document.getElementById("abc1");

hm.addEventListener("click", home);

function home() {
  window.location.href = "/home";

  localStorage.removeItem("data");
}

var answer = [
  {
    ques: "What is ONN Bikes?",
    source: "Solution home / FAQs /  Learn about ONN",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "ONN Bikes is a one-stop solution to your mobility needs, with a huge variety of bikes and plans from daily rentals to long term subscription, We have a plan just for you. Kindly check our Bookings Page to explore!",
  },

  {
    ques: "What are the benefits of using ONN?",
    source: "Solution home / FAQs / Learn about ONN",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "One of the major benefits of using ONN is freedom from commitments. You can easily explore bikes, and choose the duration of relationship with every bike, and once you have found The One you can choose our ownership model for a serious commitment.",
  },
  {
    ques: "What are the bike options available?",
    source: "Solution home / FAQs / Learn about ONN",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We both like options hence we bring a huge variety of bikes to choose from.Our offerings are broadly classified into our ICE bikes and electric bikes.Our ICE bikes range from high-performance bikes to fuel-efficient economy bikes and scooty.Our electric bikes are currently available as e-bikes and e-scooty and are constantly being upgraded to the latest trends.Check our Booking and  Commute page to explore the options",
  },
  {
    ques: "Where is ONN currently operational?",
    source: "Solution home / FAQs / Learn about ONN",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We are currently operational in 5 cities- Bengaluru, Hyderabad, Pune, Jaipur, Mysuru, and Udaipur with our electric fleet currently available in Pune.We are currently expanding at a rapid pace, so keep checking our app for updates about your city, because if there is a mobility need, we will come there and simplify it!",
  },
  {
    ques: "Our Usage Policy",
    source: "Solution home / FAQs / Learn about ONN",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "The usage of our bikes should be in accordance with the Motor Vehicles Act, 1988, and shall not be used for any illegal or unlawful purpose. Any costs and charges due to such usage shall be paid and managed by the user entirely.We promote safe use of our vehicle and prohibit the usage of the vehicle in the following conditions-With more than two (2) people on the vehicle Seating or accommodating pets on the vehicle Under the influence of alcohol and/or drugs or other banned substances or consuming tobacco or tobacco products on the vehicle For or in any kinds of race, contest or competitions, or stunts Tampering with, disassembling or in any way altering the vehicle or any of its parts without prior authorization from ONN Bikes on a need basis Uncommon usage, irresponsible riding methods, overstressing and mishandling the motorcycles causing excessive wear of the vehicle parts and undue damage To carry unlawful/ hazardous or prohibited material Using the incorrect fuel for the vehicle Commercial usage of any type deriving financial benefits Attaching any external structures to our motorcycles causing damage to the vehicle or other vehicles/human beings/animals coming in contact with it Any other inappropriate use of the vehicle Any traffic violation by the user should be immediately reported to ONN bikes to prevent any further inconveniences.",
  },
  {
    ques: "How do I register with ONN?",
    source: "Solution home / FAQs / Getting Started",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "You can register on our App our Website. All you need to provide is your email ID and phone number to register with us.Alternatively, you can register with us using your Facebook or Gmail login to start booking.",
  },
  {
    ques: "What are documents required,register on ONN Bikes?",
    source: "Solution home / FAQs / Getting Started",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "To register on our platform, all you need is your phone to explore our app and make bookings.But for pickup, you will have to provide your Aadhar card or other approved identity card and your Driving License.To save yourself from the hassle, you can perform an e-KYC on our platform and become our verified user.",
  },
  {
    ques: "I am having trouble registering on the platform.",
    source: "Solution home / FAQs / Getting Started",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We regret the inconvenience.You can try other modes of registration such as email or Facebook, or can wait till the servers are back up.If its a persistent problem, then click here to contact our customer care executive and we will get this sorted.",
  },
  {
    ques: "I don&#x27;t have a Driving License.",
    source: "Solution home / FAQs / Getting Started",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "Don't worry, we got you covered, as you can use our non-geared variants if you have a learner license.And if you don't have any license you can still enjoy the e-bikes, available in select cities, coming to your neighborhood soon!",
  },
  {
    ques: "What is the Privacy Policy?",
    source: "Solution home / FAQs / Getting Started",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We care about your Privacy, hence we do not store any personal data for our usage, except your name and contact details. Be assured any data you enter on our platform is safe. You can read our full privacy policy for further details.",
  },
  {
    ques: "What are the various plans available?",
    source: "Solution home / FAQs / Plans & Promotions",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We have a variety of plans available, just for your personalized need.We have an hourly plan to help the short duration rides.The long duration plans ranging from monthly to quarterly for the long term.We also have rent to ownership plan for long term rental(12+months) with ownership options.Check out our booking page to find your right fit!",
  },
  {
    ques: "What are commute rides and subscription?",
    source: "Solution home / FAQs / Plans & Promotions",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "Our commute rides and subscription are plans for our electric vehicles.Commute rides are hourly rides for our electric bikes and scooters.If you wish to take an electric vehicle for a longer duration, we have a subscription model for long term usage.These services are currently being expanded into various cities and are currently available in select locations.Check our electric vehicles here!, just for your personalized need.We have an hourly plan to help the short duration rides.The long duration plans ranging from monthly to quarterly for the long term.We also have rent to ownership plan for long term rental(12+months) with ownership options.Check out our booking page to find your right fit!",
  },
  {
    ques: "What is Rent-to-Own(R2O) plans",
    source: "Solution home / FAQs / Plans & Promotions",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "Our R2O plan is for people wanting a long term rental(12+ months) to have additional benefits. So for you, we have added ownership to the long term rental which gives you the option to enjoy the rental of a brand new bike on our platform and to have an ownership benefit at the end of the rental tenure. We also removed many hassles of maintenance and pains of ownership on your CIBIL scores so that your experience of ownership is very smooth.You can check out the R2O plans here for availability!",
  },
  {
    ques: "Is the fuel/charging included in my tariff?",
    source: "Solution home / FAQs / Plans & Promotions",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "For ease of use and transparency, we do not provide fuel with our vehicles but do provide enough for you to reach the nearest petrol pump so that you can plan your usage accordingly.For the electric vehicles, we do make sure that the batteries are fully charged at your pick up. You can also take the vehicle to the nearest hub to charge your vehicle or can use our charger to charge your vehicle at home.",
  },
  {
    ques: "How do I redeem my Promo Code?",
    ans: "You can redeem your valid promo code on your payment screen, by entering the promo code in the Enter Promo Code field.If the promo code is not working, kindly check the spelling and T&C of the code for its expiry.If the problem still persists, click here to contact our customer care executive.",
  },
  {
    ques: "How do I book a ride?",
    source: "Solution home / FAQs / Booking your Ride",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "You can book your ride from our Bookings page.You can select your ride type and date of pickup to search for availability at various stations in your city.Once you select a station and a bike, you can review your plan and the pricing to proceed to the payment.Post successful payment, you will receive your booking id and directions to the ONN station for pickup.",
  },
  {
    ques: "How do I book a commute?",
    source: "Solution home / FAQs / Booking your Ride",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "You can book your commute by reaching one of our docking stations and scanning the QR code of the bike by clicking the 'Scan QR Code' button to unlock your ride. The electric rides are fully monitored by our mobile app for easier usage and security.",
  },
  {
    ques: "How do I reach my Pickup Station?",
    source: "Solution home / FAQs / Booking your Ride",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "You can reach the pickup station by clicking on the link next to the pickup station address to open maps, which will provide you directions and assist in reaching the pickup station.Our station timings are 9 am to 9 pm, open all days, hence we would request you to not be late to reach the station.For any emergencies regarding pickup, or the station head absent, contact our customer care.",
  },
  {
    ques: "Can I drop off my bike at a different station?",
    source: "Solution home / FAQs / Booking your Ride",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "Due to the station and usage policies, you should drop off the bike at the station where you picked it up, and cannot drop it off at a different station.You can always contact our customer care in case of any emergencies and we would like to assist.",
  },
  {
    ques: "What are ONN station timings?",
    source: "Solution home / FAQs / Booking your Ride",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "Our ONN Stations are open all week long, from 9 am to 9 pm.We would request you to plan your visit for pickup and dropoff during these hours only.",
  },
  {
    ques: "What are the various modes of payment for my ride?",
    source: "Solution home / FAQs / Payments, Cancellation and Refund",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We promote the use of digital payments and accept payments from various UPI platforms and wallets, and all major credit and debit cards, and net banking.You can also pay in cash at our station on pickup.",
  },
  {
    ques: "Payment done but confirmation not received.",
    source: "Solution home / FAQs / Payments, Cancellation and Refund",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We would request you to wait and do not attempt booking again. Your confirmation will be delivered to you soon.You can contact our Customer Care for assistance.",
  },
  {
    ques: "What are the late drop off charges?",
    source: "Solution home / FAQs / Payments, Cancellation and Refund",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We have timed rides and request you to pick up and drop the bikes on time.But due to any reasons for the delay you can drop off the bikes are the following charges.Non-Geared Scooters: First 2 hours of delay would be charged at ₹100 + hourly rates KTM and Dominar: First 2 hours of delay would be charged at ₹300 + hourly rates Royal Enfield: First 2 hours of delay would be charged at ₹250 + hourly rates. All Other Bikes: First 2 hours of delay would be charged at ₹200 + hourly rates .Post 2 Hours, subsequent hourly charges will be applicable on weekdays (Mon–Fri). On weekends(Sat-Sun) - the next 24-hour rental will be charges post 2 hours of late return.",
  },
  {
    ques: "I want to cancel my ride.",
    source: "Solution home / FAQs / Payments, Cancellation and Refund",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "It is bad enough that to get you till here, Click here to get the resolution of any issue. Rides are cancellable before starting the ride and can be done on the app, using the cancel button on the booking.You can also cancel the ride by contacting our Customer Care.The cancellation charges are- Cancellation made more than 6hrs before booking start: ₹100 Cancellation made within 6hrs of booking start: 50 % of Booking Fee Cancellation made within 2hrs of booking time: 75% of the Booking Fee Cancellation made after booking start: No Refund For Long Term Rental and Rent-To-Own(R2O) bookings, we provide refunds only for any advanced payments made by the customer, and payments up to the cancellation date need to be made before cancellations.",
  },
  {
    ques: "What are the refund policies?",
    source: "Solution home / FAQs / Payments, Cancellation and Refund",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "Our refund policies ensure that your money is safe and will reach you.All payments are made to the original source of payment in 7-14 working days.Kindly read the Pricing Policy for details.",
  },
  {
    ques: "Are the rides insured?",
    source: "Solution home / FAQs / Payments, Security",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We do provide third party insurance with every bike to safeguard any damages. We provide insurance at a minimal cost and you should opt-in for the same to get coverage. For any further clarification about the insurance, ask at the ONN Station, or contact our customer care.",
  },
  {
    ques: "What are the charges for damages to the bike?",
    source: "Solution home / FAQs / Payments, Security",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "Our insurance is valid for people who opted for insurance while bookings.We provide insurance coverage for damages starting from Rs.10,000. Any damages below that are to be held by the user.For any damages above 10,000 to the bike, our insurance covers it and the user has to pay for it, which will later be refunded as soon as possible.The rider and pillion are also covered for INR 2lakh and INR 1Lakh respectively.ONN Bikes assets (the two-wheeler) will be insured in totality. Any deficit amount outstanding at the end of claiming insurance and damage repairs will have to be completely borne by the user.",
  },
  {
    ques: "What is the speed limit policy?",
    source: "Solution home / FAQs / Payments, Security",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "To ensure your and other's safety, we promote driving at controlled speeds. We notify a warning at the first two instances for overspeeding. The third violation will be charged at ₹ 200. Any further violation will be charged at ₹500. If you feel any issue with the warnings and charges do contact our customer care. OVERSPEEDING LIMITS Non-Geared Scooters: 75km/hour RE, CBR, and Avenger: 100km/hour KTM and Dominar: 110km/hour All Other vehicles: 90km/hour",
  },
  {
    ques: "What to do in case of malfunction and breakdowns?",
    source: "Solution home / FAQs / Payments, Security",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "For any malfunctions and breakdowns, we would like you to contact our Customer Care immediately and we would assign an expert or mechanic to rectify or to provide you with a replacement ASAP.All charges for emergency repairs are to be paid by the customer",
  },
  {
    ques: "Will I get refund for emergency repairs?",
    source: "Solution home / FAQs / Payments, Security",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "All emergency repairs are to be paid by the customer. We do provide on-field assistance for any emergency repairs by sending a mechanic to the location which can be availed by contacting our Customer Care.",
  },
  {
    ques: "What are the measures taken by us for COVID-19 Safety?",
    source: "Solution home / FAQs / COVID-19 Safety",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We have taken multiple strict initiatives to provide maximum safety for your bookings and rides so that your mobility never stops. Daily temperature checks of the team Sanitization of the bikes on pickup All of our team use masks all the time Our stations are being sanitized daily Our team uses the Aarogya Setu App Home delivery options You can contact our Customer Care in case of further query or can look at the following link for a detailed explanation.",
  },
  {
    ques: "Where is the bike sanitization facility available?",
    source: "Solution home / FAQs / COVID-19 Safety",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "The sanitization facility is available at all of our ONN Stations, and we will ensure your safety by sanitizing your bike in front of you right at the pickup, to ensure maximum safety for you.",
  },
  {
    ques: "How many times can I get my bike sanitized?",
    source: "Solution home / FAQs / COVID-19 Safety",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "For short term rentals, we only provide sanitization once at pickup and would urge the customer to stay safe while enjoying the ride. For the long term rentals and ownership, we provide sanitization as a part of maintenance which can be scheduled by contacting our Customer Care. We are always there for you and if you think your ride needs sanitization, contact us and we will get it resolved.",
  },
  {
    ques: "How are ONN Stations ensuring safety?",
    source: "Solution home / FAQs / COVID-19 Safety",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We are ensuring your safety at ONN Stations, and taking various measures to make your rental safe.We are sanitizing our stations daily, and doing regular temperature checks of the staff.It is also mandatory for our staff to wear masks at all times and to register themselves on the Aarogya Setu App.",
  },
  {
    ques: "How can I get home delivery of my bike?",
    source: "Solution home / FAQs / COVID-19 Safety",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We are only providing home deliveries for our monthly bookings and Rent to Ownership plans and the same can opt while booking. You can also contact our Customer Care for the same. Our delivery executive will ensure safety by wearing gloves and masks and sanitizing the handlebars at delivery. Your ride will come sanitized from the ONN Station.",
  },
  {
    ques: "Will I be provided with helmet on pickup?",
    source: "Solution  home /  FAQS / Explore all the FAQs",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We care about you and do provide helmet on pickup. We also suggest you never ride without a helmet for your own safety.For extra helmets, kindly ask at the ONN station.",
  },
  {
    ques: "Link",
    source: "Solution  home /  FAQS / Explore all the FAQs",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "FAQ Bank",
  },
  {
    ques: "What is Rent-To-Own(R2O)",
    source: "Solution home / FAQs / Rent-To-Own(R2O)",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Soumya ranjan Purohit",
    ans: "Rent to own is our new offering for our customers looking for long term rentals or an easier way of ownership. Under R2O, you can rent the bike for 12+ months on a monthly rental cost and at the end of the tenure, you can have the ownership of the bike at no additional costs or hassles of paperwork.",
  },
  {
    ques: "Benefits of R2O over renting a bike.",
    source: "Solution home / FAQs / Rent-To-Own(R2O)",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We brought the benefits of ownership and the ease of rental together. The major benefit of R2O over rental is the eventual ownership option which makes the whole long term deal a big bang for your money. It also prevents you from any commitments and is cancellable at your request and also provides you with maintenance coverage where the maintenance labor costs are covered by ONN Bikes. Hence you can have all the benefits of ownership at the ease of renting a bike.",
  },
  {
    ques: "Payment scheme for R2O plan",
    source: "Solution home / FAQs / Rent-To-Own(R2O)",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We currently are serving an R2O plan with 18 months rental period. The monthly payment depends on the bike but we ensure the lowest price for the vital benefits we provide for the bike.",
  },
  {
    ques: "What will be the service assistance during the R2O plan?",
    source: "Solution home / FAQs / Rent-To-Own(R2O)",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "We provide complete assistance for servicing where servicing requests will be answered and addressed. We also cover the labor costs of any maintenance and only spares and parts are to be paid by the user.",
  },
  {
    ques: "Can I use the vehicle in a different state?",
    source: "Solution home / FAQs / Rent-To-Own(R2O)",
    time: "Mon, 30 August, 2021 at  11:42 PM",
    Created: "Hema Shyamala",
    ans: "The vehicle is intended to be used within the city limits, and for any further travel, you should consult with ONN bikes before the journey.",
  },
];

var data = JSON.parse(localStorage.getItem("data"));

console.log(data);

var dis = document.getElementById("questions");
var dis1 = document.getElementById("answers");
var dis2 = document.getElementById("sourceofQues");
var dis3 = document.getElementById("creator");
var dis4 = document.getElementById("time");

var a1 = document.getElementById("ans1");
var a2 = document.getElementById("ans2");
var a3 = document.getElementById("ans3");
var a4 = document.getElementById("ans4");
var a5 = document.getElementById("ans5");
var a6 = document.getElementById("ans6");
var a7 = document.getElementById("ans7");
var a8 = document.getElementById("ans8");
var a9 = document.getElementById("ans9");
var a10 = document.getElementById("ans10");

for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
  if (answer[i].ques == data[data.length - 1]) {
    dis.innerHTML = answer[i].ques;
    dis1.innerHTML = answer[i].ans;
    dis2.innerHTML = answer[i].source;
    dis3.innerHTML = `created by : ${answer[i].Created}`;
    dis4.innerHTML = `Modified on: ${answer[i].time}`;

    if (i + 10 > answer.length) {
      a1.innerHTML = answer[i - 1].ques;
      a2.innerHTML = answer[i - 2].ques;
      a3.innerHTML = answer[i - 3].ques;
      a4.innerHTML = answer[i - 4].ques;
      a5.innerHTML = answer[i - 5].ques;
      a6.innerHTML = answer[i - 6].ques;
      a7.innerHTML = answer[i - 7].ques;
      a8.innerHTML = answer[i - 8].ques;
      a9.innerHTML = answer[i - 9].ques;
      a10.innerHTML = answer[i - 10].ques;
    } else {
      a1.innerHTML = answer[i + 1].ques;
      a2.innerHTML = answer[i + 2].ques;
      a3.innerHTML = answer[i + 3].ques;
      a4.innerHTML = answer[i + 4].ques;
      a5.innerHTML = answer[i + 5].ques;
      a6.innerHTML = answer[i + 6].ques;
      a7.innerHTML = answer[i + 7].ques;
      a8.innerHTML = answer[i + 8].ques;
      a9.innerHTML = answer[i + 9].ques;
      a10.innerHTML = answer[i + 10].ques;
    }
  }
}

var related1 = document.getElementById("ans1");
related1.addEventListener("click", test);

function test() {
  window.location.href = "/home/faq1/solution";
  var link = related1.innerHTML;

  let arr;
  arr = localStorage.getItem("data");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }
  arr.push(link);
  localStorage.setItem("data", JSON.stringify(arr));
}

var related2 = document.getElementById("ans2");
related2.addEventListener("click", test2);

function test2() {
  window.location.href = "/home/faq1/solution";
  var link = related2.innerHTML;

  let arr;
  arr = localStorage.getItem("data");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }
  arr.push(link);
  localStorage.setItem("data", JSON.stringify(arr));
}

var related3 = document.getElementById("ans3");
related3.addEventListener("click", test3);

function test3() {
  window.location.href = "/home/faq1/solution";
  var link = related3.innerHTML;

  let arr;
  arr = localStorage.getItem("data");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }
  arr.push(link);
  localStorage.setItem("data", JSON.stringify(arr));
}

var related4 = document.getElementById("ans4");
related4.addEventListener("click", test4);

function test4() {
  window.location.href = "/home/faq1/solution";
  var link = related4.innerHTML;

  let arr;
  arr = localStorage.getItem("data");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }
  arr.push(link);
  localStorage.setItem("data", JSON.stringify(arr));
}
var related5 = document.getElementById("ans5");
related5.addEventListener("click", test5);

function test5() {
  window.location.href = "/home/faq1/solution";
  var link = related5.innerHTML;

  let arr;
  arr = localStorage.getItem("data");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }
  arr.push(link);
  localStorage.setItem("data", JSON.stringify(arr));
}

var related6 = document.getElementById("ans6");
related6.addEventListener("click", test6);

function test6() {
  window.location.href = "/home/faq1/solution";
  var link = related6.innerHTML;

  let arr;
  arr = localStorage.getItem("data");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }
  arr.push(link);
  localStorage.setItem("data", JSON.stringify(arr));
}

var related7 = document.getElementById("ans7");
related7.addEventListener("click", test7);

function test7() {
  window.location.href = "/home/faq1/solution";
  var link = related7.innerHTML;

  let arr;
  arr = localStorage.getItem("data");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }
  arr.push(link);
  localStorage.setItem("data", JSON.stringify(arr));
}
var related8 = document.getElementById("ans8");
related8.addEventListener("click", test8);

function test8() {
  window.location.href = "/home/faq1/solution";
  var link = related8.innerHTML;

  let arr;
  arr = localStorage.getItem("data");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }
  arr.push(link);
  localStorage.setItem("data", JSON.stringify(arr));
}
var related9 = document.getElementById("ans9");
related9.addEventListener("click", test9);

function test9() {
  window.location.href = "/home/faq1/solution";
  var link = related9.innerHTML;

  let arr;
  arr = localStorage.getItem("data");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }
  arr.push(link);
  localStorage.setItem("data", JSON.stringify(arr));
}
var related10 = document.getElementById("ans10");
related10.addEventListener("click", test10);

function test10() {
  window.location.href = "/home/faq1/solution";
  var link = related10.innerHTML;

  let arr;
  arr = localStorage.getItem("data");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }
  arr.push(link);
  localStorage.setItem("data", JSON.stringify(arr));
}

var userreactn = document.getElementById("userreaction");

var nomorvar = document.getElementById("dekha");
var textar = document.createElement("textarea");
var textar1 = document.createElement("button");
textar1.innerHTML = "submit";
var yess = document.getElementById("yes");
yess.addEventListener("click", good);

function good() {
  userreactn.innerHTML = "Thank you for appreciation!";
  userreactn.style.color = "green";
  userreactn.style.textAlign = "center";
  textar.style.display = "none";
  textar1.style.display = "none";
}

var noo = document.getElementById("no");
noo.addEventListener("click", bad);

function bad() {
  userreactn.innerHTML = "Sorry for inconvenience caused";
  userreactn.style.color = "red";
  userreactn.style.textAlign = "start";
  textar.style.display = "block";
  textar1.style.display = "block";
  nomorvar.append(textar, textar1);
}
