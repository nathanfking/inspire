(function () {
	let ic = this
	let imageService = new ImageService();

	let backGround = []
	imageService.getImage(function (image) {
		image = JSON.parse(image)
		pic = image.url
		loadBackground(pic)

	})
	function loadBackground(pic) {
		$("#body").css({ "background-image": `url(${pic})`, "background-size": "cover", "background-repeat": "no-repeat" });

	}
} ())
