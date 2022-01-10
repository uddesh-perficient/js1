

let profile = {
    firstname: "Uddesh",
    lastname: "Tidke",
    designation: "Intern Consulting",
    contact:8830702991,
    address: {
        plotNo: 41,
        area: "Trimurti nagar",
        city: "Nagpur",
        pinCode:440022,
        country: "India",
    }
};

document.getElementById("profile").innerHTML = "I am " + " " +profile.firstname + " " + profile.lastname + " . " + "My designation is " + 
                                              profile.designation + " ." + "You can contact me on "+ profile.contact +" . " +"My address is plot no. " +
                                              profile.address.plotNo + " , " +  profile.address.area + " , " + profile.address.city + 
                                              " , " + profile.address.pinCode +" , " +  profile.address.country +" .";

                                       