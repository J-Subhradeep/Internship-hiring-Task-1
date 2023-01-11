const features = [
	`<div class="single_item">
						<div class="icon"><i class="fa-solid fa-graduation-cap"></i></div>
						<div class="desc">
							<h4 class="mt-3 mb-2">Scholarship Facility</h4>
							<p>
								One make creepeth, man bearing theira firmament won't great
								heaven
							</p>
						</div>
					</div>`,
	`<div class="single_item">
						<div class="icon"><i class="fa-brands fa-readme"></i></div>
						<div class="desc">
							<h4 class="mt-3 mb-2">Sell Online Course</h4>
							<p>
								One make creepeth, man bearing theira firmament won't great
								heaven
							</p>
						</div>
					</div>`,
	`<div class="single_item">
						<div class="icon">
							<i class="fa-solid fa-award"></i>
						</div>
						<div class="desc">
							<h4 class="mt-3 mb-2">Global Certification</h4>
							<p>
								One make creepeth, man bearing theira firmament won't great
								heaven
							</p>
						</div>
					</div>`,
];
let afBody = document.getElementById("af-body");
features.reverse().map((value) => {
	afBody.insertAdjacentHTML("afterbegin", value);
});
