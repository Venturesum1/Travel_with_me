let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});


var butn = document.getElementById("butn")
var btnCount = 0
butn.addEventListener("click", function(event){
    // avoid reload the window
    event.preventDefault();

    btnCount++

    var destname = document.querySelector("#destname").value.toLowerCase();
    var dat = document.getElementById("dat").value
    var price = document.getElementById("price").value

    var visit = {
        kolkata : {
            priceOnseason : 10000,
            priceOffseason : 5600,
            places:"Victorial Memorial, Howrah Bridge, Indian Museum, Eden Garden, Science city, Fort Willam",
            location:  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689691563!2d88.26495054507667!3d22.53556493702462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1682270996986!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        delhi : {
            priceOnseason : 9000,
            priceOffseason : 5000,
            places:"India Gate, Qutub Minar, Golden Triangle Tour, Humayun's Tomb",
            location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95103145414!2d76.7635684832433!3d28.644287353222076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1682271065744!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        hyderabad : {
            priceOnseason : 11000,
            priceOffseason : 7000,
            places:"Charminar, Golconda Fort, Birla Mandir, Mecca Masjid, Shilparamam, NTR Garden's",
            location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509519077!2d78.24323101742978!3d17.41260864296522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1682271119506!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        goa : {
            priceOnseason : 9000,
            priceOffseason : 5000,
            places:"Palolem Beach, Penaji, Vegator, Agonda, Morjim",
            location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984956.6951397316!2d73.34718915413693!3d15.350084487346637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1682271169359!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        mumbai : {
            priceOnseason : 9000,
            priceOffseason : 5000,
            places:"Gateway of India Mumbai, Haji Ali Dargah, Sanjai Gandhi National Park, Kanheri Caves, Elephanta Caves",
            location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292626254!2d72.71637178509144!3d19.08250200603438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682271353463!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        himachal : {
            priceOnseason : 17000,
            priceOffseason : 9000,
            places:"Manali, Shimla, Dharamshala, Kasauli, Kullu, Kufri, Chamba, Palampur",
            location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1735916.529923901!2d75.98224946418843!3d31.81241005822937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1682271392006!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        kashmir : 
        {
            priceOnseason : 15000,
            priceOffseason : 9000,
            places:"Srinagar, Pahalgam, Sonamarg, Dal Lake, Indira Gandhi Tulip Garden",
            location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702922.4022456165!2d73.94548370641367!3d33.526857395354185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1682271421385!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        assam : {
            priceOnseason : 10000,
            priceOffseason : 6000,
            places:"Guwahati, Kaziranga National Park, Jorhat, Sivasagar",
            location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671003.6890606647!2d90.21638093206815!3d26.034716229336343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374516c94c312d63%3A0xd11a73bb736719fb!2sAssam!5e0!3m2!1sen!2sin!4v1682271462573!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        kerela : {
            priceOnseason : 10000,
            priceOffseason : 6000,
            places:"Kochi, Munnar, Thiruvananthapuram, Kovalam, Varkala, Thrissur",
            location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016656.517471475!2d73.49568708504822!3d10.538724608293709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1682271505447!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        maharashtra : {
            priceOnseason : 10000,
            priceOffseason : 6000,
            places:"Aga Khan Palaces, Sinhagad Fort, Lonavala, Nashik, Nagpur, Alibag",
            location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867495.590336486!2d74.12751031985795!3d18.80478520364663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra!5e0!3m2!1sen!2sin!4v1682271543225!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        } 
    }

    var div = document.getElementById("div1")

    var div1 = document.createElement("div")
    var div2 = document.createElement("div")

    var para1 = document.createElement("p")
    var para2 = document.createElement("p")
    var para3 = document.createElement("p")
    var para4 = document.createElement("p")
    var h3 = document.createElement("h3")
    var hr = document.createElement("hr")
    var h31 = document.createElement("h2")
    

    

    // console.log(visit[destname].priceOnseason);
    h3.innerHTML = "Check All of these carefully"
    h3.style.textAlign = "center"
    h3.style.fontFamily = "Courier New"
    h3.style.color = "rgb(62, 241, 205)"

    var pOn = visit[destname].priceOnseason
    // console.log(pOn)
    h31.innerHTML = `${btnCount}`
    para4.innerHTML = `Your destination name is : <b>${destname}</b>`
    para1.innerHTML = `OnSeason Price is : <b>${pOn}/-</b>`
    para2.innerHTML = `OffSeason Price is : <b>${visit[destname].priceOffseason}/-</b>`
    para3.innerHTML = `Best Places provided for you : <b>${visit[destname].places}.</b>`

    div2.innerHTML = `${visit[destname].location}`

    div1.append(h31)
    div1.append(h3)
    div1.append(para4)
    div1.append(para1)
    div1.append(para2)
    div1.append(para3)
    div1.append(div2)
    div1.append(hr)


    div.append(div1)

    

})