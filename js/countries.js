"use strict"
const countries = {
    countriesList : [
        ["Afghanistan", "afghanistan"],
        ["Albania", "albania"],
        ["Andorra", "andorra"],
        ["Angola", "angola"],
        ["Antigua and Barbuda", "antiguaAndBarbuda"],
        ["Argentina", "argentina"],
        ["Armenia", "armenia"],
        ["Australia", "australia"],
        ["Austria", "austria"],
        ["Azerbaijan", "azerbaijan"],
        ["Bahamas", "bahamas"],
        ["Bahrain", "bahrain"],
        ["Bangladesh", "bangladesh"],
        ["Barbados", "barbados"],
        ["Belarus", "belarus"],
        ["Belgium", "belgium"],
        ["Belize", "belize"],
        ["Benin", "benin"],
        ["Bhutan", "bhutan"],
        ["Bosnia and Herzegovina", "bosniaAndHerzegovina"],
        ["Botswana", "botswana"],
        ["Brazil", "brazil"],
        ["Brunei", "brunei"],
        ["Bulgaria", "bulgaria"],
        ["Burkina Faso", "burkinaFaso"],
        ["Burundi", "burundi"],
        ["Cabo Verde", "caboVerde"],
        ["Cambodia", "cambodia"],
        ["Cameroon", "cameroon"],
        ["Canada", "canada"],
        ["C.A.R", "CAR"],
        ["Chad", "chad"],
        ["China", "china"],
        ["Colombia", "colombia"],
        ["Costa Rica", "costaRica"],
        ["Cote d'Ivoir", "coteDivoir"],
        ["Cuba", "cuba"],
        ["Cyprus", "cyprus"],
        ["Czechia", "czechia"],
        ["Denmark", "denmark"],
        ["Djibouti", "djibouti"],
        ["Dominican Republic", "dominicanRepublic"],
        ["Dominica", "dominica"],
        ["DPRK", "DPRK"],
        ["DRC", "DRC"],
        ["Ecuador", "ecuador"],
        ["Egypt", "egypt"],
        ["Eritrea", "eritrea"],
        ["Estonia", "estonia"],
        ["Finland", "finland"],
        ["France", "france"],
        ["Gabon", "gabon"],
        ["Gambia", "gambia"],
        ["Georgia", "georgia"],
        ["Germany", "germany"],
        ["Ghana", "ghana"],
        ["Greece", "greece"],
        ["Grenada", "grenada"],
        ["Guatemala", "guatemala"],
        ["Guinea", "guinea"],
        ["Guinea Bissau", "guineaBissau"],
        ["Guyana", "guyana"],
        ["Haiti", "haiti"],
        ["Honduras", "honduras"],
        ["Hungary", "hungary"],
        ["Iceland", "iceland"],
        ["India", "india"],
        ["Indonesia", "indonesia"],
        ["Iran", "iran"],
        ["Iraq", "iraq"],
        ["Ireland", "ireland"],
        ["Isreal", "isreal"],
        ["Jamaica", "jamaica"],
        ["Japan", "japan"],
        ["Jordan", "jordan"],
        ["Kazakhstan", "kazakhstan"],
        ["Kenya", "kenya"],
        ["Kiribati", "kiribati"],
        ["Krygystan", "krygystan"],
        ["Kuwait", "kuwait"],
        ["Laos", "laos"],
        ["Latvia", "latvia"],
        ["Lebanon", "lebanon"],
        ["Lesotho", "lesotho"],
        ["Liberia", "liberia"],
        ["Libya", "libya"],
        ["Liechtenstein", "liechtenstein"],
        ["Lithuania", "lithuania"],
        ["Luxembourg", "luxembourg"],
        ["Madagascar", "madagascar"],
        ["Malawi", "malawi"],
        ["Malaysia", "malaysia"],
        ["Maldives", "maldives"],
        ["Maldova", "maldova"],
        ["Mali", "mali"],
        ["Malta", "malta"],
        ["Marshall Islands", "marshallIslands"],
        ["Mauritania", "mauritania"],
        ["Mexico", "mexico"],
        ["Micronesia", "micronesia"],
        ["Monaco", "monaco"],
        ["Mongolia", "mongolia"],
        ["Montenegro", "montenegro"],
        ["Mozambique", "mozambique"],
        ["Myanmar", "myanmar"],
        ["Namibia", "namibia"],
        ["Nauru", "nauru"],
        ["Nepal", "nepal"],
        ["Netherlands", "netherlands"],
        ["New Zealand", "newZealand"],
        ["Nicaragua", "nicaragua"],
        ["Niger", "niger"],
        ["Nigeria", "nigeria"],
        ["North Macedonia", "northMacedonia"],
        ["Norway", "norway"],
        ["Oman", "oman"],
        ["Pakistan", "pakistan"],
        ["Palau", "palau"],
        ["Palestine", "palestine"],
        ["Panama", "panama"],
        ["Papua New Guinea", "papuaNewGuinea"],
        ["Paraguay", "paraguay"],
        ["Philippines", "philippines"],
        ["Poland", "poland"],
        ["Portugal", "portugal"],
        ["Qatar", "qatar"],
        ["Romania", "romania"],
        ["Russia", "russia"],
        ["Rwandan", "rwanda"],
        ["St. Kittis and Nevis", "saintKittisAndNevis"],
        ["st. Lucia", "saintLucia"],
        ["Samoa", "samoa"],
        ["San Marino", "sanMarino"],
        ["Sao Tome and Principe", "saoTomeAndPrincipe"],
        ["Saudi Arabia", "saudiArabia"],
        ["Senegal", "senegal"],
        ["Seychelles", "seychelles"],
        ["SierraLeone", "sierraLeone"],
        ["Singapore", "singapore"],
        ["Slovakia", "slovakia"],
        ["Slovenia", "slovenia"],
        ["Solomon Islands", "solomonIslands"],
        ["Somalia", "somalia"],
        ["South Africa", "southAfrica"],
        ["South Korea", "southKorea"],
        ["South Sudan", "southSudan"],
        ["Spain", "spain"],
        ["St. Vincent Grenadines", "stVincentGrenadines"],
        ["Sudan", "sudan"],
        ["Suriname", "suriname"],
        ["Sweden", "sweden"],
        ["Switzerland", "switzerland"],
        ["Syria", "syria"],
        ["Tajikistan", "tajikistan"],
        ["Tazania", "tanzania"],
        ["Thailand", "thailand"],
        ["Timor Leste", "timorLeste"],
        ["Togo", "togo"],
        ["Tonga", "tonga"],
        ["Trinidad and Tobago", "trinidadAndTobago"],
        ["Tunisia", "tunisia"],
        ["Turkey", "turkey"],
        ["Turkmenistan", "turkmenistan"],
        ["Tuvalu", "tuvalu"],
        ["U.A.E", "UAE"],
        ["Uganda", "uganda"],
        ["Ukraine", "ukraine"],
        ["U.K.", "UK"],
        ["Uruguay", "uruguay"],
        ["Uzbekistan", "uzbekistan"],
        ["Vanuatu", "vanuatu"],
        ["Vanezuela", "venezuela"],
        ["Vietnam", "vietnam"],
        ["Yemen", "yemen"],
        ["Zambia", "zambia"],
        ["Zimbabwe", "zimbabwe"]
    ],
    getCountry : function(){
        return this.countriesList[Math.floor(Math.random()*this.countriesList.length)];
    },
    getCountries : function(){
        return this.countriesList
    }
}

export default countries