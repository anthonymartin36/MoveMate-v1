
//curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IlRFU1QifQ.eyJjbGllbnRfaWQiOiI0ZjRlZWI2OTk2ZjA0ZWI2YmQ2YjlhM2M1MTkxYzA5NiIsImV4cCI6MTUwMTg5ODAzNywic2NvcGUiOltdfQ.ooukhGEigi3PmrX8m4_Rbf98cXXsIMm4q8d5FGb3Xw0" -H "Accept: application/xml" "https://api.nzpost.co.nz/addresschecker/1.0/find?address_line_1=150 willis str&max=20&type=Postal"

// var request = require('superagent')
//
// request
//   .get("https://oauth.nzpost.co.nz/as/token.oauth2")
//   .query({
//     grant_type: 'client_credentials',
//     client_id: '4f4eeb6996f04eb6bd6b9a3c5191c096',
//     client_secret: '6eABEc6e02A342b785A07b33a05852Fc'
//   })
//   .end((err, res) => {
//     console.log(err, res.body)
//     var token = res.text
//     request
//       .get("https://api.nzpost.co.nz/addresschecker/1.0/find")
//       .query({address_line_1: '150 willis str', type: 'Postal', max: 20, access_token: token} )
//       // .set('Authorization', `Bearer ${token}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         //console.log(err)
//       })
//   })


//https://anypoint.mulesoft.com/apiplatform/nz-post-group/authentication/oauth2.html, https://anypoint.mulesoft.com/apiplatform/nz-post-group/admin/authentication/oauth2.html, https://api-notebook.anypoint.mulesoft.com/authenticate/oauth.html
