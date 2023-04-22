var data = [
  { country: "Afghanistan", gini: 36.8 },
  { country: "Albania", gini: 29 },
  { country: "Algeria", gini: 27.6 },
  { country: "Andorra", gini: 40 },
  { country: "Angola", gini: 42.6 },
  { country: "Antigua and Barbuda", gini: 40 },
  { country: "Argentina", gini: 42.4 },
  { country: "Armenia", gini: 32.6 },
  { country: "Australia", gini: 32.3 },
  { country: "Austria", gini: 30.5 },
  { country: "Azerbaijan", gini: 32.4 },
  { country: "Bahamas", gini: 43.7 },
  { country: "Bahrain", gini: 40 },
  { country: "Bangladesh", gini: 32.4 },
  { country: "Barbados", gini: 43.8 },
  { country: "Belarus", gini: 27 },
  { country: "Belgium", gini: 27.7 },
  { country: "Belize", gini: 53.3 },
  { country: "Benin", gini: 47.8 },
  { country: "Bhutan", gini: 37.4 },
  { country: "Bolivia", gini: 44.6 },
  { country: "Bosnia and Herzegovina", gini: 32.7 },
  { country: "Botswana", gini: 60.5 },
  { country: "Brazil", gini: 51.3 },
  { country: "Brunei", gini: 40 },
  { country: "Bulgaria", gini: 37.4 },
  { country: "Burkina Faso", gini: 35.3 },
  { country: "Burundi", gini: 38.6 },
  { country: "Cambodia", gini: 42 },
  { country: "Cameroon", gini: 46.6 },
  { country: "Canada", gini: 31.1 },
  { country: "Cape Verde", gini: 47.2 },
  { country: "Central African Republic", gini: 56.2 },
  { country: "Chad", gini: 43.3 },
  { country: "Chile", gini: 47.7 },
  { country: "China", gini: 39.1 },
  { country: "Colombia", gini: 50.8 },
  { country: "Comoros", gini: 45.3 },
  { country: "Congo , Dem. Rep.", gini: 42.1 },
  { country: "Congo , Rep.", gini: 48.9 },
  { country: "Costa Rica", gini: 48.7 },
  { country: "Cote d'Ivoire", gini: 41.5 },
  { country: "Croatia", gini: 31.1 },
  { country: "Cuba", gini: 43.4 },
  { country: "Cyprus", gini: 34 },
  { country: "Czech Republic", gini: 25.9 },
  { country: "Denmark", gini: 28.2 },
  { country: "Djibouti", gini: 44.1 },
  { country: "Dominica", gini: 40 },
  { country: "Dominican Republic", gini: 45.3 },
  { country: "Ecuador", gini: 45 },
  { country: "Egypt", gini: 31.8 },
  { country: "El Salvador", gini: 40 },
  { country: "Equatorial Guinea", gini: 40 },
  { country: "Eritrea", gini: 40 },
  { country: "Estonia", gini: 32.7 },
  { country: "Eswatini", gini: 51.5 },
  { country: "Ethiopia", gini: 39.1 },
  { country: "Fiji", gini: 36.7 },
  { country: "Finland", gini: 27.1 },
  { country: "France", gini: 32.7 },
  { country: "Gabon", gini: 38 },
  { country: "Gambia", gini: 35.9 },
  { country: "Georgia", gini: 36.5 },
  { country: "Germany", gini: 31.7 },
  { country: "Ghana", gini: 42.4 },
  { country: "Greece", gini: 36 },
  { country: "Grenada", gini: 40 },
  { country: "Guatemala", gini: 48.3 },
  { country: "Guinea", gini: 33.7 },
  { country: "Guinea-Bissau", gini: 50.7 },
  { country: "Guyana", gini: 43.2 },
  { country: "Haiti", gini: 50.9 },
  { country: "Holy See", gini: 40 },
  { country: "Honduras", gini: 50.1 },
  { country: "Hungary", gini: 30.4 },
  { country: "Iceland", gini: 27.8 },
  { country: "India", gini: 35.1 },
  { country: "Indonesia", gini: 38.2 },
  { country: "Iran", gini: 38.8 },
  { country: "Iraq", gini: 29.5 },
  { country: "Ireland", gini: 31.8 },
  { country: "Israel", gini: 41.4 },
  { country: "Italy", gini: 35.4 },
  { country: "Jamaica", gini: 45.5 },
  { country: "Japan", gini: 32.1 },
  { country: "Jordan", gini: 33.7 },
  { country: "Kazakhstan", gini: 26.9 },
  { country: "Kenya", gini: 40.8 },
  { country: "Kiribati", gini: 37 },
  { country: "Kuwait", gini: 40 },
  { country: "Kyrgyz Republic", gini: 26.8 },
  { country: "Lao", gini: 36.4 },
  { country: "Latvia", gini: 34.2 },
  { country: "Lebanon", gini: 31.8 },
  { country: "Lesotho", gini: 54.2 },
  { country: "Liberia", gini: 33.2 },
  { country: "Libya", gini: 40 },
  { country: "Liechtenstein", gini: 40 },
  { country: "Lithuania", gini: 37.4 },
  { country: "Luxembourg", gini: 33.8 },
  { country: "Madagascar", gini: 42.7 },
  { country: "Malawi", gini: 45.5 },
  { country: "Malaysia", gini: 41 },
  { country: "Maldives", gini: 38.4 },
  { country: "Mali", gini: 33 },
  { country: "Malta", gini: 29.4 },
  { country: "Marshall Islands", gini: 40 },
  { country: "Mauritania", gini: 32.6 },
  { country: "Mauritius", gini: 35.8 },
  { country: "Mexico", gini: 45.9 },
  { country: "Micronesia, Fed. Sts.", gini: 40.1 },
  { country: "Moldova", gini: 26.4 },
  { country: "Monaco", gini: 40 },
  { country: "Mongolia", gini: 32.4 },
  { country: "Montenegro", gini: 31.9 },
  { country: "Morocco", gini: 39.6 },
  { country: "Mozambique", gini: 54 },
  { country: "Myanmar", gini: 38.1 },
  { country: "Namibia", gini: 59.1 },
  { country: "Nauru", gini: 40 },
  { country: "Nepal", gini: 32.8 },
  { country: "Netherlands", gini: 28.2 },
  { country: "New Zealand", gini: 35 },
  { country: "Nicaragua", gini: 46.2 },
  { country: "Niger", gini: 34.3 },
  { country: "Nigeria", gini: 43 },
  { country: "North Korea", gini: 37 },
  { country: "North Macedonia", gini: 35.6 },
  { country: "Norway", gini: 27.5 },
  { country: "Oman", gini: 40 },
  { country: "Pakistan", gini: 33.5 },
  { country: "Palau", gini: 40 },
  { country: "Palestine", gini: 33.7 },
  { country: "Panama", gini: 50.4 },
  { country: "Papua New Guinea", gini: 41.9 },
  { country: "Paraguay", gini: 47.9 },
  { country: "Peru", gini: 43.8 },
  { country: "Philippines", gini: 42.2 },
  { country: "Poland", gini: 30.8 },
  { country: "Portugal", gini: 35.5 },
  { country: "Qatar", gini: 40 },
  { country: "Romania", gini: 28.3 },
  { country: "Russia", gini: 37.7 },
  { country: "Rwanda", gini: 45.1 },
  { country: "Samoa", gini: 42.1 },
  { country: "San Marino", gini: 40 },
  { country: "Sao Tome and Principe", gini: 30.8 },
  { country: "Saudi Arabia", gini: 40 },
  { country: "Senegal", gini: 40.3 },
  { country: "Serbia", gini: 34.1 },
  { country: "Seychelles", gini: 46.8 },
  { country: "Sierra Leone", gini: 34 },
  { country: "Singapore", gini: 40.9 },
  { country: "Slovak Republic", gini: 26.5 },
  { country: "Slovenia", gini: 25.4 },
  { country: "Solomon Islands", gini: 37.1 },
  { country: "Somalia", gini: 48 },
  { country: "South Africa", gini: 63 },
  { country: "South Korea", gini: 31.6 },
  { country: "South Sudan", gini: 45 },
  { country: "Spain", gini: 36.2 },
  { country: "Sri Lanka", gini: 39.8 },
  { country: "St. Kitts and Nevis", gini: 40 },
  { country: "St. Lucia", gini: 42.6 },
  { country: "St Vincent and the Grenadines", gini: 40 },
  { country: "Sudan", gini: 35.4 },
  { country: "Suriname", gini: 61 },
  { country: "Sweden", gini: 29 },
  { country: "Switzerland", gini: 32.3 },
  { country: "Syria", gini: 35.2 },
  { country: "Tajikistan", gini: 34 },
  { country: "Tanzania", gini: 37.8 },
  { country: "Thailand", gini: 36 },
  { country: "Timor-Leste", gini: 28.7 },
  { country: "Togo", gini: 43.1 },
  { country: "Tonga", gini: 37.5 },
  { country: "Trinidad and Tobago", gini: 41.3 },
  { country: "Tunisia", gini: 35.8 },
  { country: "Turkey", gini: 41.9 },
  { country: "Turkmenistan", gini: 46.4 },
  { country: "Tuvalu", gini: 39.1 },
  { country: "Uganda", gini: 42.8 },
  { country: "Ukraine", gini: 25 },
  { country: "United Arab Emirates", gini: 40 },
  { country: "United Kingdom", gini: 33.2 },
  { country: "United States", gini: 41.5 },
  { country: "Uruguay", gini: 39.7 },
  { country: "Uzbekistan", gini: 33.5 },
  { country: "Vanuatu", gini: 37.6 },
  { country: "Venezuela", gini: 46.9 },
  { country: "Vietnam", gini: 35.3 },
  { country: "Yemen", gini: 36.7 },
  { country: "Zambia", gini: 57.1 },
  { country: "Zimbabwe", gini: 43.2 },
];
