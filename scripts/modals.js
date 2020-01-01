// Modals on the Portfolio page
// Source: https://codepen.io/aligoren/pen/KxPxMw
class BulmaModal {
	constructor(selector) {
		this.elem = document.querySelector(selector)
		this.close_data()
	}
	
	show() {
		this.elem.classList.toggle('is-active')
		this.on_show()
	}
	
	close() {
		this.elem.classList.toggle('is-active')
		this.on_close()
	}
	
	close_data() {
		const modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
		const that = this
		modalClose.forEach(function(e) {
			e.addEventListener("click", function() {
				that.elem.classList.toggle('is-active')
				var event = new Event('modal:close')
				that.elem.dispatchEvent(event);
			})
		})
	}
	
	on_show() {
		const event = new Event('modal:show')
		this.elem.dispatchEvent(event);
	}
	
	on_close() {
		const event = new Event('modal:close')
		this.elem.dispatchEvent(event);
	}
	
	addEventListener(event, callback) {
	    this.elem.addEventListener(event, callback)
	}
}

// Recipes modal
const btnRecipes = document.querySelector("#btnRecipes")
const mdlRecipes = new BulmaModal("#modalRecipes")
btnRecipes.addEventListener("click", function () {
	mdlRecipes.show()
})
mdlRecipes.addEventListener('modal:show', function() {
	console.log("opened")
})
mdlRecipes.addEventListener("modal:close", function() {
	console.log("closed")
})

// Birdfeed modal
const btnBirdfeed = document.querySelector("#btnBirdfeed")
const modalBirdfeed = new BulmaModal("#modalBirdfeed")
btnBirdfeed.addEventListener("click", function () {
	modalBirdfeed.show()
})
modalBirdfeed.addEventListener('modal:show', function() {
	console.log("opened")
})
modalBirdfeed.addEventListener("modal:close", function() {
	console.log("closed")
})

// Employees modal
const btnEmployees = document.querySelector("#btnEmployees")
const modalEmployees = new BulmaModal("#modalEmployees")
btnEmployees.addEventListener("click", function () {
	modalEmployees.show()
})
modalEmployees.addEventListener('modal:show', function() {
	console.log("opened")
})
modalEmployees.addEventListener("modal:close", function() {
	console.log("closed")
})

// Job Fair website modal
const btnJobfair = document.querySelector("#btnJobfair")
const modalJobfair = new BulmaModal("#modalJobfair")
btnJobfair.addEventListener("click", function () {
	modalJobfair.show()
})
modalJobfair.addEventListener('modal:show', function() {
	console.log("opened")
})
modalJobfair.addEventListener("modal:close", function() {
	console.log("closed")
})

// My portfolio website modal
const btnMywebsite = document.querySelector("#btnMywebsite")
const modalMywebsite = new BulmaModal("#modalMywebsite")
btnMywebsite.addEventListener("click", function () {
	modalMywebsite.show()
})
modalMywebsite.addEventListener('modal:show', function() {
	console.log("opened")
})
modalMywebsite.addEventListener("modal:close", function() {
	console.log("closed")
})