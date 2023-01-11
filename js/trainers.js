const trainers = document.getElementById("trainer-list");
const trainer_list = [
	{
		image: "../Static/trainers/t1.jpg",
		name: "Mated Nithan",
		designation: "Sr. web designer",
		text: `If you are looking at blank cassettes on the web, you may be
very confused at the.`,
	},
	{
		image: "../Static/trainers/t2.jpg",
		name: "David Cameron",
		designation: "Sr. web designer",
		text: `If you are looking at blank cassettes on the web, you may be
        very confused at the.`,
	},
	{
		image: "../Static/trainers/t3.jpg",
		name: "Jain Redmel",
		designation: "Sr. Faculty Data Science",
		text: `If you are looking at blank cassettes on the web, you may be
        very confused at the.`,
	},
	{
		image: "../Static/trainers/t4.jpg",
		name: "Nathan Macken",
		designation: "Sr. web designer",
		text: `If you are looking at blank cassettes on the web, you may be
        very confused at the.`,
	},
];
trainer_list.map((value) => {
	trainers.insertAdjacentHTML(
		"afterbegin",
		`<div class="col-lg-3 col-md-6 col-sm-12 single-trainer">
    <div class="thumb d-flex justify-content-sm-center">
      <img class="img-fluid" src=${value.image} alt="" />
    </div>
    <div class="meta-text text-sm-center">
      <h4>${value.name}</h4>
      <p class="designation"> ${value.designation}</p>
      <div class="mb-4">
        <p>
        ${value.text}
        </p>
      </div>
      <div class="align-items-center justify-content-center d-flex">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        <a href="#"><i class="fa-brands fa-pinterest"></i></a>
      </div>
    </div>
    </div>`
	);
});
