function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ contact.name }}',
				'<label>Email:</label>',
				'{{ contact.email }}',
				'<label>Phone:</label>',
				'{{ contact.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ contact.username }}</span>',
			'</div>'
		].join(''),
		scope: {}, 
		controller: function(){

		},
		controllerAs: 'contact', 
		bindToController: {
			name: '=', 
			email: '=', 
			phone: '=', 
			username: '='
		},
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);