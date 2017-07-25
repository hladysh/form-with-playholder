jQuery(document).ready(function($) {



	// function form placeholder begin
	var $inputItem = $(".input-label");
	$inputItem.length && $inputItem.each(function() {
		var $this = $(this),
		$input = $this.find(".input-item"),
		// $inputphone = $("#phone"),
		placeholderTxt = $input.attr("placeholder"),
		$placeholder;
		$input.after('<span class="placeholder">' + placeholderTxt + "</span>"),
		$input.attr("placeholder", ""),
		$placeholder = $this.find(".placeholder"),
		$input.val().length ? $this.addClass("active") : $this.removeClass("active"),
		$input.on("focusout", function() {
			$input.val().length ? $this.addClass("active") : $this.removeClass("active");
		}).on("focus", function() {
			$this.addClass("active");
		});
	});
	// function form placeholder end

	//E-mail Ajax Send
	$("#form-request").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});






