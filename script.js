// <!--

//             You are building the new Amazon.
//             This time you are also responsible for the back office.
//             THIS is you CRUD endpoint
//             https://striveschool-api.herokuapp.com/api/product/
//             The product model is
//             {
//                 "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
//                 "name": "app test 1",  //REQUIRED
//                 "description": "somthing longer", //REQUIRED
//                 "brand": "nokia", //REQUIRED
//                 "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
//                 "price": 100, //REQUIRED
//                 "userId": "admin", //SERVER GENERATED
//                 "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//                 "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//                 "__v": 0 //SERVER GENERATED
//             }
//             #---------------------------------------------------------------#
//             EVERY REST API CALL SHOULD BE AUTHENTICATED.
//             Every request to the API should use Token Based Authentication to secure access to the contents.
//             You can get your token by registering on: strive.school/studentlogin
//             Authorization: Bearer ###########
//             Where ######### is the access_token returned by the endpoint.
//             #---------------------------------------------------------------#
//             Today you have to implement:
//             - A backoffice page, where you can insert the product by specifying the parameters
//             - A front page, where the user can see the available products
//             ------ N.B. ------
//             Tokens duration is set to 14 days. Whenever you'll need to obtain a new one you can send the following request:

//             POST https://striveschool-api.herokuapp.com/api/account/login
//             {
//                 "username": "testusername@yourmail.com",
//                 "password":"pass"
//             }
//         -->

const handleSubmit = async (event) => {
	event.preventDefault();
	console.log('manish');

	let url = '  https://striveschool-api.herokuapp.com/api/product/';
	const product = {
		name: document.querySelector('#productName').value,
		description: document.querySelector('#subject').value,
		brand: document.querySelector('#brandName').value,
		imageUrl: document.querySelector('#image').value,
		price: document.querySelector('#price').value,
	};
	try {
		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(product),
			headers: {
				'content-Type': 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZWMwMTJkNTI2MjAwMTViNmRjOGYiLCJpYXQiOjE2MjkyODUzNzcsImV4cCI6MTYzMDQ5NDk3N30.n3m29qn0yRjmjhZmT7o8YOt7-tA7QDJdS9mnt2biQwQ',
			},
		});
		if (res.ok) {
			const data = await res.json();
			alert(`product has been uploaded to api with an name${data.name}`);
		}
	} catch (err) {
		console.log(err);
	}
};
