// url : "https://data.covid19india.org/v4/min/data.min.json"
// url : "https://www.distancelatlong.com/country/india"
// array of objects 
const covidData = [
  {
    state: 'Andaman and Nicobar Islands' ,
    id: 'AN' ,
    lat: 11.66702557,
    long: 92.73598262,
    confirmed: 3,
    recovered: 5,
    tested: 8936 ,
    totConfirmed: 7651,
    totRecovered: 7518,
    totTested: 598033
    
  } ,

  {
    state: 'Andhra Pradesh' ,
    id: 'AP' ,
    lat: 14.7504291,
    long: 78.57002559,
    confirmed: 2873,
    recovered: 3590,
    tested: 254532 ,
    totConfirmed: 2066450,
    totRecovered: 2047722,
    totTested: 29518787
  } ,

  {
    state: 'Arunachal Pradesh' ,
    id: 'AR' ,
    lat: 27.10039878,
    long: 93.61660071,
    confirmed: 66,
    recovered: 97,
    tested: 4788 ,
    totConfirmed: 55155,
    totRecovered: 54774,
    totTested: 1185436
  } ,


  {
    state: 'Assam' ,
    id: 'AS' ,
    lat: 26.7499809,
    long: 94.21666744,
    confirmed: 2056,
    recovered: 2215,
    tested: 269097 ,
    totConfirmed: 610645,
    totRecovered: 600974,
    totTested: 24712042
  } ,

  {
    state: 'Bihar' ,
    id: 'BR' ,
    lat: 25.78541445,
    long: 87.4799727,
    confirmed: 40,
    recovered: 31,
    tested: 1378539 ,
    totConfirmed: 726098,
    totRecovered: 716390,
    totTested: 50531824
  } ,

  {
    state: 'Chandigarh' ,
    id: 'CH' ,
    lat: 30.71999697,
    long: 76.78000565,
    confirmed: 28,
    recovered: 20,
    tested: 10726 ,
    totConfirmed: 65351,
    totRecovered: 64495,
    totTested: 792851
  } ,

  {
    state: 'Chhattisgarh' ,
    id: 'CT' ,
    lat: 22.09042035,
    long: 82.15998734,
    confirmed: 205,
    recovered: 103,
    tested: 147451 ,
    totConfirmed: 1006052,
    totRecovered: 992159,
    totTested: 13709510
  } ,

  {
    state: 'Delhi' ,
    id: 'DL' ,
    lat: 28.6699929,
    long: 77.23000403,
    confirmed: 267,
    recovered: 239,
    tested: 395086 ,
    totConfirmed: 1439870,
    totRecovered: 1414431,
    totTested: 29427753
  } ,

  {
    state: 'Dadar Nagar Haveli' ,
    id: 'DN' ,
    lat: 20.26657819,
    long: 73.0166178,
    confirmed: 0,
    recovered: 2,
    tested: 100 ,
    totConfirmed: 10681,
    totRecovered: 10644,
    totTested: 72410
  } ,

  {
    state: 'Goa' ,
    id: 'GA' ,
    lat: 15.491997,
    long: 73.81800065,
    confirmed: 222,
    recovered: 409,
    tested: 19026 ,
    totConfirmed: 178108,
    totRecovered: 174392,
    totTested: 1468399
  } ,

  {
    state: 'Gujarat' ,
    id: 'GJ' ,
    lat: 22.309425,
    long: 72.136230,
    confirmed: 159,
    recovered: 116,
    tested: 328489 ,
    totConfirmed: 826577,
    totRecovered: 816283,
    totTested: 30928063
  } ,

  {
    state: 'Himachal Pradesh' ,
    id: 'HP' ,
    lat: 31.10002545,
    long: 77.16659704,
    confirmed: 1537,
    recovered: 1154,
    tested: 64352 ,
    totConfirmed: 224106,
    totRecovered: 218410,
    totTested: 3685011
  } ,

  {
    state: 'Haryana' ,
    id: 'HR' ,
    lat: 28.45000633	,
    long: 77.01999101,
    confirmed: 95,
    recovered: 87,
    tested: 148110 ,
    totConfirmed: 771252,
    totRecovered: 761068,
    totTested: 13032504
  } ,

  {
    state: 'Jharkhand' ,
    id: 'JH' ,
    lat: 23.80039349,
    long: 86.41998572,
    confirmed: 137,
    recovered: 250,
    tested: 464579 ,
    totConfirmed: 348764,
    totRecovered: 343518,
    totTested: 15985878
  } ,

  {
    state: 'Jammu and Kashmir' ,
    id: 'JK' ,
    lat: 34.29995933,
    long: 74.46665849,
    confirmed: 611,
    recovered: 572,
    tested: 254608 ,
    totConfirmed: 332249,
    totRecovered: 326915,
    totTested: 16202346
  } ,

  {
    state: 'Karnataka' ,
    id: 'KA' ,
    lat: 12.57038129,
    long: 76.91999711,
    confirmed: 2347,
    recovered: 2339,
    tested: 724215 ,
    totConfirmed: 2988333,
    totRecovered: 2941578,
    totTested: 50873103
  } ,

  {
    state: 'Kerala' ,
    id: 'KL' ,
    lat: 8.900372741,
    long: 76.56999263,
    confirmed: 611,
    recovered: 572,
    tested: 254608 ,
    totConfirmed: 332249,
    totRecovered: 326915,
    totTested: 16202346
  } ,

  {
    state: 'Ladakh' ,
    id: 'LA' ,
    lat: 34.209515,
    long: 77.615112,
    confirmed: 58,
    recovered: 28,
    tested: 2475 ,
    totConfirmed: 20962,
    totRecovered: 20687,
    totTested: 555568
  } ,

  {
    state: 'Lakshadweep' ,
    id: 'LD' ,
    lat: 10.56257331,
    long: 72.63686717,
    confirmed: 0,
    recovered: 0,
    tested: 1625 ,
    totConfirmed: 10365,
    totRecovered: 10270,
    totTested: 263541
  } ,

  {
    state: 'Maharashtra' ,
    id: 'MH' ,
    lat: 19.25023195,
    long: 73.16017493,
    confirmed: 8117,
    recovered: 15146,
    tested: 773516 ,
    totConfirmed: 6611078,
    totRecovered: 6450585,
    totTested: 62667211
  } ,

  {
    state: 'Meghalaya' ,
    id: 'ML' ,
    lat: 25.57049217,
    long: 91.8800142,
    confirmed: 256,
    recovered: 460,
    tested: 13944 ,
    totConfirmed: 83627,
    totRecovered: 81746,
    totTested: 1151665
  } ,

  {
    state: 'Manipur' ,
    id: 'MN' ,
    lat: 24.79997072,
    long: 93.95001705,
    confirmed: 439,
    recovered: 652,
    tested: 12787 ,
    totConfirmed: 123731,
    totRecovered: 121102,
    totTested: 1367673
  } ,

  {
    state: 'Madhya Pradesh' ,
    id: 'MP' ,
    lat: 21.30039105,
    long: 76.13001949,
    confirmed: 105,
    recovered: 74,
    tested: 393209 ,
    totConfirmed: 792854,
    totRecovered: 782215,
    totTested: 20294225
  } ,

  {
    state: 'Mizoram' ,
    id: 'MZ' ,
    lat: 23.71039899,
    long: 92.72001461,
    confirmed: 4098,
    recovered: 5685,
    tested: 42841 ,
    totConfirmed: 121359,
    totRecovered: 114612,
    totTested: 1298444
  } ,

  {
    state: 'Nagaland' ,
    id: 'NL' ,
    lat: 25.6669979,
    long: 94.11657019,
    confirmed: 130,
    recovered: 144,
    tested: 4606 ,
    totConfirmed: 31842,
    totRecovered: 29904,
    totTested: 395416
  } ,
  
  {
    state: 'Orissa' ,
    id: 'OR' ,
    lat: 19.82042971,
    long: 85.90001746,
    confirmed: 3046,
    recovered: 3230,
    tested: 473919 ,
    totConfirmed: 1041457,
    totRecovered: 1029147,
    totTested: 21994343
  } ,
  
  {
    state: 'Punjab' ,
    id: 'PB' ,
    lat: 31.51997398,
    long: 75.98000281,
    confirmed: 192,
    recovered: 162,
    tested: 221114 ,
    totConfirmed: 602401,
    totRecovered: 585591,
    totTested: 15429415
  } ,
  
  {
    state: 'Puducherry' ,
    id: 'PY' ,
    lat: 11.93499371	,
    long: 79.83000037,
    confirmed: 53,
    recovered: 63,
    tested: 2841 ,
    totConfirmed: 16488,
    totRecovered: 16150,
    totTested: 73142
  } ,
  
  {
    state: 'Rajasthan' ,
    id: 'RJ' ,
    lat: 26.44999921,
    long: 74.63998124,
    confirmed: 27,
    recovered: 26,
    tested: 95132 ,
    totConfirmed: 95132,
    totRecovered: 945443,
    totTested: 14807752
  } ,
  
  {
    state: 'Sikkim' ,
    id: 'SK' ,
    lat: 27.3333303,
    long: 88.6166475,
    confirmed: 79,
    recovered: 76,
    tested: 2847 ,
    totConfirmed: 31979,
    totRecovered: 31063,
    totTested: 261343
  } ,
  
  {
    state: 'Telangana' ,
    id: 'TG' ,
    lat: 18.1124,
    long: 79.0193,
    confirmed: 1189,
    recovered: 1121,
    tested: 261086 ,
    totConfirmed: 671463,
    totRecovered: 663498,
    totTested: 27569831
  } ,
  
  {
    state: 'Tamil Nadu' ,
    id: 'TN' ,
    lat: 12.92038576,
    long: 78.6569,
    confirmed: 7407,
    recovered: 8852,
    tested: 858304 ,
    totConfirmed: 2702623,
    totRecovered: 2655015,
    totTested: 51159242
  } ,
  
  {
    state: 'Tripura' ,
    id: 'TR' ,
    lat: 23.83540428,
    long: 91.27999914,
    confirmed: 87,
    recovered: 62,
    tested: 22126 ,
    totConfirmed: 84468,
    totRecovered: 83466 ,
    totTested: 1983127
  } ,
  
  {
    state: 'Uttar Pradesh' ,
    id: 'UP' ,
    lat: 27.59998069,
    long: 78.05000565,
    confirmed: 63,
    recovered: 58,
    tested: 1140736 ,
    totConfirmed: 1710158,
    totRecovered: 1687151,
    totTested: 83635222
  } ,

  {
    state: 'Uttarakhand ' ,
    id: 'UT' ,
    lat: 30.0668,
    long: 79.0193,
    confirmed: 75,
    recovered: 74,
    tested: 83377 ,
    totConfirmed: 343896,
    totRecovered: 330195 ,
    totTested: 7781148
  } ,

  {
    state: 'West Bengal' ,
    id: 'WB' ,
    lat: 22.58039044,
    long: 88.32994665,
    confirmed: 6453,
    recovered: 5953,
    tested: 300114 ,
    totConfirmed: 1592908,
    totRecovered: 1565471 ,
    totTested: 19228303
  } 


] ;

export default covidData ;